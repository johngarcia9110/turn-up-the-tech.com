import React, { Component } from 'react';
import ReactQuill from 'react-quill';

class BlogPost extends Component{
    constructor(props){
        super(props);
        this.state = {
            text : ''
        }

    }

    handleChange = (value) => {
        this.setState({ text: value })
    }

    render(){
        return(
            <div>BlogPost
                <div>Testing Post</div>
                <ReactQuill value={this.state.text} 
                onChange={this.handleChange}
                theme="snow" />
            </div>
        )
    }
}

export default BlogPost;