import "./App.css";
import NavbarComp from "./component/NavbarComp";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import Instructors from "./pages/Instructors";
import Questions from "./pages/Questions";
import FooterComp from "./component/FooterComp";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
const App = () => {
  return (
    <>
      <Router>
        <NavbarComp />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/learn" component={Learn} />
          <Route exact path="/instructors" component={Instructors} />
          <Route exact path="/questions" component={Questions} />
        </Switch>
        <FooterComp />
      </Router>
    </>
  );
};

export default App;
