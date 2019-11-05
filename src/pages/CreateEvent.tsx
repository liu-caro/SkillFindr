import {
    IonBackButton,
    IonButton,

    IonButtons,

    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonInput,
    IonDatetime,
    IonTextarea,
    IonLabel,
    IonRow,
    IonCol,

} from '@ionic/react';
import React from 'react';

const CreateEvent: React.FC = () => {

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/home" />
                    </IonButtons>
                    <IonTitle>Create an Event</IonTitle>
                </IonToolbar>

                <IonItem>
                    <IonLabel position="stacked">Add an Image</IonLabel>
                </IonItem>
                

                <IonItem>
                    <IonLabel position="stacked">Event Name</IonLabel>
                    <IonInput></IonInput>
                </IonItem>

                <IonItem>
                    <IonLabel position="stacked">Location</IonLabel>
                    <IonInput></IonInput>
                </IonItem>

                <IonRow className="ion-padding-top">
                    <IonCol>
                        <IonItem>
                            <IonLabel position="stacked">Start Date</IonLabel>
                            <IonDatetime max = "2099" displayFormat="MMM DD, YYYY"></IonDatetime>
                        </IonItem>
                    </IonCol>
                    <IonCol>
                        <IonItem>
                            <IonLabel position="stacked">Start Time</IonLabel>
                            <IonDatetime displayFormat="H:mm"></IonDatetime>
                        </IonItem>
                    </IonCol>
                </IonRow>

                <IonRow>
                    <IonCol>
                        <IonItem>
                            <IonLabel position="stacked">End Date</IonLabel>
                            <IonDatetime max = "2099" displayFormat="MMM DD, YYYY"></IonDatetime>
                        </IonItem>
                    </IonCol>
                    <IonCol>
                        <IonItem>
                            <IonLabel position="stacked">End Time</IonLabel>
                            <IonDatetime displayFormat="H:mm"></IonDatetime>
                        </IonItem>
                    </IonCol>
                </IonRow>

                <IonItem>
                    <IonLabel position="stacked">Description</IonLabel>
                    <IonTextarea></IonTextarea>
                </IonItem>


                <IonButton expand="block">Register</IonButton>

            </IonHeader>
        </IonPage>

    );
};

export default CreateEvent;