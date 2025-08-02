import React, { useState } from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import { BatLogo } from '../components/BatLogo/BatLogo';
import { styles } from './styles';
import { BatInput } from '../components/BatInput/BatInput';
import { BatButton } from '../components/BatButton/BatButton';

export function Home() {
  return (
    <View style={styles.appContainer}>
        <View style={styles.logoContainer}>
          <BatLogo/>
        </View>

        <View style={styles.inputContainer} >
          
          <BatButton/>
        </View>



        <StatusBar style='auto'/>
    </View>
  );
}