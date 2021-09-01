type ButtonProps = {
  children: React.ReactNode
  kind?: 'primary' | 'secondary'
}

const Button = ({ children, kind = 'primary'}: ButtonProps) => (
  <button 
    className={`button ${kind === 'primary' ? 'primary': 'secondary'}`}>
    {children}
  </button>
)

export default Button