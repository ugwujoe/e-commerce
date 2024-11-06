import { View, Text, Pressable, StyleSheet, ViewStyle, StyleProp } from 'react-native'
import React from 'react'
import { colors } from '@/constants'

type Props = {
    buttonTitle: string
    onPress: () => void
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
    color?: string
}

const CustomButton = ({buttonTitle,onPress,disabled,style, color}: Props) => {
  return (
    <Pressable 
    disabled={disabled}
    onPress={onPress}
    style={({pressed}) => [
        styles.Pressable,
        {opacity:pressed || disabled ? 0.5 : 1},
        style
    ]}>
    <Text style={[styles.title,{color}]}>{buttonTitle}</Text>
    </Pressable>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    Pressable: {
        height: 55,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: colors.yellow,

    },
    title: {
        fontSize: 18,
        fontWeight:'bold',
        color:colors.dark
    }
})