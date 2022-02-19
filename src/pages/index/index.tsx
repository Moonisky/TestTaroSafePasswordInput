import { Component } from "react";
import { View, Text, Input } from "@tarojs/components";
import "./index.less";

export default class Index extends Component {
  state = {
    value: "",
  };

  componentWillMount() {}

  componentDidMount() {}

  componentWillUnmount() {}

  componentDidShow() {}

  componentDidHide() {}

  onInput(res: any) {
    this.setState({
      value: res.detail.value,
    });
  }

  onBlur(res: any) {
    console.log("onBlur", res);
    console.log(JSON.stringify(res.detail, null, 2));
  }

  render() {
    const { value } = this.state;
    const timestamp = new Date().getTime();
    return (
      <View className="index">
        <Text>Hello world!</Text>
        <Input
          style="border: 1px solid blue;"
          type="safe-password"
          maxlength={6}
          safePasswordCertPath="/passpad.crt"
          safePasswordTimeStamp={timestamp}
          safePasswordNonce={`${timestamp}`}
          safePasswordSalt="userid"
          safe-password-custom-hash="md5(sha1('foo' + sha256(sm3(password + 'bar'))))"
          onInput={this.onInput.bind(this)}
          onBlur={this.onBlur.bind(this)}
          value={value}
        ></Input>
      </View>
    );
  }
}
