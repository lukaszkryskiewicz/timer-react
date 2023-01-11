import styles from './Controls.module.scss'

const Controls = props => {
  const handleClick = e => {
    e.preventDefault();
    props.action();
  }
  return (

    <button className={styles.button} onClick={handleClick}>{props.children}</button >

  )
}

export default Controls;