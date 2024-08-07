import { View, Text, Image, Dimensions, StyleSheet, TouchableOpacity, TextInput, Button, Alert, Modal, FlatList, ActivityIndicator } from 'react-native';
import React, { useEffect, useState } from 'react';
import { responsiveScreenFontSize, responsiveWidth } from 'react-native-responsive-dimensions';
import { responsiveHeight } from 'react-native-responsive-dimensions';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import firestore from '@react-native-firebase/firestore';
const devicewidth = Dimensions.get('window').width;
const deviceheight = Dimensions.get('window').height;
import {Picker} from '@react-native-picker/picker';

const NawazishInfiradi = () => {
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
        .where('Group', '==', 'Nawazish Madani')
        .where('Status', '==', 'انفرادی جدول')
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
  
    const handleSelectUser = user => {
      setSelectedUser(user);
      setname(user.statusReason);
    };
  
  
    const handleValueChange = value => {
      setSelectedValue(value);
    };
  
    const handleUpdateName = async () => {
      if (!selectedUser || selectedValue === 'Select Value'|| name.trim() === '')  {
        Alert.alert('Please select a value or Fill the Input');
        return;
      }
  
      const {id} = selectedUser;
      try {
        await firestore()
          .collection('users')
          .doc(id)
          .update({Status: selectedValue, statusReason: name,});
        setSelectedUser(null);
        setSelectedValue('Select Value');
      } catch (error) {
        console.log('Error updating name:', error);
      }
    };
  
    return (
      <View style={styles.main}>
        {selectedUser && (
          <View
            style={{
              backgroundColor: '#E1E0E4',
              width: responsiveWidth(70),
              borderRadius: 10,
              marginBottom: responsiveHeight(1),
            }}>
            <Picker
              selectedValue={selectedValue}
              onValueChange={handleValueChange}>
              <Picker.Item label="Select Value" value="Select Value" />
              <Picker.Item label="چھٹی" value="چھٹی" />
              <Picker.Item label="دار السنہ" value="دار السنہ" />
              <Picker.Item label="مدنی قافلہ" value="مدنی قافلہ" />
              <Picker.Item label="قافلہ کورس" value="قافلہ کورس" />
              <Picker.Item label="امیر قافلہ" value="امیر قافلہ" />

            </Picker>
            <TextInput
            allowFontScaling={false}
            style={styles.password}
            value={name}
            onChangeText={NameChange}
          />
            <TouchableOpacity style={styles.Update} onPress={handleUpdateName}>
              <Text allowFontScaling={false} style={styles.Phone}>
                Update
              </Text>
            </TouchableOpacity>
          </View>
        )}
        {khi1chutti.length > 0 ? (
          <View>
            <View style={styles.FlatListVIew}>
              <FlatList
                data={khi1chutti}
                renderItem={({item}) => (
                  <TouchableOpacity
                    style={styles.DataView}
                    onPress={() => handleSelectUser(item)}>
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
      paddingVertical: responsiveHeight(10),
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
      marginBottom: responsiveHeight(-0.5),
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
  

export default NawazishInfiradi