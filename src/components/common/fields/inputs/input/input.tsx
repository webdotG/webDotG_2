import React from 'react'
import style from './input.module.scss'
interface typeInputProps extends React.HTMLProps<HTMLInputElement> {
  isError?: boolean;
  helperText?: string
}

export const Input: React.FC<typeInputProps> = ({ isError = false, helperText, ...props }) => {

  return (
    <div className='input_wrapper'>
      <input className={`${style.input} ${isError ? style.input_error : '' }`}  {...props} />
      {isError && helperText && <div className={style.input_helperText}>{helperText}</div> }
      
    </div>
  )
}
