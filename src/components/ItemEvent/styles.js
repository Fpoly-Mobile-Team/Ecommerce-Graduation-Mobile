import {StyleSheet} from 'react-native';
import {getSize} from '@utils/responsive';
import {theme} from '@theme';

export default StyleSheet.create({
    input: {
        fontFamily: theme.fonts.fontFamily.regular,
        color: theme.colors.black,
        flex: 1,
        paddingVertical: getSize.m(12),
    }
});
