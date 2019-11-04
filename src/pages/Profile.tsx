import {
     IonPage, 
    IonToolbar, 
    IonBackButton, 
     IonHeader,
     IonButtons,
     IonButton,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol} from '@ionic/react';
  import React from 'react';

  const Profile: React.FC = () => {

    return (
        <IonPage>
        <IonHeader>

            <IonToolbar>
                <IonButtons slot="start">
                     <IonBackButton ></IonBackButton>
                </IonButtons>
                <IonButtons slot="end">
                    <IonButton>Edit</IonButton>
                </IonButtons>
            </IonToolbar>
        </IonHeader>

        <IonContent>
            <IonGrid>

                <IonRow>
                    <IonCol></IonCol>
                    <IonCol>
                        <IonTitle size = "large">Jamie Camera</IonTitle>
                    </IonCol>
                    <IonCol></IonCol>                    
                </IonRow>   

                <IonRow>
                 <IonCol></IonCol>    
                    <IonCol>
                        Image :)
                    </IonCol>
                 <IonCol></IonCol>   
                </IonRow>  

                <IonRow>
                <IonCol> About Me : </IonCol>    
                    <IonCol>
                        I am a junior at northeastern university pursuing a degree 
                        in computer science and game development.
                    </IonCol>
                </IonRow>  

                     
                <IonRow>
                <IonCol> My Skills </IonCol>    
                    <IonCol>
                        C#, C++, Game Design
                    </IonCol>
                </IonRow> 
            </IonGrid>


        </IonContent>

        </IonPage>
    );
};

export default Profile;