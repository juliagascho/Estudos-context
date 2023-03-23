import "./Propriedades.css";

// As props são informações que podemos
// enviar para os componentes e influenciar
// no seu visual e comportamento

export function Propriedades(props) {
  return <code>{JSON.stringify(props)}</code>; //transforma numa representação de string, só pra gente ver na página - simula um console.log só que na página
}
