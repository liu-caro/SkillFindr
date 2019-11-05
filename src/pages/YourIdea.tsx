import {
  IonBackButton,
  IonInput,
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
  IonThumbnail,
  IonLabel,
  IonIcon,
  IonTextarea,
  IonImg,
} from '@ionic/react';
import profile from "../images/profile.jpg";
import edit from "../images/edit.png";
import React from 'react';

const YourIdea: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/home" />
          </IonButtons>
          <IonTitle>Your Idea</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>

        
        <IonIcon slot="end" icon={edit} />


        <IonItem>
          <IonLabel position="stacked">Salem</IonLabel>
          <IonLabel position="stacked">Hidden role card game</IonLabel>
        </IonItem>

        <IonImg src="images/edit.png" /> <IonImg src="images/edit.png" /> <IonImg src="images/edit.png" />

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