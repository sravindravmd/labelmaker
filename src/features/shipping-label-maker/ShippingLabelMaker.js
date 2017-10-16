/**
 * Created by ravindras on 16/10/17.
 */
import React, { PropTypes, Component} from 'react';
import {Header} from '../../core/components/wizard/Header';
import Wizard from '../../core/components/wizard/Wizard';
import { steps} from '../../core/components/wizard/const';



class ShippingLabelMaker extends Component {

    constructor(props){

        super(props);

        this.state={from:{
            name: '',
            street:'',
            city:'',
            state:'',
            zip:''
        },
            to: {name: '',
            street:'',
            city:'',
            state:'',
            zip:''}
        }

        this.from={}
        this.to ={};
    }

header(){

}
    onChangeSenderName(name){

    this.setState({from:{...this.state.from,name:name}});

    }

    onChangeCity(City) {

    }
    onChangeSreet(street) {

    }
    onChangeState(state) {

    }
    onChangeZip(zip) {

    }

    render(){

        console.log(this.props);
        return(
            <div>
                <Wizard header={this.header.bind(this)} steps={steps} wizardContext={{}} onComplete={()=>{}} onChnageName={(name)=>this.onChangeSenderName(name)}/>
            </div>
        );
    }
}

export default ShippingLabelMaker;