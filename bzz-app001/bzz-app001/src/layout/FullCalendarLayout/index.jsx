import React from "react";

import { Layout } from "antd";

const { Content } = Layout;

export default function FullCalendarLayout({ children }) {
  return (
    <Layout className="site-layout">
      <div className="space30"></div>
      <Content
        style={{
          padding: "30px 40px",
          margin: "20px auto",
          width: "100%",
          maxWidth: "1260px",
        }}
      >
        {children}
      </Content>
    </Layout>
  );
}
