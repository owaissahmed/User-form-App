import { React } from 'react';
import Splash from './screens/Splash';
import Login from './screens/Login';
import Signup from './screens/Signup';
import KarachiTwo from './screens/Karachitwo';
import KarachiOne from './screens/karachiOne';
import KarachiThree from './screens/karachiThree';
import SindhOne from './screens/sindhOne'
import SindhTwo from './screens/sindhTwo';
import PunjabOne from './screens/punjabOne';
import MainAdmin from './screens/MainAdmin';
import PunjabTwo  from './screens/punjabTwo'
import Kashmir from './screens/Kashmir';
import Kpk from './screens/Kpk';
import First from './screens/First';
import Balochistan from './screens/Balochistan';
import KarachiOneChutti from './screens/karachiOneChutti';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

const Appnavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='First'>
                <Stack.Screen
                    name="First"
                    component={First}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Signup"
                    component={Signup}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="MainAdmin"
                    component={MainAdmin}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="karachiOne"
                    component={KarachiOne}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Karachitwo"
                    component={KarachiTwo}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="karachiThree"
                    component={KarachiThree}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="sindhOne"
                    component={SindhOne}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="sindhTwo"
                    component={SindhTwo}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="punjabOne"
                    component={PunjabOne}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="punjabTwo"
                    component={PunjabTwo}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Kashmir"
                    component={Kashmir}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Kpk"
                    component={Kpk}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Balochistan"
                    component={Balochistan}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="karachiOneChutti"
                    component={KarachiOneChutti}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Appnavigator;