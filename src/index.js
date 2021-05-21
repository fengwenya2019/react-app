import React from 'react'
import ReactDOM from 'react-dom'
import 'antd/dist/antd.css'
import {
  HashRouter as Router, Route, Switch, Redirect, 
} from 'react-router-dom'

import Context from './page-context'
import Hello from './page-hello'
import AceEditor from './page-editor'
import Count from './page-count'
import Drag from './page-drag'
import ReactAce from './page-react-ace'
import CodeMirror from './page-codemirror'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/context" component={Context} />
        <Route path="/hello" component={Hello} />
        <Route path="/editor" component={AceEditor} />
        <Route path="/count" component={Count} />
        <Route path="/drag" component={Drag} />
        <Route path="/reactAce" component={ReactAce} />
        <Route path="/codeMirror" component={CodeMirror} />
        <Redirect from="/" to="/hello" />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
