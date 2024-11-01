import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { routeList, RouteStackParamList } from './shared';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import pagesList from './pages';
import { NavigationContainer } from '@react-navigation/native';


export function App() {
  const Stack =createNativeStackNavigator<RouteStackParamList>();
  const insets = useSafeAreaInsets();

  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        paddingLeft: insets.left,
        paddingRight: insets.right,
        flex: 1,
      }}
    >
      <Stack.Navigator
        initialRouteName={routeList.home}
      >
        {
          pagesList.map((page) => 
            <Stack.Screen
              key={page.name} 
              name={page.name} 
              component={page.component}
              options={page.headerOptions ?? {headerShown: false}} 
            />
          )
        }
      </Stack.Navigator>
    </View>
  )
}

export default function SafeAreaWrapper(){
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <App />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}