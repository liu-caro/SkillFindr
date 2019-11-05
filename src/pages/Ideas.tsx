import {
    IonBackButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonCheckbox,
    IonLabel,
    IonNote,
    IonBadge,
    IonFab,
    IonFabButton,
    IonIcon,
    IonTabBar,
    IonTabButton,
} from '@ionic/react';
import add from "../images/add.png";
import React from 'react';
import { RouteComponentProps } from 'react-router';
import { Link } from 'react-router-dom';
  
const NewItem: React.FC<RouteComponentProps> = (props) => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/home" />
            </IonButtons>
            <IonTitle>Ideas</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/home" />
            </IonButtons>
            <IonTabBar>
              <IonTabButton>Event </IonTabButton>
              <IonTabButton><Link to="/ideas">Ideas</Link></IonTabButton>
              <IonTabButton>Attendees </IonTabButton>
            </IonTabBar>
          </IonToolbar>
          
          <IonList>
            <IonItem>
              <IonCheckbox slot="start" />
              <IonLabel>
                <h1>Salem</h1>
                <IonNote>Hidden role card game</IonNote>
              </IonLabel>
              <IonBadge color="light" slot="end">
                1/4 members
            </IonBadge>
            </IonItem>
          </IonList>

          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton onClick={() => props.history.push('/new')}>
              <IonIcon icon={add} />
            </IonFabButton>
          </IonFab>
        </IonContent>
      </IonPage>
    );
  };
  export default NewItem;