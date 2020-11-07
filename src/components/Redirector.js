import React from "react";

class Redirector extends React.Component{

    state={
        urlToUse: "",
        readyToGo: false,
    }

    parse(){
        var usersChosenUUID = window.location.href.substring(window.location.href.lastIndexOf("/")+1,window.location.href.length);
        console.log(usersChosenUUID);
        var usersURL;
        this.props.currentUrls.forEach(url => {
            if(url.url_uuid === usersChosenUUID){
                usersURL = url.url_value
            }
        })
        if(usersURL[0] !== "h"){
            usersURL = "https://"+usersURL;
        }
        this.setState({
            urlToUse: usersURL,
            readyToGo: true
        })
        console.log(usersURL);
        
    }

    render(){
        if(this.state.readyToGo){
            window.location.href = this.state.urlToUse;
            return(
                <h1>Redirecting you...</h1>
            )
        }else{
            this.parse()
            return(
                <h1>Parsing UUID...</h1>
            )
        }
    }

}

export default Redirector;