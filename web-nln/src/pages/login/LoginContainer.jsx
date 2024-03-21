import "./LoginContainer.css";
import { useState } from "react";
import { Link } from "react-router-dom";

/**
 *  contain left -> if login -> form else -> image
 *  contain right -> if login -> image else -> form
 * @returns
 */
function LoginContainer({ }) {
  const [isUsernameFocused, setUsernameFocused] = useState(true);
  const [isPasswordFocused, setPasswordFocused] = useState(true);

  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  return (
    <div className="LoginContainer">
      <div className="InnerLoginContainer">
        <div className="login-content">
          <div className="login-image">
            <img
              alt="home"
              src={process.env.PUBLIC_URL + "/images/fixed/image 29.png"}
            ></img>
          </div>
          <div className="Title">
            <label>
              TẠO MỚI TÀI KHOẢN
            </label>

          </div>
          <div className="login-form">
            <form>

              <div className="username input-item">
                <label
                  htmlFor="username"
                  className="username-placeholder input-label"
                >
                  TÊN TÀI KHOẢN
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  className="login-input-field"
                  value={usernameValue}
                  onChange={(e) => setUsernameValue(e.target.value)}
                //   onFocus={() => setUsernameFocused(true)}
                //   onBlur={() => setUsernameFocused(false)}
                ></input>

              </div>

              <div className="password input-item">
                <label
                  htmlFor="password"
                  className="password-placeholder input-label"

                >
                  MẬT KHẨU
                </label>
                <input
                  type="password"

                  className="login-input-field"
                  name="password"
                  id="password"
                  value={passwordValue}
                  onChange={(e) => setPasswordValue(e.target.value)}
                //   onFocus={() => setPasswordFocused(true)}
                //   onBlur={() => setPasswordFocused(false)}
                />

              </div>
            </form>
          </div>
          <div className="forgot-password">
            <a href="#l">Quên mật khẩu?</a>
          </div>
          <div className="login-button">
            <Link to={`/account`}>
              <button>Đăng nhập</button>
            </Link>
          </div>
        </div>
        <div className="fixed-img">
          <img
            alt="login"
            src={process.env.PUBLIC_URL + "/images/login/img login.png"}
          />
        </div>
      </div>
    </div>
  );
}

export default LoginContainer;
