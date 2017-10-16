/**
 * Created by ravindras on 16/10/17.
 */
import React, { Component } from 'react';
import proptypes from 'prop-types';
import GetSenderAddress from '../wizard/GetSenderAddress';
import GetReceiverAddress from '../wizard/GetReceiverAddress';

class Wizard extends Component {

    constructor(props){
        super(props);

        console.log('Props', props);
    }



    render() {

        const {header: Header} =this.props;
        return(


            <div className="container">
                    <GetSenderAddress onChnageName={this.props.onChnageName}/>
                    <GetReceiverAddress/>

            </div>
        );
    }
}

Wizard.propTypes ={
    header: proptypes.func.isRequired,
    steps:proptypes.array.isRequired,
    wizardContext: proptypes.object.isRequired,
    onComplete: proptypes.func.isRequired
};

export default Wizard;
