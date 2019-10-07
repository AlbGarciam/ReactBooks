import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(255,255,255,0.8)',
  },
  image: {height: 300, width: '100%', resizeMode: 'cover'},
  info: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingHorizontal: 20,
    position: 'absolute',
    backgroundColor: 'rgba(0,0,0,0.4)',
    bottom: 0,
    right: 0,
    left: 0,
  },
  title: {flex: 1, fontSize: 16, fontWeight: '600', color: 'white'},
});
