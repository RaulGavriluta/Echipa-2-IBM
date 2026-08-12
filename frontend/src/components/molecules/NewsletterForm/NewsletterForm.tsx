import { useState } from "react";
import "./NewsletterForm.css";
import { FaRegPaperPlane } from "react-icons/fa6";
import clsx from "clsx";
import Icon from "../../../components/atoms/Icon";
import Button from "../../../components/atoms/Button";
import newsletterFormData from "../../../data/newsletterForm";

interface NewsletterFormProps {
  onSubscribe?: (email: string) => void;
  className?: string;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const NewsletterForm = ({ onSubscribe, className }: NewsletterFormProps) => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);

  return (
    <form
      className={clsx("newsletter-form", className)}
      onSubmit={(e) => {
        e.preventDefault();

        const trimmed = email.trim();

        if (!trimmed) {
          setError(newsletterFormData.errors.empty);
          return;
        }

        if (!EMAIL_REGEX.test(trimmed)) {
          setError(newsletterFormData.errors.invalid);
          return;
        }

        setError(null);
        onSubscribe?.(trimmed);
        setEmail("");
      }}
      noValidate
    >
      <div className="newsletter-form-input-wrapper">
        <Icon
          icon={FaRegPaperPlane}
          size="var(--font-size-md)"
          color="var(--color-text-muted)"
          className="newsletter-form-icon"
        />
        <input
          className="newsletter-form-input"
          type="email"
          placeholder={newsletterFormData.placeholder}
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (error) setError(null);
          }}
          aria-label={newsletterFormData.placeholder}
        />
        <Button
          type="submit"
          variant="newsletter"
          className="newsletter-form-button"
        >
          {newsletterFormData.buttonText}
        </Button>
      </div>

      {error && (
        <span className="newsletter-form-error" role="alert">
          {error}
        </span>
      )}
    </form>
  );
};

export default NewsletterForm;
