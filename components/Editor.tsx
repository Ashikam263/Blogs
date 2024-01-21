"use client"
import React, { useEffect, useState } from 'react';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';

const EditorComponent = ({initialContent}) => {
  const [editor, setEditor] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);


  useEffect(() => {
    const initializeEditor = async () => {
      const newEditor = new Editor({
        el: document.querySelector('#editor'),
        height: '500px',
        initialEditType: isEditMode ? 'markdown' : 'wysiwyg', // Use 'wysiwyg' for view-only mode
        previewStyle: 'vertical',
        initialValue: initialContent,
        toolbarItems: isEditMode ? [
          'heading',
          'bold',
          'italic',
          'strike',
          'divider',
          'hr',
          'quote',
          'divider',
          'ul',
          'ol',
          'task',
          'indent',
          'outdent',
          'divider',
          'table',
          'image',
          'link',
          'divider',
          'code',
          'codeblock',
      ] : [],
      });

      setEditor(newEditor);
    };

    initializeEditor();

    return () => {
    editor && (editor as Editor).remove();
    };
  }, [isEditMode, initialContent]); // Add isEditMode to dependency array

  const toggleEditMode = () => {
    setIsEditMode(!isEditMode);
  };

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
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
        <button className='bg-green-400 px-4 py-2 rounded-md' onClick={handleSave}>
          Save
        </button>
        <button className='bg-blue-400 px-4 py-2 rounded-md ml-2' onClick={toggleEditMode}>
          {isEditMode ? 'Exit Edit Mode' : 'Enter Edit Mode'}
        </button>
      </div>
    </div>
  );
};

export default EditorComponent;