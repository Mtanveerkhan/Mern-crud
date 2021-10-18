import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity, TextInput} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';


export default function ViewDoctor({navigation}) {
    // const navigation = props.navigation;
    const [text, onChangeText] = React.useState('');
    const[getDocData,setgetDocData] = useState([])

    useEffect(() => {
      getData()
    }, [])

    const getData=async()=>{
      let tempdata = [];
    const cordinates = await firestore()
      .collection('docinfo')
      // .orderBy("exit_time", "asc")
      // .where('doccnic', '==', text)
      // .where("doccnic", "==", text + "\uf8ff")
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
          // console.log(doc.id, " => ", doc.data());
          let tempobj = {
              docname:doc.data().docname,
              doccontact:doc.data().doccontact,
              doccnic:doc.data().doccnic,
              docexperience:doc.data().docexperience,
              hospname:doc.data().hospname,
              day:doc.data().day,
              time:doc.data().time,
              hospital:doc.data().hospital
          };
            tempdata.push(tempobj);
        });
      })
      
      .catch(function (error) {
        console.log("Error getting documents: ", error);
      });

      setgetDocData(tempdata)
      console.log('Hehehehehehehuhuhuhuhuhu',getDocData)
    }
    
    return (

    <View style={{flex:1 , justifyContent:'center',alignItems:'center'}}>

        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder='Enter'
      />
      <Text>{text}</Text>
      {getDocData.map((person, index) => (
      <Text>{person.hospital.name}</Text>
    ))}
     
        <TouchableOpacity style={{height:'5%', width:'80%', backgroundColor:'blue',
        justifyContent:'center',alignItems:'center',}}
        onPress={() => getData()
          // navigation.navigate('AddDoctor')
        }
        >
            <Text style={{color:'white', fontSize:20}}>
               Goto Add Doctor
            </Text>
        </TouchableOpacity>

        {/* <Text style={{fontSize:20}}>دماغی بیماری کا علاج</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width:'50%'
  },
});


// const styles = StyleSheet.create({});
