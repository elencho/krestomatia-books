import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Names} from '../../enums';

import st from '../components/style';
interface Props {
  navigation: NativeStackNavigationProp<any, any>;
  title: string;
  name: string;
}

const BookSum: React.FC<Props> = props => {
  const {route, navigation} = props;
  const {title, name} = route.params;
  let imageUrl;
  if (name === Names.Grigol) {
    imageUrl = require('../../assets/book-screens/grigoli.jpg');
  } else if (name === Names.Abo) {
    imageUrl = require('../../assets/book-screens/abo.jpg');
  } else {
    imageUrl = require('../../assets/book-screens/shushaniki.jpg');
  }
  return (
    <View style={st.bookSum}>
      <Image source={imageUrl} style={st.bookImg} resizeMode={'contain'} />
      <TouchableOpacity
        onPress={() => navigation.navigate('Read', {title: title, name: name})}
        activeOpacity={0.7}
        style={st.buttonSmall}>
        <Text style={st.title}>სრულად</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} style={st.buttonSmall}>
        <Text style={st.title}>შინაარსი</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} style={st.buttonSmall}>
        <Text style={st.title}>მოკლე შინაარსი</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookSum;
