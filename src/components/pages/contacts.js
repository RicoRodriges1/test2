import React, { Component } from 'react';

import './contacts.css';

class Contacts extends Component {
    render() {
        return (
            <div>
                <form>
                    <fieldset>
                        <div class="form-group row contacts" style={{maxWidth: 700}}>
                            <legend className="text-center">CONTACT US</legend>
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group row contacts" style={{maxWidth: 700}}>
                        <label for="exampleTextarea">Type your letter here</label>
                            <textarea class="form-control" id="exampleTextarea" rows="3"></textarea>
                            <button type="submit" class="btn btn-primary ">Submit</button>
                        </div>
                    </fieldset>
                    
                </form>
            </div>
        );
    }
}

export default Contacts; 