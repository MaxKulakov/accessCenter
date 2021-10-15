import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import {LocaleConfig} from 'react-native-calendars';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

const CalendarScreen = props => {
  return (
    <CalendarList
      onVisibleMonthsChange={(months) => {}}
      pastScrollRange={50}
      futureScrollRange={50}
      scrollEnabled={true}
      showScrollIndicator={true}
    />
  );
};

const styles = StyleSheet.create({});

export default CalendarScreen;
