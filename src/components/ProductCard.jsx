import { Link } from 'react-router-dom';
import { FiArrowUpRight } from 'react-icons/fi';
import ImageWithFallback from './ImageWithFallback';

function ProductCard({product}){ if(!product?.id)return null; return <Link to={`/products/${product.id}`} className="group block h-full soft-card rounded-[26px] overflow-hidden hover:-translate-y-1.5 hover:shadow-floating transition-all duration-300">
  <div className="relative bg-[#F2EEE4] aspect-square overflow-hidden">
    <ImageWithFallback src={product.image} alt={product.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.05]" fallbackClassName="h-full w-full" type="product"/>
    <span className="absolute top-4 left-4 pill bg-[#FFFDF8]/90 backdrop-blur text-[#304B82] shadow-sm">{product.category}</span>
    <span className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-[#FFFDF8] text-[#304B82] grid place-items-center shadow-lg group-hover:bg-[#304B82] group-hover:text-white transition"><FiArrowUpRight size={18}/></span>
  </div>
  <div className="p-5 sm:p-6"><h3 className="display-font text-xl font-semibold leading-snug text-[#20252B] group-hover:text-[#304B82] transition line-clamp-2">{product.name}</h3>
    <div className="mt-3 flex flex-wrap gap-1.5">{(product.variants||[]).slice(0,3).map((v,i)=><span key={i} className="text-[11px] font-semibold bg-[#FBF7EC] text-[#20252B]/55 rounded-full px-2.5 py-1">{v}</span>)}</div>
    <div className="mt-5 pt-4 border-t border-[#E7E0D2] flex justify-between items-end"><div><p className="text-[11px] uppercase tracking-[.16em] font-bold text-[#304B82]">Wholesale</p><p className="text-sm text-[#20252B]/55 mt-1">Contact for pricing</p></div><span className="text-xs font-bold text-[#20252B]/45">{product.material||'Premium quality'}</span></div>
  </div></Link> }
export default ProductCard;
