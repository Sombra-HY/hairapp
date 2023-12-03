import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from "./screens/Login/Login";
import Register from "./screens/Register/Register";
import { SafeAreaView } from 'react-native';
import Hub from "./screens/Hub/Hub";
import ServiceHair from "./screens/ServiceHair/ServiceHair";

const Stack = createStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <SafeAreaView style={{ flex: 1 }}>
                <Stack.Navigator>
                    {/*<Stack.Screen options={{ headerShown: false }} name="Login" component={Login} />*/}
                    <Stack.Screen options={{ headerShown: false }} name="Hub" component={Hub} />
                    <Stack.Screen options={{ headerShown: false }} name="Register" component={Register} />
                    <Stack.Screen options={{ headerShown: false }} name="Services" component={ServiceHair} />
                </Stack.Navigator>
            </SafeAreaView>
        </NavigationContainer>
    );
}
