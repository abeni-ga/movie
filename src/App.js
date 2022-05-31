import "./App.scss";
import Home from "./Routes/Home/home.route";
import SignUp from "./pages/SignUp/signup.page";
import Authentication from "./Routes/Authentication/Authentication.routes";
import SignIn from "./pages/SignIn/SignIn.page";

function App() {
    return (
        <div className="App">
            {/* <Home /> */}
            <Authentication/>
            {/* <SignIn/> */}
        </div>
    );
}

export default App;
