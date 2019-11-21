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
  import Cari from '../images/cari.jpeg';
import { RouteComponentProps } from 'react-router';
import { create } from 'ionicons/icons';

  const ProfileCari: React.FC<RouteComponentProps> = (props) =>  {

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
                        <IonTitle size = "large">Cari Liu</IonTitle>
                    </IonCol>
                    <IonCol></IonCol>                    
                </IonRow>   

                <IonRow>
                 <IonCol></IonCol>    
                    <IonCol>
                    <img src = {Cari} alt = "Cari"></img>
                    </IonCol>
                 <IonCol></IonCol>   
                </IonRow>  

                <IonRow>
                <IonCol> About Me </IonCol>    
                    <IonCol>
                        I am a junior at Northeastern University pursuing a degree 
                        in Computer Science and Design.
                    </IonCol>
                </IonRow>  

                     
                <IonRow>
                <IonCol> My Skills </IonCol>    
                    <IonCol>
                        Java, HTML, CSS, JavaScript, ReactJS, Web Dev
                    </IonCol>
                </IonRow> 
            </IonGrid>


        </IonContent>

        </IonPage>
    );
};

export default ProfileCari;