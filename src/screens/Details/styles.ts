import {StyleSheet} from 'react-native';
import {Colors, Spacing} from '../../styles';
import {getHeight, getWidth, scale} from '../../styles/dimensions';

export const styles = StyleSheet.create({
  main: {
    paddingHorizontal: Spacing.S16,
    backgroundColor: 'white',
    height: '100%',
  },
  image: {
    width: '100%',
    height: getHeight(250),
    // borderRadius: scale(25),
    //marginLeft: Spacing.S8,
    marginVertical: Spacing.S16,
  },
  container: {
    height: '80%',
    width: '100%',
    paddingVertical: Spacing.S40,
    paddingHorizontal: Spacing.S20,
    marginVertical: Spacing.S4,
    alignItems: 'flex-start',
    alignSelf: 'center',
  },
  title: {width: getWidth(280)},

  description: {
    marginBottom: Spacing.S8,
    width: getWidth(300),
  },
  author: {
    marginBottom: Spacing.S4,
  },
  publishedAt: {
    color: 'gray',
  },
});
