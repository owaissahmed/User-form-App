import {
    View,
    Text,
    Dimensions,
    StyleSheet,
    TouchableOpacity,
    TextInput,
    FlatList,
    Alert,
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
  import {Picker} from '@react-native-picker/picker';
  
  const KpkMoqoof = () => {
    const [khi1chutti, setKhi1chutti] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [selectedValue, setSelectedValue] = useState('Select Value');
    const [name, setname] = useState('');

    const NameChange = newname => {
      setname(newname);
    };
    useEffect(() => {
      const unsubscribe = firestore()
        .collection('users')
        .where('Group', '==', 'Babar Shah')
         .where('Status', 'in', ['چھوڑ گئے', 'موقوف'])
        .onSnapshot(querySnapshot => {
          const chuttiData = [];
          querySnapshot.forEach(documentSnapshot => {
            chuttiData.push({
              id: documentSnapshot.id,
              ...documentSnapshot.data(),
            });
          });
          setKhi1chutti(chuttiData);
        });
  
      return () => unsubscribe();
    }, []);
  
  
    return (
      <View style={styles.main}>
      
        {khi1chutti.length > 0 ? (
          <View>
            <View style={styles.FlatListVIew}>
              <FlatList
                data={khi1chutti}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={styles.DataView}
                    >
                    <View style={styles.DataView}>
                      <Text allowFontScaling={false} style={styles.Name}>
                        Name: {item.Name}
                      </Text>
                      <Text allowFontScaling={false} style={styles.Name}>
                        Phone: {item.MobileNo}
                      </Text>
                      <Text allowFontScaling={false} style={styles.Name}>
                        Status: {item.Status}
                      </Text>
                      <Text allowFontScaling={false} style={styles.Name}>
                    Father Name: {item.Fathername}
                    </Text>
                    <Text allowFontScaling={false} style={styles.Name}>
                    Jamia: {item.Jamia}
                    </Text>
                    <Text allowFontScaling={false} style={styles.Name}>
                    City: {item.City}
                    </Text>
                    </View>
                  </TouchableOpacity>
                )}
                keyExtractor={item => item.id}
              />
            </View>
          </View>
        ) : (
          <Text allowFontScaling={false} style={styles.NoData}>
            No Data!!
          </Text>
        )}
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    main: {
    backgroundColor: 'white',
    width: devicewidth,
    height: deviceheight,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical:responsiveHeight(10)
  },
  FlatListVIew: {
      width: responsiveWidth(90),
  },
  DataView: {
    backgroundColor: '#135229',
    borderRadius: 10,
    paddingVertical: responsiveHeight(0.5),
    marginVertical: responsiveHeight(0.5),
    color: 'white',
    textAlign: 'center',
    fontSize: responsiveFontSize(2.25),
  },
  Update: {
    backgroundColor: '#135229',
    borderRadius: 10,
    paddingVertical: responsiveHeight(0.5),
    marginVertical: responsiveHeight(0.5),
    color: 'white',
    textAlign: 'center',
    fontSize: responsiveFontSize(2.25),
    marginBottom:responsiveHeight(-0.5),
  },
  Name: {
      color: 'white',
      fontSize: responsiveFontSize(2.25),
      textAlign: 'center',
  },
  Phone: {
      color: 'white',
      fontSize: responsiveFontSize(2.25),
      textAlign: 'center',
  },
  NoData: {
      fontSize: responsiveFontSize(3),
      color: 'red',
  },
  password: {
    borderRadius: 10,
    paddingVertical: responsiveHeight(0.5),
    color: 'white',
    textAlign: 'center',
    fontSize: responsiveFontSize(2.25),
    borderWidth: 1.5,
    borderLeftWidth: 8,
    borderColor: '#135229',
    color: 'black',
    height: responsiveHeight(5),
  },
});


export default KpkMoqoof;