type NavigationProps = {
  children: React.ReactNode
}

const Navigation = ({ children }: NavigationProps) => (
  <nav>
      {children}  
  </nav>
)

export default Navigation