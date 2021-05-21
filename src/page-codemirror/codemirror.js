import React from 'react'
import codeMirror from 'codemirror'
// import ReactCodemirror from './react-codemirror.js'
import {UnControlled as CodeMirror} from 'react-codemirror2'
import Frame from '../frame'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'

// import 'codemirror/mode/mysql/mysql';
import 'codemirror/mode/javascript/javascript'
// .光标行代码高亮
import 'codemirror/addon/selection/active-line'

const CodeMirrorEditor = () => (
  <Frame>
    <h1>code-mirror编辑器</h1>
    <CodeMirror
      value="111"
      options={{
        mode: 'xml',
        // theme: 'monokai',
        lineNumbers: true,
        autofocus: true,
        styleActiveLine: true,
      }}
      onChange={(editor, data, value) => {
        console.log(editor, data, value)
      }}
    />
  </Frame>
)

export default CodeMirrorEditor
