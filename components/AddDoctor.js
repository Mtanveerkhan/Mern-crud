import React,{useEffect}from 'react';
import {Text, StyleSheet, View, Button, TouchableOpacity,} from 'react-native';
import { TextInput } from 'react-native-paper';


export default function AddDoctor({navigation}) {
    const [docname, setDocName] = React.useState('');

    useEffect(() => {
        setDocName('joya')
    })

  return (
    <View style={{flex:1 , alignItems:'center', marginTop:'1%',backgroundColor:'pink'}}>
        <TextInput
      label="Email"
    //   Type='outlined'
      value={docname}
      onChangeText={a => setDocName(a)}
      style={{height:50,width:'80%'}}
    />

    <Text>{docname}</Text>

      <TouchableOpacity style={{height:'5%', width:'80%', backgroundColor:'blue',
        justifyContent:'center',alignItems:'center',}}
        onPress={() => 
            navigation.navigate('BookAppointment')
            // setDocName('joya')
        }
        >
            <Text style={{color:'white', fontSize:20}}>
                Goto Book Appointment
            </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({});
