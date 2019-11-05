import { IonPage, 
IonToolbar,

IonBackButton, 
IonButtons,
IonTabBar,
IonTabButton, 
IonGrid,
IonRow,
IonTitle,
IonCol} from '@ionic/react';
import React from 'react';

const Attendees: React.FC = () => {
    return (
        <IonPage>

            <IonToolbar>
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/home" />
                </IonButtons>
                <IonTabBar>
                    <IonTabButton>Event </IonTabButton>
                    <IonTabButton>Ideas</IonTabButton>
                    <IonTabButton>Attendees</IonTabButton>
                </IonTabBar>
            </IonToolbar>

            <IonGrid>
                <IonRow>

                <IonCol></IonCol>
                <IonCol> 
                    <IonTitle>300 Attendees</IonTitle>
                    </IonCol>
                <IonCol></IonCol>
                </IonRow>

                <IonRow>
                    <IonCol>skjdksd</IonCol>
                    <IonCol>alskd</IonCol>
                </IonRow>

                
            </IonGrid>
        </IonPage>
    );
};

export default Attendees;