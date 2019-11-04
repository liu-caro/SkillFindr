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
    IonCol
  } from '@ionic/react';
  import React from 'react';
  
  const Signup: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/home" />
            </IonButtons>
            <IonTitle>Sign Up!</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div>Name <IonInput placeholder="Enter Input"></IonInput> </div>
          <div>Email <IonInput placeholder="Enter Input"></IonInput> </div>
          <div>Password <IonInput placeholder="Enter Input"></IonInput> </div>
          <div>Confirm Password <IonInput placeholder="Enter Input"></IonInput> </div>

          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton expand="block">Sign Up!</IonButton>
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
  export default Signup;