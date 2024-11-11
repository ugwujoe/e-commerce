import { View, Text, StyleSheet, TextInput} from 'react-native'
import React, { useState } from 'react'
import CustomInput from './CustomInput'
import CustomButton from '../ui/CustomButton'
import { validateEmail, validatePassword } from '@/utils'
import { Href, Link } from 'expo-router'

type Props = {
  register?: boolean;
}

export const LoginForm = ({register}: Props) => {
  const [values,setvalues] = useState ({
    email: '',
    password: '',
    name: ''
  }) 

    const [errorEmail, setErrorEmail] = useState('')
    const [errorName, setErrorName] = useState('')
    const [errorPassword, setErrorPassword] = useState('')
    const [secure, setSecure] = useState(true)

    const toggleSecure = () => setSecure((prev) => !prev);
    const handleChange = (inputName: string, text: string) => {
      setvalues((prev) => ({...prev, [inputName]: text}));
    };
    const {email, password, name} = values;

    
    const handleSubmit = () => {
      if(register && name.trim() ===''){
      setErrorName('please enter your name')
      return;
      }
      if (!validateEmail(email)) {
        setErrorEmail('Please enter a valid email address')
      }
      if(!validatePassword(password)) {
        setErrorPassword(
          'password must include at least one uppercase letter, one lowercase letter, one number, and one special character'
        );
        return
      }
      setvalues({
        email: '',
        password: '',
        name: ''
      });
      setErrorName('')
      setErrorEmail('');
      setErrorPassword('');

    }
    const disabled = email.trim() === '' || password.trim() ==='';
    const buttonTitle = register ? 'sign up' : 'sign in';
    const dontAlready = register ? 'Already' : "Don't";
    const registerLogin = register ? 'Login' : 'Register';
    const href: Href<string | object> = register ? '/login' : '/register';

    //console.log({email, password})
  return (
    <View style={styles.container}>
      {register && (
      <CustomInput
       label='Name'
        placeholder='Enter your full name'
         keyboardType='default'
          value={name}
          onChangeText={(text) => handleChange('name',text)}
          error={errorEmail}
          />
        )}
      <CustomInput
       label='Email'
        placeholder='Enter your email'
         keyboardType='email-address'
          value={email}
          onChangeText={(text) => handleChange('email',text)}
          error={errorEmail}
          />
          <CustomInput 
          label='password'
          placeholder='Enter your password'
           keyboardType='default'
            value={password}
            onChangeText={(text) => handleChange('password', text)}
            error={errorPassword}
            secureTextEntry={secure}
            toggleSecure={toggleSecure}
            password
            />
            <CustomButton 
            buttonTitle= {buttonTitle} 
            onPress={handleSubmit}
             disabled={disabled}
             />
          <Link href={href} asChild>
          <Text style={styles.account}>
              {dontAlready} have an account?<Text style={styles.register}>{registerLogin}</Text>
             </Text>
          </Link>
             

    </View>
  )
};


const styles = StyleSheet.create({
    container: {
        gap: 15,
        marginTop:20,
    },
    register: {
      color: 'blue',
    },
    account: {
      marginTop: 20,
      textAlign: 'center'
    }
})