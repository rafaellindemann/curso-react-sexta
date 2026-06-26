import { useState } from 'react'
import './App.css'

function App() {
  const [capitulo01, setCapitulo01] = useState(false)
  const [capitulo02, setCapitulo02] = useState(false)
  const [capitulo03, setCapitulo03] = useState(false)
  const [capitulo04, setCapitulo04] = useState(false)
  const [capitulo05, setCapitulo05] = useState(false)
  const [capitulo06, setCapitulo06] = useState(false)
  const [capitulo07, setCapitulo07] = useState(false)
  const [capitulo08, setCapitulo08] = useState(false)
  const [capitulo09, setCapitulo09] = useState(false)
  const [capitulo10, setCapitulo10] = useState(false)
  const [capitulo11, setCapitulo11] = useState(false)

  return (
    <div className="cont-app">
      <h1>Rock in Reels</h1>
      <div className="cap00 capitulos">
        <h2># 0: A motivação</h2>
        <p>
          Roque teve a ideia de criar um festival de música pela internet, chamado Rock in Reels.

          Ele comentou essa ideia com seus amigos da Banda Jota Qwert e eles imediatamente pularam dentro e exigiram o direito de ser a primeira banda a tocar!
          Mas, para tornar essa ideia realidade ele vai precisar convidar mais de seus amigos músicos para se apresentarem. Com as apresentações definidas ele poderá buscar patrocínios e depois encontrar comércios para atenderem (virtualmente) durante o evento.
        </p>
        <button onClick={() => setCapitulo01(true)}>Iniciar Jogo</button>
      </div>


      {capitulo01 && 
      <div className="cap01 capitulos">
        <h2>01: Primeiro convite: Tias Fofinhas</h2>
        <p>
          Roque já tem a Jota Qwert confirmada e vai atrás da possível segunda atração do Rock in Reels. 

          Visitando suas amigas da Tias Fofinhas (uma banda cover de Tear for Fears), fez o convite e ouviu suas exigências: 50 toalhas de crochê no camarim.

          Roque então se viu em um dilema: nem camarim o evento tem, elas vão tocar pela internet. Quanto mais 50 toalhas de crochê.

          Roque deve falar a verdade ou mentir que tem camarim e as toalhas.

        </p>
        <button onClick={() => setCapitulo02(true)}>Falar a verdade</button>
        <button onClick={() => setCapitulo03(true)}>Mentir</button>
      </div>
      }

    </div>
  )
}

export default App
