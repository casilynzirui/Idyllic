import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';

const Stack = createNativeStackNavigator();

const MoreStackNav: React.FC = () => {
    return (
        <>
            <Stack.Navigator screenOptions={{ animation: 'none' }}>
                <Stack.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Settings" component={SettingsScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
        </>
    );
};

export default MoreStackNav;