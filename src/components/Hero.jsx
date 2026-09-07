import { Link } from 'react-router-dom';
import { BsWhatsapp } from 'react-icons/bs';
import { FiPhone, FiArrowUpRight, FiPackage, FiCheckCircle } from 'react-icons/fi';

function Hero(){ return <section className="relative overflow-hidden bg-[#FBF7EC] pt-[106px]">
  <div className="absolute -right-40 top-32 w-[520px] h-[520px] rounded-full bg-[#EFB851]/20 blur-3xl"/><div className="absolute -left-48 bottom-0 w-[520px] h-[520px] rounded-full bg-[#A8B89A]/20 blur-3xl"/>
  <div className="section-shell relative grid lg:grid-cols-[1.02fr_.98fr] gap-10 lg:gap-16 items-center py-12 sm:py-16 lg:py-20 min-h-[680px]">
    <div className="animate-fade-up">
      <div className="inline-flex items-center gap-2 pill bg-[#E8EDF6] text-[#304B82] mb-7"><span className="w-2 h-2 rounded-full bg-[#EFB851]"/> Trusted B2B pet supply partner</div>
      <h1 className="display-font text-[46px] sm:text-6xl lg:text-[72px] leading-[.98] font-semibold text-[#20252B] max-w-3xl">Products your<br/><span className="text-[#304B82] italic">customers love.</span></h1>
      <p className="mt-7 text-base sm:text-lg leading-8 text-[#20252B]/65 max-w-xl">A refined range of durable pet essentials for retailers, wholesalers and distributors. Reliable quality, practical assortments and straightforward wholesale ordering.</p>
      <div className="mt-9 flex flex-col sm:flex-row gap-3">
        <Link to="/products" className="inline-flex justify-center items-center gap-2 rounded-full bg-[#304B82] text-white px-7 py-4 font-bold shadow-xl shadow-[#304B82]/20 hover:-translate-y-0.5 transition">Explore collection <FiArrowUpRight/></Link>
        <a href="https://wa.me/919560858066?text=Hello%20I%20want%20to%20place%20a%20wholesale%20order" target="_blank" rel="noreferrer" className="inline-flex justify-center items-center gap-2 rounded-full bg-[#FFFDF8] border border-[#DDD5C6] text-[#20252B] px-7 py-4 font-bold hover:border-[#A8B89A] transition"><BsWhatsapp className="text-[#304B82]"/> WhatsApp us</a>
      </div>
      <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-[#20252B]/55"><span className="flex items-center gap-2"><FiCheckCircle className="text-[#304B82]"/> Retailer focused</span><span className="flex items-center gap-2"><FiPackage className="text-[#304B82]"/> Bulk ready</span><span className="flex items-center gap-2"><FiPhone className="text-[#304B82]"/> Human support</span></div>
    </div>
    <div className="relative animate-fade-up lg:pl-4" style={{animationDelay:'.12s'}}>
      <div className="absolute -top-6 -left-5 sm:left-0 bg-[#EFB851] text-[#20252B] rounded-2xl px-4 py-3 shadow-xl z-10"><div className="text-[10px] uppercase tracking-[.18em] font-bold">Since</div><div className="display-font text-2xl font-semibold">2010</div></div>
      <div className="rounded-[34px] overflow-hidden shadow-floating border-[10px] border-[#FFFDF8] rotate-[1.2deg]"><img src="/images/hero.jpg" alt="Pet products from Khushi Enterprises" className="w-full aspect-[4/4.3] object-cover"/></div>
      <div className="absolute -bottom-5 -right-3 sm:right-0 bg-[#FFFDF8] rounded-2xl p-4 shadow-elegant border border-[#E7E0D2] flex items-center gap-3"><div className="w-10 h-10 rounded-full bg-[#A8B89A]/30 grid place-items-center text-[#304B82]"><FiCheckCircle/></div><div><div className="text-xs text-[#20252B]/50">Built for</div><div className="font-bold text-sm">Retailers & distributors</div></div></div>
    </div>
  </div>
</section> }
export default Hero;
