import React from 'react';
import InputComponent from '../wizard/Comman/TextInput';
import {Header} from '../wizard/Header';
const GetReceiverAddress = () => {

    return (

        <div>
            <Header headerText="Enter the receiver's Address"></Header>
            <form>

                <InputComponent onChange={()=>{}} label="Name" inputValue="" placeholder="Name"/>
                <InputComponent onChange={()=>{}} label="Street" inputValue="" placeholder="Street"/>
                <InputComponent onChange={()=>{}} label="City" inputValue="" placeholder="City"/>
                <InputComponent onChange={()=>{}} label="State" inputValue="" placeholder="State"/>
                <InputComponent onChange={()=>{}} label="Zip" inputValue="" placeholder="Zip"/>

            </form>
        </div>
    );

};

export default GetReceiverAddress;