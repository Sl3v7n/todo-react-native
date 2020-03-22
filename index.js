/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import * as firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyAYjW6iLC32G8kHGIjyGsPe-kWLanHHBhY',
  authDomain: 'react-native-todo-c2fde.firebaseapp.com',
  databaseURL: 'https://react-native-todo-c2fde.firebaseio.com',
  storageBucket: 'react-native-todo-c2fde.appspot.com',
  projectId: 'react-native-todo-c2fde',
  messagingSenderId: '184899469491',
  appId: '1:184899469491:web:642c784028ad55485630c6',
  measurementId: 'G-F2NJ71ZN96',
});

AppRegistry.registerComponent(appName, () => App);
