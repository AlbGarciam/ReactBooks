import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  formContainer: {
    paddingVertical: 24,
    paddingHorizontal: 24,
    backgroundColor: 'white',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    flexDirection: 'column',
  },
  input: {
    marginVertical: 10,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  buttonStack: {
    marginTop: 24,
    flexDirection: 'row',
  },
  createAction: {
    flex: 1,
    marginLeft: 16,
    backgroundColor: 'green',
  },
});
