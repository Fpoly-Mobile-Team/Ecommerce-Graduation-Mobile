import CartScreens from './CartScreens';
import ProductDetails from './ProductDetails';
import PaymentScreen from './CartScreens/navigation/PaymentScreen';
import AddressScreen from './AddressScreen';
import AddAddressScreen from './AddressScreen/navigation/AddAdressScreen';
import PurchaseScreen from './CartScreens/navigation/PurchaseScreens';
import PromoScreen from './ProductStore/navigation/PromoScreen';
import ProductStore from './ProductStore';
import PopupScreen from './PopupScreen';

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
};
