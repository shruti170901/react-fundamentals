// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 🐨 add a className prop to each div and apply the correct class names
// based on the text content
// 💰 Here are the available class names: box, box--large, box--medium, box--small
// 💰 each of the elements should have the "box" className applied

// 🐨 add a style prop to each div so their background color
// matches what the text says it should be
// 🐨 also use the style prop to make the font italic
// 💰 Here are available style attributes: backgroundColor, fontStyle

const styleBox = {
  border: '1px solid #333',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  textAlign: 'center',
  fontStyle: 'italic'
}

const smallBoxStyle = {
  width: '90',
  height: '90',
  backgroundColor: 'lightblue'
}

const mediumBoxStyle = {
  width: '180',
  height: '180',
  backgroundColor: 'pink'
}

const largeBoxStyle = {
  width: '270',
  height: '270',
  backgroundColor: 'orange'
}

function Box(props){
  let {className, style, ...restProps} = props
  switch (className) {
    case 'box--small':
      style = {...styleBox, ...smallBoxStyle, ...style}
      break;
    case 'box--medium':
      style = {...styleBox, ...mediumBoxStyle, ...style}
      break;
    case 'box--large':
      style = {...styleBox, ...largeBoxStyle, ...style}
      break;
    default:
      style = {...styleBox, ...style}
  }
  className = className + ' box'
  props = {className, style, ...restProps}
  return (
    <div {...props} />
  )
}

function BoxSized(props){
  let {size, style, ...restProps} = props
  let className = 'box--' + size;
  switch (size) {
    case 'small':
      style = {...styleBox, ...smallBoxStyle, ...style}
      break;
    case 'medium':
      style = {...styleBox, ...mediumBoxStyle, ...style}
      break;
    case 'large':
      style = {...styleBox, ...largeBoxStyle, ...style}
      break;
    default:
      style = {...styleBox, ...style}
  }
  className = className + ' box'
  props = {className, style, ...restProps}
  return (
    <div {...props} />
  )
}

const smallBox = <div className='box box--small' style={{...styleBox,  ...smallBoxStyle}}>small lightblue box</div>
const mediumBox = <div className='box box--medium' style={{...styleBox,  ...mediumBoxStyle}}>medium pink box</div>
const largeBox = <div className='box box--large' style={{...styleBox,  ...largeBoxStyle}}>large orange box</div>

function App() {
  return (
    <div>
      {smallBox}
      {mediumBox}
      {largeBox}
      {/* {
        <Box className="box--small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
        </Box>
      }
      {
        <Box className="box--medium" style={{backgroundColor: 'pink'}}>
        medium lightblue box
        </Box>
      }
      {
        <Box className="box--large" style={{backgroundColor: 'orange'}}>
        large lightblue box
        </Box>
      } */}
      {/* {
        <BoxSized size="small" style={{backgroundColor: 'lightblue'}}>
        small lightblue box
        </BoxSized>
      }
      {
        <BoxSized size="medium" style={{backgroundColor: 'pink'}}>
        medium lightblue box
        </BoxSized>
      }
      {
        <BoxSized size="large" style={{backgroundColor: 'orange'}}>
        large lightblue box
        </BoxSized>
      } */}
    </div>
  )
}

export default App
