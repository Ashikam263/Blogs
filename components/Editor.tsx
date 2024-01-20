"use client"
import React, { useEffect, useState } from 'react';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const EditorComponent = ({initialContent}) => {
  const [editor, setEditor] = useState(null);

  useEffect(() => {
    const initializeEditor = async () => {
      const newEditor = new Editor({
        el: document.querySelector('#editor'),
        height: '500px',
        initialEditType: 'markdown',
        previewStyle: 'vertical',
        initialValue: initialContent,
      });

      setEditor(newEditor);
    };

    initializeEditor();

    return () => {
    editor && (editor as Editor).remove();
    };
  }, []);

  const getMarkdown = () => {
    if (editor) {
    return (editor as Editor).getMarkdown();
    }
  };

  const handleSave = () => {
    const markdownContent = getMarkdown();
    console.log('Saving:', markdownContent);
    // Add your save logic here
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', height: '100vh' }}>
      <div id="editor" style={{ flex: 1, marginBottom: '10px' }} />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button className='bg-green-400 px-4 py-2 rounded-md' onClick={handleSave}>Save</button>
      </div>
    </div>
  );
};

export default EditorComponent;