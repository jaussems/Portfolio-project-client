import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import SpecificCoinPage from "./pages/specificcoinpage";
import ProfilePage from "./pages/profilepage";
import Loginpage from "./pages/loginpage";
import SignupPage from "./pages/signuppage";
import Navigationbar from "./components/navigationbar";
function App() {
  return (
    <div className="App">
      <Navigationbar />

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/coins/:coinId" component={SpecificCoinPage} />
        <Route path="/users/:userId" component={ProfilePage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={Loginpage} />
      </Switch>
    </div>
  );
}

export default App;
