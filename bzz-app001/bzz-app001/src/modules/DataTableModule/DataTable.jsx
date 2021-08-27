import React, { useCallback, useEffect } from "react";
import { Button, PageHeader, Table } from "antd";

import { useSelector, useDispatch } from "react-redux";
import { crud } from "@/redux/crud/actions";
import { selectListItems } from "@/redux/crud/selectors";

import uniqueId from "@/utils/uinqueId";

export default function DataTable({ config }) {
  let { entity, dataTableColumns, DATATABLE_TITLE } = config;

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
  return (
    <>
      <PageHeader
        title={<Title />}
        ghost={false}
        extra={[
          <Button onClick={handelDataTableLoad} key={`${uniqueId()}`}>
            Refresh
          </Button>,
        ]}
        style={{
          padding: "20px 0px",
        }}
      ></PageHeader>
      <Table
        columns={dataTableColumns}
        rowKey="ID"
        size={"small"}
        dataSource={items}
        pagination={pagination}
        loading={listIsLoading}
        onChange={handelDataTableLoad}
      />
    </>
  );
}
