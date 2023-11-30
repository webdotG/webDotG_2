import {MContactsList} from '../../contacts/contacts'
import Form from '../../form/form'
import './main-order.scss'

function MainOrder() {

  return (
    <div className="main-order">
      <h2 className='main-order__title'>сделать заказ</h2>
      <MContactsList />
      <Form />
    </div>
  )
}

export default MainOrder