import {h} from "preact";
import User from "./user.jsx";
import Mountain from "../../assets/small-dark-mountain.png";
import CubeLoader from "./cube-loader.jsx";
import Banner from "./banner.jsx";

const users = [
    {
        name: "Lucas Gansberg",
        image: "https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAEAAQAAAAAAAAUlAAAAJDE5MjBlNjE2LThkNDYtNDQ4YS05ZmQ3LTg3YmJiY2E4MTQzMQ.jpg"
    },
    {
        name: "Balaji",
        image: "https://media.licdn.com/media/AAEAAQAAAAAAAAXIAAAAJGJmNzc0Zjc1LTRkMGQtNDU4NS1hMzE4LWMxZTBhNGI1NjUzZQ.jpg"
    }
]

// export function App() {
//     return <div class="app">
//                 <h1>Hello World</h1>
//                 {users.map(user => <User {...user} key={user.name}/>)}
//             </div>
// };

export default () => (
    <div class="main">
       <Banner overlay="true" title="Time is a flat square">
            <CubeLoader/>
       </Banner>
    </div>
);

//export default App;