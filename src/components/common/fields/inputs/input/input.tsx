import React from 'react'
import './input.scss'

interface typeInputProps extends React.HTMLProps<HTMLInputElement> {
  isError?: boolean;
  helperText?: string
}

export const Input: React.FC<typeInputProps> = ({ isError = false, helperText, ...props }) => {
  const className = isError ? 'input_error' : ''

  return (
    <div className='input_wrapper'>
      <input className={className}  {...props} />
      {isError && helperText && <div className='input_helperText'>{helperText}</div> }
      
    </div>
  )
}
