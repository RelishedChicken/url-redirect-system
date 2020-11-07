import React from "react";
import { v4 as uuidv4 } from "uuid";
import { CopyToClipboard } from "react-copy-to-clipboard";

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
                    <h4>Full Link: {"https://relishedchicken.github.io/url-redirect-system/#/redirect/"+this.state.id}</h4>
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
                        <CopyToClipboard text={"https://relishedchicken.github.io/url-redirect-system/#/redirect/"+this.state.id}>
                            <button>COPY URL TO CLIPBOARD</button>
                        </CopyToClipboard>
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