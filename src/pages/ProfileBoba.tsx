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
  import Boba from '../images/boba.jpg';
import { RouteComponentProps } from 'react-router';
import { create } from 'ionicons/icons';

  const ProfileBoba: React.FC<RouteComponentProps> = (props) =>  {

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
                        <IonTitle size = "large">Boba Baggins</IonTitle>
                    </IonCol>
                    <IonCol></IonCol>                    
                </IonRow>   

                <IonRow>
                 <IonCol></IonCol>    
                    <IonCol>
                    <img src = {Boba} alt = "Boba"></img>
                    </IonCol>
                 <IonCol></IonCol>   
                </IonRow>  

                <IonRow>
                <IonCol> About Me </IonCol>    
                    <IonCol>
                        I am a cat. Cats go rawr.
                    </IonCol>
                </IonRow>  

                     
                <IonRow>
                <IonCol> My Skills </IonCol>    
                    <IonCol>
                        I wants the pets. I boops the snoot. I helps with puzzles.
                    </IonCol>
                </IonRow> 
            </IonGrid>


        </IonContent>

        </IonPage>
    );
};

export default ProfileBoba;