import { useState } from "react";
import { ButtonLoader, Form, Input } from "../../components/ui/FormElements";
import { useRequest } from "../../hooks/useRequest";
import { useTriggerToast } from "../../hooks/useTriggerToast";
import { useDispatch } from "react-redux";
import ContainerGrid from "../../components/hoc/ContainerGrid";

const Register = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const { loading, error, data, fetchData } = useRequest();
  const dispatch = useDispatch();
  useTriggerToast(error, data, dispatch);
  const inputHandler = (event) => {
    const { value, name } = event.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    await fetchData("register", "POST", {
      body: input,
    });
  };

  return (
    <ContainerGrid>
      <div className="w-1/2">
        <h1 className="text-left p-4 rounded">Register</h1>
        <Form onSubmitHandler={handleLogin}>
          <Input
            label="Name*"
            name="name"
            type="text"
            required
            onInput={inputHandler}
          />
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
          <Input
            label="Confirm Password*"
            name="password_confirmation"
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
      </div>
    </ContainerGrid>
  );
};

export default Register;
