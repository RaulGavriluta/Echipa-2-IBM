import type { Newsletter } from "./types";

const newsletterFormData: Newsletter = {
  placeholder: "Your email address",
  buttonText: "Subscribe",
  errors: {
    empty: "Please enter an email address.",
    invalid: "Please enter a valid email address.",
  },
};

export default newsletterFormData;
