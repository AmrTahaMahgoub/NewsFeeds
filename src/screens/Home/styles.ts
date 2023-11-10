import {StyleSheet} from 'react-native';
import {Colors, Spacing} from '../../styles';
import {getHeight, getWidth, scale} from '../../styles/dimensions';

export const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: Colors.WHITE,
    paddingHorizontal: Spacing.S16,
  },
  plusIcon: {
    color: Colors.PRIMARY,
    width: getWidth(14),
    height: getHeight(20),
  },
  createMeetContainer: {
    width: '95%',
    alignSelf: 'center',
    marginVertical: Spacing.S40,
  },
  contentContainerStyle: {
    paddingBottom: getHeight(250),
  },
  title: {},
  line: {
    width: '15%',
    marginBottom: Spacing.S11,
    backgroundColor: Colors.PRIMARY,
    height: getHeight(3),
  },
  errorContainer: {
    backgroundColor: 'red',
    height: '10%',
    width: '100%',
    borderRadius: scale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
