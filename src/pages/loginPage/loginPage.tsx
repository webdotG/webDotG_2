import style from './loginPage.module.scss'
import { Input } from '../../components/common/fields/'

function LoginPage() {

  return (
    <div className={style.loginpage_wrapper}>
      <div className={style.login_page_form_wrapper}>
        <section>header form</section>
        <form className={style.form_wrapper}>
          <div className={style.input_wrapper}>
            <label htmlFor='input_login'>имя</label>
            <Input id='input_login' type='text' placeholder='введите имя' />
            <span>валидация</span>
          </div>
          <div className={style.input_wrapper}>
            <label htmlFor='input_password'>пароль</label>
            <Input id='input_password' />
          </div>
          <button>войти</button>
        </form>
      </div>
    </div>
  )

}

export default LoginPage