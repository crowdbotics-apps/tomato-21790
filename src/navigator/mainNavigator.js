import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
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
