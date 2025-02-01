import React from 'react';
import Loader from '../ui/Loader';

function ContainerGrid({ children, loading = false }) {
  return (
    <>
      {loading ? (
        <div className="global--row h-[100svh] flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="global--row mt-24">{children}</div>
      )}
    </>
  );
}

export default ContainerGrid;
