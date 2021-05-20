import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import SiteNav from "./components/SiteNav";
import Footer from "./components/Footer";
import Jumbo from "./components/Jumbo";
import Content from "./components/Content";

class App extends Component {
    render() {
        let test = <p>Test</p>;

        return (
            <Router>
                <React.Fragment>
                    <SiteNav />
                    <main role="main">
                        <Jumbo />
                        <Route
                            path="/"
                            component={Content}
                            exact={true}
                        ></Route>
                        <Route
                            path="/testRoute"
                            render={() => test}
                            exact={true}
                        ></Route>
                    </main>
                    <Footer />
                </React.Fragment>
            </Router>
        );
    }
}

export default App;
