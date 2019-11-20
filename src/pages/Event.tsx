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
    IonIcon,

} from '@ionic/react';
import React from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import HackBeanpot from '../images/hackBeanPot.png';
import { arrowBack } from 'ionicons/icons';

const Event: React.FC <RouteComponentProps> = (props) =>   {
    return (
      <IonPage>
        <IonToolbar>
          <IonButtons slot="start">
          <IonButton routerLink="/home">
          <IonIcon icon={arrowBack} />
          </IonButton>
          </IonButtons>
          <IonTabBar>
            <IonTabButton>Event </IonTabButton>
            <IonTabButton>
              <Link to="/ideas">Ideas</Link>
            </IonTabButton>
            <IonTabButton>
              <Link to="/attendees">Attendees</Link>{" "}
            </IonTabButton>
          </IonTabBar>
        </IonToolbar>
        <h1 className="ion-text-center"> HackBeanpot </h1>
        <IonGrid>
          <IonCol></IonCol>
          <IonCol>
            <IonRow>
              <img src={HackBeanpot} alt="HackBeanpot"></img>
            </IonRow>
            <IonRow class="ion-justify-content-center">
              <IonButton routerLink="/register">Register</IonButton>
            </IonRow>
            <IonRow class="ion-justify-content-center">
              <IonButton routerLink="/propose-idea">Create Team</IonButton>
            </IonRow>

            <IonRow>
              <IonItem text-center>
                An independently-run Boston hackathon for curious students,
                hackers, makers, and beginners.
              </IonItem>
            </IonRow>
          </IonCol>
          <IonCol></IonCol>
        </IonGrid>
      </IonPage>
    );
};
export default Event;