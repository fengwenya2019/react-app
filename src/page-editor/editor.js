/* eslint-disable react/jsx-no-comment-textnodes */
import React,{useEffect} from 'react'
import Frame from '../frame'
import './editor.css'
import ace from 'ace-builds'
import * as AceBuilds from "ace-builds";


const AceEditor = (props) => {

  const {location}= props
  const {pathname} = location
  
  let editor
  useEffect(()=>{
    if (!document.getElementById('editor')) {
      return
    }
    editor = ace.edit(document.getElementById('editor'),{
      
    })

    editor.setTheme(require(
      'ace-builds/src-noconflict/theme-xcode'
    ));

    // editor.getSession().setMode(require(
    //   'ace-builds/src-noconflict/mode-json'
    // ));

    editor.setValue("the new text here");


    return()=>{
      editor.destroy()
    }

  },[pathname])


  return (
    <Frame>
     <div id="editor"></div>
    </Frame>
  )
}

export default AceEditor
