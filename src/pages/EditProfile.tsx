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
    IonLabel,
    IonTextarea,
} from '@ionic/react';

import React from 'react';
import { RouteComponentProps } from 'react-router';


const EditProfile: React.FC <RouteComponentProps> = (props) =>  {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/home" />
            </IonButtons>
            <IonTitle>Edit Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonItem>
            <IonLabel position="stacked">Name</IonLabel>
            <IonTextarea value="Jamie Camera" />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Bio</IonLabel>
            <IonTextarea
              value="I am a junior at Northeastern university pursuing a degree 
                        in computer science and game development."
            />
          </IonItem>

          <IonItem>
            <IonLabel position="stacked">Skills</IonLabel>
            <IonTextarea value="C#, C++, Game Design" />
          </IonItem>

          <IonGrid>
            <IonRow>
              <IonCol>
                <IonButton expand="block" color="medium">
                  Cancel
                </IonButton>
              </IonCol>
              <IonCol>
                <IonButton expand="block" routerLink="/profile">
                  Save Changes
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    );
};
export default EditProfile;