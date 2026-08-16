import React, { useState } from "react";
import Button from "../../atoms/Button";
import "./ContactForm.css";

interface ContactFormDataState {
  firstName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface ContactFormProps {
  buttonText?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
  buttonText = "Send message",
}) => {
  const [formData, setFormData] = useState<ContactFormDataState>({
    firstName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          className="contact-form__input"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          className="contact-form__input"
          required
        />
      </div>

      <div className="contact-form__row">
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
          className="contact-form__input"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="contact-form__input"
        />
      </div>

      <textarea
        name="message"
        placeholder="Message"
        rows={6}
        value={formData.message}
        onChange={handleChange}
        className="contact-form__textarea"
        required
      />

      <div className="contact-form__action">
        <Button
          type="submit"
          variant="primary"
          size="md"
          className="contact-form__submit-btn"
        >
          {buttonText}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
