import React, { Component } from 'react';
import root from 'window-or-global'
import 'fhirclient';
class Appointments extends Component{
    constructor(props) {
        super(props);
        this.state = {};
      }

      componentDidMount(){
        root.FHIR.oauth2.ready((smart) => {
            this.setState({
                smartData: JSON.parse(JSON.stringify(smart)).patient.id
              })
        });
      }

    render(){
        return(
                <div>
                    <h1>Excuse you!!</h1>
                    <p>patient id: {this.state.smartData}</p>
                </div>
            );
    }
}
export default Appointments;