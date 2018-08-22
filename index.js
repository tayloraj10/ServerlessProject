/** @format */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Amplify from 'aws-amplify'
import config from './aws-exports'
import AppSyncConfig from './appsync-config'
Amplify.configure({config, AppSyncConfig})

AppRegistry.registerComponent(appName, () => App);
