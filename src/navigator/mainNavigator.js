import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen67162276Navigator from '../features/BlankScreen67162276/navigator';
import BlankScreen66162275Navigator from '../features/BlankScreen66162275/navigator';
import SignUp266162272Navigator from '../features/SignUp266162272/navigator';
import UserProfile153564Navigator from '../features/UserProfile153564/navigator';
import Tutorial153563Navigator from '../features/Tutorial153563/navigator';
import NotificationList153535Navigator from '../features/NotificationList153535/navigator';
import Settings153534Navigator from '../features/Settings153534/navigator';
import Settings153526Navigator from '../features/Settings153526/navigator';
import UserProfile153524Navigator from '../features/UserProfile153524/navigator';
import UserProfile153493Navigator from '../features/UserProfile153493/navigator';
import Tutorial153492Navigator from '../features/Tutorial153492/navigator';
import NotificationList153464Navigator from '../features/NotificationList153464/navigator';
import Settings153463Navigator from '../features/Settings153463/navigator';
import Settings153455Navigator from '../features/Settings153455/navigator';
import UserProfile153453Navigator from '../features/UserProfile153453/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen67162276: { screen: BlankScreen67162276Navigator },
BlankScreen66162275: { screen: BlankScreen66162275Navigator },
SignUp266162272: { screen: SignUp266162272Navigator },
UserProfile153564: { screen: UserProfile153564Navigator },
Tutorial153563: { screen: Tutorial153563Navigator },
NotificationList153535: { screen: NotificationList153535Navigator },
Settings153534: { screen: Settings153534Navigator },
Settings153526: { screen: Settings153526Navigator },
UserProfile153524: { screen: UserProfile153524Navigator },
UserProfile153493: { screen: UserProfile153493Navigator },
Tutorial153492: { screen: Tutorial153492Navigator },
NotificationList153464: { screen: NotificationList153464Navigator },
Settings153463: { screen: Settings153463Navigator },
Settings153455: { screen: Settings153455Navigator },
UserProfile153453: { screen: UserProfile153453Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
