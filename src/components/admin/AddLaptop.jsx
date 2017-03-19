import React, { Component } from 'react';
import { firebaseApp, laptopRef } from '../../firebase';
import FileUploader from 'react-firebase-file-uploader';
import { connect } from 'react-redux';
import ReactQuill from 'react-quill';
//import { setLaptop } from '../../actions';

class AddLaptop extends Component{
    constructor(props){
        super(props);
        this.state = {
            title : '',
            category : [],
            productLink : '',
            description : '',
            isUploading : false,
            progress : 0,
            laptopImageURL : ''
        }
    }

    handleUploadStart = () => {
        this.setState({ isUploading : true, progress : 0 });
    }

    handleUploadError = (error) => {
        this.setState({ isUploading : false });
        //console.log('Image Upload Error:', error);
    }

    handleUploadSuccess = (filename) => {
        this.setState({ progress : 100, isUploading : false });
        firebaseApp.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({laptopImageURL: url}));
    }

    handleLaptopDescChange = (value) => {
        this.setState({ description : value });
    }

    submitLaptop(){
        const {title, category, productLink, description, laptopImageURL} = this.state;
        laptopRef.push({title, category, productLink, description, laptopImageURL});
    }

    categoryTags = (value) => {
        let currentTags = this.state.category;
        //console.log('index', this.state.category.indexOf(value));
        if(this.state.category.indexOf(value) === -1){
            console.log('test', value);
            currentTags.push(value);
            this.setState({category : currentTags});
        }else{
            currentTags.splice(currentTags.indexOf(value), 1);
            this.setState({category : currentTags});

        }
        console.log('category', this.state.category, 'current tags', currentTags);
    }

    render(){
        return(
            <div className="form">
                <h2>Add New Laptop</h2>
                <div className="form-group">
                    <label>Laptop Title:</label>
                    <input type="text" 
                    className="form-control"
                    onChange={event => this.setState({ title : event.target.value})}
                    />
                </div>
                <div className="form-group">
                    <strong>Latop Category:</strong>
                    <div className="checkbox">
                        <label> <input type="checkbox" value="basic" onChange={event => this.categoryTags(event.target.value)}/>Basic Tasks</label>
                    </div>
                    <div className="checkbox">
                        <label> <input type="checkbox" value="business" onChange={event => this.categoryTags(event.target.value)} />Business/Work</label>
                    </div>
                    <div className="checkbox">
                        <label> <input type="checkbox" value="gaming" onChange={event => this.categoryTags(event.target.value)} />Gaming</label>
                    </div>
                    <div className="checkbox">
                        <label> <input type="checkbox" value="student" onChange={event => this.categoryTags(event.target.value)} />Student</label>
                    </div>
                    <div className="checkbox">
                        <label> <input type="checkbox" value="art" onChange={event => this.categoryTags(event.target.value)} />Art/Creative</label>
                    </div>
                </div>
                <div className="form-group">
                    <label>Latop Link:</label>
                    <input type="text" 
                    className="form-control"
                    placeholder="www.amz.com/.."
                    onChange={event => this.setState({ productLink : event.target.value})}
                    />
                </div>
                <div className="form-group">
                    <label>Latop Description:</label>
                    <ReactQuill value={this.state.description} 
                        onChange={this.handleLaptopDescChange}
                        theme="snow"
                         />
                </div>
                <div className="form-group">
                    <label> Laptop Image </label>
                    {
                        this.state.isUploading &&
                        <p>Progress: {this.state.progress}</p>
                    }
                    {
                        this.state.laptopImageURL &&
                        <img className="laptop-preview-img" src={this.state.laptopImageURL} alt="Current Laptop"/>
                    }
                     <FileUploader
                        accept="image/*"
                        name="avatar"
                        randomizeFilename
                        storageRef={firebaseApp.storage().ref('images')}
                        onUploadStart={this.handleUploadStart}
                        onUploadError={this.handleUploadError}
                        onUploadSuccess={this.handleUploadSuccess}
                        onProgress={progress => this.setState({ progress })}
                    />
                </div>
                <button className="btn btn-success" 
                    type="button" 
                    onClick={() => this.submitLaptop()}
                    >Submit</button>
            </div>
        )
    }
}

function mapStateToProps(state){
    //console.log('addlaptopstate', state);
    return {
        laptop : state
    }
}

export default connect(mapStateToProps, null)(AddLaptop);