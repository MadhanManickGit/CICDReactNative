/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import Crashes from 'appcenter-crashes';
import Analytics from 'appcenter-analytics';
import {
  Alert,
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({children, title}: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

export default class App extends React.Component  {
  constructor(props: any){
    super(props);
    this.checkPreviousSession();
  }


  async checkPreviousSession () {
    const didCrash = await Crashes.hasCrashedInLastSession();
    if(didCrash){
      const report = await Crashes.lastSessionCrashReport();
      console.log("Sorry about that crash, we're working on a solution");
    }
  } 
  render() {
    return (
      <View style={styles.container}>
        <Button title="Calculate inflation"
          onPress={() => Analytics.trackEvent('calculate_inflation',
          {Internet:'Cellular',GPS:'On'})}
        /> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    marginTop: 40
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

function alert(arg0: string) {
  throw new Error('Function not implemented.');
}

