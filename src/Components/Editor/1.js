import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // Quill styling
import styles from "./TextEditor1.module.css"; // Custom styles
import "bootstrap/dist/css/bootstrap.min.css";

const TextEditor1 = () => {
  const [content, setContent] = useState("");

  const handleChange = (value) => {
    setContent(value);
  };


  return (
    <div className={`container ${styles.editorContainer}`}>
      <div className="toolbar d-flex justify-content-between p-2">
        <div>
          <button className="btn btn-light me-2">File</button>
          <button className="btn btn-light me-2">Edit</button>
          <button className="btn btn-light me-2">View</button>
          <button className="btn btn-light me-2">Insert</button>
          <button className="btn btn-light">Format</button>
          <button className="btn btn-light me-2">Tools</button>
          <button className="btn btn-light">Table</button>
        </div>
      </div>

      <ReactQuill
        theme="snow"
        value={content}
        onChange={handleChange}
        className={styles.editor}
        placeholder="Start typing here..."
      />
      
    </div>
  );
};

export default TextEditor1;
