type LinkProps = {
  children: React.ReactNode;
  href: string
}

const Link = ({ children, href }: LinkProps) => (
  <a href={href}>{children}</a>
)

export default Link