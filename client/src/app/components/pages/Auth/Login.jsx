import { useState } from "react";
import Col from "../../layout/Format/Col";
import {
  Form,
  Input,
  ButtonLoader,
} from "../../common/FormElements/FormElements";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const inputHandler = (event) => {
    const { value, name } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleLogin = async (event) => {
    event.preventDefault();
  };

  return (
    <Col>
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
          loader={true}
          value="Submit"
          borderColor="#fff"
        />
      </Form>
    </Col>
  );
};

export default Login;
