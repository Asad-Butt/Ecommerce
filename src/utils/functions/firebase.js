import firebase from '@react-native-firebase/app';
import '@react-native-firebase/auth';
import '@react-native-firebase/firestore';
export const loginInFirebase = async (email, password) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        resolve(response);
      })
      .catch((e) => reject(e));
  });
};

export const signUpInFirebase = async (email, password) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((response) => {
        resolve(response);
      })
      .catch((e) => reject(e));
  });
};
export const setUserInFirebase = async (id, user) => {
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection('users')
      .doc(id)
      .set({
        id: user.id,
        name: user.name,
      })
      .then(() => {
        resolve();
      })
      .catch((e) => reject(e));
  });
};
export const getUserFromFirebase = async (id) => {
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection('users')
      .doc(id)
      .get()
      .then((user) => {
        if (user.exists) {
          resolve(user.data());
        } else {
          resolve(null);
        }
      })
      .catch((e) => reject(e));
  });
};
export const logoutFromFirebase = async () => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        resolve();
      })
      .catch((e) => reject(e));
  });
};
