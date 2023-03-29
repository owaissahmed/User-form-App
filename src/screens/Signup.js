import { View, Text, Image, ScrollView, Alert, Dimensions, StyleSheet, TouchableOpacity, TextInput, ActivityIndicator, Modal, } from 'react-native';
import DatePicker from 'react-native-date-picker'
import React, { useEffect, useState, } from 'react';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import moment from 'moment'
import { launchImageLibrary } from 'react-native-image-picker';
import NetInfo from "@react-native-community/netinfo";
import storage from '@react-native-firebase/storage';
import { Picker } from '@react-native-picker/picker';
import firestore from '@react-native-firebase/firestore';
const devicewidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;

const Signup = ({ navigation }) => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [option2List, setOption2List] = useState([]);
  const [option3List, setOption3List] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log("Connection type", state.type);
      console.log("Is connected?", state.isConnected);
      setIsConnected(state.isConnected)
    });

    return () => {
      unsubscribe();
    }
  }, []);

  useEffect(() => {
    if (selectedOption1 === 'کراچی') {
      setOption2List(['ڈویژن 1', 'ڈویژن 2']);
    } else if (selectedOption1 === 'بلوچستان') {
      setOption2List(['قلات', 'مکران', 'کوئٹہ', 'ژوب', 'سبی', 'رخشان', 'نصیر آباد', 'لورالائی']);
    } else if (selectedOption1 === 'سندھ') {
      setOption2List(['حیدر آباد', 'بنبھور', 'میرپورخاص', 'نواب شاہ', 'سکھر', 'لاڑکانہ']);
    } else if (selectedOption1 === 'پنجاب') {
      setOption2List(['بہاولپور', 'ملتان', 'لاہور', 'ساہیوال', 'ڈیرہ غازی خان', 'راولپنڈی', 'فیصل آباد', 'گوجرانوالہ', 'سرگودھا']);
    } else if (selectedOption1 === 'کے پی کے') {
      setOption2List(['پشاور', 'مالاکنڈ', 'ڈیرہ اسماعیل خان', 'مردان', 'ہزارہ', 'کوہاٹ', 'بنوں']);
    } else if (selectedOption1 === 'اسلام آباد') {
      setOption2List(['اسلام آباد',]);
    } else if (selectedOption1 === 'کشمیر') {
      setOption2List(['میرپور', 'مظفرآباد', 'پونچھ',]);
    } else if (selectedOption1 === 'گلگت') {
      setOption2List(['گلگت', 'دیامیر', 'بلتستان',]);
    } else {
      setOption2List([]);
    }
  }, [selectedOption1]);

  useEffect(() => {
    if (selectedOption2 === 'ڈویژن 1') {
      setOption3List(['کراچی سینٹرل', 'کورنگی', 'ملیر ڈسٹرکٹ 1', 'ملیر ڈسٹرکٹ  2']);
    } else if (selectedOption2 === 'ڈویژن 2') {
      setOption3List(['کراچی ساؤتھ', 'کراچی ایسٹ', 'کراچی ویسٹ', 'کیماڑی']);
    } else if (selectedOption2 === 'قلات') {
      setOption3List(['لسبیلہ', 'قلات', 'آواران', 'مستونگ', 'خضدار', 'سوراب']);
    } else if (selectedOption2 === 'مکران') {
      setOption3List(['گوادر', 'کیچ', 'پنجگور']);
    } else if (selectedOption2 === 'کوئٹہ') {
      setOption3List(['کوئٹہ', 'پشین', 'قلعہ عبد اللہ', 'چمن']);
    } else if (selectedOption2 === 'ژوب') {
      setOption3List(['ژوب', 'شیرانی', 'قلعہ سیف اللہ']);
    } else if (selectedOption2 === 'سبی') {
      setOption3List(['سبی', 'ہرنائی', 'زیارت', 'ڈیرہ بگٹی', 'کوہلو']);
    } else if (selectedOption2 === 'رخشان') {
      setOption3List(['چاغی', 'واشک', 'نوشکی', 'خاران']);
    } else if (selectedOption2 === 'نصیر آباد') {
      setOption3List(['نصیر آباد', 'صحبت پور', 'جعفر آباد', 'جھل مگسی', 'کچھی']);
    } else if (selectedOption2 === 'لورالائی') {
      setOption3List(['لورالائی', 'بارکھان', 'موسیٰ خیل', 'دوکی']);
    } else if (selectedOption2 === 'حیدر آباد') {
      setOption3List(['جامشورو', 'ٹنڈو محمد خان', 'ٹنڈو الہیار', 'دادو', 'مٹیاری']);
    } else if (selectedOption2 === 'بنبھور') {
      setOption3List(['بدین', 'سجاول', 'ٹھٹہ']);
    } else if (selectedOption2 === 'میرپورخاص') {
      setOption3List(['میرپورخاص', 'عمر کوٹ', 'تھر پارکر']);
    } else if (selectedOption2 === 'نواب شاہ') {
      setOption3List(['نوابشاہ', 'سانگھڑ', 'نوشہرو فیروز']);
    } else if (selectedOption2 === 'سکھر') {
      setOption3List(['سکھر', 'گھوٹکی', 'خیرپور میرس']);
    } else if (selectedOption2 === 'لاڑکانہ') {
      setOption3List(['لاڑکانہ', 'جیکب آباد', 'شکار پور', 'کشمور', 'قمبر شہداد کوٹ']);
    } else if (selectedOption2 === 'بہاولپور') {
      setOption3List(['بہاولپور', ' بہاولنگر', ' رحیم یار خان']);
    } else if (selectedOption2 === 'ملتان') {
      setOption3List(['ملتان', 'لودھراں ', 'وہاڑی ', 'خانیوال']);
    } else if (selectedOption2 === 'ڈیرہ غازی خان') {
      setOption3List(['ڈیرہ غازی خان', 'لیہ ', 'راجن پور', 'مظفر گڑھ']);
    } else if (selectedOption2 === 'سرگودھا') {
      setOption3List(['سرگودھا', 'بھکر ', 'خوشاب ', 'میانوالی']);
    } else if (selectedOption2 === 'فیصل آباد') {
      setOption3List(['ٹوبہ', 'فیصل آباد', ' جھنگ', 'چنیوٹ']);
    } else if (selectedOption2 === 'ساہیوال') {
      setOption3List(['ساہیوال', ' اوکاڑہ', ' پاکپتن']);
    } else if (selectedOption2 === 'گوجرانوالہ') {
      setOption3List(['گجرات', ' گوجرانوالہ', ' سیالکوٹ', 'حافظ آباد', 'منڈی بہاؤالدین  ', 'نارووال']);
    } else if (selectedOption2 === 'لاہور') {
      setOption3List(['لاہور', ' شیخوپورہ', ' ننکانہ', ' قصور']);
    } else if (selectedOption2 === 'راولپنڈی') {
      setOption3List(['اٹک', ' چکوال', ' جہلم', 'راولپنڈی ']);
    } else if (selectedOption2 === 'اسلام آباد') {
      setOption3List(['اسلام آباد']);
    } else if (selectedOption2 === 'پشاور') {
      setOption3List(['پشاور', ' چارسدہ', ' خیبر', 'مہمند ایجنسی ', 'نوشہرہ']);
    } else if (selectedOption2 === 'مالاکنڈ') {
      setOption3List(['باجوڑ', ' بونیر', ' چترال لوئر', 'چترال اپر ', 'مالاکنڈ', 'شانگلہ', 'سوات', 'اپردیر']);
    } else if (selectedOption2 === 'ہزارہ') {
      setOption3List(['مانسہرہ', ' ایبٹ آباد', ' بٹگرام', 'ہری پور ', 'کولائی پلاس', 'لوئر کوہستان', 'تورغر', 'اپر کوہستان']);
    } else if (selectedOption2 === 'بنوں') {
      setOption3List(['بنوں', ' لکی مروت', ' نارتھ وزیرستان']);
    } else if (selectedOption2 === 'ڈیرہ اسماعیل خان') {
      setOption3List(['ڈیرہ اسماعیل خان', ' ساؤتھ وزیرستان', ' ٹانک ']);
    } else if (selectedOption2 === 'کوہاٹ') {
      setOption3List(['ہنگو', ' کرک', ' کوہاٹ', 'کرم ', 'اورکزئی']);
    } else if (selectedOption2 === 'مردان') {
      setOption3List(['مردان', ' صوابی']);
    } else if (selectedOption2 === 'گلگت') {
      setOption3List(['گلگت', ' غذر', ' ہنزہ', 'نگر ']);
    } else if (selectedOption2 === 'دیامیر') {
      setOption3List(['دیامیر', ' درل', ' تنگیر', 'استور ']);
    } else if (selectedOption2 === 'بلتستان') {
      setOption3List(['گھانچی', ' اسکردو', ' شگر']);
    } else if (selectedOption2 === 'مظفرآباد') {
      setOption3List(['نیلم', ' ہٹیاں', ' مظفرآباد']);
    } else if (selectedOption2 === 'میرپور') {
      setOption3List(['میرپور', ' بھمبر', ' کوٹلی']);
    } else if (selectedOption2 === 'پونچھ') {
      setOption3List(['باغ', ' حویلی', ' پونچھ', 'سدھنوتی ']);
    } else if (selectedOption2 === 'اسلام آباد') {
      setOption3List(['اسلام آباد']);
    } else {
      setOption3List([]);
    }
  }, [selectedOption2]);

  const [name, setname] = useState('')
  const [fathername, setfathername] = useState('')
  const [age, setage] = useState('')
  const [cnic, setcnic] = useState('')
  const [mobile, setmobile] = useState('')
  const [house, sethouse] = useState('')
  const [address, setaddress] = useState('')
  const [jamia, setjamia] = useState('')
  const [city, setcity] = useState('')
  const [islamiceducation, setislamiceducation] = useState('')
  const [education, seteducation] = useState('')
  const [date, setDate] = useState(new Date());
  const [hafiz, sethafiz] = useState('جی ہاں');
  const [status, setstatus] = useState('');
  const [manager, setmanager] = useState('');
  const [group, setgroup] = useState('');
  const [picture, setpicture] = useState("");
  const [cnicpicture, setcnicpicture] = useState("");
  const [formpicture, setformpicture] = useState("");
  const [profile, setprofile] = useState("");
  const [CNIC, setCNIC] = useState("");
  const [Entryform, setEntryform] = useState("");
  const [uploadpic, setuploadpic] = useState(false)
  const [uploadcnic, setuploadcnic] = useState(false)
  const [uploadform, setuploadform] = useState(false)
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const OpenCamera = async () => {
    const result = await launchImageLibrary({ mediaType: 'photo' });
    setpicture(result)
  }
  const UploadImage = async () => {
    console.log(picture);
    if (isConnected == true) {
      if (picture) {
        setuploadpic(true);
        const reference = storage().ref(picture.assets[0].fileName);
        const pathToFile = picture.assets[0].uri;
        await reference.putFile(pathToFile);
      }
      if (picture) {
        const profilepic = await storage().ref(picture.assets[0].fileName).getDownloadURL();
        setprofile(profilepic)
        console.log(profile)
      } else {
        Alert.alert(
          '⚠️ WARNING',
          'First Select The Picture Then Click On Upload',
        );
      }
    } else {
      Alert.alert(
        '⚠️ WARNING',
        'No Internet Connection',
      );
    }
  }
  const OpenCameracnic = async () => {
    const cnicresult = await launchImageLibrary({ mediaType: 'photo' });
    setcnicpicture(cnicresult)
  }
  const UploadImagecnic = async () => {
    console.log(cnicpicture);
    if (isConnected == true) {
      if (cnicpicture) {
        setuploadcnic(true)
        const reference = storage().ref(cnicpicture.assets[0].fileName);
        const pathToFile = cnicpicture.assets[0].uri;
        await reference.putFile(pathToFile);
      }
      if (cnicpicture) {
        const cnicpic = await storage().ref(cnicpicture.assets[0].fileName).getDownloadURL();
        setCNIC(cnicpic)
        console.log(CNIC)
      } else {
        Alert.alert(
          '⚠️ WARNING',
          'First Select The Picture Then Click On Upload',
        );
      }
    } else {
      Alert.alert(
        '⚠️ WARNING',
        'No Internet Connection',
      );
    }
  }
  const OpenCameraform = async () => {
    const formresult = await launchImageLibrary({ mediaType: 'photo' });
    setformpicture(formresult)
  }
  const UploadImageform = async () => {
    console.log(formpicture);
    if (isConnected == true) {
      if (formpicture) {
        setuploadform(true)
        const reference = storage().ref(formpicture.assets[0].fileName);
        const pathToFile = formpicture.assets[0].uri;
        await reference.putFile(pathToFile);
      }
      if (formpicture) {
        const formpic = await storage().ref(formpicture.assets[0].fileName).getDownloadURL();
        setEntryform(formpic)
        console.log(Entryform)
      } else {
        Alert.alert(
          '⚠️ WARNING',
          'First Select The Picture Then Click On Upload',
        );
      }
    } else {
      Alert.alert(
        '⚠️ WARNING',
        'No Internet Connection',
      );
    }
  }
  const NameChange = (newname) => {
    setname(newname);
  };
  const FatherNameChange = (newfathername) => {
    setfathername(newfathername);
  };
  const AgeChange = (newage) => {
    setage(newage);
  };
  const CnicChange = (newcnic) => {
    setcnic(newcnic);
  };
  const MobileChange = (newmobile) => {
    setmobile(newmobile);
  };
  const HouseChange = (newhouse) => {
    sethouse(newhouse);
  };
  const AddressChange = (newaddress) => {
    setaddress(newaddress);
  };
  const JamiaChange = (newjamia) => {
    setjamia(newjamia);
  };
  const CityChange = (newcity) => {
    setcity(newcity);
  };
  const IslamiceducationChange = (newislamiceducation) => {
    setislamiceducation(newislamiceducation);
  };
  const EducationChange = (neweducation) => {
    seteducation(neweducation);
  };
  const DateChange = (newDate) => {
    setDate(newDate);
  };

  const check = async () => {
    if (isConnected == false) {
      Alert.alert(
        '⚠️ WARNING',
        'No Internet Connection',
      );
    }
    else if (picture === "") {
      Alert.alert(
        '⚠️ WARNING',
        'Please Select Picture',
      );
    }
    else if (uploadpic == false) {
      Alert.alert(
        '⚠️ WARNING',
        'Please Click On Upload Picture',
      );
    } else if (name.trim() === '') {
      Alert.alert(
        '⚠️ WARNING',
        'Please Enter Your Name',
      );
    } else if (fathername.trim() === '') {
      Alert.alert(
        '⚠️ WARNING',
        'Please Enter Your Father Name',
      );
    } else if (age.trim() === '') {
      Alert.alert(
        '⚠️ WARNING',
        'Please Enter Your Age',
      );
    } else if (cnic.trim() === '') {
      Alert.alert(
        '⚠️ WARNING',
        'Please Enter Your CNIC',
      );
    } else if (cnic.length < 13) {
      Alert.alert(
        '⚠️ WARNING',
        'Invalid CNIC',
      );
    } else if (cnicpicture === '') {
      Alert.alert(
        '⚠️ WARNING',
        'Please Select CNIC Picture',
      );
    } else if (uploadcnic == false) {
      Alert.alert(
        '⚠️ WARNING',
        'Please Click On Upload CNIC',
      );
    }
    else if (mobile.trim() === '') {
      Alert.alert(
        '⚠️ WARNING',
        'Please Enter Mobile No.',
      );
    } else if (mobile.length < 11) {
      Alert.alert(
        '⚠️ WARNING',
        'Invalid Mobile No.',
      );
    } else if (house.trim() === '') {
      Alert.alert(
        '⚠️ WARNING',
        'Please Enter House Phone No.',
      );
    } else if (house.length < 11) {
      Alert.alert(
        '⚠️ WARNING',
        'Invalid House No.',
      );
    } else if (mobile.trim() === house.trim()) {
      Alert.alert(
        '⚠️ WARNING',
        'Mobile & House No. Are Same',
      );
    }
    else if (formpicture === '') {
      Alert.alert(
        '⚠️ WARNING',
        'Please Select Entry Form Picture',
      );
    } else if (uploadform == false) {
      Alert.alert(
        '⚠️ WARNING',
        'Please Click on Upload Form',
      );
    } else if (address.trim() === '') {
      Alert.alert(
        '⚠️ WARNING',
        'Please Enter Your Address',
      );
    } else if (jamia.trim() === '') {
      Alert.alert(
        '⚠️ WARNING',
        'Please Enter Jamia Name/Area',
      );
    }
    else if (selectedOption1 === "" || selectedOption1 === 'صوبہ') {
      Alert.alert(
        '⚠️ WARNING',
        'Please Select Province',
      );
    } else if (selectedOption2 === "" || selectedOption2 === 'ڈویژن') {
      Alert.alert(
        '⚠️ WARNING',
        'Please Select Division',
      );
    }
    else if (selectedOption3 === "" || selectedOption3 === 'ڈسٹرکٹ') {
      Alert.alert(
        '⚠️ WARNING',
        'Please Select District',
      );
    } else if (city.trim() === '') {
      Alert.alert(
        '⚠️ WARNING',
        'Please Enter Your City',
      );
    } else if (islamiceducation.trim() === '') {
      Alert.alert(
        '⚠️ WARNING',
        'Please Enter Your Islamic Education',
      );
    } else if (education.trim() === '') {
      Alert.alert(
        '⚠️ WARNING',
        'Please Enter Your Education',
      );
    } else {
      setLoading(true);
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
        setLoading(false);
        const collectionRef = firestore().collection('users').add({
          Name: name,
          Picture: profile,
          CnicPicture: CNIC,
          FormPicture: Entryform,
          Fathername: fathername,
          Age: age,
          CNIC: cnic,
          MobileNo: mobile,
          HouseNo: house,
          Address: address,
          Jamia: jamia,
          Province: selectedOption1,
          Division: selectedOption2,
          District: selectedOption3,
          City: city,
          IslamicEducation: islamiceducation,
          Education: education,
          Date: moment(date).format('DD-MM-YYYY'),
          Hafiz: hafiz,
          Status: status,
          Manager: manager,
          Group: group,
        });
        Alert.alert(
          '🎉 CONGTRATS',
          'YOUR FORM HAS BEEN SUBMITTED',
        );
        navigation.navigate('Splash')
      }, 60000);
      console.log(profile);
      console.log(CNIC);
      console.log(Entryform);
    }
  }
  return (
    <View style={styles.main}>
      <Modal visible={visible} animationType="fade" transparent={true}>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
          {loading ? <ActivityIndicator size="large" color="#ffffff" /> : <Text style={{ color: '#ffffff' }}>Loading...</Text>}
        </View>
      </Modal>
      <View style={styles.submain}>
        <Text style={styles.heading}>MADANI QAFILA 12 MAH
        </Text>
        <Text style={styles.urduheading}>مدنی قافلہ 12ماہ
        </Text>
      </View>
      <ScrollView>
        <View style={styles.inputsgroup}>
          <View style={styles.field}>
            <Text>Picture</Text>
            <Text>تصویر</Text>
          </View>
          <View style={{ alignItems: 'center', marginTop: responsiveHeight(1), }}>
            <TouchableOpacity onPress={() => { OpenCamera() }} style={{
              backgroundColor: "#135229", color: 'white', padding: 4, borderRadius: 8, width: responsiveWidth(35),
            }} ><Text style={{
              color: '#fff', fontWeight: '500', letterSpacing: 0.3, textAlign: 'center', fontSize: responsiveFontSize(2)
            }}>Select Picture</Text></TouchableOpacity>
            {picture !== "" ? (
              <Image source={{ uri: picture.assets[0].uri }} style={{ width: responsiveWidth(30), marginTop: responsiveHeight(2), height: 100, height: responsiveHeight(15) }} />
            ) : null}
            <TouchableOpacity onPress={() => { UploadImage() }} style={{
              backgroundColor: "#135229", marginTop: responsiveHeight(2), color: 'white', padding: 4, borderRadius: 8, width: responsiveWidth(35), alignContent: 'center'
            }} ><Text style={{
              color: '#fff', fontWeight: '500', letterSpacing: 0.3, textAlign: 'center', fontSize: responsiveFontSize(2)
            }}>Upload Picture</Text></TouchableOpacity>
          </View>
          <View style={styles.field}>
            <Text>Name</Text>
            <Text>نام</Text>
          </View>
          <TextInput style={styles.password} value={name} onChangeText={NameChange} />
          <View style={styles.field}>
            <Text>Father Name</Text>
            <Text>ولدیت</Text>
          </View>
          <TextInput style={styles.password} value={fathername} onChangeText={FatherNameChange} />
          <View style={styles.field}>
            <Text>Age</Text>
            <Text>عمر</Text>
          </View>
          <TextInput style={styles.password} inputMode={'tel'} value={age} onChangeText={AgeChange} />
          <View style={styles.field}>
            <Text>CNIC No.</Text>
            <Text>شناختی کارڈ نمبر</Text>
          </View>
          <TextInput style={styles.password} inputMode={'tel'} value={cnic} onChangeText={CnicChange} />
          <View style={styles.field}>
            <Text>CNIC Picture*</Text>
            <Text>شناختی کارڈ کی تصویر</Text>
          </View>
          <View style={{ alignItems: 'center', marginTop: responsiveHeight(1), }}>
            <TouchableOpacity onPress={() => { OpenCameracnic() }} style={{
              backgroundColor: "#135229", color: 'white', padding: 4, borderRadius: 8, width: responsiveWidth(35),
            }} ><Text style={{
              color: '#fff', fontWeight: '500', letterSpacing: 0.3, textAlign: 'center', fontSize: responsiveFontSize(2)
            }}>Select Picture</Text></TouchableOpacity>
            {cnicpicture !== "" ? (
              <Image source={{ uri: cnicpicture.assets[0].uri }} style={{ marginTop: responsiveHeight(2), width: responsiveWidth(30), height: 100, height: responsiveHeight(15) }} />
            ) : null}
            <TouchableOpacity onPress={() => { UploadImagecnic() }} style={{
              backgroundColor: "#135229", color: 'white', alignItems: 'center', marginTop: responsiveHeight(2), padding: 4, borderRadius: 8, width: responsiveWidth(35),
            }} ><Text style={{
              color: '#fff', fontWeight: '500', letterSpacing: 0.3, textAlign: 'center', fontSize: responsiveFontSize(2)
            }}>Upload CNIC</Text></TouchableOpacity>
          </View>
          <View style={styles.field}>
            <Text>Mobile No.</Text>
            <Text>موبائل نمبر</Text>
          </View>
          <TextInput style={styles.password} inputMode={'tel'} value={mobile} onChangeText={MobileChange} />
          <View style={styles.field}>
            <Text>House Phone No.</Text>
            <Text>گھر کا نمبر</Text>
          </View>
          <TextInput style={styles.password} inputMode={'tel'} value={house} onChangeText={HouseChange} />
          <View style={styles.field}>
            <Text>Entry Form Picture*</Text>
            <Text>داخلہ فارم کی تصویر</Text>
          </View>
          <View style={{ alignItems: 'center', marginTop: responsiveHeight(1), }}>
            <TouchableOpacity onPress={() => { OpenCameraform() }} style={{
              backgroundColor: "#135229", color: 'white', padding: 4, borderRadius: 8, width: responsiveWidth(35),
            }} ><Text style={{
              color: '#fff', fontWeight: '500', letterSpacing: 0.3, textAlign: 'center', fontSize: responsiveFontSize(2)
            }}>Select Picture</Text></TouchableOpacity>
            {formpicture !== "" ? (
              <Image source={{ uri: formpicture.assets[0].uri }} style={{ marginTop: responsiveHeight(2), width: responsiveWidth(30), height: 100, height: responsiveHeight(15) }} />
            ) : null}
            <TouchableOpacity onPress={() => { UploadImageform() }} style={{
              backgroundColor: "#135229", color: 'white', padding: 4, marginTop: responsiveHeight(2), borderRadius: 8, width: responsiveWidth(35),
            }} ><Text style={{
              color: '#fff',
              fontWeight: '500',
              letterSpacing: 0.3,
              textAlign: 'center',
              fontSize: responsiveFontSize(2)
            }}>Upload Form</Text></TouchableOpacity>
          </View>
          <View style={styles.field}>
            <Text>Address</Text>
            <Text>گھر کا مکمل ایڈریس</Text>
          </View>
          <TextInput style={styles.password} value={address} onChangeText={AddressChange} />
          <View style={styles.field}>
            <Text>Jamia name/area</Text>
            <Text>جامعۃالمدینہ کا نام/علاقہ</Text>
          </View>
          <TextInput style={styles.password} value={jamia} onChangeText={JamiaChange} />
          <View style={styles.field}>
            <Text>Province</Text>
            <Text>صوبہ</Text>
          </View>
          <View style={styles.pickergroup}>
            <Picker
              selectedValue={selectedOption1}
              onValueChange={(itemValue, itemIndex) => setSelectedOption1(itemValue)} style={styles.picker}>
              <Picker.Item label="صوبہ" value='صوبہ' />
              <Picker.Item label="کراچی" value="کراچی" />
              <Picker.Item label="بلوچستان" value="بلوچستان" />
              <Picker.Item label="سندھ" value="سندھ" />
              <Picker.Item label="پنجاب	" value="پنجاب" />
              <Picker.Item label="اسلام آباد" value="اسلام آباد" />
              <Picker.Item label="کے پی کے" value="کے پی کے" />
              <Picker.Item label="کشمیر" value="کشمیر" />
              <Picker.Item label="گلگت" value="گلگت" />
            </Picker>
          </View>
          <View style={styles.field}>
            <Text>Division</Text>
            <Text>ڈویژن</Text>
          </View>
          <View style={styles.pickergroup}>
            <Picker
              selectedValue={selectedOption2}
              onValueChange={(itemValue, itemIndex) => setSelectedOption2(itemValue)}
              enabled={selectedOption1 != null} style={styles.picker}>
              <Picker.Item label="ڈویژن" value={'ڈویژن'} />
              {option2List.map((option) => (
                <Picker.Item key={option} label={option} value={option} />
              ))}
            </Picker>
          </View>
          <View style={styles.field}>
            <Text>District</Text>
            <Text>ڈسٹرکٹ</Text>
          </View>
          <View style={styles.pickergroup}>
            <Picker
              selectedValue={selectedOption3}
              onValueChange={(itemValue, itemIndex) => setSelectedOption3(itemValue)}
              enabled={selectedOption2 != null} style={styles.picker}>
              <Picker.Item label="ڈسٹرکٹ" value='ڈسٹرکٹ' />
              {option3List.map((option) => (
                <Picker.Item key={option} label={option} value={option} />
              ))}
            </Picker>
          </View>
          <View style={styles.field}>
            <Text>City</Text>
            <Text>شہر</Text>
          </View>
          <TextInput style={styles.password} value={city} onChangeText={CityChange} />
          <View style={styles.field}>
            <Text>Islamic Education</Text>
            <Text>دینی تعلیم</Text>
          </View>
          <TextInput style={styles.password} value={islamiceducation} onChangeText={IslamiceducationChange} />
          <View style={styles.field}>
            <Text>Education</Text>
            <Text>دنیاوی تعلیم</Text>
          </View>
          <TextInput style={styles.password} value={education} onChangeText={EducationChange} />
          <View style={styles.field}>
            <Text>Hafiz?</Text>
            <Text>حافظ ہیں؟</Text>
          </View>
          <View style={styles.pickergroup}>
            <Picker
              selectedValue={hafiz}
              onValueChange={(itemValue) => sethafiz(itemValue)} style={styles.picker} >
              <Picker.Item label="جی ہاں" value="جی ہاں" />
              <Picker.Item label="جی نہیں" value="جی نہیں" />
            </Picker>
          </View>
          <View style={styles.field}>
            <Text>Status</Text>
            <Text>اسٹیٹس</Text>
          </View>
          <View style={styles.pickergroup}>
            <Picker
              selectedValue={status}
              onValueChange={(itemValue) => setstatus(itemValue)} style={styles.picker} >
              <Picker.Item label="مدنی قافلہ" value="مدنی قافلہ" />
              <Picker.Item label="چھٹی" value="چھٹی" />
              <Picker.Item label="دار السنہ" value="دار السنہ" />
              <Picker.Item label="انفرادی جدول" value="انفرادی جدول" />
            </Picker>
          </View>
          <View style={styles.field}>
            <Text>Manager Name</Text>
            <Text>صوبائی ذمہ دار کا نام</Text>
          </View>
          <View style={styles.pickergroup}>
            <Picker
              selectedValue={manager}
              onValueChange={(itemValue) => setmanager(itemValue)} style={styles.picker} >
              <Picker.Item label="User 1" value="User 1" />
              <Picker.Item label="User 2" value="User 2" />
              <Picker.Item label="User 3" value="User 3" />
              <Picker.Item label="User 4" value="User 4" />
              <Picker.Item label="User 5" value="User 5" />
              <Picker.Item label="User 6" value="User 6" />
            </Picker>
          </View>
          <View style={styles.field}>
            <Text>Group</Text>
            <Text>درجہ</Text>
          </View>
          <View style={styles.pickergroup}>
            <Picker
              selectedValue={group}
              onValueChange={(itemValue) => setgroup(itemValue)} style={styles.picker} >
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
              <Picker.Item label="1" value="1" />
              <Picker.Item label="2" value="2" />
            </Picker>
          </View>
          <View style={styles.field}>
            <Text>Travel date</Text>
            <Text>سفر شروع کرنے کی تاریخ</Text>
          </View>
          <View style={styles.fie}>
            <DatePicker style={styles.date}
              date={date}
              onDateChange={DateChange}
              mode="date"
              androidMode="spinner"
              textColor='#135229'
            />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={check} style={styles.button}><Text style={styles.buttontext}>SAVE</Text></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  main: {
    backgroundColor: 'white',
    width: devicewidth,
    height: deviceheight,
    alignItems: 'center',
  },
  submain: {
    height: responsiveHeight(13),
    width: responsiveWidth(90),
    alignItems: 'center',
    borderRadius: 12
  },
  heading: {
    fontSize: responsiveFontSize(3),
    marginTop: responsiveHeight(1.75),
    color: "#135229",
  },
  urduheading: {
    fontSize: responsiveFontSize(3),
    marginTop: responsiveHeight(1),
    color: "#135229",
  },
  field: {
    marginTop: responsiveHeight(1),
    height: responsiveHeight(4),
    width: responsiveWidth(80),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fie: {
    marginTop: responsiveHeight(1),
    borderColor: "#135229",
    borderWidth: 1.5,
    borderLeftWidth: 8,
    borderColor: "#135229",
    borderRadius: 8,
  },
  inputsgroup: {
    width: responsiveWidth(100),
    alignItems: 'center'
  },
  login: {
    height: responsiveHeight(5),
    width: responsiveWidth(80),
    padding: 8,
    borderColor: "#135229",
    color: "#135229",
    borderWidth: 1.5,
    marginTop: responsiveHeight(5),
    borderRadius: 8,
    alignSelf: 'center'
  },
  password: {
    height: responsiveHeight(5.5),
    width: responsiveWidth(80),
    padding: 7,
    paddingLeft: 12,
    color: "black",
    borderColor: "#135229",
    borderWidth: 1.5,
    borderLeftWidth: 8,
    borderColor: "#135229",
    marginTop: responsiveHeight(1),
    borderRadius: 8,
    fontSize: responsiveFontSize(2),
  },
  pickergroup: {
    width: responsiveWidth(100),
    alignItems: 'center',
    borderColor: "#135229",
    borderWidth: 1.5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(80),
    borderRadius: 8,
    marginTop: responsiveHeight(1),
    borderColor: "#135229",
    borderWidth: 1.5,
    borderLeftWidth: 8,
  },
  picker: {
    height: responsiveHeight(5.5),
    width: responsiveWidth(85),
    fontSize: responsiveFontSize(2),
  },
  button: {
    backgroundColor: "#135229",
    color: 'white',
    padding: 6,
    marginTop: responsiveHeight(3),
    marginBottom: responsiveHeight(3),
    borderRadius: 8,
    width: responsiveWidth(30),
    height: responsiveHeight(6),
    alignSelf: 'center',
  },
  buttontext: {
    color: '#fff',
    fontWeight: '600',
    letterSpacing: 0.7,
    textAlign: 'center',
    fontSize: responsiveFontSize(2.5)
  }
});

export default Signup;
