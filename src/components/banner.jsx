import {h} from "preact";

export default ({children, overlay, title1, title2, onMouseEnter, onMouseOut}) => (
    <div className="banner" onMouseEnter={onMouseEnter} onMouseOut={onMouseOut}>
        <div class="children">
            {children}
            {overlay ? <div class="overlay"/> : null}
        </div>
        {title1 ? <h1 class="title1">{title1}</h1> : null}
        {title2 ? <h1 class="title2">{title2}</h1> : null}
    </div>
);