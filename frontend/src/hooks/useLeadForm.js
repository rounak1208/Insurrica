import { useState } from "react";
import { toast } from "sonner";
import axios from "axios";
import { validateIndianPhone } from "../utils/validation";

const API =
  process.env.REACT_APP_BACKEND_URL &&
  process.env.REACT_APP_BACKEND_URL !== "undefined"
    ? `${process.env.REACT_APP_BACKEND_URL}/api`
    : "/api";

/**
 * Shared hook for all lead capture forms across the app.
 *
 * @param {Object}   options
 * @param {string}   [options.defaultProduct=""]  Pre-selected insurance product (used on product pages)
 * @param {Function} [options.onSuccess]          Callback fired after a successful submission
 */
export const useLeadForm = ({ defaultProduct = "", onSuccess } = {}) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState(defaultProduct);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  /** Sanitise phone input — digits only, max 10 */
  const handlePhoneChange = (value) => {
    setPhone(value.replace(/\D/g, "").slice(0, 10));
  };

  /**
   * Submit the lead form.
   *
   * @param {Event}  e                          Form submit event
   * @param {Object} [opts]
   * @param {string} [opts.insuranceProduct]    Override product value (e.g. from product page data.id)
   * @param {boolean}[opts.requireProduct=true] Whether the product field is required
   */
  const handleSubmit = async (e, { insuranceProduct, requireProduct = true } = {}) => {
    e.preventDefault();

    // --- Validation ---
    const productValue = insuranceProduct || product;
    if (!name || !phone || (requireProduct && !productValue)) {
      toast.error("Please fill in all fields");
      return false;
    }

    const phoneValidation = validateIndianPhone(phone);
    if (!phoneValidation.isValid) {
      toast.error(phoneValidation.message);
      return false;
    }

    // --- API Call ---
    setLoading(true);
    try {
      await axios.post(`${API}/leads`, {
        name,
        phone,
        insurance_product: productValue,
      });
      setSubmitted(true);
      toast.success("We'll call you back shortly!");
      if (onSuccess) onSuccess();
      return true;
    } catch {
      toast.error("Something went wrong. Please try again.");
      return false;
    } finally {
      setLoading(false);
    }
  };

  /** Reset all form fields to their initial state */
  const reset = () => {
    setName("");
    setPhone("");
    setProduct(defaultProduct);
    setSubmitted(false);
  };

  return {
    name,
    setName,
    phone,
    handlePhoneChange,
    product,
    setProduct,
    loading,
    submitted,
    setSubmitted,
    handleSubmit,
    reset,
  };
};
