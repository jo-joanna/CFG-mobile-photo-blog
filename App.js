import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/home';
import Granada from './src/screens/galleryGranada';
import Contact from './src/screens/contact';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Comments from './src/screens/comments';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
   
      <NavigationContainer>
  
        <Tab.Navigator
                activeColor="#FB8500"
                labelStyle={{ fontSize: 15 }}
                style={{ backgroundColor: 'green' }}
                //this has to be added otherwise it does not change a color
                screenOptions={({ }) => ({
                  tabBarInactiveTintColor: "#f48b28",
                  tabBarActiveTintColor: "#023047"
                })}
                >
          <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                      tabBarLabel: 'Home',
                      tabBarIcon: ({ color }) => (
                        <MaterialIcon name="home" color={color} size={30} />
                      ),
                    }}
                  />
          <Tab.Screen name="Gallery" component={Granada} options={{
                      tabBarLabel: 'Gallery',
                      tabBarIcon: ({ color }) => (
                        <MaterialIcon name="photo-library" color={color} size={30} />
                      ),
                    }}/>
          <Tab.Screen name="Comments" component={Comments} options={{
                      tabBarLabel: 'Comments',
                      tabBarIcon: ({ color }) => (
                        <MaterialIcon name="speaker-notes" color={color} size={30} />
                      ),
                    }}/>
          <Tab.Screen name="Contact" component={Contact} options={{
                      tabBarLabel: 'Contact',
                      tabBarIcon: ({ color }) => (
                        <MaterialIcon name="email" color={color} size={30} />
                      ),
                    }}/>
        </Tab.Navigator>
           
      </NavigationContainer>
         
    );
  }
