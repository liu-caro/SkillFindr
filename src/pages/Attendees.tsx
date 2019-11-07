import { IonPage, 
IonToolbar,

IonBackButton, 
IonButtons,
IonTabBar,
IonTabButton, 
IonList,
IonItem,
IonAvatar, 
IonLabel,
 IonContent} from '@ionic/react';

import React from 'react';

import { RouteComponentProps, Link } from 'react-router-dom';
import Jamie from '../images/jamie.jpeg';
import Cari from '../images/cari.jpeg';
import Cam from '../images/cam.jpeg';
import Boba from '../images/boba.jpg';

const Attendees:  React.FC <RouteComponentProps> = (props) =>  {
    return (
        <IonPage>

            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/home" />
                </IonButtons>
                <IonTabBar>
                <IonTabButton><Link to="/event">Event</Link></IonTabButton>
                <IonTabButton><Link to="/ideas">Ideas</Link></IonTabButton>
                <IonTabButton><Link to="/attendees">Attendees</Link> </IonTabButton>

                </IonTabBar>
            </IonToolbar>

            <IonContent className="ion-padding">

              300 Attendees

            <IonList>
            <IonItem routerLink="/profile"> 
            <IonAvatar slot="start">
              <img src={Jamie} alt = "Jamie"/>
            </IonAvatar>
            <IonLabel>
              <h2>Jamie Camera</h2>
              <p>Programmer</p>
            </IonLabel>
          </IonItem>
          <IonItem onClick={() => props.history.push('/event')}> 
            <IonAvatar slot="start">
              <img src={Cari} alt = "Cari"/>
            </IonAvatar>
            <IonLabel>
              <h2>Cari Liu</h2>
              <p>Programmer</p>
            </IonLabel>
          </IonItem>
          <IonItem onClick={() => props.history.push('/event')}> 
            <IonAvatar slot="start">
              <img src={Cam} alt = "Cam"/>
            </IonAvatar>
            <IonLabel>
              <h2>Cam Perry</h2>
              <p>Artist</p>
            </IonLabel>
          </IonItem>
          <IonItem onClick={() => props.history.push('/event')}> 
            <IonAvatar slot="start">
              <img src={Boba} alt = "Boba"/>
            </IonAvatar>
            <IonLabel>
              <h2>Boba Baggins</h2>
              <p>Programmer</p>
            </IonLabel>
          </IonItem>
        </IonList>
        </IonContent>

        </IonPage>
    );
};

export default Attendees;