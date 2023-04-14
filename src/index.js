import React from 'react'
import styles from './styles.module.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

// kullanılacak temel butonu export ediyoruz
export const Button = (props) => {
  return <button type={props.type}>{props.text}</button>
}
