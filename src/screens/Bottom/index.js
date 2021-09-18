import HomeScreens from './HomeScreens';
import CategoryScreens from './CategoryScreens';
import NotificationScreens from './NotificationScreens';
import ProfileScreens from './ProfileScreens';
import ChatScreens from './ChatScreens';
import Searchscreen from './HomeScreens/navigation/SearchScreen';
import OrderHistory from './ProfileScreens/navigation/OrderHistory';
import OrderDetails from './ProfileScreens/navigation/OrderDetails';
import ProgrammingAccountScreen from './ProfileScreens/navigation/ProgrammingAccountScreen';
import SecurityScreen from './ProfileScreens/navigation/ProgrammingAccountScreen/navigation/SecurityScreen';
import TermOfUseScreen from './ProfileScreens/navigation/ProgrammingAccountScreen/navigation/TermOfUseScreen';
import ChatBox from './ChatScreens/navigation/ChatBoxScreen';

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
  SECURITY_SCREEN: SecurityScreen,
  TERM_OF_USE_SCREEN: TermOfUseScreen,
  CHATBOX: ChatBox,
};
