"use client"
import React, { useEffect, useState } from 'react';
import Editor from '@toast-ui/editor';
import '@toast-ui/editor/dist/toastui-editor.css';
import { BsPencilSquare, BsTrash, BsCheck, BsX } from "react-icons/bs";
import { useRouter } from 'next/navigation';

const EditorComponent = ({initialContent}) => {
  const router = useRouter();
  const [editor, setEditor] = useState(null);
  const [isEditMode, setIsEditMode] = useState(false);


  useEffect(() => {
    const initializeEditor = async () => {
      const storedContent = localStorage.getItem('editorContent');
      const newEditor = new Editor({
        el: document.querySelector('#editor'),
        height: '500px',
        initialEditType: isEditMode ? 'markdown' : 'wysiwyg', // Use 'wysiwyg' for view-only mode
        editable: isEditMode, // Set editable to true in edit mode and false in view mode
        previewStyle: 'vertical',
        initialValue: storedContent || initialContent, // Use stored content if available
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

  // const getMarkdown = () => {
  //   if (editor) {
  //   return (editor as Editor).getMarkdown();
  //   }
  // };

  const handleSave = () => {
    const markdownContent = editor && editor.getMarkdown();
    // Extract title, date, and subtitle from the markdown content
    const [title, date, ...subtitleLines] = markdownContent.split('\n');
  
    // Join the subtitle lines into a single string
    const subtitle = subtitleLines.join('\n');
  
    const formattedBlog = {
      title: title.trim(),
      date: new Date().toISOString(),
      subtitle: subtitle.trim(),
    };
  
    // Save the blog content to local storage
    localStorage.setItem('editorContent', JSON.stringify(formattedBlog));
  
    // Redirect to the home page after saving
    router.push('/');
  };

  const handleDelete = () => {
    console.log('Deleting content'); 
    // Add your delete logic here
    // For example, you might want to clear the editor content or perform other actions.
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'stretch', height: '100vh' }}>
      <div id="editor" style={{ flex: 1, marginBottom: '10px' }} />
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
        {!isEditMode && (
          <button className="bg-red-400 px-4 py-2 rounded-md" onClick={handleDelete}>
            <BsTrash />
          </button>
        )}
        {isEditMode && (
          <>
            <button className="bg-green-400 px-4 py-2 rounded-md" onClick={handleSave}>
              <BsCheck />
            </button>
            <button className="bg-gray-400 px-4 py-2 rounded-md ml-2" onClick={toggleEditMode}>
              <BsX />
            </button>
          </>
        )}
        {!isEditMode && (
          <button className="bg-blue-400 px-4 py-2 rounded-md ml-2" onClick={toggleEditMode}>
            <BsPencilSquare />
          </button>
        )}
      </div>
    </div>
  );
};


export default EditorComponent;