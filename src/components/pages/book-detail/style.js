import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'aliceblue',
    flex: 1,
    flexDirection: 'row',
  },
  image: {resizeMode: 'cover'},
  info: {
    flex: 1,
    alignItems: 'flex-start',
    flexDirection: 'column',
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    marginLeft: 20,
  },
  authors: {
    fontSize: 16,
    fontWeight: '400',
    color: 'black',
    marginLeft: 20,
  },
});
