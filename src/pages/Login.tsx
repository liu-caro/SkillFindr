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
    IonInput
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
            
        </IonContent>
      </IonPage>
    );
  };
  export default Login;