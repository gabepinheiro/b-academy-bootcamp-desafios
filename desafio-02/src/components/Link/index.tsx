type LinkProps = {
  children: React.ReactNode
  href: string
  onClick?: (e: React.MouseEvent) => void
}

const Link = ({ children, href, ...rest }: LinkProps) => (
  <a {...rest} href={href}>{children}</a>
)

export default Link