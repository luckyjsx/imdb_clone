import { icons } from '@/constants/icons';
import React from 'react';
import { Image, StyleSheet, TextInput, View } from 'react-native';

interface Props {
  placeholder: string,
  onPress?: () => void,
  value?:string,
  onChangeText?:(text:string)=>void
}

const SearchBar = ({ onPress, placeholder,value ,onChangeText}:Props) => {
  return (
    <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4 '>
      <Image source={icons.search} className='size-5' resizeMode='contain' tintColor={"#AD8BFF"} />
      <TextInput
        value={value}
        onChangeText={onChangeText}
        onPress={onPress}
        placeholder={placeholder}
        className='text-white text-lg ml-3 w-[90%] '
        placeholderTextColor={"#A8B5DB"}
      />
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({})