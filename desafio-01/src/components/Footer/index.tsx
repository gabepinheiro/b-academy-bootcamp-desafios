type FooterProps = {
  children: React.ReactNode
}

const Footer = ({ children }: FooterProps) => (
  <footer>
    {children}
  </footer>
)

export default Footer