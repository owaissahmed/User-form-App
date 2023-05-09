import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity, TextInput, Button, Alert, Modal, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { responsiveScreenFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import firestore from '@react-native-firebase/firestore';
const devicewidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;

const KarachiOneSunnah = () => {
    const [khi1chutti, setkhi1chutti] = useState('')

    useEffect(() => {
        let ChuttiNameData = [];
        const chutti = firestore()
            .collection('users')
            .where('Group', '==', 'Nabeel')
            .where('Status', '==', "دار السنہ")
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
    }, [])
    return (
        <View style={styles.main}>
            {khi1chutti != '' ? (
                <View style={styles.FlatListVIew}>
                    <FlatList
                        data={khi1chutti}
                        renderItem={({ item }) =>
                            <View style={styles.DataView}>
                                <Text allowFontScaling={false} style={styles.Name}>Name : {item.name}</Text>
                                <Text allowFontScaling={false} style={styles.Phone}>Phone : {item.phone}</Text>
                            </View>} />
                </View>
            ) : <Text style={styles.NoData}>No Data!!</Text>}
        </View>
    )
}

export default KarachiOneSunnah

const styles = StyleSheet.create({
    main: {
        backgroundColor: 'white',
        width: devicewidth,
        height: deviceheight,
        alignItems: 'center',
        justifyContent: 'center',
    },
    FlatListVIew: {
        width: responsiveWidth(90)
    },
    DataView: {
        backgroundColor: "#135229",
        borderRadius: 10,
        paddingVertical: responsiveHeight(1),
        marginVertical: responsiveHeight(0.5),
    },
    Name: {
        color: 'white',
        fontSize: responsiveFontSize(2),
        textAlign: 'center'
    },
    Phone: {
        color: 'white',
        fontSize: responsiveFontSize(2.25),
        textAlign: 'center'
    },
    NoData: {
        fontSize: responsiveFontSize(3),
        color: 'red',
    }
})
