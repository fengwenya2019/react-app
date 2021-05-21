import React from 'react'
import Frame from '../frame'
import AceEditor,{diff as DiffEditor} from 'react-ace';
import './react-ace.css'
import { format } from 'sql-formatter';

// 引入语言包
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/mode-mysql";
import "ace-builds/src-noconflict/mode-json";
import "ace-builds/src-noconflict/snippets/mysql";

// 引入主题风格，按需导入
import "ace-builds/src-noconflict/theme-xcode";
// language_tools语言工具
import "ace-builds/src-noconflict/ext-language_tools"
// 引入搜索工具
import 'ace-builds/src-noconflict/ext-searchbox';



const ReactAce = () => {

  const sqlCode = "-- 如果表已存在,可以删除掉\n DROP TABLE IF EXISTS demo;CREATE TABLE IF NOT EXISTS demo ( userid	BIGINT COMMENT '用户ID', ip		STRING COMMENT 'IP地址', address	STRING COMMENT '地址') "

  const handleChange = (newValue)=>{
    // console.log(newValue,'...newValue');
  }

  return (
    <Frame>
      <h1>react-ace编辑器</h1>
      <AceEditor
        style={{border:'solid 1px #ccc'}}
        width="800px"
        height="300px"
        name="ace-editor"
        // 主题颜色：xcode
        theme="xcode"
        // 语法：mysql
        mode="mysql"
        // placeholder
        placeholder="code goes here ..."
        // enableSnippets={true}
        setOptions={{
          enableLiveAutocompletion: true,
        }}
        // maxLines={20}
        defaultValue={
          format(sqlCode)
        }
        onChange={
          v=>handleChange(v)
        }
       />
    </Frame>
  ) 
}

export default ReactAce
