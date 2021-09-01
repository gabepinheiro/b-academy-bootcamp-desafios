type SidebarProps = {
  children: React.ReactNode
}

const Sidebar = ({children}: SidebarProps) => (
  <aside>
    {children}
  </aside>
)

export default Sidebar