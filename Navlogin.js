import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Intro from './login/Intro';
import Signup from './login/Signup';
import Signin from './login/Signin';
import HomeMain from './Home/HomeMain';
const Stack = createStackNavigator();

function StackNavigator() {
  return (
    <Stack.Navigator
        screenOptions={{
          headerShown: false
        }}
    >
      <Stack.Screen name='Home' component={Intro} />
      <Stack.Screen name='SignUp' component={Signup} />
      <Stack.Screen name='SignIn' component={Signin} />
      <Stack.Screen name='HomeMain' component={HomeMain}/>
    </Stack.Navigator>
  );
}
const MainNavigator = () => {
  return(
    <NavigationContainer>
        <StackNavigator>

        </StackNavigator>
    </NavigationContainer>
  )
}
export default MainNavigator;
