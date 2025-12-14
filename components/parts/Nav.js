import { html } from "preact";
import Button from "./Button.js";

export default function Nav({ setView }) {
    return html`
        <nav>
            <${Button} className="nav-btn" text="HOME" onClick=${() => setView("home")} />
            <${Button} className="nav-btn" text="MORE" onClick=${() => setView("more")} />
            <${Button} className="nav-btn" text="BYI" onClick=${() => setView("byi")} />
            <${Button} className="nav-btn" text="LINK" onClick=${() => setView("links")} />
        </nav>
    `;
}