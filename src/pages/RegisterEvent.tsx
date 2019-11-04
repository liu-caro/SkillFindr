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
    IonList,
    IonLabel,
    IonRadio,
    IonRadioGroup,
    IonListHeader,
    IonInput
  } from '@ionic/react';
  import React from 'react';
  
const RegisterEvent: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/home" />
            </IonButtons>
            <IonTitle>Register for an Event</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div>Register for </div> NAME
         
          <IonList>
            <IonRadioGroup>
                <IonListHeader>Do you have a team?</IonListHeader>
              <IonItem>
                <IonLabel>No, I am working alone</IonLabel>
                <IonRadio value="No, I am working alone" />
              </IonItem>

              <IonItem>
                <IonLabel>No, I am looking for a team</IonLabel>
                <IonRadio value="No, I am looking for a team" />
              </IonItem>

              <IonItem>
                <IonLabel>Yes, I have a team</IonLabel>
                <IonRadio value="Yes, I have a team" />
              </IonItem>

            </IonRadioGroup>
          </IonList>
          
          <IonList>
            <IonRadioGroup>
              <IonListHeader>How did you hear about this event?</IonListHeader>
              
              <IonItem>
                <IonLabel>Facebook</IonLabel>
                <IonRadio value="Facebook" />
              </IonItem>

              <IonItem>
                <IonLabel>Twitter</IonLabel>
                <IonRadio value="Twitter" />
              </IonItem>

              <IonItem>
                <IonLabel>Event Website</IonLabel>
                <IonRadio value="Event Website" />
              </IonItem>

              <IonItem>
                <IonLabel>Other</IonLabel>
                <IonRadio value="Other" />
              </IonItem>

            </IonRadioGroup>
          </IonList>
          
          <div>If you selected other, please write in where you head about the event here:</div>
          <IonInput placeholder="Enter Input"></IonInput>

          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton expand="block">Register</IonButton>
              </IonCol>
              <IonCol>
                <IonButton expand="block">Cancel</IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
  };
  export default RegisterEvent;