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
                    <IonTitle>Add an Image</IonTitle>
                </IonItem>
                
                <IonItem>
                   <div> Event Name : </div>
                    <IonInput placeholder=" Your Event Name"></IonInput>
                </IonItem>

                <IonItem>
                   <div> Location : </div> 
                   <IonInput placeholder=" Location of Event"></IonInput>
                </IonItem>

                <IonItem>
                    <div>Start Date</div>
                    <IonDatetime max = "2099" displayFormat="MM DD YY" placeholder="Select Date">
                    </IonDatetime>
                </IonItem>

                <IonItem>
                <div>Start Time</div>
                    <IonDatetime displayFormat="H:mm" placeholder="Select Time"></IonDatetime>
                </IonItem>

                <IonItem>
                    <div>End Date</div>
                    <IonDatetime max = "2099" displayFormat="MM DD YY" placeholder="Select Date">
                    </IonDatetime>
                </IonItem>

                <IonItem>
                <div>End Time</div>
                    <IonDatetime displayFormat="H:mm" placeholder="Select Time"></IonDatetime>
                </IonItem>

                <IonItem>
                    <IonTextarea>Description</IonTextarea>
                </IonItem>

                <IonButton expand="block">Register!</IonButton>

            </IonHeader>
        </IonPage>

    );
};

export default CreateEvent;