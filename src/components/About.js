import { timeline } from "../data/projects";

export default function About() {
  return (
    <section id="about">
      <div className="wrap">
        <h2>About</h2>
        <p className="sub">Web and mobile development, with AI tools in my daily workflow.</p>
        <ol className="tl">
          {timeline.map((item) => (
            <li key={item.title}>
              <small>{item.when}</small>
              <b>{item.title}</b>
              {item.text}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
