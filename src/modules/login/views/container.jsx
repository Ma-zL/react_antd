import React from "react";
import "../styles/style.less";
import { connect } from "react-redux";
import { Form, Input, Button, Checkbox } from "antd";
import * as constants from "../funcs/constants";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import _ from "lodash";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { I18n } from "react-i18nify";

class Login extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			backgroundUrl: "./static/media/background.jpg"
		};
	}

	componentDidUpdate(prevProps) {
		if (!_.isEqual(prevProps.loginSuccess, this.props.loginSuccess)) {
			let history = this.props.history;
			history.push("/mainDashboard");
		}
	}

	onFinish = values => {
		let formData = new FormData();
		formData.append("name", values.username);
		formData.append("password", values.password);
		this.props.loginRequest(formData);
	};

	render() {
		const { backgroundUrl } = this.state;
		return (
			<div
				className="login_cont"
				style={{
					background: `transparent url(${backgroundUrl}) 100% 100% no-repeat`,
					backgroundSize: "cover"
				}}
			>
				<Form
					name="normal_login"
					className="login_form"
					initialValues={{
						remember: true
					}}
					onFinish={this.onFinish}
				>
					<Form.Item
						name="username"
						rules={[
							{
								required: true,
								message: "Please input your Username!"
							}
						]}
					>
						<Input
							prefix={
								<UserOutlined className="site-form-item-icon" />
							}
							placeholder={I18n.t("login.userName")}
						/>
					</Form.Item>
					<Form.Item
						name="password"
						rules={[
							{
								required: true,
								message: "Please input your Password!"
							}
						]}
					>
						<Input
							prefix={
								<LockOutlined className="site-form-item-icon" />
							}
							type="password"
							placeholder="Password"
						/>
					</Form.Item>
					<Form.Item>
						<Form.Item
							name="remember"
							valuePropName="checked"
							noStyle
						>
							<Checkbox>Remember me</Checkbox>
						</Form.Item>

						<a className="login-form-forgot" href="">
							Forgot password
						</a>
					</Form.Item>

					<Form.Item>
						<Button
							type="primary"
							htmlType="submit"
							className="login-form-button"
							onClick={this.callLogin}
						>
							Log in
						</Button>
						Or <a href="">register now!</a>
					</Form.Item>
				</Form>
			</div>
		);
	}
}

Login.propTypes = {
	loginSuccess: PropTypes.bool,
	history: PropTypes.object,
	loginRequest: PropTypes.func
};

Login.defaultProps = {};

const mapStateToProps = (state, ownProps) => {
	return {
		loginSuccess:
			state[constants.REDUCER_NAME] &&
			state[constants.REDUCER_NAME].loginSuccess
	};
};

const mapDispatchToProps = dispatch => {
	return {
		loginRequest: loginPost => {
			dispatch(constants.loginAction(loginPost));
		}
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Login));
