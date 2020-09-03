import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {

const[ text1 , setText1] = useState(null);
const[ text2 , setText2] = useState(null);


return (
    <View style={styles.container}>


    <TextInput style = {styles.textStyle} placeholder = "Username " onChangeText = {(text) => setText1(text)} value= {text1} />

    <TextInput style = {styles.textStyle}   placeholder = "Password " onChangeText = {(text) => setText2(text)} value = {text2} secureTextEntry />
      
            <View style = {styles.loginBtn}>

                <Button style = {styles.loginBtn}

                title = "Login"

                onPress = { () => {

                  setText1("");
                  setText2("");
                }}

                />
            </View>

      

    <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 30
  },

  loginBtn:{
    width:"70%",
    borderRadius:25,
    height:50,
    alignItems:"center",
    justifyContent:"center",
    marginTop:40,
    marginBottom:20,
    padding: 20,
    fontSize:30
  },

  textStyle:{
    fontSize: 30,
    height:50,



  }


});
