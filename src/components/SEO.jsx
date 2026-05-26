
import { Helmet } from "react-helmet-async";

function SEO({ 
  title = "Khushi Enterprises | Wholesale Pet Products",
  description = "Premium wholesale pet products for retailers. Dog cages, bowls, accessories and more at competitive prices.",
  pathname = "",
  image = "/images/og-image.jpg"
}) {
  const siteUrl = "https://khushienterprises.com";
  const fullUrl = `${siteUrl}${pathname}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={`${siteUrl}${image}`} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${siteUrl}${image}`} />
    </Helmet>
  );
}

export default SEO;