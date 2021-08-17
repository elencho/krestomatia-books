import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../enums'

const {width, height} = Dimensions.get('window');

const st = StyleSheet.create({
  box: {
    backgroundColor: Colors.LightGray,
    marginVertical: 50,
    marginHorizontal: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  startImage: {
    height: height / 4,
    width: height / 2,
    borderRadius: 8,
  },
  title: {
    fontSize: 18,
    lineHeight: 22,
    fontFamily: 'alk-sanet',
    marginVertical: 5
  },
  button: {
    marginVertical: 10,
    backgroundColor: Colors.Yellow,
    padding: 5,
    borderRadius: 10
  },
  bookImg: {
    borderRadius: 5,
    height: height / 2.5,
    width: height / 2,
    marginBottom: 10
  },
  bookSum:{
    backgroundColor: Colors.LightGray,
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginVertical: 10,
    alignItems: 'center',
    paddingVertical: 10,
  },
  buttonSmall: {
    marginVertical: 10,
    backgroundColor: Colors.Yellow,
    paddingVertical: 5,
    borderRadius: 10,
    paddingHorizontal: 10
  },

});

export default st;
