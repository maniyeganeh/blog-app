import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { Modal, Button, Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { createPost } from '../../utils/api';
import classes from './modal.module.css';
const AddModal = ({ setShowModal, userId, showModal }) => {
  const { token } = useSelector((state) => state.auth);

  const [image, setImage] = useState(null);
  const [form, setForm] = useState({
    title: '',
    subtitle: '',
    description: '',
    creator: userId,
    category: '',
    picturePath: image,
  });
  const handleInputChange = (e) => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };
  const imageHandlerChange = (e) => {
    setImage(e.target.files);
  };
  const submitPost = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('creator', form.creator);
    formData.append('title', form.title);
    formData.append('subtitle', form.subtitle);
    formData.append('description', form.description);
    formData.append('category', form.category);
    for (let key of Object.keys(image)) {
      formData.append('image', image[key]);
    }

    await createPost(formData);
    setShowModal(false);
    // const { data } = await axios.post('http://localhost:8080/posts', {
    //   headers: {
    //     Authorization: 'Bearer ' + token,
    //   },
    //   data: form,
    // });
    // console.log(data);
  };

  return (
    <Modal
      fullscreen
      show={showModal}
      className={`${classes.modalWrapper} modal show`}
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Header>
        <Modal.Title>پست جدید</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form
          className={classes.modalForm}
          onSubmit={submitPost}
          encType="multipart/form-data"
        >
          <Row>
            <Col xs={12} sm={12} md={6} lg={6}>
              <input type="text" name="creator" value={form.creator} disabled />
              <input
                type="text"
                name="title"
                placeholder="نام اثر"
                value={form.title}
                onChange={handleInputChange}
              />
              <textarea
                type="text"
                name="description"
                placeholder="توضیحات"
                value={form.description}
                onChange={handleInputChange}
              />
            </Col>
            <Col xs={12} sm={12} md={6} lg={6}>
              <input
                type="text"
                name="subtitle"
                placeholder="خلاصه"
                value={form.subtitle}
                onChange={handleInputChange}
              />

              <input
                type="text"
                name="category"
                placeholder="دسته بندی"
                value={form.category}
                onChange={handleInputChange}
              />
              <input
                type="file"
                multiple
                name="image"
                onChange={imageHandlerChange}
              />
            </Col>
          </Row>
          {/* <input type="text" name="creator" value={userId} disabled />
            <input type="text" name="title" />
            <input type="text" name="subtitle" />
            <input type="text" name="description" />
            <input type="text" name="category" />
            <input type="file" multiple /> */}
        </form>
        {image !== null && (
          <div className={classes.preview}>
            <img src={image[0].fileName} />
            {/* {image.map((file, index) => (
              <img src={file.fileName} key={index} />
            ))} */}
          </div>
        )}
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => setShowModal(false)}>
          بستن
        </Button>
        <Button type="submit" variant="primary" onClick={submitPost}>
          ثبت
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddModal;
