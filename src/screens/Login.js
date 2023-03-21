import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity, TextInput, Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
const devicewidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;
const Login = ({ navigation }) => {

    function gotologin() {
        navigation.replace('Login')
    }

    useEffect(() => {
        getdatabase();
    }, [])

    const getdatabase = async () => {
        try {
            const user = await firestore().collection('admin').doc('gPfWyesduOT7JqMHcecx').get();
            console.log(user._data.email);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.main}>
            <View style={styles.submain}>
                <Image style={styles.logo} source={require('../images/logo.png')} />
                <TextInput style={styles.login} placeholder='Enter Your Email' />
                <TextInput style={styles.password} placeholder='Enter Your Password' />
                <TouchableOpacity style={styles.button}><Text style={styles.buttontext}>LOGIN</Text></TouchableOpacity>
            </View>
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
    submain: {
        borderColor: "#135229",
        borderWidth: 1.5,
        height: responsiveHeight(50),
        width: responsiveWidth(90),
        alignItems: 'center',
        borderRadius: 12
    },
    logo: {
        height: responsiveHeight(15),
        width: responsiveWidth(31),
        marginTop: responsiveHeight(3),
    },
    button: {
        backgroundColor: "#135229",
        color: 'white',
        padding: 6,
        marginTop: responsiveHeight(4),
        borderRadius: 8

    },
    buttontext: {
        color: '#fff',
        fontWeight: '600',
        letterSpacing: 0.7
    },
    login: {
        height: responsiveHeight(6),
        width: responsiveWidth(80),
        // backgroundColor: "gray",
        padding: 8,
        borderColor: "#135229",
        color: "#135229",
        borderWidth: 1.5,
        marginTop: responsiveHeight(5),
        borderRadius: 8
    },
    password: {
        height: responsiveHeight(6),
        width: responsiveWidth(80),
        // backgroundColor: "silver",
        padding: 8,
        color: "#135229",
        borderColor: "#135229",
        borderWidth: 1.5,
        marginTop: responsiveHeight(3),
        borderRadius: 8
    },
    button: {
        backgroundColor: "#135229",
        color: 'white',
        padding: 6,
        marginTop: responsiveHeight(3.5),
        borderRadius: 8,
        width: responsiveWidth(30),
    },
    buttontext: {
        color: '#fff',
        fontWeight: '600',
        letterSpacing: 0.7,
        textAlign: 'center',
        fontSize: responsiveFontSize(2.25)
    }
});

export default Login;

