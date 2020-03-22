import firebase from 'firebase';

export const signUp = async (email, pass) => {
  try {
    const r = await firebase.auth().createUserWithEmailAndPassword(email, pass);
    console.log(r);
    // Navigate to the Home page, the user is auto logged in
  } catch (error) {
    console.log(error.toString());
  }
};

export const signIn = async (email, pass) => {
  try {
    const r = await firebase.auth().signInWithEmailAndPassword(email, pass);
    console.log(r);
    // Navigate to the Home page, the user is auto logged in
  } catch (error) {
    console.log(error.toString());
  }
};

export const signOut = async () => {
  try {
    const r = await firebase.auth().signOut();
    console.log(r);
    // Navigate to the Home page, the user is auto logged in
  } catch (error) {
    console.log(error.toString());
  }
};
