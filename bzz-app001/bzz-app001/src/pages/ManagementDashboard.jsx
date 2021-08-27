import React, { useRef, useState, useEffect } from "react";
import { Form, Input, InputNumber, Space, Divider, Row, Col } from "antd";

import { Layout, Breadcrumb, Statistic, Progress, Tag } from "antd";

import { ArrowUpOutlined, ArrowDownOutlined } from "@ant-design/icons";
import { Column, Liquid, Pie } from "@ant-design/charts";

import { DashboardLayout } from "@/layout";
import RecentTable from "@/components/RecentTable";

const TopCard = ({ title, tagContent, tagColor, prefix }) => {
  return (
    <Col className="gutter-row" span={6}>
      <div
        className="whiteBox shadow"
        style={{ color: "#595959", fontSize: 13, height: "106px" }}
      >
        <div
          className="pad15 strong"
          style={{ textAlign: "center", justifyContent: "center" }}
        >
          <h3 style={{ color: "#22075e", marginBottom: 0 }}>{title}</h3>
        </div>
        <Divider style={{ padding: 0, margin: 0 }}></Divider>
        <div className="pad15">
          <Row gutter={[0, 0]}>
            <Col className="gutter-row" span={11} style={{ textAlign: "left" }}>
              <div className="left">{prefix}</div>
            </Col>
            <Col className="gutter-row" span={2}>
              <Divider
                style={{ padding: "10px 0", justifyContent: "center" }}
                type="vertical"
              ></Divider>
            </Col>
            <Col
              className="gutter-row"
              span={11}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Tag
                color={tagColor}
                style={{ margin: "0 auto", justifyContent: "center" }}
              >
                {tagContent}
              </Tag>
            </Col>
          </Row>
        </div>
      </div>
    </Col>
  );
};

const DemoColumn = () => {
  const data = [
    {
      name: "Beginning Total",
      month: "Sun Aug 18",
      value: 180900,
    },
    {
      name: "Beginning Total",
      month: "Mon Aug 19",
      value: 128800,
    },
    {
      name: "Beginning Total",
      month: "Tue Aug 20",
      value: 139300,
    },
    {
      name: "Beginning Total",
      month: "Wed Aug 21",
      value: 181400,
    },
    {
      name: "Beginning Total",
      month: "Thu Aug 22",
      value: 47000,
    },
    {
      name: "Beginning Total",
      month: "Fri Aug 23",
      value: 120300,
    },
    {
      name: "Beginning Total",
      month: "Sat Aug 24",
      value: 124000,
    },

    {
      name: "Amount Added",
      month: "Sun Aug 18",
      value: 122400,
    },
    {
      name: "Amount Added",
      month: "Mon Aug 19",
      value: 123200,
    },
    {
      name: "Amount Added",
      month: "Tue Aug 20",
      value: 84500,
    },
    {
      name: "Amount Added",
      month: "Wed Aug 21",
      value: 99700,
    },
    {
      name: "Amount Added",
      month: "Thu Aug 22",
      value: 52600,
    },
    {
      name: "Amount Added",
      month: "Fri Aug 23",
      value: 135500,
    },
    {
      name: "Amount Added",
      month: "Sat Aug 24",
      value: 137400,
    },

    {
      name: "Amount Removed",
      month: "Sun Aug 18",
      value: 92400,
    },
    {
      name: "Amount Removed",
      month: "Mon Aug 19",
      value: 152000,
    },
    {
      name: "Amount Removed",
      month: "Tue Aug 20",
      value: 144500,
    },
    {
      name: "Amount Removed",
      month: "Wed Aug 21",
      value: 59700,
    },
    {
      name: "Amount Removed",
      month: "Thu Aug 22",
      value: 72600,
    },
    {
      name: "Amount Removed",
      month: "Fri Aug 23",
      value: 115500,
    },
    {
      name: "Amount Removed",
      month: "Sat Aug 24",
      value: 127400,
    },
  ];
  var config = {
    data: data,
    isGroup: true,
    xField: "month",
    yField: "value",
    seriesField: "name",
    dodgePadding: 3,
    intervalPadding: 20,
    color: ["#0CC4E7", "#BE253A", "#04A151"],
  };
  return <Column {...config} />;
};
const DemoLiquid = () => {
  var config = {
    percent: 0.25,
    outline: {
      border: 4,
      distance: 8,
    },
    wave: { length: 128 },
  };
  return <Liquid {...config} />;
};
const DemoPie = () => {
  var data = [
    {
      type: "A+",
      value: 27,
    },
    {
      type: "A-",
      value: 25,
    },
    {
      type: "AB+",
      value: 18,
    },
    {
      type: "AB-",
      value: 15,
    },
    {
      type: "O+",
      value: 10,
    },
    {
      type: "O-",
      value: 5,
    },
  ];
  var config = {
    appendPadding: 10,
    data: data,
    angleField: "value",
    colorField: "type",
    radius: 0.75,
    label: {
      type: "spider",
      labelHeight: 28,
      content: "{name}\n{percentage}",
    },
    interactions: [{ type: "element-selected" }, { type: "element-active" }],
  };
  return <Pie {...config} />;
};
export default function ManagementDashboard() {
  return (
    <DashboardLayout>
      <Row gutter={[24, 24]}>
        <TopCard
          title={"In Progress"}
          tagColor={"cyan"}
          prefix={"This month"}
          tagContent={"24 000 $"}
        />
        <TopCard
          title={"Processed"}
          tagColor={"purple"}
          prefix={"This month"}
          tagContent={"60 000 $"}
        />
        <TopCard
          title={"Pending"}
          tagColor={"green"}
          prefix={"This month"}
          tagContent={"52 000 $"}
        />
        <TopCard
          title={"Total"}
          tagColor={"red"}
          prefix={"Not Paid"}
          tagContent={"98 000 $"}
        />
      </Row>
      <div className="space30"></div>
      <Row gutter={[24, 24]}>
        <Col className="gutter-row" span={18}>
          <div className="whiteBox shadow" style={{ height: "430px" }}>
            <div className="pad20">
              <DemoColumn />
            </div>
          </div>
        </Col>

        <Col className="gutter-row" span={6}>
          <div className="whiteBox shadow" style={{ height: "430px" }}>
            <div
              className="pad20"
              style={{ textAlign: "center", justifyContent: "center" }}
            >
              <h3 style={{ color: "#22075e", marginBottom: 30 }}>
                Productivity Preview
              </h3>

              <Progress type="dashboard" percent={25} width={148} />

              <Divider />
              <p style={{ color: "#22075e", margin: " 30px 0" }}>
                Charge Processing Speed
              </p>
              <Statistic
                title="Activity"
                value={11.28}
                precision={2}
                valueStyle={{ color: "#3f8600" }}
                prefix={<ArrowUpOutlined />}
                suffix="%"
              />
            </div>
          </div>
        </Col>
      </Row>
      <div className="space30"></div>
      <Row gutter={[24, 24]}>
        <Col className="gutter-row" span={12}>
          <div className="whiteBox shadow">
            <div className="pad20">
              <h3 style={{ color: "#22075e", marginBottom: 5 }}>
                Daily Average
              </h3>
              <Divider />
              <DemoLiquid />
            </div>
          </div>
        </Col>

        <Col className="gutter-row" span={12}>
          <div className="whiteBox shadow">
            <div className="pad20">
              <h3 style={{ color: "#22075e", marginBottom: 5 }}>Charges</h3>
              <Divider />
              <DemoPie />
            </div>
          </div>
        </Col>
      </Row>
    </DashboardLayout>
  );
}
