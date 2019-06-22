import React, {Component} from 'react';

class Selector extends Component {
    constructor(props) {
        super(props);
        this.state = {
            layoutValue: 'select'
        };
    }

    onChange(e) {
        this.setState({
            value: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col s12 center">
                            Please select you layout :
                        </div>
                        <div className="input-field col s6 offset-s3">
                            <select value={this.state.value} onChange={this.onChange.bind(this)}>
                                <option value="select">Choose your layout</option>
                                <option value="XL">XL</option>
                                <option value="2XL">2XL</option>
                                <option value="4L">4L</option>
                                <option value="XL/2L">XL/2L</option>
                                <option value="XL/L/2SM">XL/L/2SM</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Selector;