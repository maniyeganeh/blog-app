import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import classes from './landingPage.module.css';
const LandingPage = () => {
  const { mode } = useSelector((state) => state.mode);
  return (
    <Container>
      <div
        className={
          mode !== 'dark'
            ? classes.landingPageWrapper
            : `${classes.landingPageWrapper} ${classes.landingPageWrapperDark}`
        }
      >
        <Row>
          <Col xs={12} sm={12} md={6}>
            <h1>معرفی کوتاه</h1>
            <p>
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای
              طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان
              فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری
              موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
              نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
              دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
          </Col>
          <Col xs={12} sm={12} md={6}>
            <div className={classes.intorPic}>
              <img src="/images/blog.png" width={'100%'} height={'100%'} />
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default LandingPage;
