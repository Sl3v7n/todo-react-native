import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from '../screens/login';
import Todo from '../screens/todo';

const TodoNavigation = createStackNavigator({
  Todo: Todo,
});

const AuthNavigator = createStackNavigator({
  Auth: Login,
});

const MainNavigator = createSwitchNavigator({
  Auth: AuthNavigator,
  TodoApp: TodoNavigation,
});

export default createAppContainer(MainNavigator);
