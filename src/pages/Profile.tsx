import {
     IonPage, 
    IonToolbar, 
    IonBackButton, 
     IonHeader,
     IonButtons,
     IonButton,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon} from '@ionic/react';
  import React from 'react';
  import Jamie from '../images/jamie.jpeg';
import { RouteComponentProps } from 'react-router';
import { create } from 'ionicons/icons';

const ifFirstTime = true;

  const Profile: React.FC<RouteComponentProps> = (props) =>  {

    return (
        <IonPage>
        <IonHeader>

            <IonToolbar>
                <IonButtons slot="start">
                     <IonBackButton defaultHref="/home"></IonBackButton>
                </IonButtons>
                <IonButtons slot="end">
                    <IonButton routerLink="/edit-profile">
                        <IonIcon icon={create} />
                    </IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>

        <IonContent>
            <IonGrid>

                <IonRow>
                    <IonCol></IonCol>
                    <IonCol>
                        <IonTitle size = "large">Jamie Camera</IonTitle>
                    </IonCol>
                    <IonCol></IonCol>                    
                </IonRow>   

                <IonRow>
                 <IonCol></IonCol>    
                    <IonCol>
                    <img src = {Jamie} alt = "Jamie"></img>
                    </IonCol>
                 <IonCol></IonCol>   
                </IonRow>  

                <IonRow>
                <IonCol> About Me </IonCol>    
                    <IonCol>
                        I am a junior at Northeastern university pursuing a degree 
                        in computer science and game development.
                    </IonCol>
                </IonRow>  

                     
                <IonRow>
                <IonCol> My Skills </IonCol>    
                    <IonCol>
                        C#, C++, Game Design
                    </IonCol>
                </IonRow> 
            </IonGrid>

            <IonRow className="ion-justify-content-center ion-padding-top">
                Now that your profile has been created... Let's Get Started!
            </IonRow>

            <IonRow className="ion-justify-content-center ion-padding-top">
              <IonButton expand="block" routerLink="/home">
                Browse Events
              </IonButton>
            </IonRow>


        </IonContent>

        </IonPage>
    );
};

export default Profile;