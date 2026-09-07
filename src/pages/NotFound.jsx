import {Link} from 'react-router-dom';
function NotFound(){return <main className="pt-[106px] min-h-screen bg-[#FBF7EC] grid place-items-center px-5"><div className="text-center"><div className="display-font text-[120px] leading-none text-[#304B82]/15">404</div><h1 className="display-font text-4xl font-semibold -mt-5">This page wandered off.</h1><p className="text-[#20252B]/50 mt-3">Let’s get you back to the collection.</p><Link to="/" className="inline-flex mt-7 rounded-full bg-[#304B82] text-white px-6 py-3.5 font-bold">Back home</Link></div></main>}
export default NotFound;
