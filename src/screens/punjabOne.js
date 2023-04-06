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

const PunjabOne = () => {
    const [loading, setloading] = useState(false)
    const [visible, setvisible] = useState(false)
    const [khi1qafila, setkhi1qafila] = useState('')
    const [khi1chutti, setkhi1chutti] = useState('')
    const [khi1darussunnah, setkhi1darussunnah] = useState('')
    const [khi1Infiradi, setkhi1Infiradi] = useState('')
    useEffect(() => {
        const chutti = firestore()
            .collection('users')
            .where('Group', '==', 'Punjab 1')
            .where('Status', '==', "چھٹی")
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
            .where('Group', '==', 'Punjab 1')
            .where('Status', '==', "مدنی قافلہ")
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
            .where('Group', '==', 'Punjab 1')
            .where('Status', '==', "دار السنہ")
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
            .where('Group', '==', 'Punjab 1')
            .where('Status', '==', "انفرادی جدول")
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
    }, [])

    function gotoSunnah() {
        navigation.navigate('karachiTwoSunnah')
    }
    function gotoChutti() {
        navigation.navigate('karachiTwoChutti')
      }
      function gotoQafila() {
        navigation.navigate('karachiTwoQafila')
      }
      function gotoInfiradi() {
        navigation.navigate('karachiTwoInfiradi')
      }
    var total = khi1Infiradi + khi1chutti + khi1darussunnah + khi1qafila;

    return (
        <View style={styles.main}>
            <View style={styles.rectangle}>
                <Text style={styles.rectangletext}>ٹوٹل تعداد</Text>
                <Text style={styles.rectangletext}>{total}</Text>
            </View>
            <View style={styles.squarediv}>
                <TouchableOpacity onPress={gotoChutti}>
                    <View style={styles.square}>
                        <Text style={styles.squaretext}>چھٹی</Text>
                        <Text style={styles.squaretext}>{khi1chutti}</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={gotoQafila}>
                    <View style={styles.square}>
                        <Text style={styles.squaretext}>مدنی قافلہ</Text>
                        <Text style={styles.squaretext}>{khi1qafila}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={gotoInfiradi}>
                    <View style={styles.square}>
                        <Text style={styles.square3text}>انفرادی جدول</Text>
                        <Text style={styles.squaretext}>{khi1Infiradi}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={gotoSunnah}>
                    <View style={styles.square}>
                        <Text style={styles.squaretext}>دار السنہ</Text>
                        <Text style={styles.squaretext}>{khi1darussunnah}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PunjabOne;

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