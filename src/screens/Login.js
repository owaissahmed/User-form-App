import {
  View,
  Text,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Button,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {responsiveWidth} from 'react-native-responsive-dimensions';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import * as Animatable from 'react-native-animatable';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {firebase} from '@react-native-firebase/firestore';
const devicewidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;
// import { Auth } from '@firebase/auth';
const Login = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  function gotokarachiTwo() {
    navigation.replace('Karachitwo');
  }
  function gotokarachiOne() {
    navigation.replace('karachiOne');
  }
  function gotokarachithree() {
    navigation.replace('karachiThree');
  }
  function gotoSindhOne() {
    navigation.replace('sindhOne');
  }
  function gotoSindhTwo() {
    navigation.replace('sindhTwo');
  }
  function gotopunjabOne() {
    navigation.replace('punjabOne');
  }
  function gotopunjabTwo() {
    navigation.replace('punjabTwo');
  }
  function gotoKashmir() {
    navigation.replace('Kashmir');
  }
  function gotoKpk() {
    navigation.replace('Kpk');
  }
  function gotoBalochistan() {
    navigation.replace('Balochistan');
  }
  function gotoSahil() {
    navigation.replace('Sahil');
  }
  function gotoAdmin() {
    navigation.replace('MainAdmin');
  }
  const EmailChange = newemail => {
    setemail(newemail);
  };
  const PasswordChange = newpassword => {
    setpassword(newpassword);
  };
  const check = ({navigation}) => {
    if (email.toLocaleLowerCase() == 'admin' && password == 12345678) {
      // Alert.alert('Good')
      gotoAdmin();
    } else if (email.toLocaleLowerCase() == 'nabeel' && password == 12345678) {
      // Alert.alert('Good')
      gotokarachiOne();
    } else if (
      email.toLocaleLowerCase() == 'naeem ul hasan' &&
      password == 12345678
    ) {
      // Alert.alert('Good')
      gotokarachiTwo();
    } else if (email.toLocaleLowerCase() == 'usman' && password == 12345678) {
      // Alert.alert('Good')
      gotokarachithree();
    } else if (
      email.toLocaleLowerCase() == 'abdul rehman' &&
      password == 12345678
    ) {
      // Alert.alert('Good')
      gotoSindhOne();
    } else if (email.toLocaleLowerCase() == 'aqib' && password == 12345678) {
      // Alert.alert('Good')
      gotoSindhTwo();
    } else if (
      email.toLocaleLowerCase() == 'munir madani' &&
      password == 12345678
    ) {
      // Alert.alert('Good')
      gotopunjabOne();
    } else if (
      email.toLocaleLowerCase() == 'abdul rauf' &&
      password == 12345678
    ) {
      // Alert.alert('Good')
      gotopunjabTwo();
    } else if (email.toLocaleLowerCase() == 'shan' && password == 12345678) {
      // Alert.alert('Good')
      gotoKashmir();
    } else if (
      email.toLocaleLowerCase() == 'babar shah' &&
      password == 12345678
    ) {
      // Alert.alert('Good')
      gotoKpk();
    } else if (
      email.toLocaleLowerCase() == 'fida hussain' &&
      password == 12345678
    ) {
      gotoBalochistan();
    } else if (
      email.toLocaleLowerCase() == 'sahil shah' &&
      password == 12345678
    ) {
      // Alert.alert('Good')
      gotoSahil();
    } else Alert.alert('⚠️ WARNING', 'Wrong User/Password');
  };

  return (
    <View style={styles.main}>
      <Animatable.View
        animation={'zoomIn'}
        duration={2000}
        style={styles.submain}>
        <Image
          style={styles.logo}
          source={require('../images/dawatlogo.jpg')}
        />
        <TextInput
          allowFontScaling={false}
          style={styles.login}
          placeholder="Enter Your User Text"
          placeholderTextColor={'grey'}
          value={email}
          onChangeText={EmailChange}
        />
        <TextInput
          allowFontScaling={false}
          style={styles.password}
          placeholder="Enter Your Password"
          placeholderTextColor={'grey'}
          value={password}
          onChangeText={PasswordChange}
        />
        <TouchableOpacity style={styles.button}>
          <Text
            allowFontScaling={false}
            style={styles.buttontext}
            onPress={check}>
            LOGIN
          </Text>
        </TouchableOpacity>
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
    borderColor: '#135229',
    borderWidth: 1.5,
    height: responsiveHeight(50),
    width: responsiveWidth(90),
    alignItems: 'center',
    borderRadius: 12,
  },
  logo: {
    height: responsiveHeight(15),
    width: responsiveWidth(31),
    marginTop: responsiveHeight(3),
  },
  button: {
    backgroundColor: '#135229',
    color: 'white',
    padding: 6,
    marginTop: responsiveHeight(4),
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    // elevation:17
  },
  buttontext: {
    color: '#fff',
    fontWeight: '600',
    letterSpacing: 0.7,
    textAlign: 'center',
  },
  login: {
    height: responsiveHeight(6),
    width: responsiveWidth(80),
    // backgroundColor: "gray",
    padding: 8,
    borderColor: '#135229',
    color: '#135229',
    borderWidth: 1.5,
    marginTop: responsiveHeight(5),
    borderRadius: 8,
    fontSize: responsiveFontSize(2),
  },
  password: {
    height: responsiveHeight(6),
    width: responsiveWidth(80),
    // backgroundColor: "silver",
    padding: 8,
    color: '#135229',
    borderColor: '#135229',
    borderWidth: 1.5,
    marginTop: responsiveHeight(3),
    borderRadius: 8,
    fontSize: responsiveFontSize(2),
  },
  button: {
    backgroundColor: '#135229',
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
    fontSize: responsiveFontSize(2.25),
  },
});

export default Login;
