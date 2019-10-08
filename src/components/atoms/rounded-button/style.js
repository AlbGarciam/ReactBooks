import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 56,
    minWidth: 56,
    backgroundColor: 'red',
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: 8,
  },
  icon: {
    width: 16,
    height: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    color: 'white',
  },
});
