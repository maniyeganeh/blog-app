import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../store/authActions';
import { setMode } from '../../store/mode';
const LandingPage = () => {
  const [form, setForm] = useState({
    email: 'yeganehmani@gmail.com',
    password: 'mani5849500',
  });

  const { error, loading, userInfo, token } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  console.log(userInfo);
  const submitForm = async (e) => {
    e.preventDefault();
    dispatch(loginUser(form));
  };

  const modeHandler = () => {
    dispatch(setMode());
  };
  const inputChangeHandler = (e) => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };
  return (
    <div>
      {token ? (
        <></>
      ) : (
        <form onSubmit={submitForm}>
          <input
            type="email"
            value={form.email}
            name="email"
            onChange={inputChangeHandler}
          />
          <input
            type="password"
            value={form.password}
            name="password"
            onChange={inputChangeHandler}
          />
          <button type="submit">Send</button>
        </form>
      )}

      {error && <h1>Error</h1>}
      {/* {userInfo && <h1>{userInfo.email}</h1>} */}
      {/* {token && <h1>Logged In</h1>} */}
    </div>
  );
};

export default LandingPage;
