import { View, Text, StyleSheet, TextInput} from 'react-native'
import React, { useState } from 'react'
import CustomInput from './CustomInput'
import CustomButton from '../ui/CustomButton'


export const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmailChange = (text: string) => {
        setEmail(text)
    };
    const handlePasswordChange = (text: string) => {
        setPassword(text)

    }
    const handleSubmit = () => {
      console.log({email,password});
    }
    const disabled = email.trim() === '' || password.trim() ==='';

    //console.log({email, password})
  return (
    <View style={styles.container}>
      <CustomInput
       label='Email'
        placeholder='Enter your email'
         keyboardType='email-address'
          value={email}
          onChangeText={handleEmailChange}
          />
          <CustomInput 
          label='password'
          placeholder='Enter your password'
           keyboardType='default'
            value={password}
            onChangeText={handlePasswordChange}
            />
            <CustomButton buttonTitle='Sign in' onPress={handleSubmit} disabled={disabled}/>

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        gap: 15,
        marginTop:20,
    }
})