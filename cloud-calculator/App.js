import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Image,
  Alert,
} from 'react-native';
import Button from 'apsl-react-native-button';
import {TextInput} from 'react-native-gesture-handler';
import { StackNavigator } from 'react-navigation';
import ModalSelector from 'react-native-modal-selector';
import {regions} from './data/pricingData.js'
import {pricingAWS} from './data/pricingData.js'
import {pricingGCP} from './data/pricingData.js'
import {machineTypesAWS} from './data/pricingData.js'
import {machineTypesGCP} from './data/pricingData.js'
import {operatingSystems} from './data/pricingData.js'
import {instanceMapping} from './data/pricingData.js'
import {modalStyle} from './node_modules/react-native-modal-selector/style.js'

class HomeScreen extends Component {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  render() {
    return (
      <View style={styles.container}>
        <Button style={styles.button} onPress={() =>this.props.navigation.navigate('Calculator', {cloudPlatform: 'AWS'})}>
          Amazon Web Services
        </Button>
        <Button style={styles.button} onPress={() =>this.props.navigation.navigate('Calculator', {cloudPlatform: 'GCP'})}>
          Google Cloud Platform
        </Button>
      </View>
    );
  }
}

class CalculatorScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
        textInputValue: ''
    }
  }
  render() {
    const { params } = this.props.navigation.state;
    const provider = params ? params.cloudPlatform : null;
     machineTypes = machineTypesGCP;
     state = {
       selectedMachineType : 'Select a machine type',
       selectedRegion : 'Select a region',
       inputHours : '0',
       selectedOs : "Select an operating system",
     }
     pricingData = pricingGCP;
    if(provider == "AWS") {
      machineTypes = machineTypesAWS;
      pricingData = pricingAWS;
    }
    return (
      <View style={styles.container}>
          <ModalSelector
            style={styles.button}
              data={regions}
              initValue="Select a region"
              accessible={true}
              scrollViewAccessibilityLabel={'Scrollable options'}
              cancelButtonAccessibilityLabel={'Cancel Button'}
              onChange={(option)=>{ this.setState({selectedRegion:option.label})}}>
          </ModalSelector>

          <View style={{backgroundColor:'white',flex:2,padding:8}}>
            </View>

          <ModalSelector
              style={styles.button}
              data={machineTypes}
              initValue="Select a machine type"
              accessible={true}
              scrollViewAccessibilityLabel={'Scrollable options'}
              cancelButtonAccessibilityLabel={'Cancel Button'}
              onChange={(option)=>{ this.setState({selectedMachineType:option.label})}}>
          </ModalSelector>

          <View style={{backgroundColor:'white',flex:2,padding:8}}>
                      </View>

          <ModalSelector
              style = {styles.button}
              data={operatingSystems}
              initValue="Select an operating system"
              accessible={true}
              scrollViewAccessibilityLabel={'Scrollable options'}
              cancelButtonAccessibilityLabel={'Cancel Button'}
              onChange={(option)=>{ this.setState({selectedOs:option.label})}}>
          </ModalSelector>

          <View style={{backgroundColor:'white',flex:2,padding:8}}>
                      </View>

          <TextInput
            style={styles.textInput}
            placeholder="Utilization in hours"
            onChangeText={(text) => this.setState({inputHours: text})}
          />

          <View style={{backgroundColor:'white',flex:2,padding:8}}>
            </View>

          <Button
            style={styles.button}
            onPress={() =>this.props.navigation.navigate('Estimate', {cloudPlatform: provider, machineType: this.state.selectedMachineType, pricing: pricingData, region: this.state.selectedRegion, os: this.state.selectedOs, hours: this.state.inputHours})}
            title="Get the estimate!"
            accessibilityLabel="Get an estimate for your infrastructure.">
            <Text>Get an estimate!</Text>
          </Button>
      </View>
    );
  }
}

class EstimateScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { params } = this.props.navigation.state;
    let os = params ? params.os : null;
    let region = params ? params.region : null;
    let machineType = params ? params.machineType : null;
    let hours = params ? params.hours : null;
    let provider = params ? params.cloudPlatform : null;
    let awsMachineType = '';
    let gcpMachineType = '';
    let awsColor = 'green';
    let gcpColor = 'green';
    let note = '';
    if (provider == "AWS") {
      awsMachineType = machineType;
      gcpMachineType = instanceMapping[String(awsMachineType)];
      note = "\nThe GCP equivalent for " + awsMachineType + " is " + gcpMachineType;
    } else {
      gcpMachineType = machineType;
      awsMachineType = instanceMapping[String(gcpMachineType)];
      note = "\nThe AWS equivalent for " + gcpMachineType + " is " + awsMachineType;
    }
    let awsCost = Math.round(hours * pricingAWS[String(region)][String(awsMachineType)][String(os)]);
    let gcpCost = Math.round(hours * pricingGCP[String(region)][String(gcpMachineType)][String(os)]);
    if(awsCost > gcpCost) {
      awsColor = 'red';
      note = note + ".\nFor your infrastructure needs, you would save " + (awsCost - gcpCost) + "$ on GCP."
    } else {
      gcpColor = 'red';
      note = note + ".\nFor your infrastructure needs, you would save " + (gcpCost - awsCost) + "$ on AWS.";
    }
    let text = 'AWS COST = ' + awsCost + '  GCP COST = ' + gcpCost;

    return (
      <View style={styles.container}>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: awsColor, padding: 10}}>
          {"AWS COST: " + awsCost + "$"}
      </Text>
      <Text style={{fontSize: 20, fontWeight: 'bold', color: gcpColor, padding: 10}}>
          {"GCP COST: " + gcpCost + "$"}
      </Text>
      <Text>
      Note: {note}
      </Text>
      </View>
    );
  }
}

const RootStack = StackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Calculator: {
    screen: CalculatorScreen,
  },
  Estimate: {
    screen: EstimateScreen,
  },
});

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

var styles = StyleSheet.create({
  backgroundContainer: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderColor: '#2980b9',
    backgroundColor: '#ccc',
    width: 250,
    height: 60,
    borderRadius: 10,
    fontSize: 18,
    textAlign: 'center',
  },
  modelContainer: {
    backgroundColor: '#673AB7',
    borderRadius: 100,
    paddingVertical: 10,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  textInput: {
    flex:1,
    height: 50,
    width: 250,
    fontSize: 18,
    padding: 10,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
