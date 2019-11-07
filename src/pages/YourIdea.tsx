import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonIcon,
  IonTabBar,
  IonTabButton,
} from '@ionic/react';
//import Profile from "../images/profile.jpg";
import edit from "../images/edit.png";
import React from 'react';
import { Link } from 'react-router-dom';

const YourIdea: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
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
      </IonHeader>
      <IonContent>
        <IonRow className="ion-justify-content-center">
      <h1 className="ion-text-center">Your Idea</h1>
      </IonRow> 
        
        <IonIcon slot="end" icon={edit} />


          <h2>Salem</h2>
          <h3>Hidden role card game</h3>


        <IonGrid>
          <IonRow>
            <IonCol></IonCol>
            <IonCol>
              <IonButton>Front-end</IonButton>
              <IonButton>Back-end</IonButton>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
          <IonRow>
            <IonCol></IonCol>
            <IonCol>
              <IonButton>Artist</IonButton>
              <IonButton>Web-dev</IonButton>
            </IonCol>
            <IonCol></IonCol>
          </IonRow>
        </IonGrid>

        <div></div>

        <IonGrid>
          <IonRow>
            <IonCol></IonCol>
            <IonCol>
              <IonButton>Add a Team Member</IonButton>
              </IonCol>
            <IonCol></IonCol>
            
          </IonRow>
        </IonGrid>
        
      </IonContent>
    </IonPage>
  );
};
export default YourIdea;