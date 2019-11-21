import {
    IonBackButton,
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
    IonLabel,
    IonTextarea,
} from '@ionic/react';



//import plus from "../images/plus.png";
import React from 'react';
//import { add, create, person } from 'ionicons/icons';

const EditProfile: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                    <IonTitle>Edit Profile</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonItem>
                    <IonLabel position="stacked">Name</IonLabel>
                    <IonTextarea value="Greg Goeres" />
                </IonItem>
                    <IonItem>
                    <IonLabel position="stacked">Skills</IonLabel>
                    <IonTextarea value="HTML, CSS, JS, Photoshop, etc." />
                </IonItem>

                    <IonItem>
                    <IonLabel position="stacked">Bio</IonLabel>
                    <IonTextarea value="I am a programmer sometimes." />
                </IonItem>

                <IonGrid>
                    <IonRow>
                    <IonCol>
                        <IonButton expand="block" color="medium">Cancel</IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton expand="block" routerLink="/profile">Edit Profile</IonButton>
                    </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};
export default EditProfile;