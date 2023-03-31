import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity, TextInput, Button, Alert, Modal, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { responsiveScreenFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { firebase } from '@react-native-firebase/firestore';
const devicewidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;

const KarachiOne = () => {
  const [totalKarachi, settotalKarachi] = useState('')
  const [loading, setloading] = useState(false)
  const [visible, setvisible] = useState(false)
  const [khi1qafila, setkhi1qafila] = useState('')
  const [khi1chutti, setkhi1chutti] = useState('')
  const [khi1darussunnah, setkhi1darussunnah] = useState('')
  const [khi1Infiradi, setkhi1Infiradi] = useState('')
  useEffect(() => {
    loader()
    getdatabase()
    // setTimeout(() => {
    //   getdatabase()
    //   // console.log('owais');
    // }, 5000);
  }, [])

  const loader = () => {
    setloading(true);
    setvisible(true);
    setTimeout(() => {
      setloading(false);
      setvisible(false);
    }, 5000);
  }

  const getdatabase = async () => {
    var totalQafila = 0;
    var totalChutti = 0;
    var totalDarussunnah = 0;
    var totalInfiradi = 0;
    const db = firebase.firestore();
    db.collection("users").get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data().Group, doc.data().Status);
        const docRef = db.collection('users').doc(doc.id);
        docRef.get()
          .then((doc) => {
            if (doc.exists) {
              // console.log(doc.id, " => ", doc.data().Group, doc.data().Status,doc.id.length);
              var data = (doc.data())
              if (data.Group === 'Karachi 1' && data.Status === 'مدنی قافلہ') {
                totalQafila++
              }
              if (data.Group === 'Karachi 1' && data.Status === 'چھٹی') {
                totalChutti++
              }
              if (data.Group === 'Karachi 1' && data.Status === 'دار السنہ') {
                totalDarussunnah++
              }
              if (data.Group === 'Karachi 1' && data.Status === 'انفرادی جدول') {
                totalInfiradi++
              }
            } else {
              console.log("No such document!");
            }
            setkhi1qafila(totalQafila)
            setkhi1chutti(totalChutti)
            setkhi1darussunnah(totalDarussunnah)
            setkhi1Infiradi(totalInfiradi)
          })
      })
    })
  };
  var total = khi1Infiradi + khi1chutti + khi1darussunnah + khi1qafila;



  return (
    <View style={styles.main}>
      <Modal visible={visible} animationType="fade" transparent={true}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          {loading ? <ActivityIndicator size="large" color="#ffffff" /> : <Text style={{ color: '#ffffff' }}>Loading...</Text>}
        </View>
      </Modal>
      <View style={styles.rectangle}>
        <Text style={styles.rectangletext}>ٹوٹل تعداد</Text>
        <Text style={styles.rectangletext}>{total}</Text>
      </View>
      <View style={styles.squarediv}>
        <View style={styles.square}>
          <Text style={styles.squaretext}>چھٹی</Text>
          <Text style={styles.squaretext}>{khi1chutti}</Text></View>
        <View style={styles.square}>
          <Text style={styles.squaretext}>مدنی قافلہ</Text>
          <Text style={styles.squaretext}>{khi1qafila}</Text>
        </View>
        <View style={styles.square}>
          <Text style={styles.square3text}>انفرادی جدول</Text>
          <Text style={styles.squaretext}>{khi1Infiradi}</Text>
        </View>
        <View style={styles.square}>
          <Text style={styles.squaretext}>دار السنہ</Text>
          <Text style={styles.squaretext}>{khi1darussunnah}</Text>
        </View>
      </View>
    </View>
  )
}

export default KarachiOne;

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
    justifyContent: 'center'
  },
  rectangle: {
    // marginTop: responsiveHeight(5),
    borderColor: "#135229",
    borderWidth: 1.5,
    height: responsiveHeight(20),
    width: responsiveWidth(90),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  rectangletext: {
    fontSize: responsiveScreenFontSize(5),
    color: "#135229",
  },
  squaretext: {
    fontSize: responsiveScreenFontSize(3.5),
    color: "#135229",
  },
  square3text: {
    fontSize: responsiveScreenFontSize(3),
    color: "#135229",
  },
  square: {
    marginTop: responsiveHeight(3),
    borderColor: "#135229",
    borderWidth: 1.5,
    height: responsiveHeight(20),
    width: responsiveWidth(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginHorizontal: responsiveWidth(3)
  },
})