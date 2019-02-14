import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainView from '../views/MainView';
import BarCodeScannerView from '../views/BarCodeScannerView'

const routes = createStackNavigator({
  MainView,
  BarCodeScannerView
});

export default createAppContainer(routes);
