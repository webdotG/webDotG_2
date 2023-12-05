import React from 'react'
import './button.scss'

interface typeButtonProps extends React.HTMLProps<HTMLButtonElement>{}

export const Button: React.FC<typeButtonProps> = ({children}) => {

  return (
    <button className='button_login'>{children}</button>
  )
}