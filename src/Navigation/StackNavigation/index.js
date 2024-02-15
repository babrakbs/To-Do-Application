import { createStackNavigator } from '@react-navigation/stack';
import { useSelector } from 'react-redux';
import Splash from '../../Screens/AuthStack/Splash';
import Welcome from '../../Screens/AuthStack/Welcome';
import Login from '../../Screens/AuthStack/Login';
import Home from '../../Screens/MainStack/Home';
import SignUp from '../../Screens/AuthStack/Register';
import ViewTodo from '../../Screens/MainStack/ViewToDo';
import CreateToDo from '../../Screens/MainStack/CreateToDo';


const StackNavigation = () => {

  const token = useSelector((state) => state?.reducer?.token);
  console.log('Stack Token', token)
  return token ? <MainStack /> : <AuthStack />
}
export default StackNavigation;

const AuthStack = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Splash">
      <Stack.Screen
        name="Splash"
        component={Splash}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Welcome"
        component={Welcome} 
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Register"
        component={SignUp} 
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          headerShown: false,
        }}
      />

    </Stack.Navigator>
  )
}

const MainStack = () => {
  const Stack = createStackNavigator();
  return(
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
      name='Home'
      component={Home}
      options={{
        headerShown:false,
      }}
      />
      <Stack.Screen
      name='ViewToDo'
      component={ViewTodo}
      options={{
        headerShown:false,
      }}
      />
      <Stack.Screen
      name='CreateToDo'
      component={CreateToDo}
      options={{
        headerShown:false,
      }}
      />
      
    </Stack.Navigator>
  )

}