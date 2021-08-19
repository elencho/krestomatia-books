import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Names, BookType} from '../../enums';
import {Books} from '../../data';

import st from '../components/style';
interface Props {
  navigation: NativeStackNavigationProp<any, any>;
  title: string;
  name: string;
  type: string;
}

const TextScreen: React.FC<Props> = props => {
  const {route, navigation} = props;
  const {title, name, type, text} = route.params;
  let data;
  if (name === Names.Grigol) {
    data = Books[2];
  } else if (name === Names.Abo) {
    data = Books[1];
  } else {
    data = Books[0];
  }
  return (
    <View style={st.textBox}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={st.text}>{text}</Text>
      </ScrollView>
    </View>
  );
};

export default TextScreen;
