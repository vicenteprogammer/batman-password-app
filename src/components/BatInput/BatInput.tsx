import React from 'react';
import { TextInput, View } from 'react-native';

import { styles } from './styles';

interface PassType{
  pass: string
}

export function BatInput(props: PassType ) {
  return (
    <TextInput placeholder='Click for Generate' value={props.pass} style={styles.input}/>
  );
}