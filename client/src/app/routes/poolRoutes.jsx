import React from 'react';
import { LazyWithAuth } from '../components/hoc/WithAuth';

const CreatePool = React.lazy(() => import('../pages/pool/CreatePool'));
const UpdatePool = React.lazy(() => import('../pages/pool/UpdatePool'));
const ListPools = React.lazy(() => import('../pages/pool/ListPools'));
const MyListPools = React.lazy(() => import('../pages/pool/MyListPools'));

export const poolRoutes = [
  {
    path: '/create-pool',
    element: <LazyWithAuth Component={CreatePool} />,
  },
  {
    path: '/update-pool',
    element: <LazyWithAuth Component={UpdatePool} />,
  },
  {
    path: '/pools',
    element: <LazyWithAuth Component={ListPools} />,
  },
  {
    path: '/my-pools',
    element: <LazyWithAuth Component={MyListPools} />,
  },
];
