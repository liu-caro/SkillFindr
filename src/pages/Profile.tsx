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
  IonItem,
  IonThumbnail,
  IonLabel,
  IonIcon,
  IonTextarea,
} from '@ionic/react';
import profile from "../images/profile.jpg";
import edit from "../images/edit.png";
import React from 'react';

const Profile: React.FC = () => {
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

        <IonIcon icon={profile} />
        <IonIcon slot="end" icon={edit} />


        <IonItem>
          <IonLabel position="stacked">Name</IonLabel>
          <IonTextarea readonly value="Name"/>
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Skills</IonLabel>
          <IonTextarea readonly value="None" />
        </IonItem>

        <IonItem>
          <IonLabel position="stacked">Bio</IonLabel>
          <IonTextarea readonly value="I am a programmer sometimes." />
        </IonItem>

      </IonContent>
    </IonPage>
  );
};
export default Profile;