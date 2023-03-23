import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Home.css";

export function Home() {

  const resultado = useContext(ThemeContext);
  const temaEscuro = resultado.temaEscuro;


  return(
    <div className={temaEscuro ? "bg-dark text-light" : "bg-light text-dark"}>
      <h1>Home</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ex amet excepturi iure dignissimos explicabo, dolor assumenda eius, eos autem vel soluta beatae. Quibusdam, dolore voluptatem. Vero expedita blanditiis vel nihil ad tempore velit officiis delectus, provident earum consequuntur quaerat recusandae ea repudiandae repellat autem, est assumenda dolor. Perferendis quibusdam nam nihil sequi quo quasi neque repudiandae animi soluta, fuga vero voluptates, at odio odit magni magnam tenetur blanditiis vel, adipisci quod maxime quam aspernatur doloribus! Facilis possimus aspernatur quidem adipisci quos dignissimos eos neque eum deserunt hic sed natus, quas enim maiores omnis obcaecati blanditiis voluptate molestias! Perferendis consectetur repellendus itaque eos sint nostrum, quod voluptate consequuntur debitis harum necessitatibus nam suscipit inventore quas, quam ad iure aliquid. Dicta, neque molestias autem, nisi sequi voluptatum amet totam eos commodi praesentium corrupti ipsam voluptatibus temporibus nobis molestiae, et a eveniet qui omnis suscipit delectus alias! Sequi eveniet adipisci quam voluptatum vero maiores hic officia est quasi animi! Asperiores officiis nam voluptatem quos magni aut at maxime, accusamus vero, necessitatibus amet. Pariatur omnis ullam molestias culpa tempora excepturi eligendi nemo. Cum beatae sit voluptatibus nisi facere. Praesentium consectetur beatae nostrum odit dolorem? Architecto quae sequi cumque voluptatum, ab asperiores voluptate laborum!
        </p>
    </div>
  );
}
