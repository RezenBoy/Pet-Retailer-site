import {useState,useMemo} from 'react';
import {FiSearch,FiSliders,FiChevronDown} from 'react-icons/fi';
import products from '../data/products';
import ProductCard from './ProductCard';
const categories=['All',...new Set(products.map(p=>p.category))];
function ProductList({initialCount=null,loadMoreCount=8,showFilters=false}){
 const [visible,setVisible]=useState(initialCount===null?products.length:Math.min(initialCount,products.length)); const [category,setCategory]=useState('All'); const [query,setQuery]=useState('');
 const filtered=useMemo(()=>products.filter(p=>(category==='All'||p.category===category)&&(!query.trim()||[p.name,p.category,p.material].some(v=>v?.toLowerCase().includes(query.toLowerCase())))),[category,query]);
 const displayed=filtered.slice(0,visible); const canMore=visible<filtered.length;
 return <div>{showFilters&&<div className="mb-10 rounded-[26px] bg-[#FFFDF8] border border-[#E7E0D2] p-4 sm:p-5 shadow-elegant">
   <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between"><div className="relative flex-1 max-w-xl"><FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-[#20252B]/35"/><input value={query} onChange={e=>{setQuery(e.target.value);setVisible(8)}} placeholder="Search the collection..." className="w-full rounded-full bg-[#FBF7EC] border-0 pl-11 pr-5 py-3.5 text-sm focus:ring-2 focus:ring-[#304B82]"/></div><div className="flex items-center gap-2 overflow-x-auto pb-1"><FiSliders className="text-[#304B82] shrink-0"/>{categories.map(c=><button key={c} onClick={()=>{setCategory(c);setVisible(8)}} className={`shrink-0 rounded-full px-4 py-2.5 text-xs font-bold transition ${category===c?'bg-[#304B82] text-white':'bg-[#FBF7EC] text-[#20252B]/60 hover:text-[#304B82]'}`}>{c}</button>)}</div></div>
 </div>}
 <div className="flex items-center justify-between mb-5 text-sm"><p className="text-[#20252B]/50">{filtered.length} {filtered.length===1?'product':'products'}{category!=='All'&&<> in <strong className="text-[#20252B]">{category}</strong></>}</p>{query&&<button onClick={()=>{setQuery('');setCategory('All')}} className="font-bold text-[#304B82]">Clear filters</button>}</div>
 {displayed.length?<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">{displayed.map(p=><ProductCard key={p.id} product={p}/>)}</div>:<div className="rounded-[26px] bg-[#FFFDF8] border border-[#E7E0D2] py-20 text-center"><FiSearch className="mx-auto text-[#304B82]/40" size={36}/><p className="display-font text-2xl mt-4">Nothing matched</p><p className="text-sm text-[#20252B]/50 mt-2">Try another product or category.</p></div>}
 {canMore&&<div className="flex justify-center mt-12"><button onClick={()=>setVisible(v=>Math.min(v+loadMoreCount,filtered.length))} className="inline-flex items-center gap-2 rounded-full border border-[#304B82]/20 bg-[#FFFDF8] px-6 py-3.5 text-sm font-bold text-[#304B82] hover:bg-[#304B82] hover:text-white transition">Load more <FiChevronDown/></button></div>}
 </div>
}
export default ProductList;
