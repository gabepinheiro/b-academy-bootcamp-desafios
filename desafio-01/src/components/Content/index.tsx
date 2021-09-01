type ContentProps = {
  children: React.ReactNode
}

const Content = ({children}: ContentProps) => (
  <main>
      {children}
  </main>
)

export default Content