import {IonButton, 
  IonContent,
  IonHeader,
   IonPage, 
   IonItem,
    IonLabel,
     IonInput,
      IonRow} from '@ionic/react';
  import React from 'react';
  import { RouteComponentProps } from 'react-router';

  import '../stylesheets/Login.css'
  
  const Login: React.FC <RouteComponentProps> = (props) =>{
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
              <IonButton onClick={() => props.history.push('/Home')}>
                Log in
              </IonButton>
            </IonRow>
            

        </IonContent>
      </IonPage>
    );
  };
  export default Login;