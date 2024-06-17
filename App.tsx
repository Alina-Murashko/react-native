import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Landing } from "./feature/Landing";
import { Paywall } from "./feature/Paywall";
import { Home } from "./feature/Home";
import {Upload} from "./feature/Upload";
import {Home2} from "./feature/Home-2";
import {useFonts} from "expo-font";


export const fontFamily = {
    'SF-Regular': 'SF-Regular',
    'SF-Bold' : 'SF-Bold',
    'SFThin':'SF-Thin',
    'Syncopate-Regular':'Syncopate-Regular',
    'Syncopate-Bold': 'Syncopate-Bold'
} as const

function App() {

    const Stack = createNativeStackNavigator();

    const [fontsLoaded] = useFonts({
        'SF-Regular': require('./assets/fonts/SF-Pro-Display-Regular.otf'),
        'SF-Bold': require('./assets/fonts/SF-Pro-Display-Bold.otf'),
        'SF-Thin': require('./assets/fonts/SF-Pro-Display-Thin.otf'),
        'Syncopate-Regular': require('./assets/fonts/Syncopate-Regular.otf'),
        'Syncopate-Bold': require('./assets/fonts/Syncopate-Bold.otf'),
    });

    if (!fontsLoaded) {
        return null;
    }

  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={"Landing"}>
            <Stack.Screen name={"Landing"} component={Landing} />
            <Stack.Screen name={"Paywall"} component={Paywall} />
            <Stack.Screen name={"Home"} component={Home} />
            <Stack.Screen name={"Upload"} component={Upload} />
            <Stack.Screen name={'Home–2'} component={Home2} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;