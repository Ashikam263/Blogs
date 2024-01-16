"use client";
import React, { Component, useState } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState } from 'draft-js';



const HomePage = () => {

    const [editorState, setEditorState] = useState(EditorState.createEmpty());

   const onEditorStateChange = (editorState:any) => {
    setEditorState(editorState);
      };

  return (
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={onEditorStateChange}
        />);

  }
export default HomePage;
