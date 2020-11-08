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

    addURL(formData){
        formData.preventDefault();
        console.log(formData);
        var uuid = formData.target[0].value;
        var urlDest = formData.target[1].value;
        fetch("https://cors-anywhere.herokuapp.com/http://kunet.kingston.ac.uk/k1625608/updateUrls/addUrl.php?uuid="+uuid+"&url="+urlDest);
        window.location.href = "/url-redirect-system/#/";
    }

    updateURL(formData){
        formData.preventDefault();
        console.log(formData);
        var uuid = formData.target[0].value;
        var urlDest = formData.target[1].value;
        if(urlDest !== ""){
            fetch("https://cors-anywhere.herokuapp.com/http://kunet.kingston.ac.uk/k1625608/updateUrls/updateUrl.php?uuid="+uuid+"&url="+urlDest);
            window.location.href = "/url-redirect-system/#/";
        }else{
            window.location.href = "/url-redirect-system/#/error";
        }        
    }

    render(){
        if(this.state.loadedURLs){
            return(
                <div>
                    <h1>Simple Persistant URL Redirector</h1>
                    <Router>
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
                            <Route basename="/url-redirect-system/#/" path="/error" >
                                <h3>The URL entered was not complete or correct. Please try again: <Link to="/edit/" /></h3>
                            </Route>
                        </Switch>
                    </Router>
                </div>
            )
        }else{
            this.getURLData();
            return(
                <>
                    <h1>Simple Persistant URL Redirector</h1>
                    <div>
                        <h2>Please Wait</h2>
                        <h4>Loading latest data...</h4>
                    </div>
                </>
            )
        }
    }
}

export default App;