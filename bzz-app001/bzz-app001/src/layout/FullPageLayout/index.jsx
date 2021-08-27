import React from "react";

import { Layout } from "antd";

const { Content } = Layout;

export default function FullPageLayout({ children }) {
  return (
    <Layout className="site-layout" style={{ minHeight: "100vh" }}>
      {/* <HeaderContent /> */}
      <Content
        className="site-layout-background"
        style={{
          padding: "40px",
          margin: "30px auto",
          width: "100%",
          maxWidth: "1360px",
        }}
      >
        {children}
      </Content>
    </Layout>
  );
}
