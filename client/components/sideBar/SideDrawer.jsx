import React from 'react';
import classes from './sideBar.module.css';
import Link from 'next/link';
import { menuItems } from '../../utils/menuItems';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md';
import { setMode } from '../../store/mode';
import { menuClose } from '../../store/menu';
const SideDrawer = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.mode);
  const { token } = useSelector((state) => state.auth);
  const userId =
    typeof window !== 'undefined' ? localStorage?.getItem('userId') : null;
  const modeHandler = () => {
    dispatch(setMode());
  };
  const menuCloseHandler = () => {
    dispatch(menuClose());
  };
  return (
    <div className={classes.sideBarWrapper}>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} onClick={menuCloseHandler}>
            <Link
              href={item.to}
              style={{
                color: mode !== 'dark' ? '#353b48' : '#dcdde1',
              }}
            >
              {item.title}
            </Link>
          </li>
        ))}

        <li onClick={menuCloseHandler}>
          <Link href={token ? `/user/${userId}` : '/user/login'}>
            {token ? 'پروفایل' : 'ورود'}
          </Link>
        </li>

        <li onClick={modeHandler}>
          {mode === 'dark' ? (
            <MdOutlineLightMode size={'20px'} />
          ) : (
            <MdOutlineNightlight size={'20px'} />
          )}
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
