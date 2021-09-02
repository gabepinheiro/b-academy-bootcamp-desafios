type ButtonProps = {
  children: React.ReactNode
  kind: 'primary' | 'secondary'
}

const Button = ({ children, kind = 'primary'}: ButtonProps) => (
  <button className={`button ${kind}`}>
    {children}
  </button>
)

export default Button