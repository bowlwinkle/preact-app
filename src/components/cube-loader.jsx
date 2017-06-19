import {h, Component} from "preact";

const CUBE_POSITIONS = {
    left: "animate-left",
    right: "animate-right",
    front: "animate-front",
    back: "animate-back"
};

export default class CubeLoader extends Component {
    constructor() {
		super();

		this.state = {
			position: CUBE_POSITIONS.left,
            intervalID: undefined
		};
	}

    componentDidMount() {
        this.state.intervalID = setInterval(this.flipCube.bind(this), 3000);
    }

    componentWillUnmount() {
        if (this.state.intervalID) {
            clearInterval(this.state.intervalID);
        }
    }

    flipCube() {
        let values = Object.values(CUBE_POSITIONS);
        let index = values.indexOf(this.state.position);

        if (index >= (values.length - 1)) {
            index = 0;
        } else {
            index++;
        }

        this.setState({position: values[index]});
    }

    render() {
        return (
            <div class="cube-container">
                <div class={`cube ${this.state.position}`}>
                    <div class="side front">
                        <svg class="cross">
                            <line x1="0" y1="0" x2="100%" y2="100%"/>
                            <line x1="100%" y1="0" x2="0" y2="100%"/>
                        </svg>
                    </div>
                    <div class="side back">
                        <svg class="cross">
                            <line x1="0" y1="0" x2="100%" y2="100%"/>
                            <line x1="100%" y1="0" x2="0" y2="100%"/>
                        </svg>
                    </div>
                    <div class="side top">
                        <svg class="cross">
                            <line x1="0" y1="0" x2="100%" y2="100%"/>
                            <line x1="100%" y1="0" x2="0" y2="100%"/>
                        </svg>
                    </div>
                    <div class="side bottom">
                        <svg class="cross">
                            <line x1="0" y1="0" x2="100%" y2="100%"/>
                            <line x1="100%" y1="0" x2="0" y2="100%"/>
                        </svg>
                    </div>
                    <div class="side left">
                        <svg class="cross">
                            <line x1="0" y1="0" x2="100%" y2="100%"/>
                            <line x1="100%" y1="0" x2="0" y2="100%"/>
                        </svg>
                    </div>
                    <div class="side right">
                        <svg class="cross">
                            <line x1="0" y1="0" x2="100%" y2="100%"/>
                            <line x1="100%" y1="0" x2="0" y2="100%"/>
                        </svg>
                    </div>
                </div>
            </div>

        )
    }
}