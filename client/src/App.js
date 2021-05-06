import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound"
import Pastwork from "./pages/Pastwork";




function App() {
  return (
    <div className = "App">

    <Router>

      <Navbar />

      <Switch>
      <Route exact path = {["/", "home"]}> 
          <Homepage />
      </Route>

      <Route exact path = "/Pastwork"> 
          <Pastwork />
      </Route> 

      <Route exact path = "/contact"> 
          <Contact />
      </Route>

      <Route exact path = "/notfound"> 
          <NotFound />
      </Route> 

      
      </Switch>


    </Router>
      

    </div>
  );
  
  }

export default App;