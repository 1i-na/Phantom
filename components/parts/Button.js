import { html } from "preact";

export default function Button({ className, onClick, text }){
    return html`
        <button class=${className} onClick=${onClick}>${text}</button>
    `;
}