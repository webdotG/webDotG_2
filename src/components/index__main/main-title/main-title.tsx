import { motion } from 'framer-motion'
import G from './G';
import style from './mainTitle.module.scss'

const textAnimation = {
  hidden: {
    x: -100,
    opacity: 0,
  },
  visible: custom =>  ({
    x: 0,
    opacity: 1,
    transition: {delay: custom * 0.3}
  })
}

function MainTitle() {

  return (
    <div className={style.mainTitleBlock}>
      <motion.div
        initial='hidden'
        whileInView='visible'
        // viewport={{ amount: 0.3 }}
        className={style.main_title__wrapp}>
        <motion.h1 variants={textAnimation} className={style.main_title}>webDot<G /></motion.h1>
        <motion.p custom={2} variants={textAnimation} className={style.main_title_p}>разрабатываю и улучшаю</motion.p>
      </motion.div>
      <ul className={style.main_title_list}>
        <li className={style.main_title__text}>сайты</li>
        <li className={style.main_title__text}>чат боты</li>
        <li className={style.main_title__text}>приложения</li>
      </ul>
    </div>
  )

}

export default MainTitle;