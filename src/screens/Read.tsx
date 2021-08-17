import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {Names} from '../../enums';
import {Books} from '../../data';

import st from '../components/style';
interface Props {
  navigation: NativeStackNavigationProp<any, any>;
  title: string;
  name: string;
}

const Read: React.FC<Props> = props => {
  const {route, navigation} = props;
  const {title, name} = route.params;
  let data;
  if (name === Names.Grigol) {
    data = Books[2];
  } else if (name === Names.Abo) {
    data = Books[1];
  } else {
    data = Books[0];
  }
  return (
    <View style={st.bookSum}>
      <FlatList
        data={data.full}
        renderItem={obj => <Text>{obj.item.title}</Text>}
      />
    </View>
  );
};

export default Read;
