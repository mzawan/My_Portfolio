import { useState } from "react";

export default function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const onChange = (field) => (e) => {
    setValues((prev) => ({
      ...prev,
      [field]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact">
      <div className="wrap">
        <h2>Let's work together</h2>
        <p className="sub">Send a message and I will reply by email.</p>

        <form onSubmit={onSubmit}>
          <label>
            Name
            <input
              value={values.name}
              onChange={onChange("name")}
              autoComplete="name"
            />
          </label>

          <label>
            Email
            <input
              type="email"
              value={values.email}
              onChange={onChange("email")}
              autoComplete="email"
            />
          </label>

          <label>
            Message
            <textarea
              rows={4}
              value={values.message}
              onChange={onChange("message")}
            />
          </label>

          <div>
            <button className="btn p" type="submit">
              Send message
            </button>
          </div>

          {sent && (
            <p id="ok" role="status">
              Thanks! Your message has been sent.
            </p>
          )}
        </form>

        <p className="note">
          <a href="https://github.com/Moizawan101" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://linkedin.com/in/malikmoizahmad" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="#">moizahmad334455@gmail.com</a>
        </p>
      </div>
    </section>
  );
}