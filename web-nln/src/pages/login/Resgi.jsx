import "./LoginContainer.css";
import { useState } from "react";
import { Link } from "react-router-dom";

/**
 *  contain left -> if login -> form else -> image
 *  contain right -> if login -> image else -> form
 * @returns
 */
function LoginContainer({}) {
  const [isUsernameFocused, setUsernameFocused] = useState(true);
  const [isPasswordFocused, setPasswordFocused] = useState(true);
  const [isEmail, setEmailFocused] = useState(true);
  const [isRePasswordFocused, setRePasswordFocused] = useState(true);

  const [usernameValue, setUsernameValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [repasswordValue, setRePasswordValue] = useState("");

  return (
    <div className="LoginContainer">
      <div className="InnerLoginContainer">
      <div className="fixed-img">
          <img
            alt="login"
            src={process.env.PUBLIC_URL + "/images/login/img login.png"}
          />
        </div>
        <div className="login-content">
          <div className="login-image">
            <img
              alt="home"
              src={process.env.PUBLIC_URL + "/images/fixed/image 29.png"}
            ></img>
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
                  className="login-input-field"
                  value={usernameValue}
                  onChange={(e) => setUsernameValue(e.target.value)}
                  onFocus={() => setUsernameFocused(true)}
                  onBlur={() => setUsernameFocused(false)}
                ></input>
                
              </div>
              <div className="email input-item">
                <label
                  htmlFor="email"
                  className="email-placeholder input-label"
                >
                  EMAIL HOẶC SỐ ĐIỆN THOẠI
                </label>
                <input
                  type="email"
                  name="email"
                  className="login-input-field"
                  value={usernameValue}
                  onChange={(e) => setEmailValue(e.target.value)}
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                ></input>
                
              </div>

              <div className="password input-item">
                <label
                  htmlFor="password"
                  className="password-placeholder input-label"
                  
                >
                  MẬT KHẨU MỚI
                </label>
                <input
                  type="password"
                  // placeholder='MẬT KHẨU'
                  className="login-input-field"
                  name="password"
                  value={passwordValue}
                  onChange={(e) => setPasswordValue(e.target.value)}
                  onFocus={() => setPasswordFocused(true)}
                  onBlur={() => setPasswordFocused(false)}
                />
                
              </div>
              <div className="repassword input-item">
                <label
                  htmlFor="repassword"
                  className="repassword-placeholder input-label"
                  
                >
                  NHẬP LẠI MẬT KHẨU
                </label>
                <input
                  type="repassword"
                  // placeholder='MẬT KHẨU'
                  className="login-input-field"
                  name="repassword"
                  value={repasswordValue}
                  onChange={(e) => setRePasswordValue(e.target.value)}
                  onFocus={() => setRePasswordFocused(true)}
                  onBlur={() => setRePasswordFocused(false)}
                />
                
              </div>
            </form>
          </div>
          
          <div className="login-button">
            <Link to={`/`}>
              <button>ĐĂNG KÝ</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginContainer;
