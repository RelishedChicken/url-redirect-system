import React from "react";
import { v4 as uuidv4 } from "uuid";

class Edit extends React.Component{

    state = {
        id: uuidv4(),
        url: "",
        submitted: false
    }

    update = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render(){
        if(!this.state.submitted){
            return(
                <div>
                    <h1>Edit Links</h1>
                    <h4>Destination set to: {this.state.url}</h4>
                    <form onSubmit={this.props.addUrl}>
                        <label>
                            <b>URL ID:</b>{" "}
                            <input type="text" name="id" value={this.state.id} readOnly></input>
                        </label>
                        <br />
                        <label>
                            <b>URL Destination:</b>{" "}
                            <input type="text" name="url" value={this.state.url} onChange={this.update}></input>
                        </label>
                        <br />
                        <h3>COPY THIS: {"https://relishedchicken.github.io/url-redirect-system/#/redirect/"+this.state.id}</h3>
                        <br />
                        <input type="submit" value="Create!"></input>
                    </form>
                </div>
            )
        }else{
            return(
                <>
                    <h1>Thanks! Your link is as follows</h1>
                    <h2>UUID: {this.state.createdLinkUUID}</h2>
                    <h2>URL: {this.state.createdLinkURL}</h2>
                </>
            )
        }
    }

}

export default Edit;