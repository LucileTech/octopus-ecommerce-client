import useForm from "../../hooks/useForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiHandler from "../../api/apiHandler";
import "./FormSignUp.css";

const FormSignUp = () => {
  const [values, handleChange] = useForm({
    name: "",
    email: "",
    password: "",
    isArtist: false,
  });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    apiHandler
      .signup(values)
      .then(() => {
        navigate("/signin");
      })
      .catch((error) => {
        setError(error.response.data);
      });
  };

  // const handleArtistyChange = (event) => {
  //   setArtisty(event.target.checked);
  //   console.log(event.target.checked);
  // };

  return (
    <div className="middle-div-min">
      <section className="signup" id="form">
        <img
          className="logo-octopus-sign-up-page"
          src="images/logos/intro-logo.png"
        ></img>
        {error && <h3 className="error">{error.message}</h3>}
        <form id="signup-form" onSubmit={handleSubmit}>
          <h2 className="register-word-log-up-page">Register</h2>

          <div className="signup-checkbox">
            <label htmlFor="isArtist">Artist ?</label>
            <input
              type="checkbox"
              id="isArtist"
              name="isArtist"
              checked={values.isArtist}
              onChange={handleChange}
            />
          </div>

          <label htmlFor="name"></label>
          <input
            onChange={handleChange}
            value={values.name}
            type="text"
            id="name"
            className="signup-input"
            name="name"
            placeholder="User name"
          />
          <label htmlFor="email"></label>
          <input
            onChange={handleChange}
            value={values.email}
            type="email"
            id="email"
            className="signup-input"
            name="email"
            placeholder="Email address"
          />
          <label htmlFor="password"></label>
          <input
            onChange={handleChange}
            value={values.password}
            type="password"
            id="password"
            className="signup-input"
            name="password"
            placeholder="Create password"
          />
          <button id="register-button">Submit</button>
        </form>
      </section>
    </div>
  );
};

export default FormSignUp;
