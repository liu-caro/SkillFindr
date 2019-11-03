import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonItem,
    IonLabel,
    IonInput,
    IonButton
  } from '@ionic/react';
  import React from 'react';
  
  const Login: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
        </IonHeader>
        <IonContent>
            <h1 className="ion-text-center"> SkillFindr </h1>
            <IonItem>
                <IonLabel position="stacked">Email</IonLabel>
                <IonInput></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="stacked">Password</IonLabel>
                <IonInput type="password"></IonInput>
            </IonItem>
            <IonRow align-items-center justify-content-center>
              <IonButton>
                Log in!
              </IonButton>
              </IonRow>
        </IonContent>
      </IonPage>
    );
  };
  export default Login;