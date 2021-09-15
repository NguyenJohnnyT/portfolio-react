import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/Nav/NavTabs";
import Footer from "./components/Footer/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Admin from "./pages/Admin";
import Login from "./pages/Login"

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/portfolio-react" component={Home} />
        <Route exact path ="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/login" component={Login} />
        <Footer />
      </div>
    </Router>
  );
}
export default App;