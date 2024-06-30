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
  const SignUpPassword = ({navigation}) => {
    const [password, setpassword] = useState('');
    function gotosignup() {
      navigation.replace('Signup');
    }
   
    const PasswordChange = newpassword => {
      setpassword(newpassword);
    };
    const check = ({navigation}) => {
      if (password == 31943194) {
        gotosignup();
      }
       else Alert.alert('⚠️ WARNING', 'Wrong Password');
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
      height: 'auto',
      width: responsiveWidth(90),
      alignItems: 'center',
      borderRadius: 12,
    },
    logo: {
      height: responsiveHeight(15),
      width: responsiveWidth(31),
      marginTop: responsiveHeight(3),
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
      marginVertical: responsiveHeight(3),
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
  
  export default SignUpPassword;
  