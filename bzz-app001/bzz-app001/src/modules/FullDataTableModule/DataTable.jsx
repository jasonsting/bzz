import React, { useCallback, useEffect, useState, useRef } from "react";
import {
  Button,
  PageHeader,
  Table,
  Checkbox,
  Tooltip,
  Dropdown,
  Select,
} from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { crud } from "@/redux/crud/actions";
import { selectListItems } from "@/redux/crud/selectors";

import uniqueId from "@/utils/uinqueId";
import inverseColor from "@/utils/inverseColor";

export default function DataTable({ config }) {
  const inputColorRef = useRef(null);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [tableItemsList, setTableItemsList] = useState([]);
  const [coloredRow, setColoredRow] = useState({});
  const [isDropDownBox, setDropDownBox] = useState(false);
  // const openColorBox = () => {
  //   inputColorRef.current.click();
  // };

  /***************/
  const handelColorChange = (color) => {
    const tmpObj = {};
    selectedRowKeys.map((x) => {
      tmpObj[x] = color;
      // tmpObj[x] = e.target.value;
    });
    setColoredRow({ ...coloredRow, ...tmpObj });
    setSelectedRowKeys([]);
  };
  const handelColorSelect = (e) => {
    const tmpObj = {};
    selectedRowKeys.map((x) => {
      tmpObj[x] = e.target.value;
    });
    setColoredRow({ ...coloredRow, ...tmpObj });
    setSelectedRowKeys([]);
  };

  function MakeNewColor({ colorsList }) {
    const colorsButton = colorsList.map((element) => {
      const borderStyleColor =
        element.color === "#ffffff" ? "#eee" : element.color;
      return (
        <div className="colorPicker" key={uniqueId()}>
          <Button
            type="primary"
            shape="circle"
            type="dashed"
            style={{
              background: element.color,
              borderColor: borderStyleColor,
              marginBottom: "5px",
            }}
            onClick={() => handelColorChange(element.color)}
          >
            &nbsp;
          </Button>
          <span>{element.text}</span>
        </div>
      );
    });

    const popUpContent = (
      <div className="dropDownBox">
        <div className="pad20" style={{ width: "560px", height: "160px" }}>
          <div style={{ width: "180px", float: "left" }}>{colorsButton}</div>
          <div style={{ width: "160px", float: "left", padding: "0 10px" }}>
            <input
              type="color"
              autoFocus
              // ref={inputColorRef}
              // onChange={handelColorSelect}
              style={{
                width: "100%",
              }}
            />
          </div>
          <div style={{ width: "180px", float: "left", padding: "0 10px" }}>
            <Select
              placeholder="Select"
              defaultValue="Done"
              style={{ minWidth: "100%", marginBottom: "30px" }}
            >
              <Select.Option value="Done">Done</Select.Option>
              <Select.Option value="Pending">Pending</Select.Option>
              <Select.Option value="Needs Review">Needs Review</Select.Option>
            </Select>
            <Button style={{ marginRight: "20px" }}>Cancel</Button>
            <Button>Save</Button>
          </div>
        </div>
      </div>
    );
    // useEffect(() => {
    //   if (!isDropDownBox) {
    //     openColorBox();
    //   }
    // }, [isDropDownBox]);
    const handleDropDownClick = () => {
      setDropDownBox(!isDropDownBox);
    };
    return (
      <>
        {colorsButton}

        <Dropdown
          overlay={popUpContent}
          trigger={["click"]}
          visible={isDropDownBox}
          // onVisibleChange={openColorBox}
          onClick={handleDropDownClick}
        >
          <Button shape="circle" icon={<SettingOutlined />} type="dashed" />
        </Dropdown>
      </>
    );
  }
  let { entity, dataTableColumns, dataTableTitle } = config;
  const newDataTableColumns = dataTableColumns.map((obj) => ({
    ...obj,
    render: (text, row) => {
      return {
        props: {
          style: {
            background: coloredRow[row.ID] ? coloredRow[row.ID] : "",
            color: coloredRow[row.ID] ? inverseColor(coloredRow[row.ID]) : "",
          },
        },
        children:
          typeof text === "boolean" ? <Checkbox checked={text} /> : text,
      };
    },
  }));

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

  useEffect(() => {
    const listIds = items.map((x) => x.ID);
    setTableItemsList(listIds);
  }, [items]);

  const [firstRow, setFirstRow] = useState();

  const [onSelect, setSelect] = useState(false);
  const onClickRow = (record, rowIndex) => {
    return {
      onClick: () => {
        // const exist = selectedRowKeys.includes(record.ID);
        // if (exist) {
        //   let filtered = selectedRowKeys.filter(function (value) {
        //     return value != record.ID;
        //   });
        //   setSelectedRowKeys(filtered);
        // } else {
        //   setSelectedRowKeys([...selectedRowKeys, record.ID]);
        // }
      },
      onMouseDown: () => {
        setFirstRow(rowIndex);
        setSelectedRowKeys([record.ID]);
        setSelect(true);
      },
      onMouseEnter: () => {
        if (onSelect) {
          const selectedRange = tableItemsList.slice(firstRow, rowIndex + 1);
          setSelectedRowKeys(selectedRange);
        }
      },
      onMouseUp: () => {
        setSelect(false);
      },
    };
  };

  const handelColorRow = (checked, record, index, originNode) => {
    return {
      props: {
        style: {
          background: coloredRow[record.ID] ? coloredRow[record.ID] : "",
        },
      },
      // children: originNode,
    };
  };

  const onSelectChange = (selectedKeys, selectedRows) => {
    setSelectedRowKeys(selectedKeys);
    console.log("selectedRowKeys changed: ", selectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    hideSelectAll: true,
    columnWidth: 0,

    renderCell: handelColorRow,
    selectedRowKeys: selectedRowKeys,
  };

  return (
    <>
      <h2
        className="ant-page-header-heading-title"
        style={{ fontSize: "36px", marginBottom: "15px" }}
      >
        {dataTableTitle}
      </h2>
      <PageHeader
        ghost={false}
        tags={
          <MakeNewColor
            colorsList={[
              { text: "Done", color: "#b7dd79" },
              { text: "Pending", color: "#daab00" },
              { text: "Needs Review", color: "#5bc2e7" },
              { text: "", color: "#c1c6c8" },
              { text: "", color: "#8f63cd" },
              { text: "", color: "#ffffff" },
            ]}
          />
        }
        extra={[
          <Button onClick={handelDataTableLoad} key={`${uniqueId()}`}>
            Refresh
          </Button>,
        ]}
        style={{
          padding: "0px 0px 20px",
        }}
      ></PageHeader>
      <Table
        columns={newDataTableColumns}
        rowKey="ID"
        rowSelection={rowSelection}
        onRow={onClickRow}
        ellipsis={true}
        // rowClassName={setRowClassName}
        scroll={{ y: 500 }}
        size={"small"}
        dataSource={items}
        pagination={pagination}
        loading={listIsLoading}
        onChange={handelDataTableLoad}
      />
    </>
  );
}
