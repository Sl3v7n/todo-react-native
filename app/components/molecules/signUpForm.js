import React, {useEffect} from 'react';
import {Text, View, TextInput, Button, StyleSheet} from 'react-native';
import {useForm} from 'react-hook-form';

const SignUpForm = props => {
  const {register, setValue, handleSubmit, errors} = useForm({
    defaultValues: {
      email: 'yourEmail@hotmail.com',
      password: '',
      confirmPassword: '',
      userName: 'your user name',
    },
  });

  useEffect(() => {
    register('email');
    register('password');
    register('confirmPassword');
    register('userName');
  }, [register]);

  const onSubmit = data => props.handleSignUp(data);

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        autoFocus
        ref={register(
          {name: 'email'},
          {
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'invalid email address',
            },
          },
        )}
        onChangeText={text => setValue('email', text, true)}
      />
      {errors.email && (
        <Text style={styles.error}>
          {errors.email.message ? errors.email.message : 'This is required.'}
        </Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        ref={register({name: 'password'}, {required: true, minLength: 6})}
        onChangeText={text => setValue('password', text, true)}
      />
      {errors.password && <Text style={styles.error}>This is required.</Text>}

      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        ref={register(
          {name: 'confirmPassword'},
          {required: true, minLength: 6},
        )}
        onChangeText={text => setValue('confirmPassword', text, true)}
      />
      {errors.confirmPassword && (
        <Text style={styles.error}>This is required.</Text>
      )}

      <TextInput
        style={styles.input}
        placeholder="User name"
        ref={register({name: 'userName'}, {required: true})}
        onChangeText={text => setValue('userName', text, true)}
      />
      {errors.userName && <Text style={styles.error}>This is required.</Text>}

      <View style={styles.button}>
        <Button title="Sign Up" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    color: '#ffffff',
    marginHorizontal: 100,
    marginTop: 50,
  },
  error: {
    color: '#bc5a45',
  },
});

export default SignUpForm;
