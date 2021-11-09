import {Block, Text} from '@components';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {Switch} from 'react-native-gesture-handler';
import {theme} from '@theme';
import {Platform} from 'react-native';

const Notifi = ({}) => {
  const config = useSelector(state => state.config?.data);
  const [isSwitchEnabled, setSwitch] = useState(false);

  const thumbColorOn =
    Platform.OS === 'android' ? config?.backgroundcolor : theme.colors.bgSwitch;
  const thumbColorOff =
    Platform.OS === 'android' ? theme.colors.bgSwitch : theme.colors.bgSwitch;
  const trackColorOn = config?.backgroundcolor;
  const trackColorOff = `${config?.backgroundcolor}50`;

  return (
    <Block
      row
      space="between"
      paddingTop={16}
      marginBottom={10}
      paddingHorizontal={12}>
      <Text size={16} fontType="semibold">
        Thông báo
      </Text>
      <Switch
        value={isSwitchEnabled}
        onValueChange={value => setSwitch(value)}
        thumbColor={isSwitchEnabled ? thumbColorOn : thumbColorOff}
        trackColor={{false: trackColorOff, true: trackColorOn}}
        ios_backgroundColor={trackColorOff}
      />
    </Block>
  );
};

export default Notifi;
