import React from 'react';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { useNavigation } from '@react-navigation/native';
import { DashboardStackNavigationProp } from '../navigation/NavigationTypes';
import colors from './ColorTemplate';

const CalendarWidget = () => {
    const navigation = useNavigation<DashboardStackNavigationProp>();

    return (
        <TouchableOpacity 
        style={styles.container} 
        onPress={() => navigation.navigate('Calendar')}
        >
        <Calendar 
            current={new Date().toISOString().split('T')[0]} 
            hideExtraDays={true} 
            disableMonthChange={true} 
            style={styles.calendar}
            theme={{
                textSectionTitleColor: colors.ascent,
                todayTextColor: colors.primary,
                dayTextColor: colors.textPrimary,
                textDisabledColor: colors.ascent,
                arrowColor: colors.primary,
                monthTextColor: colors.textPrimary,
                textMonthFontWeight: '500',
                textDayFontWeight: '400',
            }}
            onDayPress={() => {
                navigation.navigate('Agenda');
            }}
        />
        </TouchableOpacity>
    );
    };

const styles = StyleSheet.create({
container: {
    padding: 10,
    borderRadius: 10,
},
calendar: {
    borderRadius: 10,
    top: -10
},
});

export default CalendarWidget;
