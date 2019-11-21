import { FirebaseAuthentication } from '@ionic-native/firebase-authentication/ngx';
import React from 'react';


class RegisterUser {

    constructor(private firebaseAuthentication: FirebaseAuthentication) { }


    registerUser( username: string, password: string){
        this.firebaseAuthentication.createUserWithEmailAndPassword(username, password)
        .then((res: any) => console.log(res))
        .catch((error: any) => console.error(error));

    }
}
export default RegisterUser; 