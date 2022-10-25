import React, { Component,useState } from 'react'
import { Text, View, StyleSheet, Image, TextInput, TouchableOpacity, KeyboardAvoidingView, SafeAreaView,Alert } from 'react-native'

const Signin=({navigation})=>{
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const loginUser=()=>{
       return fetch('http://192.168.0.102/Bao_Cao_Bao/Login.php', {
        method: 'POST',
         headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
 
    username: username,
 
    password: password
 
  })
 
}).then((response) => response.json())
      .then((responseJson) => {
 
        // If server response message same as Data Matched
       if(responseJson === 'Data Matched')
        {
            Alert.alert("Đăng nhập thành công");
            //Then open Profile activity and send user email to profile activity.
            navigation.navigate('HomeMain')
 
        }
        else{
          Alert.alert(responseJson);
        }
 
      }).catch((error) => {
        console.error(error);
      });
    }
    
        return (
            <SafeAreaView style={styles.container}>
                <KeyboardAvoidingView
                    style={styles.container}
                    keyboardVerticalOffset={100}
                >
                    <TouchableOpacity
                        onPress={() => { navigation.goBack() }}
                    >
                        <Image
                            source={require('../img/backicon.png')}
                            style={{ width: 50, height: 50, left: -150, top: -30}}
                        />
                    </TouchableOpacity>
                    <View>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#428FF5' }}>SIGN IN</Text>
                    </View>
                    <View style={styles.img}>
                        <Image
                            style={styles.tinyLogo}
                            source={require('../img/signin.png')}
                        />
                    </View>
                    <View>
                        <View style={styles.inputs}
                        >
                            <Image
                                style={styles.imageStyle}
                                source={require('../img/usericon.png')}

                            />
                            <TextInput
                                style={styles.inputtext}
                                placeholder="Email or User Name"
                                onChangeText={text => setUsername(text)}
                            />
                        </View>
                        <View style={styles.inputs}
                        >
                            <Image
                                style={styles.imageStyle}
                                source={require('../img/passwordicon.png')}

                            />
                            <TextInput
                                style={styles.inputtext}
                                placeholder="Password"
                                secureTextEntry={true}
                                onChangeText={text => setPassword(text)}
                            />
                        </View>

                    </View>
                    <TouchableOpacity
                        style={styles.loginbtn}
                        onPress={() => {
                            loginUser();
                          }}
                    >
                        <Text
                            style={{
                                color: '#fff',
                                fontWeight: 'bold',
                            }}
                        >Login</Text>
                    </TouchableOpacity>
                    <Text
                        style={{
                            marginVertical: 20,
                            color: '#428FF5',

                        }}

                    >Or, login with...</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity
                            style={styles.loginicon}
                        //onPress={() => { }}
                        >
                            <Image
                                style={styles.icon}
                                source={require('../img/facebookicon.png')}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.loginicon}
                        //onPress={() => { }}
                        >
                            <Image
                                style={styles.icon}
                                source={require('../img/googleicon.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </KeyboardAvoidingView>
            </SafeAreaView>
        )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tinyLogo: {
        width: 300,
        height: 300,
    },
    inputs: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#428FF5',
        borderWidth: 1.6,
        borderRadius: 25,
        marginVertical: 5,
    },
    inputtext: {
        width: 210,
        height: 50,
        fontWeight: "bold",
        color: '#B9B6BA',
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: 50,
        height: 50,
    },
    imageStyle: {
        marginHorizontal: 10,
        margin: 5,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
    loginbtn: {
        width: 250,
        height: 50,
        borderWidth: 1,
        borderColor: '#428FF5',
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 5,
        backgroundColor: '#428FF5'
    },
    loginicon: {
        width: 50,
        height: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 10,
    },
});
export default Signin;
