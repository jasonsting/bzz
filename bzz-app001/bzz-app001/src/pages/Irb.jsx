import React from "react";
import { Switch } from "antd";
import { CloseOutlined, CheckOutlined } from "@ant-design/icons";
import DataTableModule from "@/modules/DataTableModule";

export default function Irb() {
  const entity = "irb"; // entity api name , don't change it

  const dataTableColumns = [
    // {
    //   title: "",
    //   dataIndex: "Flag",
    //   key: "Flag",
    //   render: (text, row) => {
    //     return {
    //       props: {
    //         style: {
    //           width: "60px",
    //         },
    //       },
    //       children: (
    //         <Switch
    //           defaultChecked={Boolean(text)}
    //           checkedChildren={<CheckOutlined />}
    //           unCheckedChildren={<CloseOutlined />}
    //           size="small"
    //         />
    //       ),
    //     };
    //   },
    // },
    {
      title: "ID",
      dataIndex: "ID",
      key: "ID",
      render: (text, row) => {
        return {
          props: {
            style: {
              width: "60px",
            },
          },
          children: text,
        };
      },
    },
    {
      title: "IRB",
      dataIndex: "IRB",
      key: "IRB",
    },
  ];

  const DATATABLE_TITLE = "Data Collection";

  const config = {
    entity,
    DATATABLE_TITLE,
    dataTableColumns,
  };
  return <DataTableModule config={config} />;
}
