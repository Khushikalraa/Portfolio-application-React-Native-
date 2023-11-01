import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from "./screens/Home";
import Menu from "./screens/Menu";
import Education from "./screens/Education";
import Skills from "./screens/Skills";
import Projects from "./screens/Projects";
import ContactInfo from "./screens/ContactInfo";


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
    
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTitleStyle:{
          color: 'white'
        },
        headerBackTitleStyle:{
          color: 'white'
        }
      }}
      >
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Home'}}
        />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name='Education' component={Education} />
        <Stack.Screen name= 'Skills' component={Skills} />
        <Stack.Screen name= 'Projects' component={Projects} />
        <Stack.Screen name= 'ContactInfo' component={ContactInfo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;