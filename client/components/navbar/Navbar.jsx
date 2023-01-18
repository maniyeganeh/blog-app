import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';

import Link from 'next/link';
import classes from './navbar.module.css';
import { menuItems } from '../../utils/menuItems';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md';
import { setMode } from '../../store/mode';
const Navbar = () => {
  const { mode } = useSelector((state) => state.mode);
  const { token } = useSelector((state) => state.auth);
  // const [userId, setUserId] = useState('');
  const userId =
    typeof window !== 'undefined' ? localStorage?.getItem('userId') : null;

  const dispatch = useDispatch();
  const modeHandler = () => {
    dispatch(setMode());
  };
  console.log(userId);
  return (
    <div
      className={
        mode !== 'dark'
          ? classes.navbarWrapper
          : `${classes.navbarWrapper} ${classes.navbarWrapperDark}`
      }
    >
      <Container fluid>
        <Row>
          <Col xs={6} sm={6} md={3}>
            <Link
              href="/"
              style={{
                color: mode !== 'dark' ? '#353b48' : '#dcdde1',
                textDecoration: 'none',
              }}
            >
              <h5>بلاگ</h5>
            </Link>
          </Col>
          <Col xs={6} sm={6} md={9}>
            <div className={classes.menuItemsWrapper}>
              <ul>
                {menuItems.map((item, index) => (
                  <li key={index}>
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
                {/* {token && (
                  <li>
                    <Link href="/posts">پروفایل</Link>
                  </li>
                )} */}

                <li>
                  <Link href={token ? `/user/${userId}` : '/user/login'}>
                    {token ? 'پروفایل' : 'ورود'}
                  </Link>
                </li>
                {/* <li>
                  {token ? (
                    <Link href={`/user/${userId}`}>پروفایل</Link>
                  ) : (
                    <Link href="/user/login">ورود</Link>
                  )}
                </li> */}
                <li onClick={modeHandler}>
                  {mode === 'dark' ? (
                    <MdOutlineLightMode size={'20px'} />
                  ) : (
                    <MdOutlineNightlight size={'20px'} />
                  )}
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Navbar;
