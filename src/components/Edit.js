import React from "react";
import { v4 as uuidv4 } from "uuid";
import { CopyToClipboard } from "react-copy-to-clipboard";

class Edit extends React.Component{

    state = {
        id: uuidv4(),
        url: "",
        submitted: false,
    }

    update = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    formSubmitted = (e) =>{
        this.setState({
            submitted: true
        })
    }

    render(){
        if(!this.state.submitted){
            return(
                <div>
                    <h2 className="pageTitle">Create a Link</h2>
                    <p className="pageInstructions">Enter a destination. Your new URL will be copied to clipboard automatically</p>
                    <div className="formSpacer">&nbsp;</div>
                    <div className="formParent">
                        <form onSubmit={this.props.addUrl}>
                            <label className="formLabel"><b>URL ID: {" "}</b></label>
                            {this.state.id}{" "}
                            <input className="inputField" type="text" name="id" hidden value={this.state.id} readOnly></input>
                            <br />
                            <label className="formLabel"><b>URL Destination:</b>{" "}</label>
                            <input className="inputField"  type="text" name="url" value={this.state.url} onChange={this.update}></input>
                            <br />
                            <br />
                            <CopyToClipboard text={"https://relishedchicken.github.io/url-redirect-system/#/redirect/"+this.state.id}>
                                <button onClick={this.formSubmitted} className="submitButton">Submit {"&"} Copy to Clipboard</button>
                            </CopyToClipboard>
                        </form>
                    </div>
                    <div className="formSpacer">&nbsp;</div>
                </div>
            )
        }else{
            return(
                <>
                    <h2 className="pageTitle">Thanks! Your link has been created and is as follows:</h2>
                    <p className="pageInstructions">UUID: {this.state.id}</p>
                    <p className="pageInstructions">URL: {this.state.url}</p>
                    <p className="pageInstructions">Hint: Your redirect link has already been copied to your clipboard</p>
                </>
            )
        }
    }

}

export default Edit;