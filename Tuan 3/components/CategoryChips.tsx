import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CategoryChips = () => {
  return (
    <View style = {styles.container}>
        <View style = {styles.chips}>
            <Text>Mới về</Text>
        </View>
        <View style = {styles.chips}>
            <Text>Thịnh hành</Text>
        </View>
        <View style = {styles.chips}>
            <Text>Góc học tập</Text>
        </View>
        <View style = {styles.chips}>
            <Text>Phi hư cấu</Text>
        </View>
        <View style = {styles.chips}>
            <Text>Du ký</Text>
        </View>
        <View style = {styles.chips}>
            <Text>Tản văn</Text>
        </View>
    </View>
    
  )
}

export default CategoryChips
const styles = StyleSheet.create({
    container: {
        flexDirection :'row',
        flexWrap: 'wrap',
        gap: 8,
        alignContent: 'flex-start'
    },
    chips: {
        paddingHorizontal: 14,
        paddingVertical: 9,
        borderRadius: 10,
        backgroundColor: '#dbeafe',
        borderColor: '#93c5fd',
        borderWidth: 1
    }
})