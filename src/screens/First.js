import { View, Text, Image, Dimensions, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { responsiveFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import * as Animatable from 'react-native-animatable';
const devicewidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;
const First = ({ navigation }) => {

    useEffect(() => {
        next();
    }, []);
    function next() {
        setTimeout(() => {
            navigation.replace('Splash')
        }, 3000);
    }
    return (
        <View style={styles.main}>
            <Animatable.Image animation={'zoomIn'} duration={1500} style={styles.logo} source={require('../images/dawatlogo.jpg')} />
            <Animatable.Text allowFontScaling={false} animation={'slideInUp'} duration={1500} style={styles.welcome}>Welcome To Madani-Qafila App</Animatable.Text>
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
        // backgroundColor:'blue'
    },
    welcome: {
        fontFamily: 'Lato-HeavyItalic',
        marginTop: responsiveHeight(1),
        color: "#135229",
        fontSize: responsiveFontSize(3),
        // backgroundColor:'orange'
    }
});

export default First;