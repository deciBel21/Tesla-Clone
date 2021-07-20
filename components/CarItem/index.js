import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, Linking, Touchable } from 'react-native';
import styles from './style';
import StyledButton from '../CustomButton';

export default function CarItem(props){
    const {name, tagline, image, taglineCTA} = props.car;
    return(
        <View style={styles.carContainer}>
        <ImageBackground source={image}
        style={styles.image}
        />
        <View style={styles.titles}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.subtiltle}>{tagline}
            {' '}
            <TouchableOpacity
            onPress={() => {
               if(name=="Model S"){
                     Linking.openURL('https://www.tesla.com/models')
               }else if(name=="Model X"){
                     Linking.openURL('https://www.tesla.com/modelx')
               }else if(name=="Model Y"){
                     Linking.openURL('https://www.tesla.com/modely')
               }else{
                    Linking.openURL('https://www.tesla.com/model3')
                }
            }}
            >
            <Text style={styles.subtiltleCTA}>{taglineCTA}</Text>
            </TouchableOpacity>
            </Text>
        </View>
       <View style={styles.buttonContainer}>
       <StyledButton 
       type="primary" 
       content={"Custom Order"} 
       onPress={() =>{
           console.warn("custom order was pressed!");
       }}
       />
       <StyledButton
       type="secondary" 
       content={"Existing Inventory"} 
       onPress={() =>{
           console.warn("Existing Inventory was pressed!");
       }}
       />
       </View>

        <StatusBar style="auto" />
    </View>
    );
};