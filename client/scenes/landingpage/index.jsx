import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setMode } from '../../store';
const LandingPage = () => {
  const mode = useSelector((state) => state.global);
  const dispatch = useDispatch();

  const modeHandler = () => {
    dispatch(setMode());
  };
  return <div></div>;
};

export default LandingPage;
