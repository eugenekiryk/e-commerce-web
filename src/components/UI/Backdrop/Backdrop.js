import classes from './Backdrop.module.css';

function Backdrop({ onClick, transparent }) {
  return (
    <div 
      className={`${classes['backdrop']} ${transparent ? classes['backdrop-transparent'] : null}`} 
      onClick={onClick}
    >
    </div>
  )
}

export default Backdrop;