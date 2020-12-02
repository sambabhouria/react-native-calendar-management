import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';

const screens = {
  Home: {
    screen: Home,
    navigationOptions: {
      title: 'CalendarManagement',
      // headerStyle: {backgroundColor: '#eee'},
    },
  },
  ReviewDetails: {
    screen: ReviewDetails,
    navigationOptions: {
      title: 'ReviewDetails',
      // headerStyle: {backgroundColor: '#eee'},
    },
  },
};

// home stack navigator screens
//const HomeStack = createStackNavigator(screens);

const HomeStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: {backgroundColor: '#eee', height: 80},
  },
});

export default createAppContainer(HomeStack);
