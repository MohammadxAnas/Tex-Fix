import React, { useState, useRef } from 'react';

const TextAreaWithToolkit = () => {
  const [selectedText, setSelectedText] = useState('');
  const [toolkitPosition, setToolkitPosition] = useState({ top: 0, left: 0 });
  const [isToolkitVisible, setIsToolkitVisible] = useState(false);
  const textareaRef = useRef(null);

  const handleMouseUp = () => {
    const textarea = textareaRef.current;
    const stdtext = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);

    if (stdtext) {
      setSelectedText(stdtext);
      const range = window.getSelection().getRangeAt(0);
      const rect = range.getBoundingClientRect();

      setToolkitPosition({
        top: rect.bottom + window.scrollY,
        left: rect.left + window.scrollX,
      });
      setIsToolkitVisible(true);
    } else {
      setIsToolkitVisible(false);
    }
  };

  const handleCloseToolkit = () => {
    setIsToolkitVisible(false);
  };

  return (
    <div>
      <textarea
        ref={textareaRef}
        onMouseUp={handleMouseUp}
        rows="10"
        cols="30"
        style={{ marginBottom: '10px' }}
      />
      {isToolkitVisible && (
        <div
          className="toolkit"
          style={{
            position: 'absolute',
            top: `${toolkitPosition.top}px`,
            left: `${toolkitPosition.left}px`,
            background: 'lightgray',
            padding: '10px',
            border: '1px solid #ccc',
          }}
        >
          <span>Selected Text: {selectedText}</span>
          <button onClick={handleCloseToolkit}>Close</button>
        </div>
      )}
    </div>
  );
};

export default TextAreaWithToolkit;
