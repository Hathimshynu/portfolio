import { useState } from 'react';
import ParallaxSection from '../components/ParallaxSection';

function Contact(){
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  function validate() {
    const e = {};
    if (!name.trim()) e.name = 'Name is required.';
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) e.email = 'Please enter a valid email.';
    if (!message.trim()) e.message = 'Message cannot be empty.';
    return e;
  }

  function handleSubmit(e) {
    e.preventDefault();
    const eObj = validate();
    setErrors(eObj);
    if (Object.keys(eObj).length === 0) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
      const body = encodeURIComponent(`${message}\n\nReply to: ${email}`);
      window.location.href = `mailto:shynushyni55@gmail.com?subject=${subject}&body=${body}`;
      setSent(true);
      setName(''); setEmail(''); setMessage('');
    }
  }

  return (
    <ParallaxSection depth={0.4}>
      <main className="container page">
        <header className="page-header">
          <h1>Contact Me</h1>
          <p className="muted">Have a project in mind or want to collaborate? Feel free to reach out!</p>
        </header>
        <section className="contact-layout">
          <aside className="contact-intro">
            <span className="contact-kicker">Let's connect</span>
            <h2>Have an idea?<br /><em>Let's build it.</em></h2>
            <p>Whether you have a project, a question, or an opportunity, I would love to hear from you.</p>
            <div className="contact-details">
              <p><strong>Email</strong><a href="mailto:shynushyni55@gmail.com">shynushyni55@gmail.com</a></p>
              <p><strong>Mobile</strong><a href="tel:+919597610074">+91 9597610074</a></p>
              <p><strong>LinkedIn</strong><a href="https://www.linkedin.com/in/hathimshynu9597" target="_blank" rel="noreferrer">linkedin.com/in/shynu</a></p>
              <p><strong>GitHub</strong><a href="https://github.com/Hathimshynu" target="_blank" rel="noreferrer">github.com/Hathimshynu</a></p>
            </div>
          </aside>

          <div className="contact-form-panel">
          <h5>Contact form</h5>
          {sent && <div className="alert alert-success"> Thanks For Contacting Will Get back to You Shortly</div>}
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="contact-field">
              <label className="form-label visually-hidden">Name</label>
              <input
                value={name}
                onChange={e=>setName(e.target.value)}
                onKeyUp={()=> setErrors(prev=>{ const c={...prev}; delete c.name; return c; })}
                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                placeholder="Name"
              />
              {errors.name && <div className="invalid-feedback">{errors.name}</div>}
            </div>
            <div className="contact-field">
              <label className="form-label visually-hidden">Email</label>
              <input
                value={email}
                onChange={e=>setEmail(e.target.value)}
                onKeyUp={()=> setErrors(prev=>{ const c={...prev}; delete c.email; return c; })}
                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                placeholder="Email"
              />
              {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>
            <div className="contact-field contact-message">
              <label className="form-label visually-hidden">Message</label>
              <textarea
                value={message}
                onChange={e=>setMessage(e.target.value)}
                onKeyUp={()=> setErrors(prev=>{ const c={...prev}; delete c.message; return c; })}
                className={`form-control ${errors.message ? 'is-invalid' : ''}`}
                placeholder="Your message"
                rows="4"
              ></textarea>
              {errors.message && <div className="invalid-feedback">{errors.message}</div>}
            </div>
            <div className="contact-submit">
              <button className="btn btn-primary" type="submit">Send</button>
            </div>
          </form>
          </div>
        </section>
      </main>
    </ParallaxSection>
  );
}

export default Contact;
