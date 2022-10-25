import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tintuc from '../Home/Tintuc';
import XuHuong from '../Home/XuHuong';
import Theodoi from '../Home/Theodoi';
import Video from '../Home/Video';
import Setting from '../Home/Setting';
const Tab = createBottomTabNavigator();
const Tabs = ()=>{
    return(
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#fff',
                    borderRadius: 15,
                    height: 90,
                    ...styles.shadow,
                }
            }}
        >
            <Tab.Screen name='TinTuc' component={Tintuc}
                options={{
                    tabBarIcon: ({focused}) =>(
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image source={require('../img/tinmoiicon.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#5295FA': '#EFEFD8'
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? '#5295FA': '#EFEFD8',
                                    fontSize: 12
                                }}
                            >Tin Tức</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name='Theodoi' component={Theodoi}
                options={{
                    tabBarIcon: ({focused}) =>(
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image source={require('../img/theodoiicon.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#5295FA': '#EFEFD8'
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? '#5295FA': '#EFEFD8',
                                    fontSize: 12
                                }}
                            >Theo Dõi</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name='Video' component={Video}
                options={{
                    tabBarIcon: ({focused}) =>(
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image source={require('../img/videoicon.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#5295FA': '#EFEFD8'
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? '#5295FA': '#EFEFD8',
                                    fontSize: 12
                                }}
                            >Video</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name='XuHuong' component={XuHuong}
                options={{
                    tabBarIcon: ({focused}) =>(
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image source={require('../img/xuhuongicon.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#5295FA': '#EFEFD8'
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? '#5295FA': '#EFEFD8',
                                    fontSize: 12
                                }}
                            >Xu Hướng</Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen name='Setting' component={Setting}
                options={{
                    tabBarIcon: ({focused}) =>(
                        <View style={{alignItems: 'center', justifyContent: 'center', top: 5}}>
                            <Image source={require('../img/Settingicon.png')}
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#5295FA': '#EFEFD8'
                                }}
                            />
                            <Text
                                style={{
                                    color: focused ? '#5295FA': '#EFEFD8',
                                    fontSize: 12
                                }}
                            >Setting</Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
        
        
    )
}
const styles = StyleSheet.create({
    shadow:{
        shadowColor: '#7f5df0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5
    }
})
export default Tabs;