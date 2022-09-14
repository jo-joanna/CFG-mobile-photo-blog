import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screens/home';
import GalleryMenu from './src/screens/galleryMenu';
import Contact from './src/screens/contact';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
   
      <NavigationContainer>
  
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Gallery" component={GalleryMenu} />
          <Tab.Screen name="Contact" component={Contact} />
        </Tab.Navigator>
           
      </NavigationContainer>
         
    );
  }
