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
                
                <div>Name of Project<IonInput placeholder="Enter Input"></IonInput> </div>
                <div>Deescription <IonInput placeholder="Enter Input"></IonInput> </div>
                <div>Number of Team Members <IonInput type="number" placeholder="Enter Input"></IonInput> </div>
                <div>Skills Needed <IonInput placeholder="Enter Input"></IonInput> </div>
                <div>Your Role in This <IonInput placeholder="Enter Input"></IonInput> </div>

                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonButton expand="block">Submit</IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton expand="block">Cancel</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};
export default ProposeIdea;