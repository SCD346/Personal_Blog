const React = require("react");
const Default = require("./layouts/default");

function Login() {
  return (
    <Default>
      <div className="form">
        <form>
          <div className="input-container">
            <label>Username </label>
            <input type="text" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    </Default>
  );
}

module.exports = Login;
