import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';
import classes from './navbar.module.css';
import { menuItems } from '../../utils/menuItems';
import { useDispatch, useSelector } from 'react-redux';
import { MdOutlineLightMode, MdOutlineNightlight } from 'react-icons/md';
import { setMode } from '../../store/mode';
const Navbar = () => {
  const { mode } = useSelector((state) => state.mode);
  const dispatch = useDispatch();
  const modeHandler = () => {
    dispatch(setMode());
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
          <Col xs={6} sm={6} md={3}>
            بلاگ
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
                <li onClick={modeHandler}>
                  {mode === 'dark' ? (
                    <MdOutlineLightMode />
                  ) : (
                    <MdOutlineNightlight />
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
