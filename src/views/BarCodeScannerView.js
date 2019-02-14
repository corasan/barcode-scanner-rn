import React, { Component } from 'react';
import { BarCodeScanner, Permissions } from 'expo';
import { StyleSheet, Text, View } from 'react-native';

class BarCodeScannerView extends Component {
  state = {
    cameraPermission: null
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ cameraPermission: status === 'granted' });
  }

  handleBarCodeScanned = ({ type, data }) => {
    const { goBack } = this.props.navigation;
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    goBack();
  }

  render() {
    const { cameraPermission } = this.state;

    return (
      <View style={{ flex: 1 }}>
        {cameraPermission ? (
          <BarCodeScanner
            onBarCodeScanned={this.handleBarCodeScanned}
            style={StyleSheet.absoluteFill}
          />
          ) : <Text>No access to camera</Text>
        }
      </View>
    );
  }
}

export default BarCodeScannerView;
