/**
 * 项目路由表
 * 注册页面，新添加页面请在这里注册！
 */

import DemoPage from './containers/DemoPage';
import HomeScreen from './containers/Home';
import ChatScreen from './containers/Chat';

export default {
  DemoPage: {
    name: 'Demo页面',
    component: DemoPage
  },
  Home: {
    title: 'My Home',
    component: HomeScreen,
  },
  Chat: {
    title: 'Chat with me',
    component: ChatScreen,
  },
}
