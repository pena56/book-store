import { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import SectionList from "./components/SectionList/SectionList";
import Checkout from "./components/Checkout/Checkout";
import Account from "./components/Account/Account";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "REMOVE_USER",
          user: null,
        });
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  console.log(user);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Header />
            <Home />
            <Footer />
          </Route>
          <Route path="/books">
            <Header />
            <SectionList />
            <Footer />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/account">
            <Account />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
