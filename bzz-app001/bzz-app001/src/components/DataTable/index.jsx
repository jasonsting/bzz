import React, { useCallback, useEffect } from "react";
import { Dropdown, Button, PageHeader, Table } from "antd";

import { EllipsisOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { crud } from "@/redux/crud/actions";
import { selectListItems } from "@/redux/crud/selectors";

import uniqueId from "@/utils/uinqueId";

export default function DataTable({ config, DropDownRowMenu, AddNewItem }) {
  let { entity, dataTableColumns, DATATABLE_TITLE } = config;
  dataTableColumns = [
    ...dataTableColumns,
    {
      title: "",
      render: (row) => (
        <Dropdown overlay={DropDownRowMenu({ row })} trigger={["click"]}>
          <EllipsisOutlined style={{ cursor: "pointer", fontSize: "24px" }} />
        </Dropdown>
      ),
    },
  ];
  const Title = () => {
    return (
      <h2
        className="ant-page-header-heading-title"
        style={{ fontSize: "36px" }}
      >
        {DATATABLE_TITLE}
      </h2>
    );
  };

  const { result: listResult, isLoading: listIsLoading } =
    useSelector(selectListItems);

  const { pagination, items } = listResult;

  const dispatch = useDispatch();

  const handelDataTableLoad = useCallback((pagination) => {
    const option = { page: pagination.current || 1 };
    dispatch(crud.list(entity, option));
  }, []);

  useEffect(() => {
    dispatch(crud.list(entity));
  }, []);

  return (
    <>
      <PageHeader
        title={<Title />}
        ghost={false}
        extra={[
          <Button onClick={handelDataTableLoad} key={`${uniqueId()}`}>
            Refresh
          </Button>,
          <AddNewItem key={`${uniqueId()}`} config={config} />,
        ]}
        style={{
          padding: "20px 0px",
        }}
      ></PageHeader>
      <Table
        columns={dataTableColumns}
        rowKey={(item) => item._id}
        dataSource={items}
        pagination={pagination}
        loading={listIsLoading}
        onChange={handelDataTableLoad}
      />
    </>
  );
}
