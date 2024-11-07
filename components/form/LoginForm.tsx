import { View, Text, StyleSheet, TextInput} from 'react-native'
import React, { useState } from 'react'
import CustomInput from './CustomInput'
import CustomButton from '../ui/CustomButton'
import { validateEmail, validatePassword } from '@/utils'


export const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorEmail, setErrorEmail] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [secure, setSecure] = useState(true)

    const toggleSecure = () => setSecure((prev) => !prev);
    

    const handleEmailChange = (text: string) => {
        setEmail(text)
    };
    const handlePasswordChange = (text: string) => {
        setPassword(text)

    }
    const handleSubmit = () => {
      if (!validateEmail(email)) {
        setErrorEmail('Please enter a valid email address')
      }
      if(!validatePassword(password)) {
        setErrorPassword(
          'password must include at least one uppercase letter, one lowercase letter, one number, and one special character'
        );
        return
      }
      console.log({
        email,password
      });
      setEmail('')
      setPassword('')
      setErrorEmail('')
      setErrorPassword('')
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
          error={errorEmail}
          />
          <CustomInput 
          label='password'
          placeholder='Enter your password'
           keyboardType='default'
            value={password}
            onChangeText={handlePasswordChange}
            error={errorPassword}
            secureTextEntry={secure}
            toggleSecure={toggleSecure}
            password
            />
            <CustomButton 
            buttonTitle='Sign in' 
            onPress={handleSubmit}
             disabled={disabled}/>

    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        gap: 15,
        marginTop:20,
    }
})