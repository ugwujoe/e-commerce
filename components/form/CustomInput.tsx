import { View, Text, StyleSheet, KeyboardTypeOptions,TextInput } from 'react-native'
import React from 'react'

import { colors } from '@/constants'

type Props = {
 placeholder: string
 value: string
 onChangeText: (text: string) => void
 keyboardType?: KeyboardTypeOptions
 label: string
 secureTextEntry?: boolean;

}
const CustomInput = ({
    placeholder,
    value,
    onChangeText,
    keyboardType,
    label,
    secureTextEntry,
} : Props) => {
  return (
   <View>
    <Text style={styles.label}>{label}</Text>
     <View style={styles.container}>
      <TextInput
      style={styles.input}
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      keyboardType={keyboardType}/>
    </View>
   </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({
    container: {
        width: '100%',
        borderWidth: 1,
        borderColor: colors.gray,
        borderRadius: 10,
        padding: 10,
        height: 55,
        justifyContent: 'center',
    },
    input: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        color: colors.dark
    },
 label: {
    color: colors.dark,
    fontSize: 15,
    marginBottom: 5,
    fontWeight: 'bold'
 },
})