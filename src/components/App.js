import React from "react";
import { HashRouter as Router, Switch, Route} from "react-router-dom";
import Instructions from "./Instructions";
import Redirector from "./Redirector";
import Edit from "./Edit";

class App extends React.Component{

    state={
        urls:[],
        loadedURLs: false
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
        console.log(formData);
        var uuid = formData.target[0].value;
        var urlDest = formData.target[1].value;
        fetch("https://cors-anywhere.herokuapp.com/http://kunet.kingston.ac.uk/k1625608/updateUrls/updateUrl.php?uuid="+uuid+"&url="+urlDest);
    }

    render(){
        if(this.state.loadedURLs){
            return(
                <div>
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
                        </Switch>
                    </Router>
                </div>
            )
        }else{
            this.getURLData();
            return(
                <div>
                    <h1>Please Wait</h1>
                    <h3>Loading latest data...</h3>
                </div>
            )
        }
    }
}

export default App;