import { useState } from 'react';
import { ButtonLoader, Form, Input } from '../../components/ui/FormElements';
import OptionSelection from '../../components/ui/OptionSelection';
import { useRequest } from '../../hooks/useRequest';
import { useTriggerToast } from '../../hooks/useTriggerToast';

const CreatePool = () => {
  const [input, setInput] = useState({
    options: [],
    max_attempts: '',
  });
  const { loading, error, data, fetchData } = useRequest();
  useTriggerToast(error, data);
  const inputHandler = (event) => {
    const { value, name } = event.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleLogin = async (event) => {
    event.preventDefault();
    await fetchData('register', 'POST', {
      body: input,
    });
  };

  console.log(input);

  return (
    <>
      <h1 className="text-left p-4 rounded">Create Pool</h1>
      <Form onSubmitHandler={handleLogin}>
        <OptionSelection options={input.options} setInput={setInput} />
        <Input
          label="Max Attempts*"
          name="max_attempts"
          type="number"
          required
          onInput={inputHandler}
        />

        <ButtonLoader
          type="submit"
          loader={loading}
          value="Submit"
          borderColor="#fff"
        />
      </Form>
    </>
  );
};

export default CreatePool;
