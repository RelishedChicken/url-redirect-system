import React from "react";
import { v4 as uuidv4 } from "uuid";
import { CopyToClipboard } from "react-copy-to-clipboard";

class Edit extends React.Component{

    state = {
        id: "",
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
                    <h1 className="pageTitle">Update a Link</h1>
                    <h4 className="pageDetail">Destination set to: {this.state.url}</h4>
                    <h4 className="pageDetail">Full Link Being Updated: {"https://relishedchicken.github.io/url-redirect-system/#/redirect/"+this.state.id}</h4>
                    <form className="formParent" onSubmit={this.props.updateUrl}>
                        <label className="formLabel">
                            <b>UUID of URL to Update:</b>{" "}
                            <input type="text" name="id" value={this.state.id} onChange={this.update}></input>
                        </label>
                        <br />
                        <label className="formLabel">
                            <b>New URL Destination:</b>{" "}
                            <input type="text" name="url" value={this.state.url} onChange={this.update}></input>
                        </label>
                        <br />
                        <br />
                        <CopyToClipboard text={"https://relishedchicken.github.io/url-redirect-system/#/redirect/"+this.state.id}>
                            <button className="submitButton">COPY URL TO CLIPBOARD {"&"} UPDATE</button>
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