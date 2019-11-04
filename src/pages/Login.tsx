import {IonButton, IonContent,IonHeader, IonPage, IonItem, IonLabel, IonInput, IonIcon, IonRow} from '@ionic/react';
  import React from 'react';

  import '../stylesheets/Login.css'
  
  const Login: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
        </IonHeader>
        <IonContent className="app-title">
            <h1 className="ion-text-center"> SkillFindr </h1>
            <IonItem className="ion-padding-top">
                <IonLabel position="stacked">Email</IonLabel>
                <IonInput></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="stacked">Password</IonLabel>
                <IonInput type="password"></IonInput>
            </IonItem>


            <IonRow align-items-center justify-content-center>
              <IonButton >
                Log in
              </IonButton>
            </IonRow>
            

        </IonContent>
      </IonPage>
    );
  };
  export default Login;