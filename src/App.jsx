import { BrowserRouter, Route, Routes } from "react-router-dom";
import { NavBar } from "./components/NavBar/NavBar";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Perfil } from "./pages/Perfil/Perfil";
import { ThemeContext } from "./contexts/ThemeContext";
import { useState } from "react";

export function App() {

  //true = tema escuro ativo
  //false = tema claro ativo
  const [temaEscuro,  setTemaEscuro] = useState(false);

  function alternar() {
    //alternar entre true e false quando for chamada
    if(temaEscuro === true) {
      setTemaEscuro(false);
    } else {
      setTemaEscuro(true);
    }
  }

  return (
    <ThemeContext.Provider value={{temaEscuro: temaEscuro, alternar: alternar}}>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/perfil" element={<Perfil/>} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}


      // <Propriedades
      //  cidade="Ubajara"      /*string igual html*/
      //   estado="CE"           
      //   preco={9}             /*número e booleano entre chaves*/
      //   ligado={false}
      //   info={[1, 2, 3]}
      //   objeto={{ nome: "Almir", idade: 19 }}
      // ></Propriedades>
      // <hr />
      // <Propriedades
      //   cidade="Tianguá"
      //   estado="CE"
      //   preco={10}
      //   ligado={true}
      //   info={[1, 100]}
      //   objeto={{ nome: "Almir", idade: 30 }}
      // ></Propriedades> 
      // dentro da props, cidade vai ser uma propriedade do objeto */}