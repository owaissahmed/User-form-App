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

const AllAdminCourse = ({navigation}) => {
  const [Fidaqafila, setFidaqafila] = useState('');
  const [Raufqafila, setRaufqafila] = useState('');
  const [Aqibqafila, setAqibqafila] = useState('');
  const [Rehmanqafila, setRehmanqafila] = useState('');
  const [Babarqafila, setBabarqafila] = useState('');
  const [Sahilqafila, setSahilqafila] = useState('');
  const [Usmanqafila, setUsmanqafila] = useState('');
  const [Munirqafila, setMunirqafila] = useState('');
  const [Nawazishqafila, setNawazishqafila] = useState('');
  const [Hasanqafila, setHasanqafila] = useState('');
  const [Naeemqafila, setNaeemqafila] = useState('');
  const [Nabeelqafila, setNabeelqafila] = useState('');
  const [Shanqafila, setShanqafila] = useState('');
  const [Wakeelqafila, setWakeelqafila] = useState('');
  const [Kamranqafila, setKamranqafila] = useState('');
  const [AliHasanqafila, setAliHasanqafila] = useState('');
  const [RashidNooriqafila, setRashidNooriqafila] = useState('');
  const [RashidLahoriqafila, setRashidLahoriqafila] = useState('');
  useEffect(() => {
    const Fida = firestore()
      .collection('users')
      .where('Group', '==', 'Fida Hussain')
      .where('Status', '==', 'قافلہ کورس')
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
      .where('Status', '==', 'قافلہ کورس')
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
      .where('Status', '==', 'قافلہ کورس')
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
      .where('Status', '==', 'قافلہ کورس')
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
        .where('Group', '==', 'Ahmad Deen')

      .where('Status', '==', 'قافلہ کورس')
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
      .where('Status', '==', 'قافلہ کورس')
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
      .where('Group', '==', 'Abid')
      .where('Status', '==', 'قافلہ کورس')
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
    const Nawazish = firestore()
      .collection('users')
      .where('Group', '==', 'Nawazish Madani')
      .where('Status', '==', 'قافلہ کورس')
      .onSnapshot(querySnapshot => {
        const qafilaData = [];
        querySnapshot.forEach(documentSnapshot => {
          qafilaData.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        });
        setNawazishqafila(qafilaData.length);
      });
    const Hasan = firestore()
      .collection('users')
      .where('Group', '==', 'Hasan Madani')
      .where('Status', '==', 'قافلہ کورس')
      .onSnapshot(querySnapshot => {
        const qafilaData = [];
        querySnapshot.forEach(documentSnapshot => {
          qafilaData.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        });
        setHasanqafila(qafilaData.length);
      });
    const Naeem = firestore()
      .collection('users')
      .where('Group', '==', 'Naeem ul Hasan')
      .where('Status', '==', 'قافلہ کورس')
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
      .where('Status', '==', 'قافلہ کورس')
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
      .where('Status', '==', 'قافلہ کورس')
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
            .where('Group', '==', 'Ashfaq')

      .where('Status', '==', 'قافلہ کورس')
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
      .where('Group', '==', 'Fuzail')
      .where('Status', '==', 'قافلہ کورس')
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
      .where('Status', '==', 'قافلہ کورس')
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
      .where('Status', '==', 'قافلہ کورس')
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
      .where('Status', '==', 'قافلہ کورس')
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
      const RashidLahori = firestore()
      .collection('users')
      .where('Group', '==', 'Rashid Lahori')
      .where('Status', '==', 'قافلہ کورس')
      .onSnapshot(querySnapshot => {
        const qafilaData = [];
        querySnapshot.forEach(documentSnapshot => {
          qafilaData.push({
            id: documentSnapshot.id,
            ...documentSnapshot.data(),
          });
        });
        setRashidLahoriqafila(qafilaData.length);
      });
  }, []);
  return (
    <View style={styles.main}>
      <View style={styles.submain}>
        <View style={styles.rectangle}>
          <Text allowFontScaling={false} style={styles.rectangletext}>
            قافلہ کورس
          </Text>
        </View>
      </View>
      <View style={styles.squarediv}>
        <TouchableOpacity onPress={()=>navigation.navigate('PunjabTwoCourse')}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
              Abdul Rauf
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
            {Raufqafila}
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('SindhOneCourse')}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
              Abdul Rehman
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
            {Rehmanqafila}
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('KpkCourse')}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
              Babar Shah
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
            {Babarqafila}
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('SahilCourse')}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
              Ahmad Deen
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
            {Sahilqafila}
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('KashmirCourse')}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
              Shan
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
            {Shanqafila}
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('PunjabOneCourse')}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
              Abid
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
            {Munirqafila}
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('NawazishCourse')}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext__}>
              Nawazish Madani
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
            {Nawazishqafila}
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('HasanCourse')}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext__}>
              Hasan Madani
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
            {Hasanqafila}
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('KarachitwoCourse')}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext_}>
              Naeem ul Hasan
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
            {Naeemqafila}
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('KarachiThreeCourse')}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
              Usman
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
            {Usmanqafila}
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> navigation.navigate('BalochistanCourse')}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
              Fida Hussain
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
            {Fidaqafila}
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('SindhTwoCourse')}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
              Aqib
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
            {Aqibqafila}
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('AbdulWakeelCourse')}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
              Fuzail
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
            {Wakeelqafila}
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('karachiOneCourse')}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext_}>
            Ashfaq
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
            {Nabeelqafila}
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('KamranCourse')}>
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
          onPress={() => navigation.navigate('AliHasanCourse')}>
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
          onPress={() => navigation.navigate('RashidNooriCourse')}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
            Rashid Noori
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
            {RashidNooriqafila}
          </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('RashidLahoriCourse')}>
          <View style={styles.square}>
            <Text allowFontScaling={false} style={styles.squaretext}>
            Rashid Lahori
            </Text>
            <Text allowFontScaling={false} style={styles.squaretext}>
            {RashidLahoriqafila}
          </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default AllAdminCourse;

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
  squaretext__: {
    fontSize: responsiveScreenFontSize(2),
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
