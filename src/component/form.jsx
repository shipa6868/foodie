import React, { Component } from 'react';

class Form extends Component {
    render() {
        return (



            <div class="row">
                <div class="valign-wrapper row login-box">
                    <div class="col card hoverable s10 pull-s1 m6 pull-m3 l4 pull-l4 mainForm">

                        <div className="input-field col s10">
                            <input id="last_name" type="text" className="validate" onChange={e => this.props.inputName(e)}
                            />
                            <label for="last_name">InputName</label>
                        </div>

                        <div className="input-field col s10">
                            <input id="last_name" type="text" className="validate" onChange={e => this.props.inputType(e)} />
                            <label for="last_name">Item Type</label>
                        </div>

                        <div className="input-field col s10">
                            <input id="last_name" type="text" className="validate" onChange={e => this.props.inputRestrurant(e)} />
                            <label for="last_name">Restrurant Name</label>
                        </div>

                        <div className="input-field col s10">
                            <input id="last_name" type="text" className="validate" onChange={e => this.props.inputLocation(e)}
                            />
                            <label for="last_name">Location</label>
                        </div>
                        <div className="input-field col s10">
                            <input id="last_name" type="text" className="validate" onChange={e => this.props.inputPrice(e)} />
                            <label for="last_name">Price</label>
                        </div>
                        <div className="input-field col s10">
                            <input id="last_name" type="text" className="validate" onChange={e => this.props.inputRate(e)} />
                            <label for="last_name">Rating</label>
                        </div>

                        <div class="input-field col s6">
                            <button
                                class="btn-floating btn-large waves-effect waves-light red"
                                onClick={this.props.addItem}
                            >
                                <i class="material-icons">add</i>
                            </button>

                        </div>

                    </div>
                </div>
            </div>


        );
    }
}

export default Form;