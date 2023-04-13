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

const PunjabTwo = ({ navigation }) => {
    const [khi1qafila, setkhi1qafila] = useState('')
    const [khi1chutti, setkhi1chutti] = useState('')
    const [khi1darussunnah, setkhi1darussunnah] = useState('')
    const [khi1Infiradi, setkhi1Infiradi] = useState('')
    useEffect(() => {
        const chutti = firestore()
            .collection('users')
            .where('Group', '==', 'Punjab 2')
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
            .where('Group', '==', 'Punjab 2')
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
            .where('Group', '==', 'Punjab 2')
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
            .where('Group', '==', 'Punjab 2')
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
        navigation.navigate('punjabTwoSunnah')
    }
    function gotoChutti() {
        navigation.navigate('punjabTwoChutti')
    }
    function gotoQafila() {
        navigation.navigate('punjabTwoQafila')
    }
    function gotoInfiradi() {
        navigation.navigate('punjabTwoInfiradi')
    }
    var total = khi1Infiradi + khi1chutti + khi1darussunnah + khi1qafila;

    return (
        <View style={styles.main}>
            <View style={styles.submain}>
                <Text allowFontScaling={false} style={styles.heading}>
                    Punjab 2
                </Text>
            </View>
            <View style={styles.rectangle}>
                <Text allowFontScaling={false} style={styles.rectangletext}>ٹوٹل تعداد</Text>
                <Text allowFontScaling={false} style={styles.rectangletext}>{total}</Text>
            </View>
            <View style={styles.squarediv}>
                <TouchableOpacity onPress={gotoChutti}>
                    <View style={styles.square}>
                        <Text allowFontScaling={false} style={styles.squaretext}>چھٹی</Text>
                        <Text allowFontScaling={false} style={styles.squaretext}>{khi1chutti}</Text></View>
                </TouchableOpacity>
                <TouchableOpacity onPress={gotoQafila}>
                    <View style={styles.square}>
                        <Text allowFontScaling={false} style={styles.squaretext}>مدنی قافلہ</Text>
                        <Text allowFontScaling={false} style={styles.squaretext}>{khi1qafila}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={gotoInfiradi}>
                    <View style={styles.square}>
                        <Text allowFontScaling={false} style={styles.square3text}>انفرادی جدول</Text>
                        <Text allowFontScaling={false} style={styles.squaretext}>{khi1Infiradi}</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={gotoSunnah}>
                    <View style={styles.square}>
                        <Text allowFontScaling={false} style={styles.squaretext}>دار السنہ</Text>
                        <Text allowFontScaling={false} style={styles.squaretext}>{khi1darussunnah}</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PunjabTwo;

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        width: devicewidth,
        height: deviceheight,
        alignItems: 'center',
        justifyContent: 'center',
    },
    submain: {
        height: responsiveHeight(8),
        width: responsiveWidth(90),
        alignItems: 'center',
    },
    heading: {
        fontSize: responsiveFontSize(3.5),
        marginTop: responsiveHeight(1.50),
        color: "#135229",
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