import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonPage,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel,
    IonNote,
    IonBadge,
    IonFab,
    IonFabButton,
    IonIcon,
    IonTabBar,
    IonTabButton,
} from '@ionic/react';
import { add } from 'ionicons/icons';
import React from 'react';
import { RouteComponentProps, Link } from 'react-router-dom';
//import { Link } from 'react-router-dom';
  
const NewItem: React.FC<RouteComponentProps> = (props) => {
    return (
      <IonPage>

        <IonContent>
          
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
          
          <IonList>
            <IonItem onClick={() => props.history.push('/your-idea')}>
              <IonLabel>
                <h1>Salem</h1>
                <IonNote>Hidden role card game</IonNote>
              </IonLabel>
              <IonBadge color="light" slot="end">
                1/4 members
            </IonBadge>
            </IonItem>

            <IonItem onClick={() => props.history.push('/your-idea')}>
              <IonLabel>
                <h1>Let's Make a Date</h1>
                <IonNote>You cook food for a date.</IonNote>
              </IonLabel>
              <IonBadge color="light" slot="end">
                2/4 Members 
            </IonBadge>
            </IonItem>

            <IonItem onClick={() => props.history.push('/your-idea')}>
              <IonLabel>
                <h1>Help Hero</h1>
                <IonNote>3D platformer with heros</IonNote>
              </IonLabel>
              <IonBadge color="light" slot="end">
                2/4 members
            </IonBadge>
            </IonItem>
          </IonList>

          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton onClick={() => props.history.push('/propose-idea')}>
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>
        </IonContent>
      </IonPage>
    );
  };
  export default NewItem;