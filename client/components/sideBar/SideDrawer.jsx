import React from 'react';
import classes from './sideBar.module.css';
import Link from 'next/link';
import { menuItems } from '../../utils/menuItems';
import { useDispatch, useSelector } from 'react-redux';
import {
  MdOutlineLightMode,
  MdOutlineNightlight,
  MdLogin,
} from 'react-icons/md';
import { setMode } from '../../store/mode';
import { menuClose } from '../../store/menu';

const SideDrawer = () => {
  const dispatch = useDispatch();
  const { mode } = useSelector((state) => state.mode);
  const { token, userInfo } = useSelector((state) => state.auth);
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
        {token && userInfo && (
          <li onClick={menuCloseHandler}>
            <Link href={token ? `/user/${userId}` : '/user/login'}>
              <div className={classes.profilePic}>
                <img
                  src={`http://localhost:8080/${userInfo.picturePath[0].path}`}
                  alt="profile picutre"
                  title={userInfo.firstName + ' ' + userInfo.lastName}
                />
              </div>
            </Link>
          </li>
        )}

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
        {!token && (
          <li onClick={menuCloseHandler}>
            <Link
              href="/user/login"
              style={{
                color: mode !== 'dark' ? '#353b48' : '#dcdde1',
                textDecoration: 'none',
              }}
            >
              <MdLogin size={'32px'} />
            </Link>
          </li>
        )}
        {/* <li onClick={menuCloseHandler}>
          <Link href={token ? `/user/${userId}` : '/user/login'}>
            {token ? 'پروفایل' : 'ورود'}
          </Link>
        </li> */}

        <li onClick={modeHandler}>
          {mode === 'dark' ? (
            <MdOutlineLightMode size={'32px'} />
          ) : (
            <MdOutlineNightlight size={'32px'} />
          )}
        </li>
      </ul>
    </div>
  );
};

export default SideDrawer;
