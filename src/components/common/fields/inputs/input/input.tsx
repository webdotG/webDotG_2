import React, { useState } from 'react'
import style from './input.module.scss'
interface typeInputProps extends React.HTMLProps<HTMLInputElement> {
  isError?: boolean;
  helperText?: string
}

export const Input: React.FC<typeInputProps> = ({ isError = false, helperText, type, ...props }) => {

  const [showPassword, setShowPassword] = useState(false)
  const showPasswordToggle = props.value && type === 'password'

  return (
    <div className='input_wrapper'>

      <input className={`${style.input} ${isError ? style.input_error : ''}`}
        type={type === 'password' && showPassword ? 'text' : type}
        {...props}
      />

      {isError && helperText && <div className={style.input_helperText}>{helperText}</div>}

      {showPasswordToggle &&
        <div onClick={() => setShowPassword(!showPassword)}>
          {showPassword ? 'hide' : 'show'}
        </div>
      }
    </div>
  )
}
