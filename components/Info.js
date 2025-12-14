import { html } from "preact";

export default function Info(){
    return html`
        <article id="info">
            <img id="round-img" src="assets/spider.png" alt="Another image" />
            <section id="idle">
                <p id="name">nana</p>
                <p id="bio">18, she/her, intj</p>
            </section>
        </article>
    `; 
}