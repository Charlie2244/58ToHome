import React, {useRef } from 'react';
import './header.css'
import imgURL from '../../assets/images/common/back.png'

function Header(props) {
  // console.log(window.history)
  let {title, share} = props.headerData
  let {headTitle} = props
  let isShare = useRef(share)
  return (
    <div className='header' >
    <div className="left-wrap" onClick={()=>window.history.back()} >
        <img src={imgURL} alt="" className="left-icon icon"/>
    </div>
    <div className="title-wrap">
  <div className="title">{headTitle?headTitle:title}</div>
    </div>
    <div className="right-wrap">
        <img src={require('../../assets/images/common/share.png')} alt="" className="right-icon icon" style={{display:`${isShare===1?'':'none'}`}} />
    </div>
 </div>
  )
}

export default Header
