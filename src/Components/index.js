import React, { Component } from 'react';
import Button from 'terra-button/lib/Button';

const buttonStyle = { margin: '5px' };

class Index extends Component{

    launchApp = () => {
        window.open('https://smart.sandboxcerner.com/smart/0b8a0111-e8e6-4c26-a91c-5069cbc6b1ca/apps/12bda072-eade-4cb9-adf1-0e1f6334386c?username=portal&need_patient_banner=true&PAT_PersonId=4730008', '_self');
    }

    render(){
        return(
            <div>
            <Button text="Launch" variant="emphasis"  onClick={this.launchApp} style={buttonStyle} />
            </div>
        )
    }
}
export default Index;