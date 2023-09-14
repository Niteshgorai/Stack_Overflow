import React from 'react'

const Avatar = ({children, backgroundColor, padding, px, py , color, borderRadius, fontsize, textAlign, cursor, textDecoration}) => {
  const style={
    backgroundColor,
    padding:`${py} ${px}` ,
    color:color || 'black',
    borderRadius,
    fontsize,
    textAlign:"center",
    cursor: cursor || null,
    textDecoration: "none"
  }
  
  return (
    <div style={style}>
        {children}
    </div>
  )
}
export default Avatar