import React, {useEffect} from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity} from 'react-native';

export default function BookAppointment({navigation}) {
  useEffect(() => {
      // setTimeout(() => {
        console.log("Hello World")
      // }, 1000);
  })

  return (
    <View style={{flex:1 , justifyContent:'center',alignItems:'center'}}>
      <TouchableOpacity style={{height:'5%', width:'80%', backgroundColor:'blue',
        justifyContent:'center',alignItems:'center',}}
        onPress={() => navigation.navigate('ViewDoctor')}
        >
            <Text style={{color:'white', fontSize:20}}>
                Goto View Doctor
            </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
