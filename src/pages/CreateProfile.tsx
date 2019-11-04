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
} from '@ionic/react';
import plus from "../images/plus.png";
import React from 'react';

const CreateProfile: React.FC = () => {
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
                
                <IonIcon icon={plus} />
                <div>Name <IonInput placeholder="Enter Input"></IonInput> </div>
                <div>Skills <IonInput placeholder="Enter Input"></IonInput> </div>
                <div>Bio <IonInput placeholder="Enter Input"></IonInput> </div>
                
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonButton expand="block">Submit</IonButton>
                        </IonCol>
                        <IonCol>
                            <IonButton expand="block">Cancel</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};
export default CreateProfile;