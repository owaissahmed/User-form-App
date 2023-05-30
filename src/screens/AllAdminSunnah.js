import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  responsiveScreenFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import {responsiveHeight} from 'react-native-responsive-dimensions';
import {responsiveFontSize} from 'react-native-responsive-dimensions';
import firestore from '@react-native-firebase/firestore';
const devicewidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;

  const AllAdminSunnah = ({navigation}) => {
    const [Fidaqafila, setFidaqafila] = useState('');
    const [Raufqafila, setRaufqafila] = useState('');
    const [Aqibqafila, setAqibqafila] = useState('');
    const [Rehmanqafila, setRehmanqafila] = useState('');
    const [Babarqafila, setBabarqafila] = useState('');
    const [Sahilqafila, setSahilqafila] = useState('');
    const [Usmanqafila, setUsmanqafila] = useState('');
    const [Munirqafila, setMunirqafila] = useState('');
    const [Naeemqafila, setNaeemqafila] = useState('');
    const [Nabeelqafila, setNabeelqafila] = useState('');
    const [Shanqafila, setShanqafila] = useState('');
    useEffect(() => {
      const Fida = firestore()
        .collection('users')
        .where('Group', '==', 'Fida Hussain')
        .where('Status', '==', 'انفرادی جدول')
        .onSnapshot(querySnapshot => {
          const qafilaData = [];
          querySnapshot.forEach(documentSnapshot => {
            qafilaData.push({
              id: documentSnapshot.id,
              ...documentSnapshot.data(),
            });
          });
          setFidaqafila(qafilaData.length);
        });
      const Rauf = firestore()
        .collection('users')
        .where('Group', '==', 'Abdul Rauf')
        .where('Status', '==', 'انفرادی جدول')
        .onSnapshot(querySnapshot => {
          const qafilaData = [];
          querySnapshot.forEach(documentSnapshot => {
            qafilaData.push({
              id: documentSnapshot.id,
              ...documentSnapshot.data(),
            });
          });
          setRaufqafila(qafilaData.length);
        });
      const Rehman = firestore()
        .collection('users')
        .where('Group', '==', 'Abdul Rehman')
        .where('Status', '==', 'انفرادی جدول')
        .onSnapshot(querySnapshot => {
          const qafilaData = [];
          querySnapshot.forEach(documentSnapshot => {
            qafilaData.push({
              id: documentSnapshot.id,
              ...documentSnapshot.data(),
            });
          });
          setRehmanqafila(qafilaData.length);
        });
      const Babar = firestore()
        .collection('users')
        .where('Group', '==', 'Babar Shah')
        .where('Status', '==', 'انفرادی جدول')
        .onSnapshot(querySnapshot => {
          const qafilaData = [];
          querySnapshot.forEach(documentSnapshot => {
            qafilaData.push({
              id: documentSnapshot.id,
              ...documentSnapshot.data(),
            });
          });
          setBabarqafila(qafilaData.length);
        });
      const Sahil = firestore()
        .collection('users')
        .where('Group', '==', 'Sahil Shah')
        .where('Status', '==', 'انفرادی جدول')
        .onSnapshot(querySnapshot => {
          const qafilaData = [];
          querySnapshot.forEach(documentSnapshot => {
            qafilaData.push({
              id: documentSnapshot.id,
              ...documentSnapshot.data(),
            });
          });
          setSahilqafila(qafilaData.length);
        });
      const Shan = firestore()
        .collection('users')
        .where('Group', '==', 'Shan')
        .where('Status', '==', 'انفرادی جدول')
        .onSnapshot(querySnapshot => {
          const qafilaData = [];
          querySnapshot.forEach(documentSnapshot => {
            qafilaData.push({
              id: documentSnapshot.id,
              ...documentSnapshot.data(),
            });
          });
          setShanqafila(qafilaData.length);
        });
      const Munir = firestore()
        .collection('users')
        .where('Group', '==', 'Munir Madani')
        .where('Status', '==', 'انفرادی جدول')
        .onSnapshot(querySnapshot => {
          const qafilaData = [];
          querySnapshot.forEach(documentSnapshot => {
            qafilaData.push({
              id: documentSnapshot.id,
              ...documentSnapshot.data(),
            });
          });
          setMunirqafila(qafilaData.length);
        });
      const Naeem = firestore()
        .collection('users')
        .where('Group', '==', 'Naeem ul Hasan')
        .where('Status', '==', 'انفرادی جدول')
        .onSnapshot(querySnapshot => {
          const qafilaData = [];
          querySnapshot.forEach(documentSnapshot => {
            qafilaData.push({
              id: documentSnapshot.id,
              ...documentSnapshot.data(),
            });
          });
          setNaeemqafila(qafilaData.length);
        });
      const Usman = firestore()
        .collection('users')
        .where('Group', '==', 'Usman')
        .where('Status', '==', 'انفرادی جدول')
        .onSnapshot(querySnapshot => {
          const qafilaData = [];
          querySnapshot.forEach(documentSnapshot => {
            qafilaData.push({
              id: documentSnapshot.id,
              ...documentSnapshot.data(),
            });
          });
          setUsmanqafila(qafilaData.length);
        });
      const Aqib = firestore()
        .collection('users')
        .where('Group', '==', 'Aqib')
        .where('Status', '==', 'انفرادی جدول')
        .onSnapshot(querySnapshot => {
          const qafilaData = [];
          querySnapshot.forEach(documentSnapshot => {
            qafilaData.push({
              id: documentSnapshot.id,
              ...documentSnapshot.data(),
            });
          });
          setAqibqafila(qafilaData.length);
        });
      const Nabeel = firestore()
        .collection('users')
        .where('Group', '==', 'Nabeel')
        .where('Status', '==', 'انفرادی جدول')
        .onSnapshot(querySnapshot => {
          const qafilaData = [];
          querySnapshot.forEach(documentSnapshot => {
            qafilaData.push({
              id: documentSnapshot.id,
              ...documentSnapshot.data(),
            });
          });
          setNabeelqafila(qafilaData.length);
        });
    }, []);
    
    return (
      <View style={styles.main}>
        <View style={styles.submain}>
          <View style={styles.rectangle}>
            <Text allowFontScaling={false} style={styles.rectangletext}>
            دار السنہ
            </Text>
          </View>
        </View>
        <View style={styles.squarediv}>
          <TouchableOpacity onPress={()=>navigation.navigate('punjabTwoSunnah')}>
            <View style={styles.square}>
              <Text allowFontScaling={false} style={styles.squaretext}>
                Abdul Rauf
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('sindhOneSunnah')}>
            <View style={styles.square}>
              <Text allowFontScaling={false} style={styles.squaretext}>
                Abdul Rehman
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('KpkSunnah')}>
            <View style={styles.square}>
              <Text allowFontScaling={false} style={styles.squaretext}>
                Babar Shah
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('SahilSunnah')}>
            <View style={styles.square}>
              <Text allowFontScaling={false} style={styles.squaretext}>
                Sahil Shah
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('KashmirSunnah')}>
            <View style={styles.square}>
              <Text allowFontScaling={false} style={styles.squaretext}>
                Shan
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('punjabOneSunnah')}>
            <View style={styles.square}>
              <Text allowFontScaling={false} style={styles.squaretext}>
                Munir Madani
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('karachiTwoSunnah')}>
            <View style={styles.square}>
              <Text allowFontScaling={false} style={styles.squaretext}>
                Naeem ul Hasan
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('karachiThreeSunnah')}>
            <View style={styles.square}>
              <Text allowFontScaling={false} style={styles.squaretext}>
                Usman
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=> navigation.navigate('BalochistanSunnah')}>
            <View style={styles.square}>
              <Text allowFontScaling={false} style={styles.squaretext}>
                Fida Hussain
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('sindhTwoSunnah')}>
            <View style={styles.square}>
              <Text allowFontScaling={false} style={styles.squaretext}>
                Aqib
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('karachiOneSunnah')}>
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
  export default AllAdminSunnah;
  
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
  