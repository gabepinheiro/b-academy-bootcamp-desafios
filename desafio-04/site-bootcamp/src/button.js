function Button({children, kind}){
  return (
    <button className={`btn ${kind}`}>{children}</button>
  )
}

export default Button