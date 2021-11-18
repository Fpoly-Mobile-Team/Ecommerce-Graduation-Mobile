// import {navigate} from '@navigation/RootNavigation';
// import {routes} from '@navigation/routes';
import messaging from '@react-native-firebase/messaging';
import {useEffect} from 'react';
import PushNotification from 'react-native-push-notification';

PushNotification.createChannel({
  channelId: 'notification-channel-id',
  channelName: 'notification-channel',
  soundName: 'default',
});

// PushNotification.configure({
//   onNotification(notification) {
//     if (!notification.foreground) {
//       if (notification.data.url.includes('notification')) {
//         navigate(routes.NOTIFICATION_DETAILS_SCREEN, {
//           item_id: notification.data.item_id,
//         });
//       } else if (notification.data.url.includes('news')) {
//         navigate(routes.NEWS_DETAILS, {
//           item_id: notification.data.item_id,
//         });
//       }
//     }
//   },
// });

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
        ignoreInForeground: false,
      });
    });

    return unsubscribe;
  }, []);

  return {requestUserPermission, getDeviceToken};
};

export default useFCM;
