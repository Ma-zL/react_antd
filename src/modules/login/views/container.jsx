import React from "react";
import { Button } from "antd";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  async componentDidMount() {
    // const res = await getSettings();
  }

  callLogin = () => {
    console.log("login button click");
  };

  render() {
    return (
      <div>
        this is login page
        <Button type="primary" onClick={this.callLogin}>
          Login
        </Button>
      </div>
    );
  }
}

Login.propTypes = {};

Login.defaultProps = {};
export default Login;
