import {h, Component} from "preact";

const CUBE_POSITIONS = {
    front: "animate-middle-front",
    back: "animate-middle-back"
};

export default class CubeLoader extends Component {
    constructor() {
		super();
		
		this.state = {
			position: CUBE_POSITIONS.front,
            intervalID: undefined
		};
	}

    componentDidMount() {
        this.state.intervalID = setInterval(this.flipCube.bind(this), 1000);
    }

    componentWillUnmount() {
        if (this.state.intervalID) {
            clearInterval(this.state.intervalID);
        }
    }

    flipCube() {
        if (this.state.position == CUBE_POSITIONS.front) {
            this.setState({position: CUBE_POSITIONS.back});
        } else {
            this.setState({position: CUBE_POSITIONS.front});
        }
    }

    render() {
        return (
            <div class="cube-container">
                <div class={`cube ${this.state.position}`}>
                    <div class="side front">
                        <div class="top-right-cube-line"/>
                        <div class="bottom-left-cube-line"/>
                    </div>
                    <div class="side back">
                        <div class="top-right-cube-line"/>
                        <div class="bottom-left-cube-line"/>
                    </div>
                    <div class="side top">
                        <div class="top-right-cube-line"/>
                        <div class="bottom-left-cube-line"/>
                    </div>
                    <div class="side bottom">
                        <div class="top-right-cube-line"/>
                        <div class="bottom-left-cube-line"/>
                    </div>
                    <div class="side left">
                        <div class="top-right-cube-line"/>
                        <div class="bottom-left-cube-line"/>
                    </div>
                    <div class="side right">
                        <div class="top-right-cube-line"/>
                        <div class="bottom-left-cube-line"/>
                    </div>
                </div>
            </div>

        )
    }
}