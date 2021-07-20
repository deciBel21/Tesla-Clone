import React from 'react';
import {View ,Text, FlatList, Dimensions} from 'react-native';
import styles from './style'
import CarItem from '../CarItem/index'
import cars from './cars';

export default function CarsList(props){
    return(
        <View style={styles.container   }>  
           <FlatList
           data={cars}
           renderItem={({item}) => <CarItem car={item}/>}
           snapToAlignment={'start'}
           showsVerticalScrollIndicator={'false'}
           decelerationRate={'normal'}
           snapToInterval={Dimensions.get('screen').height}  
           />
        </View>
    );
};