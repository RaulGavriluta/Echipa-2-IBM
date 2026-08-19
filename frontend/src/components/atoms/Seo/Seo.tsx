import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: "website" | "product" | "article";
  noIndex?: boolean;
}

const SITE_NAME = import.meta.env.VITE_APP_NAME || "NEST Mart & Groceries";
const BASE_URL = import.meta.env.VITE_APP_URL || "http://localhost:5173";
const DEFAULT_IMAGE = "/assets/logo.png";

const Seo = ({
  title,
  description,
  canonical,
  ogImage,
  ogType = "website",
  noIndex = false,
}: SeoProps) => {
  const fullTitle = title.includes(SITE_NAME)
    ? title
    : `${title} – ${SITE_NAME}`;
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : undefined;
  const image = ogImage || DEFAULT_IMAGE;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}

      <meta property="og:site_name" content={SITE_NAME} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:type" content={ogType} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:image" content={image} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default Seo;
