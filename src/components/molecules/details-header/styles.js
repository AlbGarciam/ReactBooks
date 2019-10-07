import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },
  image: {resizeMode: 'cover'},
  info: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    paddingLeft: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
  authors: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
  },
});
