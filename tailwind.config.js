/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { blue:'#304B82', cream:'#FBF7EC', gold:'#EFB851', charcoal:'#20252B', sage:'#A8B89A', white:'#FFFDF8' }
      },
      fontFamily: {
        sans: ['DM Sans','-apple-system','BlinkMacSystemFont','Segoe UI','sans-serif'],
        display: ['Playfair Display','Georgia','serif']
      },
      boxShadow: {
        elegant: '0 18px 50px rgba(48,75,130,.08)',
        floating: '0 24px 70px rgba(32,37,43,.14)'
      },
      animation: {
        'fade-up':'fadeUp .6s ease-out both',
        'float':'float 6s ease-in-out infinite'
      },
      keyframes: {
        fadeUp:{'0%':{opacity:'0',transform:'translateY(18px)'},'100%':{opacity:'1',transform:'translateY(0)'}},
        float:{'0%,100%':{transform:'translateY(0)'},'50%':{transform:'translateY(-8px)'}}
      }
    }
  },
  plugins: []
}
