import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
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

const Read: React.FC<Props> = props => {
  const {route, navigation} = props;
  const {title, name, type} = route.params;
  let data;
  if (name === Names.Grigol) {
    data = Books[2];
  } else if (name === Names.Abo) {
    data = Books[1];
  } else {
    data = Books[0];
  }
  return (
    <View>
      {(type === BookType.Full && (
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => 'key' + index}
          data={data.full}
          renderItem={obj => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('TextScreen', {
                  title: obj.item.title,
                  text: obj.item.text,
                })
              }
              style={st.bigTitles}
              activeOpacity={0.7}>
              <Text style={st.bigTitlesText}>{obj.item.title}</Text>
            </TouchableOpacity>
          )}
        />
      )) || (
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => 'key' + index}
          data={data.full}
          renderItem={obj => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('TextScreen', {
                  title: obj.item.title,
                  text: obj.item.main,
                })
              }
              style={st.bigTitles}
              activeOpacity={0.7}>
              <Text style={st.bigTitlesText}>{obj.item.title}</Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default Read;
