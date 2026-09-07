import { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiMenu, FiX, FiPhone, FiArrowUpRight } from 'react-icons/fi';

const navLinks = [
  { name:'Home', path:'/' }, { name:'Products', path:'/products' },
  { name:'About', path:'/about' }, { name:'Contact', path:'/contact' }
];

function Header(){
  const [menuOpen,setMenuOpen]=useState(false); const menuRef=useRef(null);
  useEffect(()=>{ const onKey=e=>e.key==='Escape'&&setMenuOpen(false); document.addEventListener('keydown',onKey); return()=>document.removeEventListener('keydown',onKey)},[]);
  return <header className="fixed top-0 inset-x-0 z-50">
    <div className="bg-[#304B82] text-[#FFFDF8] text-center text-[11px] sm:text-xs tracking-wide py-2">Wholesale supply for pet retailers & distributors · India</div>
    <div className="bg-[#FBF7EC]/95 backdrop-blur-xl border-b border-[#DDD5C6]/80">
      <div className="section-shell h-[76px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group" aria-label="Khushi Enterprises home">
          <div className="w-11 h-11 rounded-full bg-[#304B82] text-[#EFB851] grid place-items-center text-xl display-font border-4 border-[#EFB851]/30">K</div>
          <div><div className="display-font text-xl sm:text-[22px] font-semibold text-[#20252B] leading-none">Khushi</div><div className="text-[9px] uppercase tracking-[.24em] text-[#304B82] font-bold mt-1">Enterprises</div></div>
        </Link>
        <nav className="hidden md:flex items-center gap-8" aria-label="Primary navigation">
          {navLinks.map(link=><NavLink key={link.path} to={link.path} className={({isActive})=>`relative text-sm font-semibold py-2 transition-colors ${isActive?'text-[#304B82]':'text-[#20252B]/65 hover:text-[#304B82]'}`}>
            {({isActive})=><>{link.name}{isActive&&<span className="absolute left-0 right-0 -bottom-1 mx-auto h-0.5 w-5 bg-[#EFB851] rounded-full"/>}</>}
          </NavLink>)}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="tel:+919560858066" className="inline-flex items-center gap-2 rounded-full border border-[#304B82]/20 px-4 py-2.5 text-sm font-semibold text-[#304B82] hover:bg-[#304B82] hover:text-white transition"><FiPhone/>Call to order</a>
          <Link to="/products" className="inline-flex items-center gap-1.5 rounded-full bg-[#304B82] px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-[#304B82]/15 hover:bg-[#253a67] transition">Browse <FiArrowUpRight/></Link>
        </div>
        <button className="md:hidden w-11 h-11 rounded-full border border-[#DDD5C6] grid place-items-center text-[#304B82]" onClick={()=>setMenuOpen(v=>!v)} aria-expanded={menuOpen} aria-controls="mobile-menu">{menuOpen?<FiX size={22}/>:<FiMenu size={22}/>}</button>
      </div>
    </div>
    {menuOpen&&<><div className="md:hidden fixed inset-0 top-[106px] bg-[#20252B]/20 backdrop-blur-sm" onClick={()=>setMenuOpen(false)}/><div id="mobile-menu" ref={menuRef} className="md:hidden relative bg-[#FFFDF8] border-b border-[#DDD5C6] shadow-xl px-5 py-5">
      <nav className="space-y-1">{navLinks.map(link=><NavLink key={link.path} to={link.path} onClick={()=>setMenuOpen(false)} className={({isActive})=>`block rounded-2xl px-4 py-3.5 font-semibold ${isActive?'bg-[#304B82] text-white':'text-[#20252B] hover:bg-[#FBF7EC]'}`}>{link.name}</NavLink>)}</nav>
      <a href="tel:+919560858066" className="mt-4 flex items-center justify-center gap-2 rounded-2xl bg-[#EFB851] text-[#20252B] font-bold py-3.5"><FiPhone/> Call to Order</a>
    </div></>}
  </header>
}
export default Header;
