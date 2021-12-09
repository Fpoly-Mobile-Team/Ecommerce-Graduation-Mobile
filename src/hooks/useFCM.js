// import {navigate} from '@navigation/RootNavigation';
// import {routes} from '@navigation/routes';
import {navigate} from '@navigation/RootNavigation';
import {routes} from '@navigation/routes';
import messaging from '@react-native-firebase/messaging';
import {useEffect} from 'react';
import PushNotification from 'react-native-push-notification';

PushNotification.createChannel({
  channelId: 'notification-channel-id',
  channelName: 'notification-channel',
  soundName: 'default',
});

PushNotification.configure({
  onNotification(notification) {
    if (!notification.foreground) {
      console.log('notification', notification);
      if (notification.data.url.includes('notification')) {
        navigate(routes.DETAILED_NOTICE, {
          // item_id: notification.data.item_id,
        });
        console.log('notification', notification);
      }
    }
  },
});

const useFCM = () => {
  const requestUserPermission = async () => {
    const authorizationStatus = await messaging().requestPermission();
    if (authorizationStatus) {
      // console.log('Permission status:', authorizationStatus);
    }
  };

  const getDeviceToken = async () => {
    const token = await messaging().getToken();
    return token;
  };

  useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      PushNotification.localNotification({
        channelId: 'notification-channel-id',
        title: remoteMessage.notification.title,
        bigText: remoteMessage.notification.body, //content for Android
        message: remoteMessage.notification.body, //content for Ios
        largeIconUrl:
          'https://cdn.chanhtuoi.com/uploads/2020/05/icon-facebook-08-2.jpg.webp',
        ignoreInForeground: false,
      });
    });

    return unsubscribe;
  }, []);

  return {requestUserPermission, getDeviceToken};
};

export default useFCM;
