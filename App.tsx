import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';

import BookItem from './src/components/BookItem';
import BookSum from './src/screens/BookSum';
import Read from './src/screens/Read';
import TextScreen from './src/screens/TextScreen';

import {Names, Titles, Colors} from './enums';
//123456-key
interface HomeScreen {
  navigation: NativeStackNavigationProp<any, any>;
}

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.White,
  },
};

const HomeScreen: React.FC<HomeScreen> = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <BookItem
          navigation={navigation}
          name={Names.Shushaniki}
          title={Titles.ShushanikiTitle}
        />
        <BookItem
          navigation={navigation}
          name={Names.Abo}
          title={Titles.AboTitle}
        />
        <BookItem
          navigation={navigation}
          name={Names.Grigol}
          title={Titles.GrigolTiTle}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.Yellow,
          },
          headerTitleStyle: {
            fontFamily: 'alk-sanet',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'აირჩიეთ წიგნი'}}
        />
        <Stack.Screen
          name="BookSum"
          component={BookSum}
          options={({route}) => ({title: route.params.title})}
        />
        <Stack.Screen
          name="Read"
          component={Read}
          options={({route}) => ({title: route.params.title})}
        />
        <Stack.Screen
          name="TextScreen"
          component={TextScreen}
          options={({route}) => ({title: route.params.title})}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
