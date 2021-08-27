import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { crud } from "@/redux/crud/actions";
import CoverageModule from "@/modules/CoverageModule";

import { Select } from "antd";

function valueType(value) {
  if (value == 0) {
    return 0;
  } else if (value == 1) {
    return 1;
  } else {
    return "";
  }
}

export default function CoverageGovernment() {
  const entity = "coverageGoverment";
  const dispatch = useDispatch();
  const updateGovernmentChange = (value, row) => {
    const { ID } = row;

    const fieldsValue = { Government: value };
    dispatch(crud.update(entity, ID, fieldsValue));
  };

  const updateNewChange = (value, row) => {
    const { ID } = row;

    const fieldsValue = { New: value };
    dispatch(crud.update(entity, ID, fieldsValue));
  };

  const dataTableColumns = [
    {
      title: "Government",
      dataIndex: "Government",
      key: "Government",
      render: (text, row) => {
        return {
          props: {
            style: {
              width: "130px",
            },
          },
          children: (
            <Select
              placeholder="Select"
              defaultValue={() => valueType(text)}
              style={{ minWidth: "90px" }}
              onSelect={(value) => updateGovernmentChange(value, row)}
            >
              <Select.Option value={1}>True</Select.Option>
              <Select.Option value={0}>False</Select.Option>
              <Select.Option value="null">&nbsp;</Select.Option>
            </Select>
          ),
        };
      },
    },
    {
      title: "Primary Coverage",
      dataIndex: "PrimaryCoverage",
      key: "PrimaryCoverage",
    },
    {
      title: "New",
      dataIndex: "New",
      key: "New",
      render: (text, row) => {
        return {
          props: {
            style: {
              width: "130px",
            },
          },
          children: (
            <Select
              placeholder="Select"
              defaultValue={() => valueType(text)}
              style={{ minWidth: "90px" }}
              onSelect={(value) => updateNewChange(value, row)}
            >
              <Select.Option value={1}>True</Select.Option>
              <Select.Option value={0}>False</Select.Option>
            </Select>
          ),
        };
      },
    },
  ];

  const DATATABLE_TITLE = "Government Coverage";

  const config = {
    entity,
    DATATABLE_TITLE,
    dataTableColumns,
  };
  return <CoverageModule config={config} />;
}
