import { View, Text, Image, Dimensions, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import NetInfo from "@react-native-community/netinfo";
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { responsiveHeight } from 'react-native-responsive-dimensions';
const devicewidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;
const Splash = ({ navigation }) => {
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            console.log("Connection type", state.type);
            console.log("Is connected?", state.isConnected);
            setIsConnected(state.isConnected)
        });

        return () => {
            unsubscribe();
        }
    }, []);

    function gotologin() {
        if (isConnected == true) {
            navigation.navigate('Login')
        }
        else Alert.alert(
            '⚠️ WARNING',
            'No Internet Connection',
        );
    }
    function gotosignup() {
        if (isConnected == true) {
            navigation.navigate('Signup')
        }
        else Alert.alert(
            '⚠️ WARNING',
            'No Internet Connection',
        );
    }

    return (
        <View style={styles.main}>
            <Image style={styles.logo} source={require('../images/logo.png')} />
            <TouchableOpacity onPress={gotologin} style={styles.button}><Text style={styles.buttontext}>LOGIN PANEL</Text></TouchableOpacity>
            <TouchableOpacity onPress={gotosignup} style={styles.button}><Text style={styles.buttontext}>ADD ENTRY</Text></TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        width: devicewidth,
        height: deviceheight,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logo: {
        height: responsiveHeight(30),
        width: responsiveWidth(55),
    },
    button: {
        backgroundColor: "#135229",
        color: 'white',
        padding: 6,
        marginTop: responsiveHeight(3),
        borderRadius: 8,
        height: responsiveHeight(5),
        width: responsiveWidth(40),
    },
    buttontext: {
        color: '#fff',
        fontWeight: '600',
        letterSpacing: 0.7,
        textAlign: 'center',
        fontSize: responsiveFontSize(2)
    }
});

export default Splash;