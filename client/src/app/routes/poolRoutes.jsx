import React, { lazy } from "react";

const CreatePool = lazy(() => import("../components/pages/Pool/CreatePool"));
const UpdatePool = lazy(() => import("../components/pages/Pool/UpdatePool"));
const ListPools = lazy(() => import("../components/pages/Pool/ListPools"));
const MyListPools = lazy(() => import("../components/pages/Pool/MyListPools"));

export const poolRoutes = [
  {
    path: "create-pool",
    element: <CreatePool />,
  },
  {
    path: "update-pool",
    element: <UpdatePool />,
  },
  {
    path: "pools",
    element: <ListPools />,
  },
  {
    path: "my-pools",
    element: <MyListPools />,
  },
];
