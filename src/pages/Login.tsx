import { IonButton, IonContent, IonHeader, IonPage, IonItem, IonLabel, IonInput, IonRow, IonGrid } from '@ionic/react';

import React from 'react';

import '../stylesheets/Login.css'
import { Link, RouteComponentProps } from 'react-router-dom';

export const LANDING = '/';
export const SIGN_UP = '/signup';
export const SIGN_IN = '/signin';
export const HOME = '/home';
export const ACCOUNT = '/account';
export const ADMIN = '/admin';
export const PASSWORD_FORGET = '/pw-forget';


const firebaseConfig = {
  apiKey: "AIzaSyAcfC0SfBZ1vt2SfeG8UTs57ED7LmJ_tKE",
  authDomain: "skillfindr-91dc1.firebaseapp.com",
  databaseURL: "https://skillfindr-91dc1.firebaseio.com",
  projectId: "skillfindr-91dc1",
  storageBucket: "skillfindr-91dc1.appspot.com",
  messagingSenderId: "1015294713757",
  appId: "1:1015294713757:web:760d75185260ca93835974",
  measurementId: "G-0GBBWXP1VQ"
};


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



        {/* <IonRow align-items-center justify-content-center> */}

          {/* <IonRow align-items-center justify-content-center>
            <IonButton onClick={() => props.history.push('/Home')}> */}

              <IonRow className="ion-justify-content-center ion-padding-top">
                <IonButton expand="block" routerLink="/home">

                  Log in
              </IonButton>
            </IonRow>
            {/* </IonRow> */}
            </IonContent>
            </IonPage>

        );
      };
  export default Login;