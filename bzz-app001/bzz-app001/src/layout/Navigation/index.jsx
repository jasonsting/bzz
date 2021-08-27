import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import { Layout, Menu, Avatar, Dropdown } from "antd";
import {
  SettingOutlined,
  UserOutlined,
  CustomerServiceOutlined,
  FileTextOutlined,
  AppstoreOutlined,
  CalendarOutlined,
  DashboardOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import uniqueId from "@/utils/uinqueId";
const { Sider } = Layout;
const { SubMenu } = Menu;

function Navigation() {
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = () => {
    setCollapsed(!collapsed);
  };
  const menu = (
    <Menu>
      <Menu.Item key={`${uniqueId()}`}>logout</Menu.Item>
      <Menu.Item key={`${uniqueId()}`}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.taobao.com/"
        >
          2nd menu item
        </a>
      </Menu.Item>
      <Menu.Item key={`${uniqueId()}`}>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="http://www.tmall.com/"
        >
          3rd menu item
        </a>
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={onCollapse}
        style={{
          zIndex: 1000,
          background: "#fff",
        }}
      >
        <div className="logo">
          <Dropdown overlay={menu} placement="bottomRight" arrow>
            <Avatar icon={<UserOutlined />} />
          </Dropdown>
        </div>
        <Menu mode="vertical">
          <Menu.Item key="1" icon={<DashboardOutlined />}>
            <NavLink to="/" />
            Team Dashboard
          </Menu.Item>

          <SubMenu
            key="sub2"
            icon={<AppstoreOutlined />}
            title="Management Dashboard"
          >
            <Menu.Item key="34">
              <NavLink to="/managementdashboard" />
              Data Charts
            </Menu.Item>
            <Menu.Item key="34">
              <NavLink to="/calendar" />
              Staff Calendar
            </Menu.Item>
          </SubMenu>
          <Menu.Item key="2" icon={<CustomerServiceOutlined />}>
            <NavLink to="/wq5508" />
            WQ5508
          </Menu.Item>
          <Menu.Item key="24" icon={<UserOutlined />}>
            <NavLink to="/Government Coverage" />
            Government Coverage
          </Menu.Item>
          <Menu.Item key="21" icon={<FileTextOutlined />}>
            <NavLink to="/irb" />
            Data Collection
          </Menu.Item>

          <Menu.Item key="31" icon={<TeamOutlined />}>
            <NavLink to="/admin" />
            Admins Management
          </Menu.Item>

          <Menu.Item key="32" icon={<SettingOutlined />}>
            <NavLink to="/settings" />
            Settings
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  );
}
export default Navigation;
