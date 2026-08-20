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
        <section className="content">
          <p>
            Email: <a href="mailto:shynushyni55@gmail.com">shynushyni55@gmail.com</a>
          </p>
          <p>GitHub: <a href="https://github.com/Hathimshynu" target="_blank" rel="noreferrer">github.com/Hathimshynu</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/hathimshynu9597" target="_blank" rel="noreferrer">linkedin.com/in/shynu</a></p>

          <hr />
          <h5>Contact form</h5>
          {sent && <div className="alert alert-success"> Thanks For Contacting Will Get back to You Shortly</div>}
          <form className="row g-2" onSubmit={handleSubmit} noValidate>
            <div className="col-md-6">
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
            <div className="col-md-6">
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
            <div className="col-12">
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
            <div className="col-12">
              <button className="btn btn-primary">Send</button>
            </div>
          </form>
        </section>
      </main>
    </ParallaxSection>
  );
}

export default Contact;
