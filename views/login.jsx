const React = require("react");
const Default = require("./layouts/default");
const { Heading } = require("@chakra-ui/react");

function Login() {
  return (
    <Default>
      <Heading size="md">Log In</Heading>
    </Default>
  );
}

module.exports = Login;
