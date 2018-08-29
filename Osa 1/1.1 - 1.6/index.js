import React from 'react'
import ReactDOM from 'react-dom'


const Otsikko = (props) => {
  return (
  <div>
    <p>{props.nimi}</p>
  </div>
  )
}

const Sisältö = (props) => {
  return (
    <div>
      <Osa nimi = {props.kurssi.osat[0].nimi} tehtavia = {props.kurssi.osat[0].tehtavia} />
      <Osa nimi = {props.kurssi.osat[1].nimi} tehtavia = {props.kurssi.osat[1].tehtavia} />
      <Osa nimi = {props.kurssi.osat[2].nimi} tehtavia = {props.kurssi.osat[2].tehtavia} />
    </div>
  )
}

const Osa = (props) => {
  return (
    <div>
      <p>{props.nimi} {props.tehtavia}</p>
    </div>
  )
}

const Yhteensä = (props) => {
  return (
  <div>
    <p>Yhteensä {props.kurssi.osat[0].tehtavia + props.kurssi.osat[1].tehtavia + props.kurssi.osat[2].tehtavia} tehtävää </p>
  </div>
  )
}

const App = () => {
  const kurssi = {
   nimi: 'Half Stack -sovelluskehitys',
   osat: [
      {
        nimi: 'Reactin perusteet',
        tehtavia: 10
      },

      {
        nimi: 'Tiedonvälitys propseilla',
        tehtavia: 17
      },

      {
        nimi: 'Komponenttien tila',
        tehtavia: 14
      }
    ]
  }
  return (
    <div>
      <Otsikko kurssi = {kurssi} />
      <Sisältö kurssi = {kurssi} />
      <Yhteensä kurssi = {kurssi} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
