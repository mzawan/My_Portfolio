const lines = ["I build fast,", "pixel-perfect", "web apps."];

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap">
        <h1 aria-label={lines.join(" ")}>
          {lines.map((line) => (
            <span key={line}><i>{line}</i></span>
          ))}
        </h1>
        <p className="lead">
          <b>Malik Moiz Ahmad Awan</b> — I bridge the gap between design and code. I take your Figma files and turn them into clean, responsive, high-performance web and mobile apps. Whether it's a marketing site, a SaaS dashboard, or a mobile app, I focus on pixel-perfect UI, smooth interactions, and code that's easy to maintain. 
        </p>
        <div className="btns">
          <a className="btn p" href="#projects">See my projects</a>
          <a className="btn" href="#contact">Get in touch</a>
        </div>
      </div>
    </section>
  );
}
