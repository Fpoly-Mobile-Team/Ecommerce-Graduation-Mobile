import {useState, useEffect} from 'react';
import DeviceInfo from 'react-native-device-info';

const useDeviceInfo = () => {
  const [deviceName, setDeviceName] = useState(null);
  const [systemName, setSystemName] = useState(null);
  const [systemVersion, setSystemVersion] = useState(null);

  useEffect(() => {
    DeviceInfo.getDeviceName().then(value => {
      setDeviceName(value);
    });

    setSystemName(DeviceInfo.getSystemName());
    setSystemVersion(DeviceInfo.getSystemVersion());
  }, []);

  return {deviceName, systemName, systemVersion};
};

export default useDeviceInfo;
