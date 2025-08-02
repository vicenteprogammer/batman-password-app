import React from 'react';
import { View, Pressable, Text } from 'react-native';

import { styles } from './styles';

export function BatButton() {
  return (
    <>
     <Pressable style={styles.button} onPress={()=> console.log('Im press')}>
        <Text style={styles.text} >GENERATE</Text>
     </Pressable>
     <Pressable style={styles.button} onPress={()=> console.log('Im press')}>
        <Text style={styles.text} >⚡COPY</Text>
     </Pressable>
    </>
  );
}