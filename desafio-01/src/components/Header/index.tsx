type HeaderProps = {
  children: React.ReactNode
}

const Header = ({children}: HeaderProps) => (
  <header>
    {children}
  </header>
)

export default Header