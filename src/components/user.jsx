import {h} from "preact";

export default ({name, image}) => (
    <div class="user">
        <figure class="user__image">
            <img src={image} alt={`User ${name}`}/>
        </figure>
        <p class="user__name">{name}</p>
    </div>
);