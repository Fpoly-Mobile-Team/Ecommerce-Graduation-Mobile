import HomeScreens from './HomeScreens';
import CategoryScreens from './CategoryScreens';
import NotificationScreens from './NotificationScreens';
import ProfileScreens from './ProfileScreens';
import ChatScreens from './ChatScreens';
import Searchscreen from './HomeScreens/navigation/SearchScreen';
import OrderHistory from './ProfileScreens/navigation/OrderHistory';
import OrderDetails from './ProfileScreens/navigation/OrderDetails';
import ProgrammingAccountScreen from './ProfileScreens/navigation/ProgrammingAccountScreen';
import TermOfUseScreen from './ProfileScreens/navigation/ProgrammingAccountScreen/navigation/TermOfUseScreen';

export const bottom = {
  HOMESCREENS: HomeScreens,
  CATEGORYSCREENS: CategoryScreens,
  NOTIFICATIONSCREENS: NotificationScreens,
  PROFILESCREENS: ProfileScreens,
  CHATSCREENS: ChatScreens,
  SEARCHSCREEN: Searchscreen,
  ORDERHISTORY: OrderHistory,
  ORDERDETAILS: OrderDetails,
  PROGRAMMING_ACCOUNT_SCREEN: ProgrammingAccountScreen,
  TERM_OF_USE_SCREEN: TermOfUseScreen,
};
