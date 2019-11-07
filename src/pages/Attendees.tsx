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

            <IonList>
          <IonItem onClick={() => props.history.push('/event')}> 
            <IonAvatar slot="start">
              {/* <img src={HackBeanpot} alt = "hackBeanPot"/> */}
            </IonAvatar>
            <IonLabel>
              <h2>Riley Narno</h2>
              <p>Programmer</p>
            </IonLabel>
          </IonItem>
          <IonItem onClick={() => props.history.push('/event')}> 
            <IonAvatar slot="start">
              {/* <img src={CommunityGameJam} alt = "CommunityGameJam"/> */}
            </IonAvatar>
            <IonLabel>
              <h2>Isabel Lorenta</h2>
              <p>Artist</p>
            </IonLabel>
          </IonItem>
          <IonItem onClick={() => props.history.push('/event')}> 
            <IonAvatar slot="start">
              {/* <img src={HackNYU} alt = "HackNYU"/> */}
            </IonAvatar>
            <IonLabel>
              <h2>Hugh Freank</h2>
              <p>Programmer</p>
            </IonLabel>
          </IonItem>
        </IonList>
        </IonContent>

        </IonPage>
    );
};

export default Attendees;