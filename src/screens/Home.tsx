import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar'
import { BatLogo } from '../components/BatLogo/BatLogo';
import { styles } from './styles';

export function Home() {
  return (
    <View style={styles.appContainer}>
        <View style={styles.logoContainer}>
          <BatLogo/>
        </View>
        <StatusBar style='auto'/>
    </View>
  );
}