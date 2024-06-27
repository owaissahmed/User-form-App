import {
  View,
  Text,
  Image,
  ScrollView,
  Alert,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Modal,
} from 'react-native';

import DatePicker from 'react-native-date-picker';
import React, { useEffect, useState } from 'react';
import { responsiveWidth } from 'react-native-responsive-dimensions';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import moment from 'moment';
import { launchImageLibrary } from 'react-native-image-picker';
import NetInfo from '@react-native-community/netinfo';
import storage from '@react-native-firebase/storage';
import { Picker } from '@react-native-picker/picker';
import firestore from '@react-native-firebase/firestore';
import firebase from '@react-native-firebase/app';
const devicewidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;
import * as Animatable from 'react-native-animatable';

const Signup = ({ navigation }) => {
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');
  const [selectedOption3, setSelectedOption3] = useState('');
  const [option2List, setOption2List] = useState([]);
  const [option3List, setOption3List] = useState([]);
  const [AddressselectedOption1, AddresssetSelectedOption1] = useState('');
  const [AddressselectedOption2, AddresssetSelectedOption2] = useState('');
  const [AddressselectedOption3, AddresssetSelectedOption3] = useState('');
  const [Addressoption2List, AddresssetOption2List] = useState([]);
  const [Addressoption3List, AddresssetOption3List] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      setIsConnected(state.isConnected);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    if (AddressselectedOption1 === 'کراچی') {
      AddresssetOption2List(['ڈویژن 1', 'ڈویژن 2']);
    } else if (AddressselectedOption1 === 'بلوچستان') {
      AddresssetOption2List([
        'قلات',
        'مکران',
        'کوئٹہ',
        'ژوب',
        'سبی',
        'رخشان',
        'نصیر آباد',
        'لورالائی',
      ]);
    } else if (AddressselectedOption1 === 'سندھ') {
      AddresssetOption2List([
        'حیدر آباد',
        'بنبھور',
        'میرپورخاص',
        'نواب شاہ',
        'سکھر',
        'لاڑکانہ',
      ]);
    } else if (AddressselectedOption1 === 'پنجاب') {
      AddresssetOption2List([
        'بہاولپور',
        'ملتان',
        'لاہور',
        'ساہیوال',
        'ڈیرہ غازی خان',
        'راولپنڈی',
        'فیصل آباد',
        'گوجرانوالہ',
        'سرگودھا',
        , 'گجرات',
      ]);
    } else if (AddressselectedOption1 === 'کے پی کے') {
      AddresssetOption2List([
        'پشاور',
        'مالاکنڈ',
        'ڈیرہ اسماعیل خان',
        'مردان',
        'ہزارہ',
        'کوہاٹ',
        'بنوں',
      ]);
    } else if (AddressselectedOption1 === 'اسلام آباد') {
      AddresssetOption2List(['اسلام آباد']);
    } else if (AddressselectedOption1 === 'کشمیر') {
      AddresssetOption2List(['میرپور', 'مظفرآباد', 'پونچھ']);
    } else if (AddressselectedOption1 === 'گلگت') {
      AddresssetOption2List(['گلگت', 'دیامیر', 'بلتستان']);
    } else {
      AddresssetOption2List([]);
    }
  }, [AddressselectedOption1]);

  useEffect(() => {
    if (AddressselectedOption2 === 'ڈویژن 1') {
      AddresssetOption3List([
        'کراچی سینٹرل',
        'کورنگی',
        'ملیر ڈسٹرکٹ 1',
        'ملیر ڈسٹرکٹ  2',
      ]);
    } else if (AddressselectedOption2 === 'ڈویژن 2') {
      AddresssetOption3List(['کراچی ساؤتھ', 'کراچی ایسٹ', 'کراچی ویسٹ', 'کیماڑی']);
    } else if (AddressselectedOption2 === 'قلات') {
      AddresssetOption3List(['لسبیلہ', 'قلات', 'آواران', 'مستونگ', 'خضدار', 'سوراب']);
    } else if (AddressselectedOption2 === 'مکران') {
      AddresssetOption3List(['گوادر', 'کیچ', 'پنجگور']);
    } else if (AddressselectedOption2 === 'کوئٹہ') {
      AddresssetOption3List(['کوئٹہ', 'پشین', 'قلعہ عبد اللہ', 'چمن']);
    } else if (AddressselectedOption2 === 'ژوب') {
      AddresssetOption3List(['ژوب', 'شیرانی', 'قلعہ سیف اللہ']);
    } else if (AddressselectedOption2 === 'سبی') {
      AddresssetOption3List(['سبی', 'ہرنائی', 'زیارت', 'ڈیرہ بگٹی', 'کوہلو']);
    } else if (AddressselectedOption2 === 'رخشان') {
      AddresssetOption3List(['چاغی', 'واشک', 'نوشکی', 'خاران']);
    } else if (AddressselectedOption2 === 'نصیر آباد') {
      AddresssetOption3List([
        'نصیر آباد',
        'صحبت پور',
        'جعفر آباد',
        'جھل مگسی',
        'کچھی',
      ]);
    } else if (AddressselectedOption2 === 'لورالائی') {
      AddresssetOption3List(['لورالائی', 'بارکھان', 'موسیٰ خیل', 'دوکی']);
    } else if (AddressselectedOption2 === 'حیدر آباد') {
      AddresssetOption3List([
        'حیدر آباد',
        'جامشورو',
        'ٹنڈو محمد خان',
        'ٹنڈو الہیار',
        'دادو',
        'مٹیاری',
      ]);
    } else if (AddressselectedOption2 === 'بنبھور') {
      AddresssetOption3List(['بدین', 'سجاول', 'ٹھٹہ']);
    } else if (AddressselectedOption2 === 'میرپورخاص') {
      AddresssetOption3List(['میرپورخاص', 'عمر کوٹ', 'تھر پارکر']);
    } else if (AddressselectedOption2 === 'نواب شاہ') {
      AddresssetOption3List(['نوابشاہ', 'سانگھڑ', 'نوشہرو فیروز']);
    } else if (AddressselectedOption2 === 'سکھر') {
      AddresssetOption3List(['سکھر', 'گھوٹکی', 'خیرپور میرس']);
    } else if (AddressselectedOption2 === 'لاڑکانہ') {
      AddresssetOption3List([
        'لاڑکانہ',
        'جیکب آباد',
        'شکار پور',
        'کشمور',
        'قمبر شہداد کوٹ',
      ]);
    } else if (AddressselectedOption2 === 'بہاولپور') {
      AddresssetOption3List(['بہاولپور', ' بہاولنگر', ' رحیم یار خان']);
    } else if (AddressselectedOption2 === 'ملتان') {
      AddresssetOption3List(['ملتان', 'لودھراں ', 'وہاڑی ', 'خانیوال']);
    } else if (AddressselectedOption2 === 'ڈیرہ غازی خان') {
      AddresssetOption3List(['ڈیرہ غازی خان', 'لیہ ', 'راجن پور', 'مظفر گڑھ']);
    } else if (AddressselectedOption2 === 'سرگودھا') {
      AddresssetOption3List(['سرگودھا', 'بھکر ', 'خوشاب ', 'میانوالی']);
    } else if (AddressselectedOption2 === 'فیصل آباد') {
      AddresssetOption3List(['ٹوبہ', 'فیصل آباد', ' جھنگ', 'چنیوٹ']);
    } else if (AddressselectedOption2 === 'ساہیوال') {
      AddresssetOption3List(['ساہیوال', ' اوکاڑہ', ' پاکپتن']);
    } else if (AddressselectedOption2 === 'گوجرانوالہ') {
      AddresssetOption3List([
        'گجرات',
        ' گوجرانوالہ',
        ' سیالکوٹ',
        'حافظ آباد',
        'منڈی بہاؤالدین  ',
        'نارووال',
      ]);
    } else if (AddressselectedOption2 === 'لاہور') {
      AddresssetOption3List(['لاہور', ' شیخوپورہ', ' ننکانہ', ' قصور']);
    } else if (AddressselectedOption2 === 'راولپنڈی') {
      AddresssetOption3List(['اٹک', ' چکوال', ' جہلم', 'راولپنڈی ']);
    } else if (AddressselectedOption2 === 'اسلام آباد') {
      AddresssetOption3List(['اسلام آباد']);
    } else if (AddressselectedOption2 === 'پشاور') {
      AddresssetOption3List(['پشاور', ' چارسدہ', ' خیبر', 'مہمند ایجنسی ', 'نوشہرہ']);
    } else if (AddressselectedOption2 === 'مالاکنڈ') {
      AddresssetOption3List([
        'باجوڑ',
        ' بونیر',
        ' چترال لوئر',
        'چترال اپر ',
        'مالاکنڈ',
        'شانگلہ',
        'سوات',
        'اپردیر',
      ]);
    } else if (AddressselectedOption2 === 'ہزارہ') {
      AddresssetOption3List([
        'مانسہرہ',
        ' ایبٹ آباد',
        ' بٹگرام',
        'ہری پور ',
        'کولائی پلاس',
        'لوئر کوہستان',
        'تورغر',
        'اپر کوہستان',
      ]);
    } else if (AddressselectedOption2 === 'بنوں') {
      AddresssetOption3List(['بنوں', ' لکی مروت', ' نارتھ وزیرستان']);
    } else if (AddressselectedOption2 === 'ڈیرہ اسماعیل خان') {
      AddresssetOption3List(['ڈیرہ اسماعیل خان', ' ساؤتھ وزیرستان', ' ٹانک ']);
    } else if (AddressselectedOption2 === 'کوہاٹ') {
      AddresssetOption3List(['ہنگو', ' کرک', ' کوہاٹ', 'کرم ', 'اورکزئی']);
    } else if (AddressselectedOption2 === 'مردان') {
      AddresssetOption3List(['مردان', ' صوابی']);
    } else if (AddressselectedOption2 === 'گلگت') {
      AddresssetOption3List(['گلگت', ' غذر', ' ہنزہ', 'نگر ']);
    } else if (AddressselectedOption2 === 'دیامیر') {
      AddresssetOption3List(['دیامیر', ' درل', ' تنگیر', 'استور ']);
    } else if (AddressselectedOption2 === 'بلتستان') {
      AddresssetOption3List(['گھانچی', ' اسکردو', ' شگر']);
    } else if (AddressselectedOption2 === 'مظفرآباد') {
      AddresssetOption3List(['نیلم', ' ہٹیاں', ' مظفرآباد']);
    } else if (AddressselectedOption2 === 'میرپور') {
      AddresssetOption3List(['میرپور', ' بھمبر', ' کوٹلی']);
    } else if (AddressselectedOption2 === 'پونچھ') {
      AddresssetOption3List(['باغ', ' حویلی', ' پونچھ', 'سدھنوتی ']);
    } else if (AddressselectedOption2 === 'اسلام آباد') {
      AddresssetOption3List(['اسلام آباد']);
    } else {
      AddresssetOption3List([]);
    }
  }, [AddressselectedOption2]);

  useEffect(() => {
    if (selectedOption1 === 'کراچی') {
      setOption2List(['ڈویژن 1', 'ڈویژن 2']);
    } else if (selectedOption1 === 'بلوچستان') {
      setOption2List([
        'قلات',
        'مکران',
        'کوئٹہ',
        'ژوب',
        'سبی',
        'رخشان',
        'نصیر آباد',
        'لورالائی',
      ]);
    } else if (selectedOption1 === 'سندھ') {
      setOption2List([
        'حیدر آباد',
        'بنبھور',
        'میرپورخاص',
        'نواب شاہ',
        'سکھر',
        'لاڑکانہ',
      ]);
    } else if (selectedOption1 === 'پنجاب') {
      setOption2List([
        'بہاولپور',
        'ملتان',
        'لاہور',
        'ساہیوال',
        'ڈیرہ غازی خان',
        'راولپنڈی',
        'فیصل آباد',
        'گوجرانوالہ',
        'سرگودھا',
        , 'گجرات',
      ]);
    } else if (selectedOption1 === 'کے پی کے') {
      setOption2List([
        'پشاور',
        'مالاکنڈ',
        'ڈیرہ اسماعیل خان',
        'مردان',
        'ہزارہ',
        'کوہاٹ',
        'بنوں',
      ]);
    } else if (selectedOption1 === 'اسلام آباد') {
      setOption2List(['اسلام آباد']);
    } else if (selectedOption1 === 'کشمیر') {
      setOption2List(['میرپور', 'مظفرآباد', 'پونچھ']);
    } else if (selectedOption1 === 'گلگت') {
      setOption2List(['گلگت', 'دیامیر', 'بلتستان']);
    } else {
      setOption2List([]);
    }
  }, [selectedOption1]);

  useEffect(() => {
    if (selectedOption2 === 'ڈویژن 1') {
      setOption3List([
        'کراچی سینٹرل',
        'کورنگی',
        'ملیر ڈسٹرکٹ 1',
        'ملیر ڈسٹرکٹ  2',
      ]);
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
      setOption3List([
        'نصیر آباد',
        'صحبت پور',
        'جعفر آباد',
        'جھل مگسی',
        'کچھی',
      ]);
    } else if (selectedOption2 === 'لورالائی') {
      setOption3List(['لورالائی', 'بارکھان', 'موسیٰ خیل', 'دوکی']);
    } else if (selectedOption2 === 'حیدر آباد') {
      setOption3List([
        'حیدر آباد',
        'جامشورو',
        'ٹنڈو محمد خان',
        'ٹنڈو الہیار',
        'دادو',
        'مٹیاری',
      ]);
    } else if (selectedOption2 === 'بنبھور') {
      setOption3List(['بدین', 'سجاول', 'ٹھٹہ']);
    } else if (selectedOption2 === 'میرپورخاص') {
      setOption3List(['میرپورخاص', 'عمر کوٹ', 'تھر پارکر']);
    } else if (selectedOption2 === 'نواب شاہ') {
      setOption3List(['نوابشاہ', 'سانگھڑ', 'نوشہرو فیروز']);
    } else if (selectedOption2 === 'سکھر') {
      setOption3List(['سکھر', 'گھوٹکی', 'خیرپور میرس']);
    } else if (selectedOption2 === 'لاڑکانہ') {
      setOption3List([
        'لاڑکانہ',
        'جیکب آباد',
        'شکار پور',
        'کشمور',
        'قمبر شہداد کوٹ',
      ]);
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
      setOption3List([
        'گجرات',
        ' گوجرانوالہ',
        ' سیالکوٹ',
        'حافظ آباد',
        'منڈی بہاؤالدین  ',
        'نارووال',
      ]);
    } else if (selectedOption2 === 'لاہور') {
      setOption3List(['لاہور', ' شیخوپورہ', ' ننکانہ', ' قصور']);
    } else if (selectedOption2 === 'راولپنڈی') {
      setOption3List(['اٹک', ' چکوال', ' جہلم', 'راولپنڈی ']);
    } else if (selectedOption2 === 'اسلام آباد') {
      setOption3List(['اسلام آباد']);
    } else if (selectedOption2 === 'پشاور') {
      setOption3List(['پشاور', ' چارسدہ', ' خیبر', 'مہمند ایجنسی ', 'نوشہرہ']);
    } else if (selectedOption2 === 'مالاکنڈ') {
      setOption3List([
        'باجوڑ',
        ' بونیر',
        ' چترال لوئر',
        'چترال اپر ',
        'مالاکنڈ',
        'شانگلہ',
        'سوات',
        'اپردیر',
      ]);
    } else if (selectedOption2 === 'ہزارہ') {
      setOption3List([
        'مانسہرہ',
        ' ایبٹ آباد',
        ' بٹگرام',
        'ہری پور ',
        'کولائی پلاس',
        'لوئر کوہستان',
        'تورغر',
        'اپر کوہستان',
      ]);
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

  const [name, setname] = useState('');
  const [fathername, setfathername] = useState('');
  const [age, setage] = useState('');
  const [cnic, setcnic] = useState('');
  const [mobile, setmobile] = useState('');
  const [house, sethouse] = useState('');
  const [address, setaddress] = useState('');
  const [addresscity, addresssetcity] = useState('');
  const [jamia, setjamia] = useState('');
  const [city, setcity] = useState('');
  const [islamiceducation, setislamiceducation] = useState('');
  const [education, seteducation] = useState('');
  const [date, setDate] = useState(new Date());
  const [hafiz, sethafiz] = useState('منتخب کریں');
  const [status, setstatus] = useState('منتخب کریں');
  const [manager, setmanager] = useState('منتخب کریں');
  const [group, setgroup] = useState('منتخب کریں');
  const [picture, setpicture] = useState(false);
  const [cnicpicture, setcnicpicture] = useState('');
  const [formpicture, setformpicture] = useState('');
  const [profile, setprofile] = useState('');
  const [CNIC, setCNIC] = useState('');
  const [Entryform, setEntryform] = useState('');
  const [uploadpic, setuploadpic] = useState(false);
  const [uploadcnic, setuploadcnic] = useState(false);
  const [uploadform, setuploadform] = useState(false);
  const [visible, setVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const selectImage = () => {
    const options = {
      title: 'Select an image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // set the selected image
        setSelectedImage(response);
        // console.log(response);
      }
    });
  };

  const UploadnewImage = async () => {
    console.log(selectedImage);
    if (isConnected == true) {
      if (selectedImage) {
        setuploadpic(true);
        const reference = storage().ref(selectedImage.assets[0].fileName);
        const pathToFile = selectedImage.assets[0].uri;
        await reference.putFile(pathToFile);
      }
      if (selectedImage) {
        const profilepic = await storage()
          .ref(selectedImage.assets[0].fileName)
          .getDownloadURL();
        setprofile(profilepic);
        console.log(profile);
      } else {
        Alert.alert(
          '⚠️ WARNING',
          'First Select The Picture Then Click On Upload',
        );
      }
    } else {
      Alert.alert('⚠️ WARNING', 'No Internet Connection');
    }
  };

  const OpenCameracnic = () => {
    const options = {
      title: 'Select an image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // set the selected image
        setcnicpicture(response);
        // console.log(response);
      }
    });
  };

  const UploadImagecnic = async () => {
    console.log(cnicpicture);
    if (isConnected == true) {
      if (cnicpicture) {
        setuploadcnic(true);
        const reference = storage().ref(cnicpicture.assets[0].fileName);
        const pathToFile = cnicpicture.assets[0].uri;
        await reference.putFile(pathToFile);
      }
      if (cnicpicture) {
        const cnicpic = await storage()
          .ref(cnicpicture.assets[0].fileName)
          .getDownloadURL();
        setCNIC(cnicpic);
        console.log(CNIC);
      } else {
        Alert.alert(
          '⚠️ WARNING',
          'First Select The Picture Then Click On Upload',
        );
      }
    } else {
      Alert.alert('⚠️ WARNING', 'No Internet Connection');
    }
  };

  const OpenCameraform = () => {
    const options = {
      title: 'Select an image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };
    launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        // set the selected image
        setformpicture(response);
        // console.log(response);
      }
    });
  };

  // const OpenCameraform = async () => {
  //   const formresult = await launchImageLibrary({ mediaType: 'photo' });
  //   setformpicture(formresult)
  // }
  const UploadImageform = async () => {
    console.log(formpicture);
    if (isConnected == true) {
      if (formpicture) {
        setuploadform(true);
        const reference = storage().ref(formpicture.assets[0].fileName);
        const pathToFile = formpicture.assets[0].uri;
        await reference.putFile(pathToFile);
      }
      if (formpicture) {
        const formpic = await storage()
          .ref(formpicture.assets[0].fileName)
          .getDownloadURL();
        setEntryform(formpic);
        console.log(Entryform);
      } else {
        Alert.alert(
          '⚠️ WARNING',
          'First Select The Picture Then Click On Upload',
        );
      }
    } else {
      Alert.alert('⚠️ WARNING', 'No Internet Connection');
    }
  };
  const NameChange = newname => {
    setname(newname);
  };
  const FatherNameChange = newfathername => {
    setfathername(newfathername);
  };
  const AgeChange = newage => {
    setage(newage);
  };
  const CnicChange = newcnic => {
    setcnic(newcnic);
  };
  const MobileChange = newmobile => {
    setmobile(newmobile);
  };
  const HouseChange = newhouse => {
    sethouse(newhouse);
  };
  const AddressChange = newaddress => {
    setaddress(newaddress);
  };
  const AddressCityChange = newaddresscity => {
    addresssetcity(newaddresscity);
  };
  const JamiaChange = newjamia => {
    setjamia(newjamia);
  };
  const CityChange = newcity => {
    setcity(newcity);
  };
  const IslamiceducationChange = newislamiceducation => {
    setislamiceducation(newislamiceducation);
  };
  const EducationChange = neweducation => {
    seteducation(neweducation);
  };
  const DateChange = newDate => {
    setDate(newDate);
  };

  const check = async () => {
    if (isConnected == false) {
      Alert.alert('⚠️ WARNING', 'No Internet Connection');
    } else if (picture === '') {
      Alert.alert('⚠️ WARNING', 'Please Select Picture');
    } else if (uploadpic == false) {
      Alert.alert('⚠️ WARNING', 'Please Click On Upload Picture');
    } else if (name.trim() === '') {
      Alert.alert('⚠️ WARNING', 'Please Enter Your Name');
    } else if (fathername.trim() === '') {
      Alert.alert('⚠️ WARNING', 'Please Enter Your Father Name');
    } else if (age.trim() === '') {
      Alert.alert('⚠️ WARNING', 'Please Enter Your Age');
    } else if (cnic.trim() === '') {
      Alert.alert('⚠️ WARNING', 'Please Enter Your CNIC');
    } else if (cnic.length < 13) {
      Alert.alert('⚠️ WARNING', 'Invalid CNIC');
    } else if (cnicpicture === '') {
      Alert.alert('⚠️ WARNING', 'Please Select CNIC Picture');
    } else if (uploadcnic == false) {
      Alert.alert('⚠️ WARNING', 'Please Click On Upload CNIC');
    } else if (mobile.trim() === '') {
      Alert.alert('⚠️ WARNING', 'Please Enter Mobile No.');
    } else if (mobile.length < 11) {
      Alert.alert('⚠️ WARNING', 'Invalid Mobile No.');
    } else if (house.trim() === '') {
      Alert.alert('⚠️ WARNING', 'Please Enter House Phone No.');
    } else if (house.length < 11) {
      Alert.alert('⚠️ WARNING', 'Invalid House No.');
    } else if (mobile.trim() === house.trim()) {
      Alert.alert('⚠️ WARNING', 'Mobile & House No. Are Same');
    } else if (formpicture === '') {
      Alert.alert('⚠️ WARNING', 'Please Select Entry Form Picture');
    } else if (uploadform == false) {
      Alert.alert('⚠️ WARNING', 'Please Click on Upload Form');
    } else if (address.trim() === '') {
      Alert.alert('⚠️ WARNING', 'Please Enter Your Address');
    } else if (AddressselectedOption1 === '' || AddressselectedOption1 === 'صوبہ') {
      Alert.alert('⚠️ WARNING', 'Please Select Address Province');
    } else if (AddressselectedOption2 === '' || AddressselectedOption2 === 'ڈویژن') {
      Alert.alert('⚠️ WARNING', 'Please Select Address Division');
    } else if (AddressselectedOption3 === '' || AddressselectedOption3 === 'ڈسٹرکٹ') {
      Alert.alert('⚠️ WARNING', 'Please Select Address District');
    } else if (addresscity.trim() === '') {
      Alert.alert('⚠️ WARNING', 'Please Enter Your Address City');
    } else if (jamia.trim() === '') {
      Alert.alert('⚠️ WARNING', 'Please Enter Jamia Name/Area');
    } else if (selectedOption1 === '' || selectedOption1 === 'صوبہ') {
      Alert.alert('⚠️ WARNING', 'Please Select Province');
    } else if (selectedOption2 === '' || selectedOption2 === 'ڈویژن') {
      Alert.alert('⚠️ WARNING', 'Please Select Division');
    } else if (selectedOption3 === '' || selectedOption3 === 'ڈسٹرکٹ') {
      Alert.alert('⚠️ WARNING', 'Please Select District');
    } else if (city.trim() === '') {
      Alert.alert('⚠️ WARNING', 'Please Enter Your City');
    } else if (islamiceducation.trim() === '') {
      Alert.alert('⚠️ WARNING', 'Please Enter Your Islamic Education');
    } else if (education.trim() === '') {
      Alert.alert('⚠️ WARNING', 'Please Enter Your Education');
    } else if (hafiz === 'منتخب کریں') {
      Alert.alert('⚠️ WARNING', 'Please Select Hafiz');
    } else if (status === 'منتخب کریں') {
      Alert.alert('⚠️ WARNING', 'Please Select Status');
    } else if (manager === 'منتخب کریں') {
      Alert.alert('⚠️ WARNING', 'Please Select Manager');
    } else if (group === 'منتخب کریں') {
      Alert.alert('⚠️ WARNING', 'Please Select Group');
    }
    else if (profile == '' || CNIC == '' || Entryform == '') {
      Alert.alert('⚠️ WARNING', 'Your Pictures are downloading,Try After Few Seconds');
      console.log(profile);
      console.log(CNIC);
      console.log(Entryform);
      return;
    }
    else {
      const collectionRef = firestore()
        .collection('users')
        .add({
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
          AddressProvince: AddressselectedOption1,
          AddressDivision: AddressselectedOption2,
          AddressDistrict: AddressselectedOption3,
          AddressCity: addresscity,
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
          statusReason: '',
          CreatedAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
      Alert.alert('🎉 CONGTRATS', 'YOUR FORM HAS BEEN SUBMITTED');
      navigation.navigate('Splash');
      console.log(profile);
      console.log(CNIC);
      console.log(Entryform);
    }
  };
  return (
    <Animatable.View animation={'zoomIn'} duration={2000} style={styles.main}>
      <Modal visible={visible} animationType="fade" transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          }}>
          {loading ? (
            <ActivityIndicator size="large" color="#ffffff" />
          ) : (
            <Text style={{ color: '#ffffff' }}>Loading...</Text>
          )}
        </View>
      </Modal>
      <View style={styles.submain}>
        <Text allowFontScaling={false} style={styles.heading}>
          MADANI QAFILA 12 MAH
        </Text>
        <Text allowFontScaling={false} style={styles.urduheading}>
          مدنی قافلہ 12ماہ
        </Text>
      </View>
      <ScrollView>
        <View style={styles.inputsgroup}>
          <View style={styles.field}>
            <Text allowFontScaling={false} style={styles.InputLable}>
              Picture
            </Text>
            <Text allowFontScaling={false} style={styles.InputLable}>
              تصویر
            </Text>
          </View>
          <View style={{ alignItems: 'center', marginTop: responsiveHeight(1) }}>
            <TouchableOpacity
              onPress={selectImage}
              style={{
                backgroundColor: '#135229',
                color: 'white',
                padding: 4,
                borderRadius: 8,
                width: responsiveWidth(35),
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
              }}>
              <Text
                allowFontScaling={false}
                style={{
                  color: '#fff',
                  fontWeight: '500',
                  letterSpacing: 0.3,
                  textAlign: 'center',
                  fontSize: responsiveFontSize(2),
                }}>
                Select Picture
              </Text>
            </TouchableOpacity>
            <View>
              {selectedImage ? (
                <Image
                  source={{ uri: selectedImage.assets[0].uri }}
                  style={{
                    width: responsiveWidth(30),
                    marginTop: responsiveHeight(2),
                    height: 100,
                    height: responsiveHeight(15),
                  }}
                />
              ) : null}
            </View>
            <TouchableOpacity
              onPress={() => {
                UploadnewImage();
              }}
              style={{
                backgroundColor: '#135229',
                marginTop: responsiveHeight(2),
                color: 'white',
                padding: 4,
                borderRadius: 8,
                width: responsiveWidth(35),
                alignContent: 'center',
              }}>
              <Text
                allowFontScaling={false}
                style={{
                  color: '#fff',
                  fontWeight: '500',
                  letterSpacing: 0.3,
                  textAlign: 'center',
                  fontSize: responsiveFontSize(2),
                }}>
                Upload Picture
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.field}>
            <Text allowFontScaling={false} style={styles.InputLable}>
              Name
            </Text>
            <Text allowFontScaling={false} style={styles.InputLable}>
              نام
            </Text>
          </View>
          <TextInput allowFontScaling={false}
            style={styles.password}
            value={name}
            onChangeText={NameChange}
          />
          <View style={styles.field}>
            <Text allowFontScaling={false} style={styles.InputLable}>
              Father Name
            </Text>
            <Text allowFontScaling={false} style={styles.InputLable}>
              ولدیت
            </Text>
          </View>
          <TextInput allowFontScaling={false}
            style={styles.password}
            value={fathername}
            onChangeText={FatherNameChange}
          />
          <View style={styles.field}>
            <Text allowFontScaling={false} style={styles.InputLable}>
              Age
            </Text>
            <Text allowFontScaling={false} style={styles.InputLable}>
              عمر
            </Text>
          </View>
          <TextInput allowFontScaling={false}
            style={styles.password}
            inputMode={'tel'}
            value={age}
            onChangeText={AgeChange}
          />
          <View style={styles.field}>
            <Text allowFontScaling={false} style={styles.InputLable}>
              CNIC No.
            </Text>
            <Text allowFontScaling={false} style={styles.InputLable}>
              شناختی کارڈ نمبر
            </Text>
          </View>
          <TextInput allowFontScaling={false}
            style={styles.password}
            inputMode={'tel'}
            value={cnic}
            onChangeText={CnicChange}
          />
          <View style={styles.field}>
            <Text allowFontScaling={false} style={styles.InputLable}>
              CNIC Picture*
            </Text>
            <Text allowFontScaling={false} style={styles.InputLable}>
              شناختی کارڈ کی تصویر
            </Text>
          </View>
          <View style={{ alignItems: 'center', marginTop: responsiveHeight(1) }}>
            <TouchableOpacity
              onPress={() => {
                OpenCameracnic();
              }}
              style={{
                backgroundColor: '#135229',
                color: 'white',
                padding: 4,
                borderRadius: 8,
                width: responsiveWidth(35),
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
              }}>
              <Text
                allowFontScaling={false}
                style={{
                  color: '#fff',
                  fontWeight: '500',
                  letterSpacing: 0.3,
                  textAlign: 'center',
                  fontSize: responsiveFontSize(2),
                }}>
                Select Picture
              </Text>
            </TouchableOpacity>
            {cnicpicture !== '' ? (
              <Image
                source={{ uri: cnicpicture.assets[0].uri }}
                style={{
                  marginTop: responsiveHeight(2),
                  width: responsiveWidth(30),
                  height: 100,
                  height: responsiveHeight(15),
                }}
              />
            ) : null}
            <TouchableOpacity
              onPress={() => {
                UploadImagecnic();
              }}
              style={{
                backgroundColor: '#135229',
                color: 'white',
                marginTop: responsiveHeight(2),
                padding: 4,
                borderRadius: 8,
                width: responsiveWidth(35),
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
              }}>
              <Text
                allowFontScaling={false}
                style={{
                  color: '#fff',
                  fontWeight: '500',
                  letterSpacing: 0.3,
                  textAlign: 'center',
                  fontSize: responsiveFontSize(2),
                }}>
                Upload CNIC
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.field}>
            <Text allowFontScaling={false} style={styles.InputLable}>
              Mobile No.
            </Text>
            <Text allowFontScaling={false} style={styles.InputLable}>
              موبائل نمبر
            </Text>
          </View>
          <TextInput allowFontScaling={false}
            style={styles.password}
            inputMode={'tel'}
            value={mobile}
            onChangeText={MobileChange}
          />
          <View style={styles.field}>
            <Text allowFontScaling={false} style={styles.InputLable}>
              House Phone No.
            </Text>
            <Text allowFontScaling={false} style={styles.InputLable}>
              گھر کا نمبر
            </Text>
          </View>
          <TextInput allowFontScaling={false}
            style={styles.password}
            inputMode={'tel'}
            value={house}
            onChangeText={HouseChange}
          />
          <View style={styles.field}>
            <Text allowFontScaling={false} style={styles.InputLable}>
              Entry Form Picture*
            </Text>
            <Text allowFontScaling={false} style={styles.InputLable}>
              داخلہ فارم کی تصویر
            </Text>
          </View>
          <View style={{ alignItems: 'center', marginTop: responsiveHeight(1) }}>
            <TouchableOpacity
              onPress={() => {
                OpenCameraform();
              }}
              style={{
                backgroundColor: '#135229',
                color: 'white',
                padding: 4,
                borderRadius: 8,
                width: responsiveWidth(35),
              }}>
              <Text
                allowFontScaling={false}
                style={{
                  color: '#fff',
                  fontWeight: '500',
                  letterSpacing: 0.3,
                  textAlign: 'center',
                  fontSize: responsiveFontSize(2),
                }}>
                Select Picture
              </Text>
            </TouchableOpacity>
            {formpicture !== '' ? (
              <Image
                source={{ uri: formpicture.assets[0].uri }}
                style={{
                  marginTop: responsiveHeight(2),
                  width: responsiveWidth(30),
                  height: 100,
                  height: responsiveHeight(15),
                }}
              />
            ) : null}
            <TouchableOpacity
              onPress={() => {
                UploadImageform();
              }}
              style={{
                backgroundColor: '#135229',
                color: 'white',
                padding: 4,
                marginTop: responsiveHeight(2),
                borderRadius: 8,
                width: responsiveWidth(35),
                justifyContent: 'center',
                alignItems: 'center',
                textAlignVertical: 'center',
              }}>
              <Text
                allowFontScaling={false}
                style={{
                  color: '#fff',
                  fontWeight: '500',
                  letterSpacing: 0.3,
                  textAlign: 'center',
                  fontSize: responsiveFontSize(2),
                }}>
                Upload Form
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.field}>
            <Text allowFontScaling={false} style={styles.InputLable}>
              Address
            </Text>
            <Text allowFontScaling={false} style={styles.InputLable}>
              گھر کا مکمل ایڈریس
            </Text>
          </View>
          <TextInput allowFontScaling={false}
            style={styles.password}
            value={address}
            onChangeText={AddressChange}
          />
          <View style={styles.field}>
            <Text allowFontScaling={false} style={styles.InputLable}>
              Address Province
            </Text>
            <Text allowFontScaling={false} style={styles.InputLable}>
              گھر کا صوبہ
            </Text>
          </View>
          <View style={styles.pickergroup}>
            <Picker
              selectedValue={AddressselectedOption1}
              onValueChange={(itemValue, itemIndex) =>
                AddresssetSelectedOption1(itemValue)
              }
              style={styles.picker}>
              <Picker.Item label="صوبہ" value="صوبہ" />
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
            <Text allowFontScaling={false} style={styles.InputLable}>
              Address Division
            </Text>
            <Text allowFontScaling={false} style={styles.InputLable}>
              گھر کا ڈویژن
            </Text>
          </View>
          <View style={styles.pickergroup}>
            <Picker
              selectedValue={AddressselectedOption2}
              onValueChange={(itemValue, itemIndex) =>
                AddresssetSelectedOption2(itemValue)
              }
              enabled={AddressselectedOption1 != null}
              style={styles.picker}>
              <Picker.Item label="ڈویژن" value={'ڈویژن'} />
              {Addressoption2List.map(option => (
                <Picker.Item key={option} label={option} value={option} />
              ))}
            </Picker>
          </View>
          <View style={styles.field}>
            <Text allowFontScaling={false} style={styles.InputLable}>
              Address District
            </Text>
            <Text allowFontScaling={false} style={styles.InputLable}>
              گھر کا ڈسٹرکٹ
            </Text>
          </View>
          <View style={styles.pickergroup}>
            <Picker
              selectedValue={AddressselectedOption3}
              onValueChange={(itemValue, itemIndex) =>
                AddresssetSelectedOption3(itemValue)
              }
              enabled={AddressselectedOption2 != null}
              style={styles.picker}>
              <Picker.Item label="ڈسٹرکٹ" value="ڈسٹرکٹ" />
              {Addressoption3List.map(option => (
                <Picker.Item key={option} label={option} value={option} />
              ))}
            </Picker>
          </View>
          <View style={styles.field}>
            <Text allowFontScaling={false} style={styles.InputLable}>
              Address City
            </Text>
            <Text allowFontScaling={false} style={styles.InputLable}>
              گھر کا شہر
            </Text>
          </View>
          <TextInput allowFontScaling={false}
            style={styles.password}
            value={addresscity}
            onChangeText={AddressCityChange}
          />
          <View style={styles.field}>
            <Text allowFontScaling={false} style={styles.InputLable}>
              Jamia name/area
            </Text>
            <Text allowFontScaling={false} style={styles.InputLable}>
              جامعۃالمدینہ کا نام/علاقہ
            </Text>
          </View>
          <TextInput allowFontScaling={false}
            style={styles.password}
            value={jamia}
            onChangeText={JamiaChange}
          />
          <View style={styles.field}>
            <Text allowFontScaling={false} style={styles.InputLable}>
              Province
            </Text>
            <Text allowFontScaling={false} style={styles.InputLable}>
              صوبہ
            </Text>
          </View>
          <View style={styles.pickergroup}>
            <Picker
              selectedValue={selectedOption1}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedOption1(itemValue)
              }
              style={styles.picker}>
              <Picker.Item label="صوبہ" value="صوبہ" />
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
            <Text allowFontScaling={false} style={styles.InputLable}>
              Division
            </Text>
            <Text allowFontScaling={false} style={styles.InputLable}>
              ڈویژن
            </Text>
          </View>
          <View style={styles.pickergroup}>
            <Picker
              selectedValue={selectedOption2}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedOption2(itemValue)
              }
              enabled={selectedOption1 != null}
              style={styles.picker}>
              <Picker.Item label="ڈویژن" value={'ڈویژن'} />
              {option2List.map(option => (
                <Picker.Item key={option} label={option} value={option} />
              ))}
            </Picker>
          </View>
          <View style={styles.field}>
            <Text allowFontScaling={false} style={styles.InputLable}>
              District
            </Text>
            <Text allowFontScaling={false} style={styles.InputLable}>
              ڈسٹرکٹ
            </Text>
          </View>
          <View style={styles.pickergroup}>
            <Picker
              selectedValue={selectedOption3}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedOption3(itemValue)
              }
              enabled={selectedOption2 != null}
              style={styles.picker}>
              <Picker.Item label="ڈسٹرکٹ" value="ڈسٹرکٹ" />
              {option3List.map(option => (
                <Picker.Item key={option} label={option} value={option} />
              ))}
            </Picker>
          </View>
          <View style={styles.field}>
            <Text allowFontScaling={false} style={styles.InputLable}>
              City
            </Text>
            <Text allowFontScaling={false} style={styles.InputLable}>
              شہر
            </Text>
          </View>
          <TextInput allowFontScaling={false}
            style={styles.password}
            value={city}
            onChangeText={CityChange}
          />
          <View style={styles.field}>
            <Text allowFontScaling={false} style={styles.InputLable}>
              Islamic Education
            </Text>
            <Text allowFontScaling={false} style={styles.InputLable}>
              دینی تعلیم
            </Text>
          </View>
          <TextInput allowFontScaling={false}
            style={styles.password}
            value={islamiceducation}
            onChangeText={IslamiceducationChange}
          />
          <View style={styles.field}>
            <Text allowFontScaling={false} style={styles.InputLable}>
              Education
            </Text>
            <Text allowFontScaling={false} style={styles.InputLable}>
              دنیاوی تعلیم
            </Text>
          </View>
          <TextInput allowFontScaling={false}
            style={styles.password}
            value={education}
            onChangeText={EducationChange}
          />
          <View style={styles.field}>
            <Text allowFontScaling={false} style={styles.InputLable}>
              Hafiz?
            </Text>
            <Text allowFontScaling={false} style={styles.InputLable}>
              حافظ ہیں؟
            </Text>
          </View>
          <View style={styles.pickergroup}>
            <Picker
              selectedValue={hafiz}
              onValueChange={itemValue => sethafiz(itemValue)}
              style={styles.picker}>
              <Picker.Item label="منتخب کریں" value="منتخب کریں" />
              <Picker.Item label="جی ہاں" value="جی ہاں" />
              <Picker.Item label="جی نہیں" value="جی نہیں" />
            </Picker>
          </View>
          <View style={styles.field}>
            <Text allowFontScaling={false} style={styles.InputLable}>
              Status
            </Text>
            <Text allowFontScaling={false} style={styles.InputLable}>
              اسٹیٹس
            </Text>
          </View>
          <View style={styles.pickergroup}>
            <Picker
              selectedValue={status}
              onValueChange={itemValue => setstatus(itemValue)}
              style={styles.picker}>
              <Picker.Item label="منتخب کریں" value="منتخب کریں" />
              <Picker.Item label="مدنی قافلہ" value="مدنی قافلہ" />
              <Picker.Item label="چھٹی" value="چھٹی" />
              <Picker.Item label="دار السنہ" value="دار السنہ" />
              <Picker.Item label="انفرادی جدول" value="انفرادی جدول" />
              <Picker.Item label="قافلہ کورس" value="قافلہ کورس" />
              <Picker.Item label="امیر قافلہ" value="امیر قافلہ" />
              <Picker.Item label="موقوف / چھوڑ گئے" value="موقوف / چھوڑ گئے" />
              <Picker.Item label="مکمل" value="مکمل" />
            </Picker>
          </View>
          <View style={styles.field}>
            <Text allowFontScaling={false} style={styles.InputLable}>
              Manager Name
            </Text>
            <Text allowFontScaling={false} style={styles.InputLable}>
              صوبائی ذمہ دار کا نام
            </Text>
          </View>
          <View style={styles.pickergroup}>
            <Picker
              selectedValue={manager}
              onValueChange={itemValue => setmanager(itemValue)}
              style={styles.picker}>
              <Picker.Item label="منتخب کریں" value="منتخب کریں" />
              <Picker.Item
                label="karachi/balochistan"
                value="khi/bal"
              />
              <Picker.Item label="sindh" value="sindh" />
              <Picker.Item label="upper punjab" value="upper punjab" />
              <Picker.Item label="lower punjab" value="lower punjab" />
              <Picker.Item label="kpk/kashmir" value="kpk/kashmir" />
            </Picker>
          </View>
          <View style={styles.field}>
            <Text allowFontScaling={false} style={styles.InputLable}>
              Group
            </Text>
            <Text allowFontScaling={false} style={styles.InputLable}>
              درجہ
            </Text>
          </View>
          <View style={styles.pickergroup}>
            <Picker
              allowFontScaling={false}
              selectedValue={group}
              onValueChange={itemValue => setgroup(itemValue)}
              style={styles.picker}>
              <Picker.Item label="منتخب کریں" value="منتخب کریں" />
              <Picker.Item label="Ashfaq" value="Ashfaq" />
              <Picker.Item label="Naeem ul Hasan" value="Naeem ul Hasan" />
              <Picker.Item label="Usman" value="Usman" />
              <Picker.Item label="Shan" value="Shan" />
              <Picker.Item label="Babar Shah" value="Babar Shah" />
              <Picker.Item label="Fida Hussain" value="Fida Hussain" />
              <Picker.Item label="Abid" value="Abid" />
              <Picker.Item label="Abdul Rauf" value="Abdul Rauf" />
              <Picker.Item label="Abdul Rehman" value="Abdul Rehman" />
              <Picker.Item label="Aqib" value="Aqib" />
              <Picker.Item label="Ahmad Deen" value="Ahmad Deen" />
              <Picker.Item label="Fuzail" value="Fuzail" />
              <Picker.Item label="Kamran" value="Kamran" />
              <Picker.Item label="Ali Hasan" value="Ali Hasan" />
              <Picker.Item label="Rashid Noori" value="Rashid Noori" />
              <Picker.Item label="Rashid Lahori" value="Rashid Lahori" />
              <Picker.Item label="Nawazish Madani" value="Nawazish Madani" />
              <Picker.Item label="Hasan Madani" value="Hasan Madani" />
            </Picker>
          </View>
          <View style={styles.field}>
            <Text allowFontScaling={false} style={styles.InputLable}>
              Travel date
            </Text>
            <Text allowFontScaling={false} style={styles.InputLable}>
              سفر شروع کرنے کی تاریخ
            </Text>
          </View>
          <View style={styles.fie}>
            <DatePicker
              style={styles.date}
              date={date}
              onDateChange={DateChange}
              mode="date"
              androidMode="spinner"
              textColor="#135229"
            />
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity onPress={check} style={styles.button}>
        <Text allowFontScaling={false} style={styles.buttontext}>
          SAVE
        </Text>
      </TouchableOpacity>
    </Animatable.View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'red',
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
    borderRadius: 12,
  },
  heading: {
    fontSize: responsiveFontSize(3.25),
    marginTop: responsiveHeight(1.75),
    color: '#135229',
  },
  urduheading: {
    fontSize: responsiveFontSize(3.25),
    marginTop: responsiveHeight(1),
    color: '#135229',
  },
  InputLable: {
    color: '#135229',
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
    borderColor: '#135229',
    borderWidth: 1.5,
    borderLeftWidth: 8,
    borderColor: '#135229',
    borderRadius: 8,
  },
  inputsgroup: {
    width: responsiveWidth(100),
    alignItems: 'center',
  },
  login: {
    height: responsiveHeight(5),
    width: responsiveWidth(80),
    padding: 8,
    borderColor: '#135229',
    color: '#135229',
    borderWidth: 1.5,
    marginTop: responsiveHeight(5),
    borderRadius: 8,
    alignSelf: 'center',
  },
  password: {
    height: responsiveHeight(5.5),
    width: responsiveWidth(80),
    padding: 7,
    paddingLeft: 12,
    color: 'black',
    borderColor: '#135229',
    borderWidth: 1.5,
    borderLeftWidth: 8,
    borderColor: '#135229',
    marginTop: responsiveHeight(1),
    borderRadius: 8,
    fontSize: responsiveFontSize(2),
  },
  pickergroup: {
    width: responsiveWidth(100),
    alignItems: 'center',
    borderColor: '#135229',
    borderWidth: 1.5,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(80),
    borderRadius: 8,
    marginTop: responsiveHeight(1),
    borderColor: '#135229',
    borderWidth: 1.5,
    borderLeftWidth: 8,
  },
  picker: {
    height: responsiveHeight(5.5),
    width: responsiveWidth(85),
    // fontSize: responsiveFontSize(2),
    // allowFontScaling: false,
  },
  button: {
    backgroundColor: '#135229',
    color: 'white',
    padding: 6,
    marginTop: responsiveHeight(3),
    marginBottom: responsiveHeight(3),
    borderRadius: 8,
    width: responsiveWidth(30),
    height: responsiveHeight(6),
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    textAlignVertical: 'center',
  },
  buttontext: {
    color: '#fff',
    fontWeight: '600',
    letterSpacing: 0.7,
    textAlign: 'center',
    fontSize: responsiveFontSize(2.5),
  },
});

export default Signup;
