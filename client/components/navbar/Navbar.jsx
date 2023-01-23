import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { BsJustify } from 'react-icons/bs';
import Link from 'next/link';
import classes from './navbar.module.css';
import { menuItems } from '../../utils/menuItems';
import { useDispatch, useSelector } from 'react-redux';
import {
  MdOutlineLightMode,
  MdOutlineNightlight,
  MdLogin,
} from 'react-icons/md';
import { setMode } from '../../store/mode';
import SideDrawer from '../sideBar/SideDrawer';
import { menuOpen } from '../../store/menu';
const Navbar = () => {
  const { mode } = useSelector((state) => state.mode);
  const { token, userInfo } = useSelector((state) => state.auth);
  const { open } = useSelector((state) => state.menu);

  const userId =
    typeof window !== 'undefined' ? localStorage?.getItem('userId') : null;

  const dispatch = useDispatch();
  const modeHandler = () => {
    dispatch(setMode());
  };
  const showSidebarHandler = () => {
    dispatch(menuOpen());
  };
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
          <Col xs={10} sm={10} md={3}>
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
          <Col xs={2} sm={2} md={7}>
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

                {/* <li>
                  <Link href={token ? `/user/${userId}` : '/user/login'}>
                    {token ? (
                      <div className={classes.profilePic}>
                        <img
                          src={`http://localhost:8080/${userInfo.picturePath[0].path}`}
                        />
                      </div>
                    ) : (
                      'ورود'
                    )}
                  </Link>
                </li>

                <li onClick={modeHandler}>
                  {mode === 'dark' ? (
                    <MdOutlineLightMode size={'20px'} />
                  ) : (
                    <MdOutlineNightlight size={'20px'} />
                  )}
                </li> */}
              </ul>
            </div>
            <div className={classes.mobileMenu}>
              {!open && (
                <Button onClick={showSidebarHandler}>
                  <BsJustify />
                </Button>
              )}

              {open && <SideDrawer />}
            </div>
          </Col>
          <Col xs={2} sm={2} md={2}>
            <div className={classes.menuItemsWrapper}>
              <ul>
                <li>
                  <Link
                    href={token ? `/user/${userId}` : '/user/login'}
                    style={{
                      color: mode !== 'dark' ? '#353b48' : '#dcdde1',
                      textDecoration: 'none',
                    }}
                  >
                    {token ? (
                      <div className={classes.profilePic}>
                        <img
                          src={`http://localhost:8080/${userInfo?.picturePath[0].path}`}
                          alt="profile picutre"
                          title={userInfo.firstName + ' ' + userInfo.lastName}
                        />
                      </div>
                    ) : (
                      <MdLogin size={'25px'} />
                    )}
                  </Link>
                </li>

                <li onClick={modeHandler}>
                  {mode === 'dark' ? (
                    <MdOutlineLightMode size={'25px'} />
                  ) : (
                    <MdOutlineNightlight size={'25px'} />
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
