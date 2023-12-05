import React from 'react'
import style from './loginPage.module.scss'
import { Input } from '../../components/common/fields/'
import { Button } from '../../components/common/buttons'


function LoginPage() {

  const [formValue, setFormValue] = React.useState({ username: '', password: '' })

  return (
    <div className={style.loginpage_wrapper}>
      <div className={style.login_page_form_wrapper}>
        <section>header form</section>
        <form className={style.form_wrapper}>
          <Input
          isError={true}
          helperText='ошибка'
            value={formValue.username}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormValue({ ...formValue, username: e.target.value })}
            id='input_login'
            type='text'
            placeholder='имя' />
          <Input
            value={formValue.password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setFormValue({ ...formValue, password: e.target.value })}
            id='input_password'
            placeholder='пароль'
          />
          <Button>Войти</Button>
        </form>
      </div>
    </div>
  )

}

export default LoginPage