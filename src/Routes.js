import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Components/Home";
import Backwards from "./Components/Backwards";
import Definition from "./Components/Definition";

const Routes = () => {
  return (
    <div>
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/backwards" component={Backwards} />
        <Route path="/definition" component={Definition} />
      </Router>
    </div>
  );
};

export default Routes;
