import { html } from "preact";
import Nav from "./parts/Nav.js";
import Img from "./parts/Img.js";
import Info from "./Info.js";
import Home from "./Home.js";

export function App() {
  return html`
    <main>
      <section id="top-nav">
        <${Nav} />
      </section>
      <section id="main">
        <${Img} />
        <section id="text">
          <${Info} />
          <${Home} />
        </section>
      </section>
    </main>
  `;
}