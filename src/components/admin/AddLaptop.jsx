import React, { Component } from 'react';
import { firebaseApp, laptopRef } from '../../firebase';
import FileUploader from 'react-firebase-file-uploader';
import { connect } from 'react-redux';

class AddLaptop extends Component{
    constructor(props){
        super(props);
        this.state = {
            title : '',
            category : '',
            productLink : '',
            description : '',
            isUploading : false,
            progress : 0,
            laptopImageURL : '',
        }
    }

    handleUploadStart = () => {
        this.setState({ isUploading : true, progress : 0 });
    }

    handleUploadError = (error) => {
        this.setState({ isUploading : false });
        console.log('Image Upload Error:', error);
    }

    handleUploadSuccess = (filename) => {
        this.setState({ progress : 100, isUploading : false });
        firebaseApp.storage().ref('images').child(filename).getDownloadURL().then(url => this.setState({laptopImageURL: url}));
    }

    submitLaptop(){
        const {title, category, productLink, description, laptopImageURL} = this.state;
        laptopRef.push({title, category, productLink, description, laptopImageURL});
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
                    <label>Latop Category:</label>
                    <input type="text" 
                    className="form-control"
                    onChange={event => this.setState({ category : event.target.value})}
                    />
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
                    <textarea type="text" 
                    className="form-control"
                    placeholder="what a great laptop"
                    onChange={event => this.setState({ description : event.target.value})}
                    />
                    <label> Laptop Image </label>
                    {
                        this.state.isUploading &&
                        <p>Progress: {this.state.progress}</p>
                    }
                    {
                        this.state.laptopImageURL &&
                        <img src={this.state.laptopImageURL} alt="Current Laptop"/>
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
    const { laptop } = state;
    return {
        laptop
    }
}

export default connect(mapStateToProps, null)(AddLaptop);