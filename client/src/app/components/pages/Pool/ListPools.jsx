import { useEffect } from 'react';
import { ButtonLoader } from '../../components/ui/FormElements';
import { useRequest } from '../../hooks/useRequest';
import { useTriggerToast } from '../../hooks/useTriggerToast';
import ContainerGrid from '../../components/hoc/ContainerGrid';

const ListPools = () => {
  const { loading, error, data, fetchData } = useRequest();
  useEffect(() => {
    const fetchPools = async () => {
      await fetchData('listPool', 'GET');
      console.log(loading, error, data);
    };
    fetchPools();
  }, []);
  return (
    <ContainerGrid loading={loading}>
      <div className="w-2/3">
        {data?.data?.pools?.length ? (
          data.data.pools.map((pool) => (
            <div key={pool.id} className="card mb-4">
              <div className="card--title">
                <h2>{pool.title}</h2>
              </div>
              <div className="card--description">
                <p>{pool.desc}</p>
              </div>
              <div className="card--action">
                <ButtonLoader
                  type="button"
                  loader={loading}
                  value="Vote"
                  data-id={pool.id}
                  borderColor="#fff"
                />
              </div>
            </div>
          ))
        ) : (
          <h1 className="text-center text-gray-500 p-4">No pools found</h1>
        )}
      </div>
      <div className="w-1/3">
        <h1 className="text-left p-4 rounded">Pools Live Feed</h1>
      </div>
    </ContainerGrid>
  );
};

export default ListPools;
