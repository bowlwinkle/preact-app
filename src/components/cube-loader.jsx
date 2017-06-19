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
			position: "",
            intervalID: undefined
		};

        this.enableCube = this.enableCube.bind(this);
        this.disableCube = this.disableCube.bind(this);
	}

    componentWillReceiveProps(nextProps) {
        if (nextProps.enabled != this.props.enabled) {
            if (nextProps.enabled) {
                this.enableCube();
            } else {
                this.disableCube();
            }
        }
    }

    componentWillUnmount() {
        if (this.state.intervalID) {
            clearInterval(this.state.intervalID);
        }
    }

    enableCube() {
        if (this.state.intervalID) {
            clearInterval(this.state.intervalID);
        }

        let id = setInterval(this.flipCube.bind(this), 3000);
        this.setState({position: CUBE_POSITIONS.left, intervalID: id});
    }

    disableCube() {
        if (this.state.intervalID){
            clearInterval(this.state.intervalID);
            this.setState({intervalID: undefined, position: ""});
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