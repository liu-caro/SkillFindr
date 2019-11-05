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
                    <IonTitle>Create Profile</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonList>
                    <IonItem>
                        <IonThumbnail slot="start">
                            <IonImg src="images/add.png" />
                        </IonThumbnail>
                        <IonLabel></IonLabel>
                    </IonItem>
                </IonList>

                <div>Name <IonInput placeholder="Enter Input"></IonInput> </div>
                <div>Skills <IonInput placeholder="Enter Input"></IonInput> </div>
                <div>Bio <IonInput placeholder="Enter Input"></IonInput> </div>

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