import React from 'react';
import Svg, {
  Path,
  Circle,
  SvgXml,
  G,
  ClipPath,
  Defs,
  Rect,
} from 'react-native-svg';

export const Bell = ({
  width = 24,
  height = 24,
  color = '#9B9B9B',
  strokeWidth = 1.5,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
        strokeWidth={`${strokeWidth}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
      />
      <Path
        d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
        strokeWidth={`${strokeWidth}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
      />
    </Svg>
  );
};
export const BellWithNotiBadge = ({
  width = 24,
  height = 24,
  color = '#9B9B9B',
  strokeWidth = 1.5,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 15 3 17 3 17H21C21 17 18 15 18 8Z"
        strokeWidth={`${strokeWidth}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
      />
      <Path
        d="M13.73 21C13.5542 21.3031 13.3019 21.5547 12.9982 21.7295C12.6946 21.9044 12.3504 21.9965 12 21.9965C11.6496 21.9965 11.3054 21.9044 11.0018 21.7295C10.6982 21.5547 10.4458 21.3031 10.27 21"
        strokeWidth={`${strokeWidth}`}
        strokeLinecap="round"
        strokeLinejoin="round"
        stroke={color}
      />
      <Circle cx="19" cy="17" r="3" fill="#ED2727" />
    </Svg>
  );
};

export const MessageOutlined = ({
  width = 24,
  height = 24,
  color = '#9B9B9B',
  strokeWidth = 1.5,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <Path
        d="M19 13C19 13.5304 18.7893 14.0391 18.4142 14.4142C18.0391 14.7893 17.5304 15 17 15H5L1 19V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H17C17.5304 1 18.0391 1.21071 18.4142 1.58579C18.7893 1.96086 19 2.46957 19 3V13Z"
        stroke={color}
        strokeWidth={`${strokeWidth}`}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
