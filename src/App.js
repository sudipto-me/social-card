import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/pages/About";
import Disclaimer from "./components/pages/Disclaimer";
import Credits from "./components/pages/Credits";
import './App.css';
import UsersLists from "./components/UsersLists";

function App() {
    return (
        <Router>
            <div className="App">
                <Header/>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Route exact path="/" render={props => (
                                <UsersLists/>
                            )}></Route>
                            <Route path="/about" component={About}/>
                            <Route path="/credits" component={Credits}/>
                            <Route path="/disclaimer" component={Disclaimer}/>
                        </div>
                    </div>

                </div>

                <Footer/>
            </div>
        </Router>
    );
}

export default App;
