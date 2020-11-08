import React from "react";
import { HashRouter as Router, Switch, Route, Link} from "react-router-dom";
import Instructions from "./Instructions";
import Redirector from "./Redirector";
import Edit from "./Edit";
import Update from "./Update";
import "./App.css";

class App extends React.Component{

    state={
        urls:[],
        loadedURLs: false,
        justCreatedLink: false,
        createdLinkUUID: "",
        createdLinkURL: ""
    }

    getURLData(){
        fetch("https://cors-anywhere.herokuapp.com/http://kunet.kingston.ac.uk/k1625608/updateUrls/getUrls.php").then(r=>r.json()).then((data) => {
            this.setState({
                urls: data
            })
            console.log("loaded!");
            this.setState({
                loadedURLs: true
            })
        })
        
    }

    render(){
        if(this.state.loadedURLs){
            return(
                <div>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0"/>
                    <link rel="shortcut icon" href="./favicon.ico" type="image/x-icon"></link>
                    <h1 className="title">Simple Persistant URL Redirector</h1>
                    <Router>
                        <div className="menuContainer">
                            <div className="menuBar">
                                <Link to="/#/"><div className="link">Home</div></Link>
                                <Link to="/edit/"><div className="link">Create Link</div></Link>
                                <Link to="/update/"><div className="link">Update Link</div></Link>
                            </div>
                        </div>
                        <Switch>
                            <Route basename="/url-redirect-system/#/" exact path="/" >
                                <Instructions />
                            </Route>
                            <Route basename="/url-redirect-system/#/" path="/redirect" >
                                <Redirector currentUrls={this.state.urls}/>
                            </Route>
                            <Route basename="/url-redirect-system/#/" path="/edit" >
                                <Edit addUrl={this.addURL}/>
                            </Route>
                            <Route basename="/url-redirect-system/#/" path="/update" >
                                <Update updateUrl={this.updateURL}/>
                            </Route>
                        </Switch>
                    </Router>
                </div>
            )
        }else{
            this.getURLData();
            return(
                <>
                    <h1 className="title">Simple Persistant URL Redirector</h1>
                    <div>
                        <h2 className="pageTitle">Please Wait</h2>
                        <h4 className="pageDetail">Loading latest data...</h4>
                    </div>
                </>
            )
        }
    }
}

export default App;