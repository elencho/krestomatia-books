import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Names} from '../../enums'

import st from './style';

interface Props {
  name: string;
  title: string;
  navigation: NativeStackNavigationProp<any, any>;
}

const BookItem: React.FC<Props> = props => {
  const {name, title, navigation} = props;

  let imageUrl;
  if (name === Names.Grigol) {
    imageUrl = require('../../assets/book-screens/grigoli.jpg');
  } else if (name === Names.Abo) {
    imageUrl = require('../../assets/book-screens/abo.jpg');
  } else {
    imageUrl = require('../../assets/book-screens/shushaniki.jpg');
  }
  return (
    <View style={st.box}>
      <Text style={st.title}>{title}</Text>
      <Image source={imageUrl} style={st.startImage} resizeMode={'contain'} />

      <TouchableOpacity
        onPress={() =>
          navigation.navigate('BookSum', {title: title, name: name})
        }
        style={st.button}
        activeOpacity={0.7}>
        <Text style={st.title}>წაკითხვა</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookItem;
