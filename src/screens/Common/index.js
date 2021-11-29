import CartScreens from './CartScreens';
import ProductDetails from './ProductDetails';
import PaymentScreen from './CartScreens/navigation/PaymentScreen';
import AddressScreen from './AddressScreen';
import AddAddressScreen from './AddressScreen/navigation/AddAdressScreen';
import PurchaseScreen from './CartScreens/navigation/PurchaseScreens';
import PromoScreen from './ProductStore/navigation/PromoScreen';
import ProductStore from './ProductStore';
import PopupScreen from './PopupScreen';
import ProductReviews from './ProductDetails/navigation/ProductReviews';
import OTPScreens from './OTPScreens';
import OTPCodeScreens from './OTPScreens/navigation/OTPCodeScreen';
import ChooseADeliveryAddressScreen from './AddressScreen/navigation/ChooseADeliveryAddressScreen';
import InformationDetails from './ProductDetails/navigation/InformationDetails';
import AllStore from './AllStore';

export const common = {
  PRODUCT_DETAILS: ProductDetails,
  CARTSCREENS: CartScreens,
  PAYMENT_SCREEN: PaymentScreen,
  ADD_ADDRESS_SCREEN: AddAddressScreen,
  ADDRESS_SCREEN: AddressScreen,
  PURCHASE_SCREEN: PurchaseScreen,
  PROMO_SCREEN: PromoScreen,
  PRODUCT_STORE: ProductStore,
  POPUP_SCREEN: PopupScreen,
  PRODUCTS_REVIEW: ProductReviews,
  OTPSCREENS: OTPScreens,
  OTPCODESCREENS: OTPCodeScreens,
  CHOOSE_A_DELIVERY_ADDRESS_SCREEN: ChooseADeliveryAddressScreen,
  INFORMATION_DETAILS: InformationDetails,
  ALL_STORE: AllStore,
};
