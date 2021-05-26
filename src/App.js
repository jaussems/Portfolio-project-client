import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserWithStoredToken } from "./store/user/actions";
import Message from "./components/message";
import Loading from "./components/Loading/";
import SpecificCoinPage from "./pages/specificcoinpage";
import Homepage from "./pages/homepage";
import WelcomePage from "./pages/welcomepage";
import ProfilePage from "./pages/profilepage";
import Loginpage from "./pages/loginpage";
import SignupPage from "./pages/signuppage";
import AdminPage from "./pages/adminpage";
import Navigationbar from "./components/navigationbar";
import { selectAppLoading } from "./store/Message/selector";

function App() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectAppLoading);
  useEffect(() => {
    dispatch(getUserWithStoredToken());
  }, [dispatch]);

  return (
    <div className="App">
      <Navigationbar style={{ color: "white" }} />
      <Message />
      {isLoading ? <Loading /> : null}
      <Switch>
        <Route exact path="/" component={WelcomePage} />
        <Route path="/home/:pageindex" component={Homepage} />
        <Route path="/admin" component={AdminPage} />
        <Route path="/coins/:coinId" component={SpecificCoinPage} />
        <Route path="/user/:userId" component={ProfilePage} />
        <Route path="/signup" component={SignupPage} />
        <Route path="/login" component={Loginpage} />
      </Switch>
      <footer>
        <div
          className="footer-copyright text-center py-3"
          style={{ Color: "black", backgroundColor: "black" }}
        >
          <a href="https://www.coingecko.com/en/api">
            Crypto Pricing Data Provided By Coin Gecko API.
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
