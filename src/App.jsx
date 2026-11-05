import React, { useState } from 'react';
import {
  ArrowRight, ArrowUpRight, Menu, X, Database, Workflow, BrainCircuit,
  BarChart3, Cloud, FileSearch, ShieldCheck, Pickaxe, Landmark,
  Truck, Building2, Factory, CheckCircle2, Sparkles, Layers3, Zap,
  Mail, MapPin, Phone, ChevronDown
} from 'lucide-react';

const services = [
  { icon: Database, number: '01', title: 'Data Engineering', text: 'Build dependable data foundations with modern pipelines, integration, data warehouses and lakehouse architectures.', tags: ['ETL / ELT', 'Data platforms', 'Data quality'] },
  { icon: BarChart3, number: '02', title: 'Business Intelligence', text: 'Turn operational data into clear performance insights, executive dashboards and decision-ready reporting.', tags: ['KPI monitoring', 'Dashboards', 'Analytics'] },
  { icon: Workflow, number: '03', title: 'AI Automation', text: 'Reduce repetitive work by automating document-heavy processes, data validation and business workflows.', tags: ['OCR & extraction', 'Workflow automation', 'Reporting'] },
  { icon: BrainCircuit, number: '04', title: 'Enterprise AI', text: 'Bring AI into the flow of work with private knowledge assistants, predictive models and intelligent applications.', tags: ['RAG assistants', 'Machine learning', 'AI applications'] },
  { icon: Cloud, number: '05', title: 'Data Infrastructure', text: 'Deploy secure, scalable data environments on-premises, in the cloud or across hybrid infrastructure.', tags: ['Cloud & on-prem', 'Docker', 'Orchestration'] },
  { icon: Layers3, number: '06', title: 'Digital Solutions', text: 'Design and develop connected business applications that simplify operations and improve visibility.', tags: ['Web applications', 'API integration', 'Modernization'] },
];

const industries = [
  { icon: Pickaxe, title: 'Mining & Resources', text: 'Operational performance, fleet analytics, production reporting and asset intelligence.' },
  { icon: Landmark, title: 'Banking & Finance', text: 'Data integration, automated reporting, document processing and customer insights.' },
  { icon: Truck, title: 'Logistics & Supply Chain', text: 'Inventory visibility, transport analytics and smarter planning.' },
  { icon: Factory, title: 'Industrial & Manufacturing', text: 'Connected operations, quality insights and predictive analytics.' },
  { icon: Building2, title: 'Public Sector', text: 'Reliable information systems, reporting automation and data-driven services.' },
  { icon: Building2, title: 'Enterprise & SMEs', text: 'Practical technology that streamlines processes and supports growth.' },
];

function Logo({ light = false, compact = false }) {
  return <a className={`brand ${light ? 'brand-light' : ''}`} href="#home" aria-label="KARIBU AI Technologies home">
    <svg className="brand-mark" viewBox="0 0 64 64" role="img" aria-label="KARIBU abstract AI mark">
      <defs><linearGradient id="blueMark" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#36c5ff"/><stop offset="1" stopColor="#0878e8"/></linearGradient><linearGradient id="goldMark" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#ffd36b"/><stop offset="1" stopColor="#e99b18"/></linearGradient></defs>
      <path d="M8 47 38 8h19L27 47H8Z" fill="url(#blueMark)"/><path d="M27 47h19l10 10H37L27 47Z" fill="url(#goldMark)"/><path d="M8 47 27 47 17 57H8V47Z" fill="#0d4e91"/>
      <g fill="#56cfff"><rect x="7" y="7" width="7" height="7" rx="1"/><rect x="19" y="7" width="7" height="7" rx="1"/><rect x="7" y="19" width="7" height="7" rx="1"/><rect x="19" y="19" width="7" height="7" rx="1"/><rect x="31" y="19" width="7" height="7" rx="1" opacity=".65"/></g>
    </svg>
    {!compact && <span className="brand-type"><strong>KARIBU</strong><small>AI TECHNOLOGIES</small></span>}
  </a>;
}

