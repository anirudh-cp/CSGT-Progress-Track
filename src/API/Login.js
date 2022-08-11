import { useNavigate } from "react-router-dom";

class Login {
  async login(
    email,
    password,
    setEmail,
    setPassword,
    setErrors,
    setToken,
    setGroup,
    setName,
    setEmpID
  ) {
    const response = await fetch("/api/account/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    }).catch((error) => {
      // Your error is here!
      alert("Cannot connect to server. Please try again later.");
    });

    if (response.status === 200) {
      let data = await response.json();

      if (data.token) {
        await setToken(data.token);
        await setGroup(data.groups[0]);
        await setName(data.name);
        await setEmpID(data.emp_id);
        await setErrors(false);

        return data.groups[0];
      } else {
        await setEmail("");
        await setPassword("");
        await setToken("");
        await setErrors(true);
        alert("Login Error. Please enter correct credentials.");
      }
    } else if (response.status === 404) {
      await setEmail("");
      await setPassword("");
      await setToken("");
      await setErrors(true);
      alert("Login Error. Please enter correct credentials.");
    }
  }
}

export default Login;
