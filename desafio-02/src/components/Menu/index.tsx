type MenuProps = {
  children: React.ReactNode
}

const Menu = ({children}: MenuProps) => (
  <menu>
    {children}
  </menu>
)

export default Menu