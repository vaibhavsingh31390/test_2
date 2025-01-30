import { useState } from "react";
import { ButtonLoader, Form, Input } from "../../components/ui/FormElements";

const Login = () => {
  const [input, setInput] = useState({
    email: "",
    password: "",
    conf_password: "",
  });

  const inputHandler = (event) => {
    const { value, name } = event.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    console.log(formData);
  };

  console.log(input);

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
        <Input
          label="Confirm Password*"
          name="conf_password"
          type="password"
          required
          onInput={inputHandler}
        />
        <ButtonLoader type="submit" loader={true} value="Submit" />
      </Form>
    </>
  );
};

export default Login;
