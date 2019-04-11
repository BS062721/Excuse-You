import React, { Component } from 'react';
import root from 'window-or-global'
import 'fhirclient';
class Launch extends Component{

      componentDidMount(){
        root.FHIR.oauth2.authorize({
          client_id: '34d5faec-2c40-4b69-813d-f131bfbbdd0d',
          scope: 'user/Appointment.read user/Encounter.read user/Patient.read launch online_access openid profile',
          redirect_uri: 'http://localhost:3000/appointments',
        });
      }

      render(){
        return(
                <div>
                  Launching...
                </div>
            );
    }
}

export default Launch;