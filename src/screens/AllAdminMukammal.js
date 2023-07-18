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

const AllAdminMukammal = ({navigation}) => {
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
  const [Wakeelqafila, setWakeelqafila] = useState('');
  const [Kamranqafila, setKamranqafila] = useState('');
  const [AliHasanqafila, setAliHasanqafila] = useState('');
  const [RashidNooriqafila, setRashidNooriqafila] = useState('');
  useEffect(() => {
    const Fida = firestore()
      .collection('users')
      .where('Group', '==', 'Fida Hussain')
      .where('Status', '==', 'مکمل')
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
      .where('Status', '==', 'مکمل')
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
      .where('Status', '==', 'مکمل')
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
      .where('Status', '==', 'مکمل')
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
      .where('Group', '==', 'Ashfaq')
      .where('Status', '==', 'مکمل')
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
      .where('Status', '==', 'مکمل')
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
      .where('Status', '==', 'مکمل')
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
      .where('Status', '==', 'مکمل')
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
      .where('Status', '==', 'مکمل')
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
      .where('Status', '==', 'مکمل')
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
      .where('Status', '==', 'مکمل')
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
    const Wakeel = firestore()
      .collection('users')
      .where('Group', '==', 'Abdul Wakeel')
      .where('Status', '==', 'مکمل')
      .onSnapshot(querySnapshot => {
        const qafilaData = [];
        querySnapshot.forEach(documentSnapshot => {
          qafilaData.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        });
        setWakeelqafila(qafilaData.length);
      });
      const Kamran = firestore()
      .collection('users')
      .where('Group', '==', 'Kamran')
      .where('Status', '==', 'مکمل')
      .onSnapshot(querySnapshot => {
        const qafilaData = [];
        querySnapshot.forEach(documentSnapshot => {
          qafilaData.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        });
        setKamranqafila(qafilaData.length);
      });
      const AliHasan = firestore()
      .collection('users')
      .where('Group', '==', 'Ali Hasan')
      .where('Status', '==', 'مکمل')
      .onSnapshot(querySnapshot => {
        const qafilaData = [];
        querySnapshot.forEach(documentSnapshot => {
          qafilaData.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        });
        setAliHasanqafila(qafilaData.length);
      });
      const RashidNoori = firestore()
      .collection('users')
      .where('Group', '==', 'Rashid Noori')
      .where('Status', '==', 'مکمل')
      .onSnapshot(querySnapshot => {
        const qafilaData = [];
        querySnapshot.forEach(documentSnapshot => {
          qafilaData.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        });
        setRashidNooriqafila(qafilaData.length);
      });
  }, []);
  return (
    <View style={styles.main}>
      <View style={styles.submain}>
        <View style={styles.rectangle}>
          <Text allowFontScaling={false} style={styles.rectangletext}>
            مکمل
          </Text>
        </View>
      </View>
      <View style={styles.squarediv}>
        <TouchableOpacity onPress={()=>navigation.navigate('PunjabTwoMukammal')}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
              Abdul Rauf
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
            {Raufqafila}
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('SindhOneMukammal')}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
              Abdul Rehman
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
            {Rehmanqafila}
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('KpkMukammal')}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
              Babar Shah
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
            {Babarqafila}
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('SahilMukammal')}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
              Ashfaq
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
            {Sahilqafila}
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('KashmirMukammal')}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
              Shan
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
            {Shanqafila}
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('PunjabOneMukammal')}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
              Munir Madani
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
            {Munirqafila}
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('KarachitwoMukammal')}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext_}>
              Naeem ul Hasan
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
            {Naeemqafila}
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('KarachiThreeMukammal')}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
              Usman
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
            {Usmanqafila}
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('BalochistanMukammal')}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
              Fida Hussain
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
            {Fidaqafila}
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('SindhTwoMukammal')}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
              Aqib
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
            {Aqibqafila}
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('AbdulWakeelMukaamal')}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
              Abdul Wakeel
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
            {Wakeelqafila}
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('karachiOneMukammal')}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
              Nabeel
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
            {Nabeelqafila}
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('KamranMukammal')}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
            Kamran
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
            {Kamranqafila}
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('AliHasanMukaamal')}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
            Ali Hasan
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
            {AliHasanqafila}
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('RashidNooriMukammal')}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
            Rashid Noori
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
            {RashidNooriqafila}
          </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default AllAdminMukammal;

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
  squaretext_: {
    fontSize: responsiveScreenFontSize(2.15),
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
