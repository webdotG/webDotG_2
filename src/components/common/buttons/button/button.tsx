import React from 'react'
import style from  './button.module.scss'

interface typeButtonProps extends React.HTMLProps<HTMLButtonElement>{}

export const Button: React.FC<typeButtonProps> = ({children}) => {

  return (
    <button className={style.button_login}>{children}</button>
  )
}