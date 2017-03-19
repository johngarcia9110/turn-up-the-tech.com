import React, { Component } from 'react';

class FinderForm extends Component{
    render(){
        return(
            <div className="page lf-page">
                <div className="form">
                    <div className="form-group">
                        How will you use the laptop?
                        <div className="checkbox">
                            <label> <input type="checkbox" value="basic" />Basic Tasks</label>
                        </div>
                        <div className="checkbox">
                            <label> <input type="checkbox" value="business" />Business/Work</label>
                        </div>
                        <div className="checkbox">
                            <label> <input type="checkbox" value="gaming" />Gaming</label>
                        </div>
                        <div className="checkbox">
                            <label> <input type="checkbox" value="studen" />Student</label>
                        </div>
                        <div className="checkbox">
                            <label> <input type="checkbox" value="art" />Art/Creative</label>
                        </div>
                    </div>
                    <div className="form-group">
                        What is your price range?
                        <div className="price-range-section">
                            <label> <input type="radio" name="priceRange" id="pr1" value="down500" />less than $500 </label>
                            <label> <input type="radio" name="priceRange" id="pr2" value="500700" />$500 - $700 </label>
                            <label> <input type="radio" name="priceRange" id="pr3" value="700900" />$700 - $900 </label>
                            <label> <input type="radio" name="priceRange" id="pr4" value="9001200" />$900 - $1200 </label>
                            <label> <input type="radio" name="priceRange" id="pr5" value="9001200" />$1200 and above </label>
                        </div>
                    </div>
                    <button className="btn btn-success">Submit</button>
                </div>
            </div>
        )
    }
}
export default FinderForm;