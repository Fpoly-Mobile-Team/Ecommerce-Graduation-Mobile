import {theme} from '@theme';
import {getSize} from '@utils/responsive';
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  imageAvatar: {
    width: getSize.s(40),
    height: getSize.v(40),
    borderRadius: getSize.s(40 / 2),
  },
  scrReview: {
    flexDirection: 'row',
    flex: 1,
    marginBottom: getSize.m(6),
  },

  imgReviews: {
    width: getSize.s(104),
    height: getSize.v(104),
    borderRadius: getSize.s(4),
    marginBottom: getSize.m(16),
    marginTop: getSize.m(12),
  },
  imgRound: {
    width: getSize.s(96),
    height: getSize.v(104),
    borderRadius: getSize.s(4),
    marginBottom: getSize.m(16),
    marginTop: getSize.m(12),
  },
  buttonStyle: {
    width: getSize.s(44 / 2),
    height: getSize.v(44 / 2),
  },
});
