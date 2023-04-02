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

const KarachiOneChutti = () => {
    const [khi1qafila, setkhi1qafila] = useState('')
    const [khi1chutti, setkhi1chutti] = useState('')
    const [khi1darussunnah, setkhi1darussunnah] = useState('')
    const [khi1Infiradi, setkhi1Infiradi] = useState('')


    useEffect(() => {
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
                let ChuttiNameData = [];
                for (let i = 0; i < chuttiData.length; i++) {
                    const name = [chuttiData[i].Name,chuttiData[i].MobileNo];
                    ChuttiNameData.push(name)
                    //   console.log(name);
                }
                setkhi1chutti(ChuttiNameData);
                console.log(ChuttiNameData);
                // const chuttiName = 
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
    // const DATA = [
    //     { id: '1', title: 'Item 1' },
    //     { id: '2', title: 'Item 2' },
    //     { id: '3', title: 'Item 3' },
    //     { id: '4', title: 'Item 4' },
    //     { id: '5', title: 'Item 5' },
    //   ];
    var total = khi1Infiradi + khi1chutti + khi1darussunnah + khi1qafila;

    return (
        <View>
            {khi1chutti != '' ? (
                    khi1chutti.map((name, index) => (
                        <View key={index}>
                            <Text>{name}</Text>
                        </View>
                    ))
            ) : null}
        </View>
    )
}

export default KarachiOneChutti

const styles = StyleSheet.create({})
// {
//     {
//         khi1chutti.map((name, index) => (
//             <View key={index}>
//                 <Text>{name}</Text>
//             </View>
//         ))
//     }
// }
{/* <Text></Text> */ }