import React, { Component } from 'react'
import { Text, View , Image, StyleSheet, TouchableOpacity} from 'react-native'

const Intro=({navigation})=>{
    return (
      <View style={styles.container}>
        <View>
            <Text style={{fontSize: 20, fontWeight:'bold', color: '#428FF5'}}>APP BÁO MỚI</Text>
        </View>
        <View style={styles.img}>
            <Image
                style={styles.tinyLogo}
                source={require('../img/intro.png')}
            />
        </View>
        <TouchableOpacity 
            style={{
                width: 270,
                height: 60,
                borderWidth: 1,
                borderColor: '#428FF5',
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 15,
                backgroundColor: '#428FF5',
            }}
            onPress={()=>{navigation.navigate('SignIn')}}
        >
            <Text style={{
                color: '#fff',
                fontWeight:'bold',
            }}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            style={{
                width: 270,
                height: 60,
                borderWidth: 1,
                borderColor: '#428FF5',
                borderRadius: 25,
                alignItems: 'center',
                justifyContent: 'center',
                marginVertical: 15,
                
            }}
            onPress={()=>{navigation.navigate('SignUp')}}    
        
        >
            <Text
            style={{
                color: '#428FF5',
                fontWeight:'bold',
            }}
            >Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity 
            
            onPress={()=>{navigation.navigate('HomeMain')}}    
        
        >
            <Text
            style={{
                color: '#428FF5',
                
            }}
            >Anonymous login</Text>
        </TouchableOpacity>
      </View>
    )
  }
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    img: {
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 15,
    },
    tinyLogo:{
        width: 300,
        height: 300,
    },
  });
  export default Intro;
  
