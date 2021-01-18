import React, {useState} from "react";
import "./Login.css";

function Login(props) {
  // const adminUsr = {
  //   email: "1140@manna.com",
  //   password: "123456",
  // };
  const URL = "https://qa.manna-irrigation.com:8443/omer/api/v2/users/login";
  const [details, setDetails] = useState({email: "", password: ""});
  const [error, setError] = useState("");

  const fetchApi = async () => {
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: details.email,
          password: details.password,
        }),
      });

      return response;
    } catch (e) {
      console.log("error at fetching phase");
    }
  };

  const logIn = async () => {
    const response = await fetchApi();
    if (response.status === 200) {
      const data = await response.json();
      const user_api_token = data.user_api_token;
      props.history.push("/farmlist", {apiToken: user_api_token});
    } else {
      setError(`Error: ${response.statusText}`);
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();
    logIn(details);
  };

  return (
    <div className="loginBody">
      <h1 className="title">MannaViewer</h1>
      <form onSubmit={submitHandler}>
        <div className="form-inner">
          <h2>Login</h2>
          <div className="form-group">
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              onChange={(event) =>
                setDetails({...details, email: event.target.value})
              }
              value={details.email}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password: </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              onChange={(event) =>
                setDetails({...details, password: event.target.value})
              }
              value={details.password}
            />
          </div>
          {error !== "" ? (
            <div className="error">{error}</div>
          ) : (
            <div className="error"></div>
          )}
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
}

export default Login;
