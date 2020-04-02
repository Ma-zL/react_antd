import React from "react";
import { Button } from "antd";
import "../styles/style.less";
import { connect } from "react-redux";
import * as constants from "../funcs/constants";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      backgroundUrl: "./static/media/background.jpg",
    };
  }

  callLogin = () => {
    this.props.loginRequest(5);
  };

  render() {
    const { backgroundUrl } = this.state;
    return (
      <div
        className="login_cont"
        style={{
          background: `transparent url(${backgroundUrl}) 100% 100% no-repeat`,
        }}
      ></div>
    );
  }
}

Login.propTypes = {};

Login.defaultProps = {};

const mapStateToProps = (state, ownProps) => {
  return {
    count: state[constants.REDUCER_NAME] && state[constants.REDUCER_NAME].count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (count) => {
      dispatch(constants.loginAction(count));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
