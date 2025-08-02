import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './styles';

export function BatInput() {
  return (
    <TextInput placeholder='PASS' style={styles.input}/>
  );
}