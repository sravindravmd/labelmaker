/**
 * Created by ravindras on 16/10/17.
 */
import React from 'react';
import InputComponent from '../wizard/Comman/TextInput';
import {Header} from '../wizard/Header';
 const GetSenderAddress = ({onChnageName}) => {

    return (
        <div>
            <Header headerText="Enter the Sender Address"></Header>
            <form>

                <InputComponent onChange={(name)=>this.props.onChnageName(name)} label="Name" inputValue="" placeholder="Name"/>
                <InputComponent onChange={()=>{}} label="Street" inputValue="" placeholder="Street"/>
                <InputComponent onChange={()=>{}} label="City" inputValue="" placeholder="City"/>
                <InputComponent onChange={()=>{}} label="State" inputValue="" placeholder="State"/>
                <InputComponent onChange={()=>{}} label="Zip" inputValue="" placeholder="Zip"/>

            </form>

        </div>
    );

};

 export default GetSenderAddress;