import { useState } from 'react';
import { ButtonLoader, Form, Input } from '../../components/ui/FormElements';
import { useRequest } from '../../hooks/useRequest';
import { useTriggerToast } from '../../hooks/useTriggerToast';
import { useDispatch } from 'react-redux';
import { handleAuth } from '../../utils/constants';

const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
  });
  const { loading, error, data, fetchData } = useRequest();
  const dispatch = useDispatch();
  useTriggerToast(error, data, handleAuth(error, data, dispatch));
  const inputHandler = (event) => {
    const { value, name } = event.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleLogin = async (event) => {
    event.preventDefault();
    await fetchData('login', 'POST', {
      body: input,
    });
  };

  return (
    <>
      <h1 className="text-left p-4 rounded">Login</h1>
      <Form onSubmitHandler={handleLogin}>
        <Input
          label="Email*"
          name="email"
          type="email"
          required
          onInput={inputHandler}
        />
        <Input
          label="Password*"
          name="password"
          type="password"
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

export default Login;
