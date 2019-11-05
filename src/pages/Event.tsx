import {

    IonPage,

    IonToolbar,
    IonGrid,
    IonRow,
    IonButtons,
    IonButton,
    IonBackButton,
    IonTabBar,
    IonTabButton,
    IonItem,
    IonCol,

} from '@ionic/react';
import React from 'react';

const Event: React.FC = () => {
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
            <h1 className="ion-text-center"> HackBeanPot </h1>
            <IonGrid>
                <IonCol></IonCol>
                <IonCol>
                    <IonRow>
                      <img src = "hackBeanPot.png" alt = "hackBeanPot"></img>
                    </IonRow>
                    <IonRow>
                        <IonButton class="ion-align-self-center">Register</IonButton>
                    </IonRow>
                    <IonRow >
                        <IonItem text-center>
                            An independently-run Boston hackathon for curious students, hackers, makers, and beginners.
                             Thanks for coming to HackBeanpot 2019!
                    </IonItem>

                    </IonRow>
                    <IonRow>
                        <IonButton class="ion-align-self-center">
                            Create Team!</IonButton>
                    </IonRow>
                </IonCol>
                <IonCol></IonCol>
            </IonGrid>
        </IonPage>
    );
};
export default Event;