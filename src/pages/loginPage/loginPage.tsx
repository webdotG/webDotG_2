import React from 'react'
import style from './loginPage.module.scss'
import { Input } from '../../components/common/fields/'
import { Button } from '../../components/common/buttons'
import { Link } from 'react-router-dom'

interface typeFormError {
  username: string | null,
  password: string | null,
}

const validateIsEmpty = (value: string) => {
  if (!value) {
    return 'поле не может быть пустым'
  }
  return null
}

const validateUsername = (value: string) => {
  return validateIsEmpty(value)
}
const validatePassword = (value: string) => {
  return validateIsEmpty(value)
}

const loginFormValidateSchema = {
  username: validateUsername,
  password: validatePassword
}

const validateLoginForm = (name: keyof typeof loginFormValidateSchema, value: string) => {
  return loginFormValidateSchema[name](value)
}

function LoginPage() {

  const [formValue, setFormValue] = React.useState({ username: '', password: '' })
  const [formError, setFormError] = React.useState<typeFormError>({ username: null, password: null })

  return (
    <div className={style.loginpage_wrapper}>
      <Link className={style.back_link} to='/webDotG_2/'>на главную</Link>
      <div className={style.login_page_form_wrapper}>
        <h2 className={style.form_title}>войти</h2>
        <form className={style.form}>

          <Input
            type='text'
            value={formValue.username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const userName = e.target.value
              setFormValue({ ...formValue, username: userName })

              const error = validateLoginForm('username', userName)
              setFormError({ ...formError, username: error })
            }}
            {...(!!formError.username && {
              isError: !!formError.username,
              helperText: formError.username
            })}
            id='input_login'
            placeholder='имя' />
          
          <Input
            type='password'
            value={formValue.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              const password = e.target.value
              setFormValue({ ...formValue, password })

              const error = validateLoginForm('password', password)
              setFormError({ ...formError, password: error })
            }}
            {...(!!formError.password && {
              isError: !!formError.password,
              helperText: formError.password
            })}
            id='input_password'
            placeholder='пароль'
          />
          <Button>Войти</Button>
        </form>
        <Link className={style.login_link} to='/webDotG_2/register'>зарегистрироваться</Link>
      </div>
    </div>
  )

}

export default LoginPage