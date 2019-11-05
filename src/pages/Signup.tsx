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
    IonLabel
  } from '@ionic/react';
  import React from 'react';
import { RouteComponentProps } from 'react-router';
  
  const Signup: React.FC <RouteComponentProps> = (props) =>  {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/login" />
            </IonButtons>
            <IonTitle>Sign Up</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonItem className="ion-padding-top">
                <IonLabel position="stacked">Name</IonLabel>
                <IonInput></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="stacked">Email</IonLabel>
                <IonInput></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="stacked">Password</IonLabel>
                <IonInput type="password"></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="stacked">Confirm Password</IonLabel>
                <IonInput type="password"></IonInput>
            </IonItem>

          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton expand="block" color="medium">Cancel</IonButton>
              </IonCol>
              <IonCol>
                <IonButton expand="block" routerLink="/create-profile">Next</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  };
  export default Signup;