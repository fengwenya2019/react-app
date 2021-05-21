import React, {Component} from 'react'
import codemirror from 'codemirror'
import PropTypes from 'prop-types'
import 'codemirror/lib/codemirror.css'
// 针对 codemirror mode属性
import 'codemirror/mode/javascript/javascript'
import 'codemirror/addon/selection/active-line'
import './react-codemirror.css'

const eventList = [
  {name: 'change', funcName: 'onChange'}, 
  {name: 'beforeChange', funcName: 'beforeOnChange'}, 
  {name: 'focus', funcName: 'onFocus'}, 
  {name: 'blur', funcName: 'onBlur'}, 
  {name: 'scroll', funcName: 'onScroll'}, 
  {name: 'keyHandled', funcName: 'onKeyHandled'}, 
  {name: 'keyDown', funcName: 'onKeyDown'}, 
  {name: 'keyup', funcName: 'onKeyUp'}, 
  {name: 'cut', funcName: 'onCut'}, 
  {name: 'copy', funcName: 'onCopy'}, 
  {name: 'paste', funcName: 'onPaste'}, 
  {name: 'keypress', funcName: 'onKeyPress'}, 
  {name: 'beforeSelectionChange', funcName: 'onSelect'}, 
  {name: 'cursorActivity', funcName: 'cursorOnActivity'}, 
  {name: 'dragenter', funcName: 'onDragEnter'}, 
  {name: 'dragover', funcName: 'onDragOver'}, 
  {name: 'drop', funcName: 'onDrop'}, 
  {name: 'gutterClick', funcName: 'gutterOnClick'}, 
  {name: 'gutterContextMenu', funcName: 'gutterOnContextMenu'}, 
  {name: 'refresh', funcName: 'onRefresh'}, 
  {name: 'optionChange', funcName: 'onOptionChange'}, 
  {name: 'scrollCursorIntoView', funcName: 'onScrollCursorIntoView'}, 
]
export default class ReactCodemirror extends Component {
  
  componentDidMount() {
    if (this.props.isInModal) {
      setTimeout(() => {
        this.initInstance()
      }, 0)
    } else {
      this.initInstance()
    }
  }
  initInstance = () => {
    this.editorInstance = codemirror(
      this.codeDom,
      {
        value: this.props.value,
        ...this.props.baseConfig,
      }
    )
    eventList.map(item => {
      if (this.props[item.funcName]) {
        this.editorInstance.on(item.name, this.props[item.funcName])
      }
      return null
    })
    this.props.initInstanceCallBack(this.editorInstance, this)
  }

  addEditorEvents = (name, func) => this.editorInstance.on(name, func)

  getValue = () => this.editorInstance.getValue()

  setValue = val => {
    if (typeof val === 'string') {
      this.editorInstance.setValue(val)
    } else {
      console.warn('value must be a string!')
    }
  }
  render() {
    return (
      <div className="dt-react-codemirror" ref={p => this.codeDom = p} />
    )
  }
}

// eslint-disable-next-line react/no-typos
ReactCodemirror.PropTypes = {
  value: PropTypes.string,
  isInModal: PropTypes.bool,
  baseConfig: PropTypes.object,
  onChange: PropTypes.func,
  didMountCallBack: PropTypes.func,
}

ReactCodemirror.defaultProps = {
  value: '',
  isInModal: false,
  initInstanceCallBack: () => undefined,
  baseConfig: {
    lineNumbers: true,
    indentUnit: 4,
    tabSize: 4,
    styleActiveLine: true,
    mode: 'javascript',
    dragDrop: false,
  },
}
