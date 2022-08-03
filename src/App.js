import "./App.scss";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import UserList from "./pages/UserList/userList.page";
import HomePage from "./pages/Home/Home.page";
import SignIn from "./pages/SignIn/SignIn.page";
import SignUp from "./pages/SignUp/signup.page";
import Profile from "./pages/Profile/profile.page";

function App() {
    return (
        <div className="App">
            {/* <Home /> */}
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<UserList/>}/>
                <Route path="/signin" element={<SignIn/>}/>
                <Route path="/home" element={<HomePage/>}/>
                <Route path='/signup' element={<SignUp/>}/>
                <Route path='/profile' element ={<Profile/>}/>
            </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
