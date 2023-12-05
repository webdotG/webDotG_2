import React from 'react'

interface typeInputProps extends React.HTMLProps<HTMLInputElement>{}

export const Input: React.FC<typeInputProps> = (props) => {
  return <input  {...props}/>
}
