// src/components/Toolbar.js
import React from "react";
import { Button, Form } from "react-bootstrap";
import styles from "./TextEditor.module.css";

const Toolbar = ({ onBold, onItalic, onColorChange }) => {
  return (
    <div className={`d-flex justify-content-start p-3 ${styles.toolbar}`}>
      <Button variant="secondary" onClick={onBold}>
        <strong>B</strong>
      </Button>
      <Button variant="secondary" onClick={onItalic}>
        <em>I</em>
      </Button>
      <Form.Control
        as="select"
        className="ml-3"
        onChange={onColorChange}
        style={{ width: "100px" }}
      >
        <option value="black">Black</option>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        <option value="green">Green</option>
        <option value="purple">Purple</option>
      </Form.Control>
    </div>
  );
};

export default Toolbar;
