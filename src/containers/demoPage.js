import React from 'react';
import { StyleSheet } from 'react-native'
import {
    QYButton, 
    QYImage, 
    QYText, 
    QYView
} from '@iqiyi/rn-base-ui'
import QYScrollTabView from '@iqiyi/rn-scrollable-tab-view';
import { Page } from '@iqiyi/rn-navigation';
import MyTabBar from './tabbar/tabbar'

export default class DemoPage extends Page {
    constructor(props){
        super(props)
        this.state={
            postText:null,
            getText:null,
        }
    }
    // 重要！
    shouldComponentUpdate(nextProps, nextState) {
        return false
    }
    componentDidMount(){
        QYRequest.post({url:"postHome",params:{test:1},options:{test:2}})
            .then((data)=>{
                if(data.code === 'A00000'){
                    this.setState({
                        postText:data.data.text
                    })
                }
            });
        QYRequest.get({url:"getHome"})
            .then((data)=>{
                if(data.code === 'A00000'){
                    this.setState({
                        getText:data.data.text
                    })
                }
            })
    }
    goHome = () => {
        this.goTo('Home', {
            foo: 'bar'
        })
    }
    goChat = () => {
        this.goTo('Chat', {
            foo: 'bar'
        })
    }
    render() {
        return(
            <QYScrollTabView
                tabBarPosition="bottom"
                style={{flexGrow:1}}
                locked={true}
                initialPage={0}
                scrollWithoutAnimation={true}
                renderTabBar={() => <MyTabBar />}
            >
                <QYView tabLabel="PAGE 1">
                    <QYView style={{marginTop: 220, alignItems: 'center'}}>
                        <QYImage source={{uri: 'http://www.qiyipic.com/common/fix/public/prop-img.jpg', placeholder: 'Loading'}} style={{height: 100, width: 100}} resizeMode="contain"/>
                        <QYText style={styles.text}>欢迎使用@iqiyi/rn-cli初始化一个react-native项目</QYText>
                        <QYText style={styles.text}>接入文档请查阅：http://front_sh.gitlab.qiyi.domain/QYReact/</QYText>
                        <QYText style={[styles.text,{color:'red',fontSize:20}]}>{this.state.postText}</QYText>
                        <QYText style={[styles.text,{color:'red',fontSize:20}]}>{this.state.getText}</QYText>
                    </QYView>
                </QYView>
                <QYView tabLabel="PAGE 2">
                    <QYView style={{marginTop: 220, alignItems: 'center'}}>
                        <QYButton title="Go HomeScreen" backgroundColor="dodgerblue" onPress={this.goHome} />
                    </QYView>
                </QYView>
                <QYView tabLabel="PAGE 3">
                    <QYView style={{marginTop: 220, alignItems: 'center'}}>
                        <QYButton title="Go ChatScreen" backgroundColor="dodgerblue" onPress={this.goChat} />
                    </QYView>
                </QYView>
            </QYScrollTabView>
        )
    }
}

const styles = StyleSheet.create({
    text: {
        fontSize: 14,
        marginBottom: 8
    }
});
