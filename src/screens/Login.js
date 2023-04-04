import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import * as Animatable from 'react-native-animatable';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/firestore';
const devicewidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;
// import { Auth } from '@firebase/auth';
const Login = ({ navigation }) => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    function gotokarachiTwo() {
        navigation.replace('Karachitwo')
    }
    function gotokarachiOne() {
        navigation.replace('karachiOne')
    }
    function gotokarachithree() {
        navigation.replace('karachiThree')
    }
    function gotoSindhOne() {
        navigation.replace('sindhOne')
    }
    function gotoSindhTwo() {
        navigation.replace('sindhTwo')
    }
    function gotopunjabOne() {
        navigation.replace('punjabOne')
    }
    function gotopunjabTwo() {
        navigation.replace('punjabTwo')
    }
    function gotoKashmir() {
        navigation.replace('Kashmir')
    }
    function gotoKpk() {
        navigation.replace('Kpk')
    }
    function gotoBalochistan() {
        navigation.replace('Balochistan')
    }
    function gotoAdmin() {
        navigation.replace('MainAdmin')
    }
    const EmailChange = (newemail) => {
        setemail(newemail);
    };
    const PasswordChange = (newpassword) => {
        setpassword(newpassword);
    };
    const check = ({ navigation }) => {
        if (email.toLocaleLowerCase() == 'admin' && password == 12345678) {
            // Alert.alert('Good')
            gotoAdmin()
        } else if (email.toLocaleLowerCase() == 'karachi 1' && password == 12345678) {
            // Alert.alert('Good')
            gotokarachiOne()
        }
        else if (email.toLocaleLowerCase() == 'karachi 2' && password == 12345678) {
            // Alert.alert('Good')
            gotokarachiTwo()
        }
        else if (email.toLocaleLowerCase() == 'karachi 3' && password == 12345678) {
            // Alert.alert('Good')
            gotokarachithree()
        }
        else if (email.toLocaleLowerCase() == 'sindh 1' && password == 12345678) {
            // Alert.alert('Good')
            gotoSindhOne()
        }
        else if (email.toLocaleLowerCase() == 'sindh 2' && password == 12345678) {
            // Alert.alert('Good')
            gotoSindhTwo()
        }
        else if (email.toLocaleLowerCase() == 'punjab 1' && password == 12345678) {
            // Alert.alert('Good')
            gotopunjabOne()
        }
        else if (email.toLocaleLowerCase() == 'punjab 2' && password == 12345678) {
            // Alert.alert('Good')
            gotopunjabTwo()
        }
        else if (email.toLocaleLowerCase() == 'kashmir' && password == 12345678) {
            // Alert.alert('Good')
            gotoKashmir()
        }
        else if (email.toLocaleLowerCase() == 'kpk' && password == 12345678) {
            // Alert.alert('Good')
            gotoKpk()
        }
        else if (email.toLocaleLowerCase() == 'balochistan' && password == 12345678) {
            // Alert.alert('Good')
            gotoBalochistan()
        } else Alert.alert(
            '⚠️ WARNING',
            'Wrong User/Password',
        );
        // try {
        //     firebase.auth().signInWithEmailAndPassword(email, password)

        // } catch (error) {
        //     console.log(error)
        // }

    }

    // const db = firebase.firestore();
    // const check = async () => {
    //     // const user = await firestore().collection('admin').get();
    //     // console.log(user.docs);
    //     db.collection("admin").get().then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             console.log(doc.data().email);
    //             if (email === doc.data().email) {
    //                 Alert.alert('Good')
    //             }
    //             // else if (email == "" || password == "") {
    //             //     Alert.alert('Empty')
    //             // }

    //             // else if (email != doc.data().email && password == doc.data().password) {
    //             //     Alert.alert('Email')
    //             // }
    //             // else if (email == doc.data().email && password != doc.data().password) {
    //             //     Alert.alert('Password')
    //             // } 
    //             // else if (email != doc.data().email){
    //             //     Alert.alert('Email srf')
    //             // }
    //             // else if ( password != doc.data().password) {
    //             //     Alert.alert('Password')
    //             // } 
    //         });
    //     });
    //     console.log(email);
    //     console.log(password);
    // }
    // useEffect(() => {
    //     getdatabase();
    // }, [])
    // const getdatabase = async () => {
    // const db = firebase.firestore();

    //     db.collection("admin").get().then((querySnapshot) => {
    //         querySnapshot.forEach((doc) => {
    //             console.log(doc.id, " => ", doc.data().email);

    //         });
    //     });
    //     // try {
    //     //     const user = await firestore().collection('admin').get();
    //     //     console.log(user);
    //     // } catch (error) {
    //     //     console.log(error);
    //     // }
    // };

    return (
        <View style={styles.main}>
            <Animatable.View animation={'zoomIn'} duration={2000}style={styles.submain}>
                <Image style={styles.logo} source={require('../images/logo.png')} />
                <TextInput style={styles.login} placeholder='Enter Your User Text' value={email} onChangeText={EmailChange} />
                <TextInput style={styles.password} placeholder='Enter Your Password' value={password} onChangeText={PasswordChange} />
                <TouchableOpacity style={styles.button}><Text style={styles.buttontext} onPress={check}>LOGIN</Text></TouchableOpacity>
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
        borderRadius: 8,
        // elevation:17
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

