// src/components/TextEditor.js
import React, { useState } from "react";
import Toolbar from "./Toolbar";
import styles from "./TextEditor.module.css";

const TextEditor = () => {
  const [selectedColor, setSelectedColor] = useState("black");
  const editorRef = React.useRef(null);

  // Handle Bold Text
  const handleBold = () => {
    document.execCommand("bold");
  };

  // Handle Italic Text
  const handleItalic = () => {
    document.execCommand("italic");
  };

  // Handle Text Color Change
  const handleColorChange = (e) => {
    const color = e.target.value;
    setSelectedColor(color);
    document.execCommand("foreColor", false, color);
  };

  return (
    <div>
      {/* Toolbar */}
      <Toolbar onBold={handleBold} onItalic={handleItalic} onColorChange={handleColorChange} />
      
      {/* Content Area */}
      <div
        ref={editorRef}
        contentEditable
        className={`border p-4 ${styles.editor}`}
        style={{ minHeight: "400px" }}
      >
        <p>Start typing your content here...</p>
      </div>
    </div>
  );
};

export default TextEditor;
