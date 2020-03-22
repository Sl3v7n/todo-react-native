import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';

import {signUp, signIn, signOut} from '../services/auth/authorization';
import SignUpForm from '../components/molecules/signUpForm';
import SignInForm from '../components/molecules/signInForm';

const Login = props => {
  const [showSignInForm, setShowSignInForm] = useState(true);
  const signInFormSubmitHandler = data => {
    console.log(data);
  };

  const signUpFormSubmitHandler = data => {
    console.log(data);
  };

  const toogleForm = () => {
    setShowSignInForm(!showSignInForm);
  };

  return (
    <View>
      {showSignInForm && <SignInForm handleSignIn={signInFormSubmitHandler} />}
      {!showSignInForm && <SignUpForm handleSignUp={signUpFormSubmitHandler} />}

      <Button
        title={showSignInForm ? 'Switch to sign up' : 'Switch to sign in'}
        onPress={() => toogleForm()}
      />



      {/* <Button
        title="sign in"
        onPress={() => signIn('test@something.com', 'pass33')}
      />
      <Button title="sign out" onPress={() => signOut()} /> */}

      <Button
        title="by pass"
        onPress={() => props.navigation.navigate('Todo')}
      />
    </View>
  );
};

export default Login;
