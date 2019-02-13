import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { BarCodeScanner, Permissions } from 'expo';

export default class App extends React.Component {
  state = {
    cameraPermission: null
  }
  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ cameraPermission: status === 'granted' })
  }

  handleBarCodeScanned = ({ type, data }) => {
    console.log(data)
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  }

  render() {
    const { cameraPermission } = this.state;

    if (cameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (cameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    
    return (
      <View style={{ flex: 1 }}>
        <BarCodeScanner
          onBarCodeScanned={this.handleBarCodeScanned}
          style={StyleSheet.absoluteFill}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
