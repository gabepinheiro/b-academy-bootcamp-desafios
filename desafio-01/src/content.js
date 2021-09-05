import Button from "./button"
import { H3, H2 } from "./heading"

function Content(){
  return (
    <main className="content">
      <H2 children="Content" />

      <article>
        <H3 children="Content 1"/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error facilis eius eligendi sit voluptatibus sapiente ipsam earum consectetur. Deserunt porro nemo praesentium quam. Iure quidem atque impedit laborum explicabo aut!

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error facilis eius eligendi sit voluptatibus sapiente ipsam earum consectetur. Deserunt porro nemo praesentium quam. Iure quidem atque impedit laborum explicabo aut!
        </p>
        <Button kind="primary">More</Button>
        <Button kind="secondary">More</Button>
      </article>

      <article>
        <H3 children="Content 2"/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error facilis eius eligendi sit voluptatibus sapiente ipsam earum consectetur. Deserunt porro nemo praesentium quam. Iure quidem atque impedit laborum explicabo aut!

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error facilis eius eligendi sit voluptatibus sapiente ipsam earum consectetur. Deserunt porro nemo praesentium quam. Iure quidem atque impedit laborum explicabo aut!
        </p>
        <Button kind="primary">More</Button>
        <Button kind="secondary">More</Button>
      </article>

      <article>
        <H3 children="Content 3"/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error facilis eius eligendi sit voluptatibus sapiente ipsam earum consectetur. Deserunt porro nemo praesentium quam. Iure quidem atque impedit laborum explicabo aut!

          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error facilis eius eligendi sit voluptatibus sapiente ipsam earum consectetur. Deserunt porro nemo praesentium quam. Iure quidem atque impedit laborum explicabo aut!
        </p>
        <Button kind="primary">More</Button>
        <Button kind="secondary">More</Button>
      </article>
    </main>
  )
}

export default Content