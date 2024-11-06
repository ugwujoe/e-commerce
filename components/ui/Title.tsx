import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

type Props = {
    title: string;
}

const Title = ({title}: Props) => {
  return <Text style={styles.title}>{title}</Text>;
}

export default Title

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 15,
    },
})