import { H2 } from "./heading"

function Sidebar(){
  return (
    <aside className="sidebar">
      <H2 children="Sidebar" />

      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
        <li><a href="#">Link 4</a></li>
      </ul>
    </aside>
  )
}

export default Sidebar