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
import KarachiOneQafila from './screens/karachiOneQafila';
import KarachiOneInfiradi from './screens/karachiOneInfiradi';
import KarachiOneSunnah from './screens/karachiOneSunnah';
import KarachiTwoChutti from './screens/karachiTwoChutti';
import KarachiTwoInfiradi from './screens/karachiTwoInfiradi';
import KarachiTwoQafila from './screens/karachiTwoQafila';
import KarachiTwoSunnah from './screens/karachiTwoSunnah';
import KarachiThreeChutti from './screens/karachiThreeChutti';
import KarachiThreeInfiradi from './screens/karachiThreeInfiradi';
import KarachiThreeQafila from './screens/karachiThreeQafila';
import KarachiThreeSunnah from './screens/karachiThreeSunnah';
import PunjabOneChutti from './screens/punjabOneChutti';
import PunjabOneInfiradi from './screens/punjabOneInfiradi';
import PunjabOneQafila from './screens/punjabOneQafila';
import PunjabOneSunnah from './screens/punjabOneSunnah';
import PunjabTwoChutti from './screens/punjabTwoChutti';
import PunjabTwoInfiradi from './screens/punjabTwoInfiradi';
import PunjabTwoQafila from './screens/punjabTwoQafila';
import PunjabTwoSunnah from './screens/punjabTwoSunnah';
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
                <Stack.Screen
                    name="karachiOneQafila"
                    component={KarachiOneQafila}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="karachiOneInfiradi"
                    component={KarachiOneInfiradi}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="karachiOneSunnah"
                    component={KarachiOneSunnah}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="karachiTwoSunnah"
                    component={KarachiTwoSunnah}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="karachiTwoInfiradi"
                    component={KarachiTwoInfiradi}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="karachiTwoQafila"
                    component={KarachiTwoQafila}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="karachiTwoChutti"
                    component={KarachiTwoChutti}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="karachiThreeChutti"
                    component={KarachiThreeChutti}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="karachiThreeQafila"
                    component={KarachiThreeQafila}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="karachiThreeInfiradi"
                    component={KarachiThreeInfiradi}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="karachiThreeSunnah"
                    component={KarachiThreeSunnah}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="punjabOneQafila"
                    component={PunjabOneQafila}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="punjabOneSunnah"
                    component={PunjabOneSunnah}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="punjabOneChutti"
                    component={PunjabOneChutti}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="punjabOneInfiradi"
                    component={PunjabOneInfiradi}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="punjabTwoInfiradi"
                    component={PunjabTwoInfiradi}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="punjabTwoQafila"
                    component={PunjabTwoQafila}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="punjabTwoSunnah"
                    component={PunjabTwoSunnah}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="punjabTwoChutti"
                    component={PunjabTwoChutti}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Appnavigator;