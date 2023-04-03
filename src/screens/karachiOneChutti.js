import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity, TextInput, Button, Alert, Modal, FlatList, ActivityIndicator } from 'react-native';
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

const KarachiOneChutti = () => {
    const [khi1qafila, setkhi1qafila] = useState('')
    const [khi1chutti, setkhi1chutti] = useState('')
    const [khi1darussunnah, setkhi1darussunnah] = useState('')
    const [khi1Infiradi, setkhi1Infiradi] = useState('')


    useEffect(() => {
        let ChuttiNameData = [];
        const chutti = firestore()
            .collection('users')
            .where('Group', '==', 'Karachi 1')
            .where('Status', '==', "چھٹی")
            .onSnapshot(querySnapshot => {
                const chuttiData = [];
                querySnapshot.forEach(documentSnapshot => {
                    chuttiData.push({
                        id: documentSnapshot.id,
                        ...documentSnapshot.data(),
                    });
                });
                for (let i = 0; i < chuttiData.length; i++) {
                    const name = [chuttiData[i].Name, chuttiData[i].MobileNo];
                    ChuttiNameData.push(name)
                    var NewData = ChuttiNameData.map(([name, phone]) => ({ name, phone }));
                    setkhi1chutti(NewData);
                }
            });
        const qafila = firestore()
            .collection('users')
            .where('Group', '==', 'Karachi 1')
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
            .where('Group', '==', 'Karachi 1')
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
            .where('Group', '==', 'Karachi 1')
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
    // console.log(khi1chutti);
    return (
        <View style={styles.main}>
            {khi1chutti != '' ? (
                <View style={styles.FlatListVIew}>
                    <FlatList
                        data={khi1chutti}
                        renderItem={({ item }) =>
                            <View style={styles.DataView}>
                                <Text style={styles.Name}>Name : {item.name}</Text>
                                <Text style={styles.Phone}>Phone : {item.phone}</Text>
                            </View>} />
                </View>
            ) : null}
        </View>
    )
}

export default KarachiOneChutti

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        width: devicewidth,
        height: deviceheight,
        alignItems: 'center',
        justifyContent: 'center',
    },
    FlatListVIew: {
        width: responsiveWidth(90),
        // height:responsiveHeight(50),
        // backgroundColor:'blue'
    },
    DataView: {
        backgroundColor: "#135229",
        borderRadius: 10,
        // paddingHorizontal:responsiveWidth(2),
        paddingVertical: responsiveHeight(1),
        marginVertical: responsiveHeight(0.5),
    },
    Name: {
        color: 'white',
        fontSize: responsiveFontSize(2),
        // marginBottom:8,
        // marginTop:responsiveHeight(2),

        textAlign: 'center'
    },
    Phone: {
        color: 'white',
        fontSize: responsiveFontSize(2.25),
        textAlign: 'center'
    }
})
