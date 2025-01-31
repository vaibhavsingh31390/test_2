import { ButtonLoader } from '../../components/ui/FormElements';

const MyListPools = () => {
  return (
    <>
      <div className="card">
        <div className="card--title">
          <h2>Lorem, ipsum dolor.</h2>
        </div>
        <div className="card--description">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque,
            deserunt?
          </p>
        </div>
        <div className="card--action">
          <ButtonLoader
            type="button"
            loader={false}
            value="Vote"
            borderColor="#fff"
          />
        </div>
      </div>
    </>
  );
};

export default MyListPools;
