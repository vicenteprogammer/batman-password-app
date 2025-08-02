import React from 'react';
import { View, Image, Text } from 'react-native';
import { styles } from './styles';
import batLogo from '../../../assets/batlogo.png'

export function BatLogo() {
  return (
    <>
        <Text style={styles.textStyle} >Bat Pass Generator</Text>
        <Image style={styles.imageStyle} source={batLogo} />
    </>
  );
}