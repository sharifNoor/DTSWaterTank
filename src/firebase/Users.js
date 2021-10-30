import auth from '@react-native-firebase/auth';
import Firebase from './config'
import database from '@react-native-firebase/database';

export const AddUser = async (name, email, deviceID, uuid) => {
    try {
        return await database().ref('users/' + uuid).
        set({
            deviceID: deviceID,
        });
    } catch (error) {
        return error;
    }
}