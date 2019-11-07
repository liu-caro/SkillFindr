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
    IonLabel,
    IonTextarea,
} from '@ionic/react';
//import plus from "../images/plus.png";
import React from 'react';
//import { add, create, person } from 'ionicons/icons';

const CreateProfile: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                    <IonTitle>Create Profile</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonItem>
                    <IonLabel position="stacked">Name</IonLabel>
                    <IonInput placeholder="Jane Doe" />
                </IonItem>

                    <IonItem>
                    <IonLabel position="stacked">Bio</IonLabel>
                    <IonTextarea placeholder="I am a programmer sometimes." />
                </IonItem>
                
                    <IonItem>
                    <IonLabel position="stacked">Skills</IonLabel>
                    <IonTextarea placeholder="HTML, CSS, JS, Photoshop, etc." />
                </IonItem>


                <IonGrid>
                    <IonRow>
                    <IonCol>
                        <IonButton expand="block" color="medium">Cancel</IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton expand="block" routerLink="/profile">Create Profile</IonButton>
                    </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};
export default CreateProfile;