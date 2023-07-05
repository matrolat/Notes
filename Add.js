import React from 'react';
import {SafeAreaView, StyleSheet, TextInput,View,Pressable,Text} from 'react-native';

export default function Add({navigation}) {

    const [title, onChangeTitle] = React.useState('Title');
    const [body, onChangeBody] = React.useState('Body');
  const [number, onChangeNumber] = React.useState('');

    function onPressAdd()
    {
        navigation.navigate('Start', { title: title,body: body })
    }
    // function onChangeTexty(e){
    //     alert(e.target.value);
    //     onChangeTitle(e.target.value);
    // }

  return (
    <View style={{backgroundColor:"#262626",flex:1}}>
      {/* <Text>Add</Text> */}
    <Text>{title}</Text>
      <TextInput
        style={styles.inputTitle}
        onChangeText={text => onChangeTitle(text)}
        placeholder={"Title"}
        placeholderTextColor={"#828282"}
      />
      <TextInput
        style={styles.inputBody}
        onChangeText={text => onChangeBody(text)}
        placeholder={"Body"}
        placeholderTextColor={"#828282"}
      />

        <Pressable onPress={onPressAdd} style={{height:50,backgroundColor:"red",marginHorizontal:20,marginTop:20,borderRadius:10,display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Text style={{color:"white",fontSize:20}}>Add</Text>
        </Pressable>
      
    </View>
  )
}

  const styles = StyleSheet.create({
    inputTitle: {
        height: 40,
        margin: 20,
    //   borderWidth: 1,
    borderRadius:12,
      padding: 10,
      backgroundColor:"#1B1B1B",
      color:"#828282"

    },
    inputBody: {
        height: 160,
        marginHorizontal: 20,
    //   borderWidth: 1,
    borderRadius:12,
      padding: 10,
      backgroundColor:"#1B1B1B",
      color:"#828282"

    },
  });