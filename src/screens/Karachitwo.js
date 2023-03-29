
import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
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


const KarachiTwo = () => {
    return (
        <View style={styles.main}>
            <View style={styles.rectangle}>
                <Text style={styles.rectangletext}>ٹوٹل تعداد</Text>
                <Text style={styles.rectangletext}>0</Text>
            </View>
            <View style={styles.squarediv}>
                <View style={styles.square}>
                    <Text style={styles.squaretext}>چھٹی</Text>
                    <Text style={styles.squaretext}>0</Text></View>
                <View style={styles.square}>
                    <Text style={styles.squaretext}>مدنی قافلہ</Text>
                    <Text style={styles.squaretext}>0</Text>
                </View>
                <View style={styles.square}>
                    <Text style={styles.square3text}>انفرادی جدول</Text>
                    <Text style={styles.squaretext}>0</Text>
                </View>
                <View style={styles.square}>
                    <Text style={styles.squaretext}>دار السنہ</Text>
                    <Text style={styles.squaretext}>0</Text>
                    </View>
            </View>
        </View>
    )
}

export default KarachiTwo;

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