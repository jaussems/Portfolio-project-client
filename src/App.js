import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage";
import SpecificCoinPage from "./pages/specificcoinpage";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserWithStoredToken } from "./store/user/actions";
import ProfilePage from "./pages/profilepage";
import Loginpage from "./pages/loginpage";
import SignupPage from "./pages/signuppage";
import Navigationbar from "./components/navigationbar";
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigationbar />

      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/coins/:coinId" component={SpecificCoinPage} />
        <Route path="/user/:userId" component={ProfilePage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={Loginpage} />
      </Switch>
    </div>
  );
}

export default App;
