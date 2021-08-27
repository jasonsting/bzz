import React, { useLayoutEffect } from "react";

import { useDispatch } from "react-redux";
import { crud } from "@/redux/crud/actions";

import { FullPageLayout } from "@/layout";

import CrudDataTable from "./CrudDataTable";

export default function FullDataTableModule({ config }) {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(crud.resetState());
  }, []);

  return (
    <FullPageLayout>
      <CrudDataTable config={config} />
    </FullPageLayout>
  );
}
