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
  function gotoAbdulWakeel() {
    navigation.replace('AbdulWakeel');
  }
  function gotoAdmin() {
    navigation.replace('MainAdmin');
  }
  function gotoKamran() {
    navigation.replace('Kamran');
  }
  function gotoRashidNoori() {
    navigation.replace('RashidNoori');
  }
  function gotoRashidLahori() {
    navigation.replace('RashidLahori');
  }
  function gotoAliHasan() {
    navigation.replace('AliHasan');
  }
  function gotoNawazish() {
    navigation.replace('Nawazish');
  }
  const EmailChange = newemail => {
    setemail(newemail);
  };
  const PasswordChange = newpassword => {
    setpassword(newpassword);
  };
  const check = ({navigation}) => {
    if (email.toLocaleLowerCase().trim() == 'admin' && password == 12345678) {
      gotoAdmin();
    } else if (
      email.toLocaleLowerCase().trim() == 'mudassir madani' &&
      password == 12345678
    ) {
      gotokarachiOne();
    } else if (
      email.toLocaleLowerCase().trim() == 'naeem ul hasan' &&
      password == 12345678
    ) {
      gotokarachiTwo();
    } else if (
      email.toLocaleLowerCase().trim() == 'usman' &&
      password == 12345678
    ) {
      gotokarachithree();
    } else if (
      email.toLocaleLowerCase().trim() == 'abdul rehman' &&
      password == 12345678
    ) {
      gotoSindhOne();
    } else if (
      email.toLocaleLowerCase().trim() == 'aqib' &&
      password == 12345678
    ) {
      gotoSindhTwo();
    } else if (
      email.toLocaleLowerCase().trim() == 'munir madani' &&
      password == 12345678
    ) {
      gotopunjabOne();
    } else if (
      email.toLocaleLowerCase().trim() == 'abdul rauf' &&
      password == 12345678
    ) {
      gotopunjabTwo();
    } else if (
      email.toLocaleLowerCase().trim() == 'shan' &&
      password == 12345678
    ) {
      gotoKashmir();
    } else if (
      email.toLocaleLowerCase().trim() == 'babar shah' &&
      password == 12345678
    ) {
      gotoKpk();
    } else if (
      email.toLocaleLowerCase().trim() == 'fida hussain' &&
      password == 12345678
    ) {
      gotoBalochistan();
    } else if (
      email.toLocaleLowerCase().trim() == 'ashfaq' &&
      password == 12345678
    ) {
      gotoSahil();
    } else if (
      email.toLocaleLowerCase().trim() == 'abdul wakeel' &&
      password == 12345678
    ) {
      gotoAbdulWakeel();
    }
    else if (
      email.toLocaleLowerCase().trim() == 'kamran' &&
      password == 12345678
    ) {
      gotoKamran();
    }
    else if (
      email.toLocaleLowerCase().trim() == 'ali hasan' &&
      password == 12345678
    ) {
      gotoAliHasan();
    }
    else if (
      email.toLocaleLowerCase().trim() == 'rashid lahori' &&
      password == 12345678
    ) {
      gotoRashidLahori();
    }
    else if (
      email.toLocaleLowerCase().trim() == 'rashid noori' &&
      password == 12345678
    ) {
      gotoRashidNoori();
    }
    else if (
      email.toLocaleLowerCase().trim() == 'nawazish madani' &&
      password == 12345678
    ) {
      gotoNawazish();
    }
     else Alert.alert('⚠️ WARNING', 'Wrong User/Password');
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
