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
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import {firebase} from '@react-native-firebase/firestore';

const devicewidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;

const Kashmir = ({navigation}) => {
  const [khi1qafila, setkhi1qafila] = useState('');
  const [khi1chutti, setkhi1chutti] = useState('');
  const [khi1darussunnah, setkhi1darussunnah] = useState('');
  const [khi1Infiradi, setkhi1Infiradi] = useState('');
  const [khi1course, setkhi1course] = useState('');
  const [khi1moqoof, setkhi1moqoof] = useState('');
  const [khi1chodgae, setkhi1chodgae] = useState('');
  const [khi1mukammal, setkhi1mukammal] = useState('');
  useEffect(() => {
    const chutti = firestore()
      .collection('users')
      .where('Group', '==', 'Shan')
      .where('Status', '==', 'چھٹی')
      .onSnapshot(querySnapshot => {
        const chuttiData = [];
        querySnapshot.forEach(documentSnapshot => {
          chuttiData.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        });
        setkhi1chutti(chuttiData.length);
      });
    const qafila = firestore()
      .collection('users')
      .where('Group', '==', 'Shan')
      .where('Status', '==', 'مدنی قافلہ')
      .onSnapshot(querySnapshot => {
        const qafilaData = [];
        querySnapshot.forEach(documentSnapshot => {
          qafilaData.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        });
        setkhi1qafila(qafilaData.length);
      });
    const Darussunnah = firestore()
      .collection('users')
      .where('Group', '==', 'Shan')
      .where('Status', '==', 'دار السنہ')
      .onSnapshot(querySnapshot => {
        const DarussunnahData = [];
        querySnapshot.forEach(documentSnapshot => {
          DarussunnahData.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        });
        setkhi1darussunnah(DarussunnahData.length);
      });
    const infiradi = firestore()
      .collection('users')
      .where('Group', '==', 'Shan')
      .where('Status', '==', 'انفرادی جدول')
      .onSnapshot(querySnapshot => {
        const infiradiData = [];
        querySnapshot.forEach(documentSnapshot => {
          infiradiData.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        });
        setkhi1Infiradi(infiradiData.length);
      });
    const course = firestore()
      .collection('users')
      .where('Group', '==', 'Shan')
      .where('Status', '==', 'قافلہ کورس')
      .onSnapshot(querySnapshot => {
        const courseData = [];
        querySnapshot.forEach(documentSnapshot => {
          courseData.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        });
        setkhi1course(courseData.length);
      });
    const mukamal = firestore()
      .collection('users')
      .where('Group', '==', 'Shan')
      .where('Status', '==', 'مکمل')
      .onSnapshot(querySnapshot => {
        const mukammalData = [];
        querySnapshot.forEach(documentSnapshot => {
          mukammalData.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        });
        setkhi1mukammal(mukammalData.length);
      });
    const moqoof = firestore()
      .collection('users')
      .where('Group', '==', 'Shan')
      .where('Status', '==', 'موقوف/چھوڑ گئے')
      .onSnapshot(querySnapshot => {
        const moqoofData = [];
        querySnapshot.forEach(documentSnapshot => {
          moqoofData.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        });
        setkhi1moqoof(moqoofData.length);
      });
    const chodgae = firestore()
      .collection('users')
      .where('Group', '==', 'Shan')
      .where('Status', '==', 'امیر قافلہ')
      .onSnapshot(querySnapshot => {
        const chodgaeData = [];
        querySnapshot.forEach(documentSnapshot => {
          chodgaeData.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        });
        setkhi1chodgae(chodgaeData.length);
      });
    }, []);
    
    var total = khi1Infiradi + khi1chutti + khi1darussunnah + khi1qafila + khi1course + khi1chodgae;

  function gotoChutti() {
    navigation.navigate('KashmirChutti');
  }
  function gotoQafila() {
    navigation.navigate('KashmirQafila');
  }
  function gotoInfiradi() {
    navigation.navigate('KashmirInfiradi');
  }
  function gotoSunnah() {
    navigation.navigate('KashmirSunnah');
  }
  function gotoCourse() {
    navigation.navigate('KashmirCourse');
  }
  function gotoMukaamal() {
    navigation.navigate('KashmirMukammal');
  }
  function gotoMoqoof() {
    navigation.navigate('KashmirMoqoof');
  }
  function gotoChodgae() {
    navigation.navigate('KashmirChodgae');
  }

  return (
    <View style={styles.main}>
      <View style={styles.submain}>
        <Text allowFontScaling={false} style={styles.heading}>
        Shan
        </Text>
      </View>
      <View style={styles.rectangle}>
        <Text allowFontScaling={false} style={styles.rectangletext}>
          ٹوٹل تعداد
        </Text>
        <Text allowFontScaling={false} style={styles.rectangletext}>
          {total}
        </Text>
      </View>
      <View style={styles.squarediv}>
        <TouchableOpacity onPress={gotoChutti}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
              چھٹی
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
              {khi1chutti}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={gotoQafila}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
              مدنی قافلہ
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
              {khi1qafila}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={gotoInfiradi}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.square3text}>
              انفرادی جدول
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
              {khi1Infiradi}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={gotoSunnah}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
              دار السنہ
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
              {khi1darussunnah}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={gotoChodgae}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
            امیر قافلہ
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
              {khi1chodgae}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={gotoCourse}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
            قافلہ کورس
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
              {khi1course}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={gotoMoqoof}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretextt}>
            موقوف / چھوڑ گئے
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
              {khi1moqoof}
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={gotoMukaamal}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
            مکمل
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
              {khi1mukammal}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Kashmir;

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
    // alignItems: 'center',
    justifyContent: 'center',
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
    // marginTop: responsiveHeight(5),
    borderColor: '#135229',
    borderWidth: 1.5,
    height: responsiveHeight(15),
    width: responsiveWidth(90),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  rectangletext: {
    fontSize: responsiveScreenFontSize(4.5),
    color: '#135229',
  },
  squaretext: {
    fontSize: responsiveScreenFontSize(3.5),
    color: '#135229',
  },
  squaretextt: {
    fontSize: responsiveScreenFontSize(2.5),
    color: '#135229',
  },
 square3text: {
      fontSize: responsiveScreenFontSize(3),
      color: "#135229",
      textAlign:"center"
  },
  square: {
      marginTop: responsiveHeight(3),
      borderColor: "#135229",
      borderWidth: 1.5,
      height: responsiveHeight(15),
      width: responsiveWidth(40),
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 12,
      marginHorizontal: responsiveWidth(3)
  },
});
