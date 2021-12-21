import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import {Menu, Icon} from 'antd';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import './index.less'

const SubMenu = Menu.SubMenu;

/**
 * 左侧导航的组件
 */
export default class LeftNav extends Component {
    render() {
        return(
            <div className="left-nav">
                <Link to='/' className="left-nav-header">
                    <img src={logo} alt="logo"/>
                    <h1>硅谷后台</h1>
                </Link>

                <Menu
                 mode="inline"
                 theme="dark"
                >
                 <Menu.Item key="1">
                    <Icon type='pie-chart' />
                    <span>首页</span>
                 </Menu.Item>
                 <SubMenu
                    key='sub1'
                    title={
                        <span>
                            <Icon type='mail' />
                            <span>商品</span>
                        </span>
                    }
                 >
                    <Menu.Item key='5'>
                        <Icon type='mail' />
                        <span>品类管理</span>  
                    </Menu.Item>
                    <Menu.Item key='6'>
                        <Icon type='mail' />
                        <span>商品管理</span>  
                    </Menu.Item>
                 </SubMenu>
                </Menu>
            </div>
        )
    }
}