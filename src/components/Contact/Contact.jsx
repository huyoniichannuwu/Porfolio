import { useState } from "react";
import { useReveal } from "../../hooks/useReveal";
import "./Contact.css";

const INITIAL_FORM = { name: "", email: "", message: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const Contact = () => {
  const { elementRef, isVisible } = useReveal();

  // State cho dữ liệu form (Controlled Component) và lỗi validation.
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validate = ({ name, email, message }) => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = "Vui lòng nhập họ tên.";
    if (!email.trim()) {
      newErrors.email = "Vui lòng nhập email.";
    } else if (!EMAIL_PATTERN.test(email)) {
      newErrors.email = "Email không hợp lệ.";
    }
    if (!message.trim()) newErrors.message = "Vui lòng nhập lời nhắn.";
    return newErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const validationErrors = validate(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setIsSubmitted(false);
      return;
    }

    // Ở đây có thể gọi API thật để gửi dữ liệu; hiện tại chỉ mô phỏng thành công.
    setIsSubmitted(true);
    setFormData(INITIAL_FORM);
  };

  return (
    <section id="contact" className="contact section">
      <div className="container">
        <p className="eyebrow">// components/Contact.jsx</p>
        <h2 className="sectionTitle">Liên hệ</h2>
        <p className="sectionLead">
          Có cơ hội thực tập, dự án hay chỉ đơn giản muốn trao đổi? Để lại lời nhắn, mình sẽ
          phản hồi sớm nhất có thể.
        </p>

        <form
          ref={elementRef}
          onSubmit={handleSubmit}
          noValidate
          className={`contact__form reveal ${isVisible ? "is-visible" : ""}`}
        >
          <div className="contact__field">
            <label htmlFor="name">Họ tên</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Nguyễn Văn A"
            />
            {errors.name && <p className="contact__error">{errors.name}</p>}
          </div>

          <div className="contact__field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="ban@email.com"
            />
            {errors.email && <p className="contact__error">{errors.email}</p>}
          </div>

          <div className="contact__field">
            <label htmlFor="message">Lời nhắn</label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formData.message}
              onChange={handleChange}
              placeholder="Nội dung bạn muốn nhắn gửi..."
            />
            {errors.message && <p className="contact__error">{errors.message}</p>}
          </div>

          <button type="submit" className="btn btn--primary">
            Gửi lời nhắn
          </button>

          {isSubmitted && (
            <p className="contact__success" role="status">
              ✓ Đã gửi thành công! Cảm ơn bạn đã liên hệ.
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
