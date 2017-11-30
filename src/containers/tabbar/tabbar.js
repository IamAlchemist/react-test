/**
 * Created by kerwinliu on 2017/11/15.
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    StatusBar,
    Image
} from 'react-native';
import {QYImage} from '@iqiyi/rn-base-ui'

class MyTabBar extends Component{
    constructor(props){
        super(props)
        this.tabTitle=  ['首页','分类','我'];
        this.tabIcons=  [
            <Image
                source={require('../../common/assets/home.png')}
                style={styles.tabIcon}
            />,
            <Image
                source={require('../../common/assets/fl.png')}
                style={styles.tabIcon}
            />,
            <Image
                source={require('../../common/assets/mine.png')}
                style={styles.tabIcon}
            />];
    }
    propTypes: {
        goToPage: React.PropTypes.func,
        activeTab: React.PropTypes.number,
        tabs: React.PropTypes.array,
    }
    changeTab(i){
        this.props.goToPage(i)
    }

    render() {
        return <View style={styles.tabs}>
            {this.props.tabs.map((tab, i) => {
                return <TouchableOpacity  activeOpacity={1} key={i} onPress={this.changeTab.bind(this,i)} style={styles.tab}>
                    {this.tabIcons[i]}
                    <Text style={[styles.text,{color:this.props.activeTab === i ? '#10ba06' :'#999'}]}>{this.tabTitle[i]}</Text>
                </TouchableOpacity>;
            })}
        </View>;
    }
}

const styles = StyleSheet.create({
    tabs: {
        height: 50,
        flexDirection: 'row',
        borderTopWidth: StyleSheet.hairlineWidth ,
        borderTopColor:'#e4e4e4'
    },
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabIcon:{
        height:22.5,
        width:22.5
    },
    text:{
        fontSize:14,
        marginTop:5
    }
});

export default MyTabBar;