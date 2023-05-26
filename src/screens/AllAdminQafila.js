import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
  } from 'react-native';
  import React from 'react';
  import {
    responsiveScreenFontSize,
    responsiveWidth,
  } from 'react-native-responsive-dimensions';
  import {responsiveHeight} from 'react-native-responsive-dimensions';
  import {responsiveFontSize} from 'react-native-responsive-dimensions';
  const devicewidth = Dimensions.get('window').width;
  const deviceheight = Dimensions.get('window').height;
  const AllAdminQafila = ({navigation}) => {
    return (
      <View style={styles.main}>
        <View style={styles.submain}>
          <View style={styles.rectangle}>
            <Text allowFontScaling={false} style={styles.rectangletext}>
              چھٹی
            </Text>
          </View>
        </View>
        <View style={styles.squarediv}>
          <TouchableOpacity onPress={()=>navigation.navigate('punjabTwoQafila')}>
            <View style={styles.square}>
              <Text allowFontScaling={false} style={styles.squaretext}>
                Abdul Rauf
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('sindhOneQafila')}>
            <View style={styles.square}>
              <Text allowFontScaling={false} style={styles.squaretext}>
                Abdul Rehman
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('KpkQafila')}>
            <View style={styles.square}>
              <Text allowFontScaling={false} style={styles.squaretext}>
                Babar Shah
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('SahilQafila')}>
            <View style={styles.square}>
              <Text allowFontScaling={false} style={styles.squaretext}>
                Sahil Shah
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('KashmirQafila')}>
            <View style={styles.square}>
              <Text allowFontScaling={false} style={styles.squaretext}>
                Shan
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('punjabOneQafila')}>
            <View style={styles.square}>
              <Text allowFontScaling={false} style={styles.squaretext}>
                Munir Madani
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('karachiTwoQafila')}>
            <View style={styles.square}>
              <Text allowFontScaling={false} style={styles.squaretext}>
                Naeem ul Hasan
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('karachiThreeQafila')}>
            <View style={styles.square}>
              <Text allowFontScaling={false} style={styles.squaretext}>
                Usman
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate('BalochistanQafila')}>
            <View style={styles.square}>
              <Text allowFontScaling={false} style={styles.squaretext}>
                Fida Hussain
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('sindhTwoQafila')}>
            <View style={styles.square}>
              <Text allowFontScaling={false} style={styles.squaretext}>
                Aqib
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('karachiOneQafila')}>
            <View style={styles.square}>
              <Text allowFontScaling={false} style={styles.squaretext}>
                Nabeel
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  export default AllAdminQafila;
  
  const styles = StyleSheet.create({
    main: {
      backgroundColor: 'white',
      width: devicewidth,
      height: deviceheight,
      alignItems: 'center',
      justifyContent: 'center',
    },
    squarediv: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      width: responsiveWidth(90),
    },
    submain: {
      height: responsiveHeight(8),
      width: responsiveWidth(90),
      marginBottom: responsiveHeight(3),
      alignItems: 'center',
    },
    heading: {
      fontSize: responsiveFontSize(3.5),
      marginTop: responsiveHeight(1.5),
      color: '#135229',
    },
    rectangle: {
      borderColor: '#135229',
      borderWidth: 1.5,
      height: responsiveHeight(10),
      width: responsiveWidth(90),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12,
    },
    rectangletext: {
      fontSize: responsiveScreenFontSize(5),
      color: '#135229',
    },
    squaretext: {
      fontSize: responsiveScreenFontSize(2.5),
      color: '#135229',
      textAlign: 'center',
      paddingHorizontal: responsiveWidth(1),
    },
    square: {
      marginTop: responsiveHeight(3),
      borderColor: '#135229',
      borderWidth: 1.5,
      height: responsiveHeight(11),
      width: responsiveWidth(22),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12,
      marginHorizontal: responsiveWidth(3),
    },
  });
  