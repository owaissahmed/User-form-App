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
import SindhOneChutti from './screens/sindhOneChutti';
import SindhOneQafila from './screens/sindhOneQafila';
import SindhOneSunnah from './screens/sindhOneSunnah';
import SindhOneInfiradi from './screens/sindhOneInfiradi';
import SindhTwoQafila from './screens/sindhTwoQafila';
import SindhTwoChutti from './screens/sindhTwoChutti';
import SindhTwoSunnah from './screens/sindhTwoSunnah';
import SindhTwoInfiradi from './screens/sindhTwoInfiradi';
import BalochistanChutti from './screens/BalochistanChutti';
import BalochistanQafila from './screens/BalochistanQafila';
import BalochistanInfiradi from './screens/BalochistanInfiradi';
import BalochistanSunnah from './screens/BalochistanSunnah';
import KashmirSunnah from './screens/KashmirSunnah';
import KashmirChutti from './screens/KashmirChutti';
import KashmirInfiradi from './screens/KashmirInfiradi';
import KashmirQafila from './screens/KashmirQafila';
import KpkQafila from './screens/KpkQafila';
import KpkChutti from './screens/KpkChutti';
import KpkSunnah from './screens/KpkSunnah';
import KpkInfiradi from './screens/KpkInfiradi';
import Sahil from './screens/Sahil';
import SahilChutti from './screens/SahilChutti';
import SahilInfiradi from './screens/SahilInfiradi';
import SahilQafila from './screens/SahilQafila';
import SahilSunnah from './screens/SahilSunnah';
import AllAdminChutti from './screens/AllAdminChutti';
import AllAdminQafila from './screens/AllAdminQafila';
import AllAdminInfiradi from './screens/AllAdminInfiradi';
import AllAdminSunnah from './screens/AllAdminSunnah';
import AbdulWakeel from './screens/AbdulWakeel';
import AbdulWakeelChutti from './screens/AbdulWakeelChutti';
import AbdulWakeelInfiradi from './screens/AbdulWakeelInfiradi';
import AbdulWakeelQafila from './screens/AbdulWakeelQafila';
import AbdulWakeelSunnah from './screens/AbdulWakeelSunnah';
import AbdulWakeelChodgae from './screens/AbdulWakeelChodgae';
import AbdulWakeelCourse from './screens/AbdulWakeelCourse';
import AbdulWakeelMoqoof from './screens/AbdulWakeelMoqoof';
import AbdulWakeelMukaamal from './screens/AbdulWakeelMukaamal';
import AllAdminChodgae from './screens/AllAdminChodgae';
import AllAdminCourse from './screens/AllAdminCourse';
import AllAdminMukammal from './screens/AllAdminMukammal';
import AllAdminMoqoof from './screens/AllAdminMoqoof';
import BalochistanChodgae from './screens/BalochistanChodgae';
import BalochistanCourse from './screens/BalochistanCourse';
import BalochistanMoqoof from './screens/BalochistanMoqoof';
import BalochistanMukammal from './screens/BalochistanMukammal';

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
                <Stack.Screen
                    name="sindhTwoChutti"
                    component={SindhTwoChutti}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="sindhTwoQafila"
                    component={SindhTwoQafila}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="sindhTwoInfiradi"
                    component={SindhTwoInfiradi}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="sindhTwoSunnah"
                    component={SindhTwoSunnah}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="sindhOneSunnah"
                    component={SindhOneSunnah}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="sindhOneQafila"
                    component={SindhOneQafila}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="sindhOneChutti"
                    component={SindhOneChutti}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="sindhOneInfiradi"
                    component={SindhOneInfiradi}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="BalochistanChutti"
                    component={BalochistanChutti}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="BalochistanQafila"
                    component={BalochistanQafila}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="BalochistanSunnah"
                    component={BalochistanSunnah}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="BalochistanInfiradi"
                    component={BalochistanInfiradi}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="KashmirInfiradi"
                    component={KashmirInfiradi}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="KashmirQafila"
                    component={KashmirQafila}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="KashmirSunnah"
                    component={KashmirSunnah}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="KashmirChutti"
                    component={KashmirChutti}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="KpkInfiradi"
                    component={KpkInfiradi}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="KpkSunnah"
                    component={KpkSunnah}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="KpkQafila"
                    component={KpkQafila}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="KpkChutti"
                    component={KpkChutti}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SahilChutti"
                    component={SahilChutti}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SahilInfiradi"
                    component={SahilInfiradi}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SahilQafila"
                    component={SahilQafila}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="SahilSunnah"
                    component={SahilSunnah}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="Sahil"
                    component={Sahil}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AllAdminChutti"
                    component={AllAdminChutti}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AllAdminQafila"
                    component={AllAdminQafila}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AllAdminInfiradi"
                    component={AllAdminInfiradi}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AllAdminSunnah"
                    component={AllAdminSunnah}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AbdulWakeel"
                    component={AbdulWakeel}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AbdulWakeelSunnah"
                    component={AbdulWakeelSunnah}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AbdulWakeelQafila"
                    component={AbdulWakeelQafila}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AbdulWakeelInfiradi"
                    component={AbdulWakeelInfiradi}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AbdulWakeelChutti"
                    component={AbdulWakeelChutti}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AbdulWakeelChodgae"
                    component={AbdulWakeelChodgae}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AbdulWakeelCourse"
                    component={AbdulWakeelCourse}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AbdulWakeelMukaamal"
                    component={AbdulWakeelMukaamal}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AbdulWakeelMoqoof"
                    component={AbdulWakeelMoqoof}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AllAdminMoqoof"
                    component={AllAdminMoqoof}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AllAdminCourse"
                    component={AllAdminCourse}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AllAdminChodgae"
                    component={AllAdminChodgae}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="AllAdminMukammal"
                    component={AllAdminMukammal}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="BalochistanChodgae"
                    component={BalochistanChodgae}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="BalochistanCourse"
                    component={BalochistanCourse}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="BalochistanMoqoof"
                    component={BalochistanMoqoof}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name="BalochistanMukammal"
                    component={BalochistanMukammal}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Appnavigator;