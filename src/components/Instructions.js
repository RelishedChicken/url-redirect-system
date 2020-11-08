import React from "react";
import { HashRouter as Router, Link} from "react-router-dom";

class Instructions extends React.Component{

    render(){
        return(
            <div>
                <h2>Usage</h2>
                <h3>Editing a Link</h3>
                <p>To edit a link, go <b><Link to="/edit/">here</Link></b>.</p>
                <h3>Update a Link</h3>
                <p>To update a link, go <b><Link to="/update/">here</Link></b>.</p>
                <h3>To Redirect to a Link</h3>
                <p>Visit this domain with <b>'/redirect/[uuid]'</b> in the URL.</p>
            </div>
        )
    }
}

export default Instructions;