import { View, Text, Image, Dimensions, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import NetInfo from "@react-native-community/netinfo";
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { responsiveHeight } from 'react-native-responsive-dimensions';
const devicewidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;
import * as Animatable from 'react-native-animatable';
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
            <Animatable.Image animation={'zoomIn'} duration={2000} style={styles.logo} source={require('../images/logo.jpg')} />
            <Animatable.View  animation={'slideInUp'} duration={2000}>
                <TouchableOpacity onPress={gotologin} style={styles.button}><Text style={styles.buttontext}>LOGIN PANEL</Text></TouchableOpacity>
                <TouchableOpacity onPress={gotosignup} style={styles.button}><Text style={styles.buttontext}>ADD ENTRY</Text></TouchableOpacity>
            </Animatable.View>
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
        height: responsiveHeight(25),
        width: responsiveWidth(65),
        // backgroundColor:'red'
    },
    button: {
        backgroundColor: "#3a8152",
        color: 'white',
        padding: 6,
        marginTop: responsiveHeight(2),
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