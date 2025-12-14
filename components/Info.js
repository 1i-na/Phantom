import { html } from "preact";

export default function Info(){
    return html`
        <article id="info">
            <img id="clock" src="assets/clock.png" alt="clock" />
            <section id="idle">
                <p id="name">nana</p>
                <p id="bio">18, she/her, intj</p>
            </section>
        </article>
    `; 
}