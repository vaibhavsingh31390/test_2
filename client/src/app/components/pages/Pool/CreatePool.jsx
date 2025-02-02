import { useState } from 'react';
import {
  ButtonLoader,
  Form,
  Input,
  TextArea,
} from '../../components/ui/FormElements';
import OptionSelection from '../../components/ui/OptionSelection';
import { useRequest } from '../../hooks/useRequest';
import { useTriggerToast } from '../../hooks/useTriggerToast';
import toast from 'react-hot-toast';
import ContainerGrid from '../../components/hoc/ContainerGrid';

const CreatePool = () => {
  const [input, setInput] = useState({
    title: '',
    desc: '',
    options: [],
    max_attempts: '',
  });
  const { loading, error, data, fetchData } = useRequest();
  useTriggerToast(error, data, true);
  const inputHandler = (event) => {
    const { value, name } = event.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleLogin = async (event) => {
    event.preventDefault();
    if (input.options.length < 2) {
      return toast.error('Atleast two option required.');
    }
    await fetchData('createPool', 'POST', {
      body: input,
    });
  };

  return (
    <ContainerGrid loading={loading}>
      <h1 className="text-left p-4 rounded">Create Pool</h1>
      <Form onSubmitHandler={handleLogin}>
        <Input
          label="Title*"
          name="title"
          type="text"
          required
          onInput={inputHandler}
        />
        <TextArea
          label="Description*"
          name="desc"
          type="number"
          required
          row="4"
          cols="50"
          onInput={inputHandler}
        />
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
    </ContainerGrid>
  );
};

export default CreatePool;
