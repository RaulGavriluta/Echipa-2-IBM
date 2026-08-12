import defaultLogo from "/assets/logo.png";
import "./Logo.css";

export type LogoSize = "sm" | "md" | "lg";

export interface LogoProps {
  src?: string;
  alt?: string;
  href?: string;
  size?: LogoSize;
  className?: string;
}

const Logo = ({
  src = defaultLogo,
  alt = "Nest Grocery",
  href = "/",
  size = "md",
  className = "",
}: LogoProps) => {
  return (
    <a href={href} className={`logo logo--${size} ${className}`.trim()}>
      <img src={src} alt={alt} className="logo__image" />
    </a>
  );
};

export default Logo;
