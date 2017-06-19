import {h} from "preact";

export default ({children, overlay, title}) => (
    <div className="banner">
        <div class="children">
            {children}
            {overlay ? <div class="overlay"/> : null}
        </div>
        {title ? <h1 class="title">{title}</h1> : null}
    </div>
)