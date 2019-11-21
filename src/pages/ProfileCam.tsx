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
  import Cam from '../images/cam.jpeg';
import { RouteComponentProps } from 'react-router';
import { create } from 'ionicons/icons';

  const ProfileCam: React.FC<RouteComponentProps> = (props) =>  {

    return (
        <IonPage>
        <IonHeader>

            <IonToolbar>
                <IonButtons slot="start">
                     <IonBackButton defaultHref="/home"></IonBackButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>

        <IonContent>
            <IonGrid>

                <IonRow>
                    <IonCol></IonCol>
                    <IonCol>
                        <IonTitle size = "large">Cam Perry</IonTitle>
                    </IonCol>
                    <IonCol></IonCol>                    
                </IonRow>   

                <IonRow>
                 <IonCol></IonCol>    
                    <IonCol>
                    <img src = {Cam} alt = "Cam"></img>
                    </IonCol>
                 <IonCol></IonCol>   
                </IonRow>  

                <IonRow>
                <IonCol> About Me </IonCol>    
                    <IonCol>
                        I am a junior at Northeastern University pursuing a degree 
                        in Computer Science and Game Development.
                    </IonCol>
                </IonRow>  

                     
                <IonRow>
                <IonCol> My Skills </IonCol>    
                    <IonCol>
                        Photoshop, Adobe AfterEffects, Sketch
                    </IonCol>
                </IonRow> 
            </IonGrid>


        </IonContent>

        </IonPage>
    );
};

export default ProfileCam;