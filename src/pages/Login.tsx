import { IonButton, IonContent, IonHeader, IonPage, IonItem, IonLabel, IonInput, IonRow, IonGrid } from '@ionic/react';

import React from 'react';

import '../stylesheets/Login.css'
import { Link, RouteComponentProps } from 'react-router-dom';


const Login: React.FC<RouteComponentProps> = (props) => {
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

        <IonGrid>
          <IonRow className="ion-justify-content-center ion-padding-top">
            <p> New?</p>
            <Link to="/signup"> Sign Up Here</Link>
          </IonRow>
        </IonGrid>



        <IonRow align-items-center justify-content-center>

          <IonRow align-items-center justify-content-center>
            <IonButton onClick={() => props.history.push('/Home')}>

              <IonRow className="ion-justify-content-center ion-padding-top">
                <IonButton expand="block" routerLink="/home">

                  Log in
              </IonButton>
              </IonRow>

              </IonButton>
              </IonRow>
              </IonRow>
              </IonContent>
              </IonPage>


        );
      };
  export default Login;