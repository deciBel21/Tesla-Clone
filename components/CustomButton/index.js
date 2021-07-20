import React from 'react';
import { Text, View, Pressable } from 'react-native';
import styles from './style';

export default function StyledButton(props){
    const {type, content, onPress} =props;
    const backgroundColor=type == 'primary' ? '#2E2E2E' : '#FFFFFFA6';
    const textColor=type== 'primary' ? '#FFFFFF': '#171A20';
    
    return(
        <View style={styles.container}>
           <Pressable
           style={[styles.button, {backgroundColor: backgroundColor}]}
           onPress={() => onPress()}
           >
           <Text style={[styles.text, {color: textColor}]}>{content}</Text>
           </Pressable>
        </View>
    );
};