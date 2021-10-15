import React from 'react';
import {StyleSheet, View, Text, Image} from 'react-native';
import { WebView } from 'react-native-webview';

const LocationsScreen = props => {
    return (
      <WebView
      source={{ uri: 'https://www.google.ru/maps/place/ул.+Вольская,+10а' }}
      />
  );
};

const styles = StyleSheet.create({});

export default LocationsScreen;
