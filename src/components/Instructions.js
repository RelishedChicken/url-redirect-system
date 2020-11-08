import React from "react";
import { HashRouter as Router, Link} from "react-router-dom";

class Instructions extends React.Component{

    render(){
        return(
            <div>
                <h1>Usage</h1>
                <h2>Editing a Link</h2>
                <p>To edit a link, visit  </p>
                <h2>Update a Link</h2>
                <p>To update a link, visit </p>
                <h2>To Redirect to a Link</h2>
                <p>Visit this domain with the <b>'/redirect/[uuid]'</b> in the URL</p>
            </div>
        )
    }
}

export default Instructions;