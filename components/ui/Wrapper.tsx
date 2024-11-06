import { View, Text, StyleSheet } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { colors } from '@/constants';


const Wrapper = ({children}: PropsWithChildren) => {
  return (
    <View style={styles.container}>
        {children}</View>
  )
};

export default Wrapper
//rns
const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1
    }
});