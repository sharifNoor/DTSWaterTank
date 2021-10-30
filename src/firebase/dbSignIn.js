import auth from '@react-native-firebase/auth';
import { Alert } from 'react-native';

export const dbSignIn = async (email, password) => {

    auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
        console.log('User account signed in!');
    })
    .catch(error => {
        Alert.alert(error.code)
    });
    
}