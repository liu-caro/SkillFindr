import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonGrid,
    IonRow,
    IonItem,
    IonLabel,
    IonInput,
    IonButton,
    IonTabBar,
    IonTabButton
  } from '@ionic/react';
  import React from 'react';

  const Event: React.FC = () => {
      return(
          <IonPage>
              <IonToolbar>
                  <IonTabBar>
                      <IonTabButton>Event </IonTabButton>
                      <IonTabButton>Ideas</IonTabButton>
                      <IonTabButton>Attendees</IonTabButton>
                  </IonTabBar>
              </IonToolbar>
              <h1 className="ion-text-center"> HackBeanPot </h1>
              <IonGrid>
                <IonRow>
                  <img src = "src/images/hackBeanPot.png"></img>
                  </IonRow>
                <IonRow>
                   <IonButton class = "ion-align-self-center">Register</IonButton>   
                </IonRow>
                <IonRow>
                    Date
                    skjskjkskjdksj
                </IonRow>
                <IonRow>
                   <IonButton class = "ion-align-self-center">
                       Create Team!</IonButton>   
                </IonRow>

              </IonGrid>
          </IonPage>
      ); 
    };
export default Event;