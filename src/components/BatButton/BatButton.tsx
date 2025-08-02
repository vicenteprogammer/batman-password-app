import React, { useState } from 'react';
import { View, Pressable, Text } from 'react-native';

import { styles } from './styles';
import { BatInput } from '../BatInput/BatInput';
import generatePass from '../../services/randomPass';
import * as Clipboard from 'expo-clipboard'



export function BatButton() {
    const [pass, setPass] = useState('')
    
    const handlePass = ()=>{
        let password = generatePass()
        setPass(password)
    }

    const handleCopy = ()=>{
        Clipboard.setStringAsync(pass)
    }

  return (
    <>
     <BatInput pass = {pass}/>
     <Pressable style={styles.button} onPress={handlePass}>
        <Text style={styles.text} >GENERATE</Text>
     </Pressable>
     <Pressable style={styles.button} onPress={handleCopy}>
        <Text style={styles.text} >⚡COPY</Text>
     </Pressable>
    </>
  );
}