function SectionHeading({ eyebrow, title, text, center = false }) {
  return <div className={`section-heading ${center ? 'center' : ''}`}><span className="eyebrow">{eyebrow}</span><h2>{title}</h2>{text && <p>{text}</p>}</div>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', company: '', service: 'Data Engineering', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL || '';
  const nav = [['About', '#about'], ['Services', '#services'], ['Industries', '#industries'], ['Approach', '#approach']];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!contactEmail) { setSubmitted('config'); return; }
    const subject = encodeURIComponent(`KARIBU website enquiry — ${form.service}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\nService: ${form.service}\n\n${form.message}`);
    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return <>
    <header className="site-header">
      <div className="container nav-wrap"><Logo />
        <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {nav.map(([label, href]) => <a key={label} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-mobile-cta" href="#contact" onClick={() => setMenuOpen(false)}>Let's talk <ArrowUpRight size={16}/></a>
        </nav>
        <a className="button button-small button-outline header-cta" href="#contact">Let's talk <ArrowUpRight size={16}/></a>
        <button className="menu-toggle" aria-label="Toggle navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      </div>
    </header>

    <main>
      <section className="hero" id="home">
        <div className="hero-grid"></div><div className="hero-glow glow-one"></div><div className="hero-glow glow-two"></div>
        <div className="container hero-content">
          <div className="hero-copy">
            <div className="hero-kicker"><span className="pulse-dot"></span> AFRICAN ROOTS. GLOBAL AMBITION.</div>
            <h1>Transforming data<br/><em>into intelligence.</em></h1>
            <p className="hero-lead">We engineer the data foundations and intelligent automation that help ambitious organizations move forward with clarity and confidence.</p>
            <div className="hero-actions"><a className="button button-primary" href="#contact">Discuss a project <ArrowRight size={18}/></a><a className="text-link" href="#services">Explore our capabilities <ArrowUpRight size={17}/></a></div>
            <div className="hero-proof"><span><CheckCircle2 size={16}/> Enterprise-focused</span><span><CheckCircle2 size={16}/> Built for real operations</span></div>
          </div>
          <div className="hero-visual" aria-label="Abstract connected data visualization">
            <div className="orbit orbit-a"></div><div className="orbit orbit-b"></div><div className="orbit orbit-c"></div>
            <div className="visual-core"><div className="core-icon"><BrainCircuit size={54} strokeWidth={1.2}/></div><span>DATA → INTELLIGENCE</span></div>
            <div className="float-card card-data"><Database size={17}/><span><b>Connected data</b><small>One trusted foundation</small></span></div>
            <div className="float-card card-ai"><Sparkles size={17}/><span><b>Applied AI</b><small>Intelligence in action</small></span></div>
            <div className="float-card card-insight"><BarChart3 size={17}/><span><b>Better decisions</b><small>Insight that moves business</small></span></div>
            <div className="visual-line line-one"></div><div className="visual-line line-two"></div>
          </div>
        </div>
        <div className="hero-bottom container"><span>DATA ENGINEERING</span><i></i><span>AI AUTOMATION</span><i></i><span>BUSINESS INTELLIGENCE</span></div>
      </section>

      <section className="intro section-pad" id="about">
        <div className="container intro-grid"><div><span className="eyebrow">WHO WE ARE</span><h2>Technology should make business <span>work smarter.</span></h2></div><div className="intro-copy"><p className="large-copy">KARIBU AI Technologies is an enterprise technology company specializing in data engineering and AI automation.</p><p>We help organizations connect fragmented information, modernize data operations and apply intelligent technology to everyday business challenges. From dependable data pipelines to AI-powered workflows, we turn complexity into practical progress.</p><a className="inline-link" href="#approach">Discover our approach <ArrowRight size={16}/></a></div></div>
        <div className="container value-strip"><div><span className="value-number">01</span><b>Reliable foundations</b><small>Data you can trust</small></div><div><span className="value-number">02</span><b>Practical intelligence</b><small>AI with a clear purpose</small></div><div><span className="value-number">03</span><b>Measurable impact</b><small>Outcomes that matter</small></div></div>
      </section>

      <section className="services section-pad" id="services"><div className="container"><SectionHeading eyebrow="WHAT WE DO" title="From complex data to connected intelligence" text="A practical portfolio of capabilities to modernize your data ecosystem, automate work and unlock better decisions."/><div className="service-grid">{services.map(({icon:Icon, number, title, text, tags}) => <article className="service-card" key={number}><div className="service-top"><span className="service-icon"><Icon size={23}/></span><span className="service-number">{number}</span></div><h3>{title}</h3><p>{text}</p><div className="tag-list">{tags.map(tag => <span key={tag}>{tag}</span>)}</div><a href="#contact" aria-label={`Discuss ${title}`} className="card-arrow"><ArrowUpRight size={19}/></a></article>)}</div></div></section>

      <section className="industries section-pad" id="industries"><div className="container"><div className="industry-head"><SectionHeading eyebrow="WHO WE SERVE" title="Built around the realities of your industry" text="We combine engineering discipline with an understanding of the processes, systems and decisions that keep organizations moving."/><div className="industry-aside"><span className="aside-mark"><Zap size={23}/></span><p>Start with a business challenge. Build the right technology around it.</p></div></div><div className="industry-grid">{industries.map(({icon:Icon, title, text}) => <article className="industry-card" key={title}><Icon size={25}/><h3>{title}</h3><p>{text}</p><ArrowUpRight className="industry-arrow" size={18}/></article>)}</div></div></section>

      <section className="approach section-pad" id="approach"><div className="container approach-grid"><div className="approach-copy"><SectionHeading eyebrow="HOW WE WORK" title="A clear path from challenge to impact" text="We work alongside your team to understand the problem, engineer a fit-for-purpose solution and make it work in your environment."/><a className="button button-dark" href="#contact">Start a conversation <ArrowRight size={18}/></a></div><div className="steps"><div className="step"><span>01</span><div><h3>Understand</h3><p>We map your goals, data landscape, workflows and constraints before recommending a solution.</p></div></div><div className="step"><span>02</span><div><h3>Engineer</h3><p>We design and build secure, maintainable data systems and intelligent applications around your needs.</p></div></div><div className="step"><span>03</span><div><h3>Enable</h3><p>We deploy, document and support adoption so your people can use the solution with confidence.</p></div></div><div className="step"><span>04</span><div><h3>Improve</h3><p>We measure outcomes, learn from real usage and continuously improve performance.</p></div></div></div></div></section>

      <section className="cta-band"><div className="container cta-inner"><div><span className="eyebrow">LET'S BUILD WHAT'S NEXT</span><h2>Your data has more to offer.</h2><p>Let's turn your next business challenge into an intelligent solution.</p></div><a href="#contact" className="button button-light">Talk to KARIBU <ArrowUpRight size={18}/></a><div className="cta-decoration"></div></div></section>

      <section className="contact section-pad" id="contact"><div className="container contact-grid"><div className="contact-copy"><SectionHeading eyebrow="GET IN TOUCH" title="Let's start a meaningful conversation" text="Tell us what you are trying to solve. We'll explore how data engineering and AI automation can help."/><div className="contact-detail"><span><Mail size={18}/></span><div><small>Email</small><b>Business enquiries</b><p>Configure your official contact email before launch.</p></div></div><div className="contact-detail"><span><MapPin size={18}/></span><div><small>Based in</small><b>Lubumbashi, Democratic Republic of the Congo</b><p>Working with organizations across Africa.</p></div></div></div>
        <form className="contact-form" onSubmit={handleSubmit}><div className="form-heading"><h3>Tell us about your project</h3><p>Fields marked with * are required.</p></div><div className="form-row"><label>Full name *<input required value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Your name"/></label><label>Work email *<input required type="email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="you@company.com"/></label></div><label>Company / organization<input value={form.company} onChange={e=>setForm({...form,company:e.target.value})} placeholder="Your organization"/></label><label>What can we help with? *<span className="select-wrap"><select value={form.service} onChange={e=>setForm({...form,service:e.target.value})}><option>Data Engineering</option><option>Business Intelligence</option><option>AI Automation</option><option>Enterprise AI</option><option>Data Infrastructure</option><option>Digital Solutions</option><option>Other</option></select><ChevronDown size={16}/></span></label><label>Tell us a little about your needs *<textarea required rows="4" value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Describe your challenge or project..."/></label><button className="button button-primary form-submit" type="submit">Send enquiry <ArrowRight size={18}/></button>{submitted === 'config' && <p className="form-note">The enquiry form is ready. Add VITE_CONTACT_EMAIL in your Vercel environment variables to enable email handoff.</p>}{submitted === true && <p className="form-note">Your email application should open with your enquiry. Thank you for contacting KARIBU.</p>}</form>
      </div></section>
    </main>

    <footer className="footer"><div className="container footer-main"><div className="footer-brand"><Logo light/><p>Transforming Data into Intelligence.</p><span>Enterprise Data Engineering & AI Automation</span></div><div className="footer-links"><b>Explore</b><a href="#about">About us</a><a href="#services">Our services</a><a href="#industries">Industries</a><a href="#approach">Our approach</a></div><div className="footer-links"><b>Capabilities</b><a href="#services">Data engineering</a><a href="#services">Business intelligence</a><a href="#services">AI automation</a><a href="#services">Enterprise AI</a></div><div className="footer-note"><span className="eyebrow">AFRICAN ROOTS. GLOBAL AMBITION.</span><p>Building intelligent foundations for a data-driven future.</p></div></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} KARIBU AI Technologies. All rights reserved.</span><a href="#home">Back to top ↑</a></div></footer>
  </>;
}
