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
  Modal,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
const devicewidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;
const AllAdminChutti = () => {
//   return (
//     <View style={styles.main}>
//       <View style={styles.View}>
//         <TouchableOpacity style={styles.DataView}>
//           <Text allowFontScaling={false} style={styles.Name}>
//             Fida Hussain
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.DataView}>
//           <Text allowFontScaling={false} style={styles.Name}>
//             Nabeel
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.DataView}>
//           <Text allowFontScaling={false} style={styles.Name}>
//             Usman
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.DataView}>
//           <Text allowFontScaling={false} style={styles.Name}>
//             Shan
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.DataView}>
//           <Text allowFontScaling={false} style={styles.Name}>
//             Sahil Shah
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.DataView}>
//           <Text allowFontScaling={false} style={styles.Name}>
//             Babar Shah
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.DataView}>
//           <Text allowFontScaling={false} style={styles.Name}>
//             Naeem ul Hasan
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.DataView}>
//           <Text allowFontScaling={false} style={styles.Name}>
//             Aqib
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.DataView}>
//           <Text allowFontScaling={false} style={styles.Name}>
//             Munir Madani
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.DataView}>
//           <Text allowFontScaling={false} style={styles.Name}>
//             Abdul Rauf
//           </Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.DataView}>
//           <Text allowFontScaling={false} style={styles.Name}>
//             Abdul Rehman
//           </Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };
return (
    <View style={styles.main}>
      
      <View style={styles.squarediv}>
        <TouchableOpacity >
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
              Abdul Rauf
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
         Abdul Rehman
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.square3text}>
              Babar Shah
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
              Sahil Shah
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
              Shan
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
              Nabeel
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.square3text}>
              Naeem ul Hasan
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
            Fida Hussain
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity >
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.square3text}>
             Usman
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
              Aqib 
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
              Munir Madani 
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default AllAdminChutti;

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
    //   backgroundColor:'grey',
    //   marginHorizontal: responsiveWidth(-7),
      width: responsiveWidth(90),
    },
    submain: {
      height: responsiveHeight(8),
      width: responsiveWidth(90),
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
      height: responsiveHeight(20),
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
      fontSize: responsiveScreenFontSize(4),
      color: '#135229',
    },
    square3text: {
      fontSize: responsiveScreenFontSize(3),
      color: '#135229',
    },
    square: {
      marginTop: responsiveHeight(3),
      borderColor: '#135229',
      borderWidth: 1.5,
      height: responsiveHeight(15),
      width: responsiveWidth(30),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12,
      marginHorizontal: responsiveWidth(3),
    },
  });
//   <View style={styles.submain}>
//         <Text allowFontScaling={false} style={styles.heading}>
//           Nabeel
//         </Text>
//       </View>
//       <View style={styles.rectangle}>
//         <Text allowFontScaling={false} style={styles.rectangletext}>
//           ٹوٹل تعداد
//         </Text>
//         <Text allowFontScaling={false} style={styles.rectangletext}>
//          1
//         </Text>
//       </View>