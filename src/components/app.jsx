import {h, Component} from "preact";
import CubeLoader from "./cube-loader.jsx";
import Banner from "./banner.jsx";
import Mountain from "../../assets/mountain.jpeg";
import Space from "../../assets/space-flashlight.jpeg";
import Clock from "../../assets/clock.jpeg";

class App extends Component {
    constructor() {
		super();

		this.state = {
			cubeEnabled: false
		};
	}

    render (props, state) {
        return (<div class="main" >
                    <Banner enabled={this.state.cubeEnabled}
                            overlay="true"
                            title1="We are what we repeatedly do. Thus, perfection is not and act, but a habit..."
                            title2="Time is a flat cube!"
                            onMouseEnter={() => {
                                    if (!this.state.cubeEnabled) {
                                        this.setState({cubeEnabled: true})
                                    }
                                }}
                            onMouseOut={() => {
                                    if (this.state.cubeEnabled) {
                                        this.setState({cubeEnabled: false})
                                    }
                                }}>
                                <CubeLoader enabled={state.cubeEnabled}/>
                    </Banner>
                    <div class="images">
                            <img class="slide" src={Space} alt="Space"/>
                            <img class="slide" src={Clock} alt="Time"/>
                            <img class="slide" src={Mountain} alt="Mountain"/>
                    </div>
                </div>);
    }
};

export default App;