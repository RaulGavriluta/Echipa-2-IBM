import clsx from "clsx";
import Button from "../../atoms/Button";
import "./CtaCard.css";

export interface CtaCardProps {
  title: string;
  imageUrl?: string;
  buttonText?: string;
  buttonLink?: string;
  className?: string;
}

const CtaCard = ({
  title,
  imageUrl,
  buttonText = "Shop Now",
  buttonLink = "#",
  className,
}: CtaCardProps) => {
  return (
    <div
      className={clsx("cta-card", className)}
    >
      {imageUrl && <img src={imageUrl} alt={title} className="cta-card-bg" />}
      <div className="cta-card-content">
        <h3 className="cta-card-title">{title}</h3>
        {buttonText && (
          <a href={buttonLink} className="cta-card-link">
            <Button variant="primary" size="sm" className="cta-card-button">
              <span>{buttonText}</span>
            </Button>
          </a>
        )}
      </div>
    </div>
  );
};

export default CtaCard;
