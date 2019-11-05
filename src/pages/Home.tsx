import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonCheckbox, IonLabel, IonNote, IonBadge, IonFab, IonFabButton, IonIcon, IonSearchbar, IonThumbnail, IonRow } from '@ionic/react';
import React from 'react';
import { RouteComponentProps } from 'react-router';
import { add, person } from 'ionicons/icons';
import HackBeanpot from '../images/hbp-logo.png';
import CommunityGameJam from '../images/cgj-logo.png';
import HackNYU from '../images/hnyu-logo.jpg';

const Home: React.FC <RouteComponentProps> = (props) =>  {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonRow>
          <IonTitle>Upcoming Events</IonTitle>
          <IonIcon icon={person} className="ion-margin-right"/>
          </IonRow>
        </IonToolbar>
        <IonToolbar>
        <IonSearchbar></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
      {/* <IonSearchbar showCancelButton="focus"></IonSearchbar> */}

        <IonList>
          <IonItem onClick={() => props.history.push('/event')}> 
            <IonThumbnail slot="start">
              <img src={HackBeanpot}/>
            </IonThumbnail>
            <IonLabel>
              <h2>HackBeanpot</h2>
              <p>Feb 7-9</p>
            </IonLabel>
          </IonItem>
          <IonItem onClick={() => props.history.push('/event')}> 
            <IonThumbnail slot="start">
              <img src={CommunityGameJam}/>
            </IonThumbnail>
            <IonLabel>
              <h2>Community Game Jam</h2>
              <p>Feb 15-16</p>
            </IonLabel>
          </IonItem>
          <IonItem onClick={() => props.history.push('/event')}> 
            <IonThumbnail slot="start">
              <img src={HackNYU}/>
            </IonThumbnail>
            <IonLabel>
              <h2>HackNYU</h2>
              <p>Feb 15-17</p>
            </IonLabel>
          </IonItem>
        </IonList>


        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton onClick={() => props.history.push('/create-event')}>
          <IonIcon icon={add} />
          </IonFabButton>
        </IonFab>

      </IonContent>
    </IonPage>
  );
};


export default Home;
