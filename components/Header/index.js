import React from 'react';
import { View, TouchableOpacity, Image, Linking } from 'react-native';
import styles from './style'

export default function Header(props) {
    return(
        <View style={styles.container}> 
        <TouchableOpacity onPress={()=>{
            Linking.openURL('https://www.tesla.com/')
        }}>   
            <Image
             style={styles.logo}
             source={require('../../assets/images/logo.png')}
             />
        </TouchableOpacity>
           
            <Image
            style={styles.menu}
            source={require('../../assets/images/menu.png')}
            />
        </View>
    );
};