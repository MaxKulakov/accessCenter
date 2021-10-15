import React from 'react';
import {StyleSheet,
        View,
        Text,
        Image,
        KeyboardAvoidingView,
        Keyboard,
      } from 'react-native';
import { WebView } from 'react-native-webview';

const SearchScreen = props => {
    return (
      <WebView
      source={{ uri: 'https://www.google.ru/' }}
      />
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;
