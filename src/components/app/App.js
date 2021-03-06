import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { connect } from 'react-redux';
import { testAction } from '../../redux/actions/test'


const App = ({ testAction }) => {
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior='automatic'
          style={st.scrollView}>
          <Header />
          {global.HermesInternal == null ? null : (
            <View style={st.engine}>
              <Text style={st.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={st.body}>

            <View style={st.sectionContainer} onClcick={() => testAction}>
              <Text style={st.sectionTitle}>Step One</Text>
              <Text style={st.sectionDescription}>
                Edit <Text style={st.highlight}>App.js</Text> to change this
                screen and then come back to see your edits.
              </Text>
            </View>

            <View style={st.sectionContainer} onClcick={() => testAction}>
              <Text style={st.sectionTitle}>See Your Changes</Text>
              <Text style={st.sectionDescription}>
                <ReloadInstructions />
              </Text>
            </View>

            <View style={st.sectionContainer} onClcick={() => testAction}>
              <Text style={st.sectionTitle}>Debug</Text>
              <Text style={st.sectionDescription}>
                <DebugInstructions />
              </Text>
            </View>

            <View style={st.sectionContainer} onClcick={() => testAction}>
              <Text style={st.sectionTitle}>Learn More</Text>
              <Text style={st.sectionDescription}>
                Read the docs to discover what to do next:
              </Text>
            </View>

            <LearnMoreLinks />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const st = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});



const mapStateToProps = state => {
  return {
    test: state.reducer.test
  }
}

export default compose(
  connect(
    mapStateToProps,
    { testAction }
  ),
  withNavigation
)(ProductDetails)



