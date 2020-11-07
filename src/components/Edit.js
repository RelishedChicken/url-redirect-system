import React from "react";
import { v4 as uuidv4 } from "uuid";

class Edit extends React.Component{

    state = {
        id: uuidv4(),
        url: "",
    }

    update = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    render(){
        return(
            <div>
                <h1>Edit Links</h1>
                <h4>Destination set to: {this.state.url}</h4>
                <form onSubmit={this.props.addUrl}>
                    <label>
                        <b>URL ID (Copy this!):</b>{" "}
                        <input type="text" name="id" value={this.state.id} readOnly></input>
                    </label>
                    <br />
                    <label>
                        <b>URL Destination:</b>{" "}
                        <input type="text" name="url" value={this.state.url} onChange={this.update}></input>
                    </label>
                    <br />
                    <input type="submit" value="Create!"></input>
                </form>
            </div>
        )
    }

}

export default Edit;