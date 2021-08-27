import React, { useState } from "react";

import FullDataTableModule from "@/modules/FullDataTableModule";
import { Table, Input, Button, Space } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";

export default function Wq5508() {
  const [searchText, setSearchText] = useState("");
  const [searchedColumn, setSearchedColumn] = useState("");

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          // ref={(node) => {
          //   searchInput = node;
          // }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText(selectedKeys[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        // setTimeout(() => searchInput.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setSearchText("");
  };

  const entity = "wq5508";

  const panelTitle = "WQ 5508";
  const dataTableTitle = "WQ 5508";

  const dataTableColumns = [
    { title: "Svc Date", dataIndex: "Svc Date", sorter: true },
    {
      title: "Patient MRN",
      dataIndex: "Patient MRN",
      ...getColumnSearchProps("Patient MRN"),
    },
    {
      title: "Patient",
      dataIndex: "Patient",
      filters: [
        { text: "Doe Jane", value: "Doe Jane" },
        { text: "John Smith", value: "John Smith" },
      ],
    },
    { title: "CPT Codes", dataIndex: "CPT Codes" },
    { title: "Sess Amount", dataIndex: "Sess Amount" },
    { title: "Primary Coverage", dataIndex: "Primary Coverage" },
    { title: "Study Type", dataIndex: "Study Type" },
    { title: "Research IRB", dataIndex: "Research IRB" },
    {
      title: "Days Until Timely Filing",
      dataIndex: "Days Until Timely Filing",
    },
    { title: "Aging Days", dataIndex: "Aging Days", sorter: true },
    { title: "Notes", dataIndex: "Notes" },
  ];

  const ADD_NEW_ENTITY = "Add new customer";
  const DATATABLE_TITLE = "customers List";
  const ENTITY_NAME = "customer";
  const CREATE_ENTITY = "Create customer";
  const UPDATE_ENTITY = "Update customer";
  const config = {
    entity,
    panelTitle,
    dataTableTitle,
    ENTITY_NAME,
    CREATE_ENTITY,
    ADD_NEW_ENTITY,
    UPDATE_ENTITY,
    DATATABLE_TITLE,
    dataTableColumns,
  };
  return <FullDataTableModule config={config} />;
}
