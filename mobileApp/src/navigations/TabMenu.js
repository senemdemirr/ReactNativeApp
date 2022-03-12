import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {  Home,Posts } from '../screens'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../config/colors'

const Tab = createBottomTabNavigator();

//Screen names
const homeName = "Home";
const postsName = "Posts";


const Tabs = () => {

  return (
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? 'home' : 'home-outline';

            } else if (rn === postsName) {
              iconName = focused ? 'person' : 'person-outline';
            }
            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarInactiveTintColor: 'grey',
          tabBarActiveTintColor: theme.colors.primary,
        })}>

        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={postsName} component={Posts} />

      </Tab.Navigator>
  );
}

export default Tabs;