import { useState } from "react";
import { stack } from "../data/stack";

const categories = Object.keys(stack);

export default function TechStack() {
  const [category, setCategory] = useState("Frontend");

  const pickCategory = (c) => {
    setCategory(c);
  };

  return (
    <section id="stack">
      <div className="wrap">
        <h2>Tech stack</h2>

        <p className="sub">
          Pick a category to see the technologies I use.
        </p>

        <div className="term">
          <div className="bar">
            <span className="dots" aria-hidden="true">
              <b />
              <b />
              <b />
            </span>

            <span>stack.json</span>
          </div>

          <div className="tabs" role="tablist">
            {categories.map((c) => (
              <button
                key={c}
                className="tab"
                type="button"
                role="tab"
                aria-selected={c === category}
                onClick={() => pickCategory(c)}
              >
                {c}
              </button>
            ))}
          </div>

          <div className="chips">
            {stack[category].map((skill) => (
              <span key={skill.name} className="chip">
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}