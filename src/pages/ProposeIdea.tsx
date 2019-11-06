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
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonList,
    IonItem,
    IonThumbnail,
    IonImg,
    IonLabel,
    IonTextarea,
} from '@ionic/react';
import React from 'react';

const ProposeIdea: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                    <IonTitle>Propose an Idea</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonItem className="ion-padding-top">
                    <IonLabel position="stacked">Name of Project</IonLabel>
                    <IonInput></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">Description</IonLabel>
                    <IonTextarea></IonTextarea>
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">Number of Team Members</IonLabel>
                    <IonInput></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">Skills Needed</IonLabel>
                    <IonInput></IonInput>
                </IonItem>
                <IonItem>
                    <IonLabel position="stacked">Your Role</IonLabel>
                    <IonInput></IonInput>
                </IonItem>


                <IonGrid>
                    <IonRow>
                    <IonCol>
                        <IonButton expand="block" color="medium">Cancel</IonButton>
                    </IonCol>
                    <IonCol>
                        <IonButton expand="block" routerLink="/your-idea">Submit</IonButton>
                    </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};
export default ProposeIdea;