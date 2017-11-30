import React, { Component } from 'react';
import { AppRegistry } from 'react-native'
import { StackNavigator } from '@iqiyi/rn-navigation'

// 项目路由
import routeConfig from './routes';
// 加载全局变量
import './common/Global'

export default class App extends Component {
  navigator = null

  render() {
    // 加载首屏页面，如果是从第三方跳转, url 统一带上 pageName 参数
    const routeName = this.props.pageName || 'DemoPage'
    // 必须配置首屏路由
    const initialRoute = {
      routeName
    }

    const AppNavigator = StackNavigator(routeConfig, initialRoute)
    return (
      <AppNavigator ref={nav => this.navigator = nav} />
    )
  }
}

AppRegistry.registerComponent('LightNight', () => App);
