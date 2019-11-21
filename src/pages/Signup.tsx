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
import React, { Component } from 'react';
import { RouteComponentProps } from 'react-router';
//import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';

// class authUser extends FirebaseAuthentication{

//   constructor(private firebaseAuthentication: FirebaseAuthentication) { }
// }

//const firebaseAuth = new FirebaseAuthentication;


// let registerUser = ( username: string, password: string) => {
//   firebaseAuth.createUserWithEmailAndPassword(username, password)
//     .then((res: any) => console.log(res))
//     .catch((error: any) => console.error(error));
// }

class FormContainer extends Component{
 

}


const Signup: React.FC <RouteComponentProps> = (props) =>  {
  const username:string = "";
  const email:string = "";
  const password:string = ""; 
  const confPassword:string = "";

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
              <IonInput value={username} required ></IonInput>
          </IonItem>
          <IonItem>
              <IonLabel position="stacked">Email</IonLabel>
              <IonInput value={email} inputMode="email" required></IonInput>
          </IonItem>
          <IonItem>
              <IonLabel position="stacked">Password</IonLabel>
              <IonInput value={password} type="password" required></IonInput>
          </IonItem>
          <IonItem>
              <IonLabel position="stacked">Confirm Password</IonLabel>
              <IonInput value={confPassword} type="password" required></IonInput>
          </IonItem>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonButton expand="block" color="medium">Cancel</IonButton>
            </IonCol>
            <IonCol>
              <IonButton expand="block" 
               routerLink="/create-profile">Next</IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default Signup;