import logo from './logo.svg'
import './App.css'
import React, { useState } from 'react'

function App() {
  const [suggestion, setSuggestion] = useState('')
  const intro = [
    "Sorry I can't come ",
    'Please forgive my absence ',
    'This is going to sound crazy but ',
    'Get this: ',
    "I can't go because ",
    'I know you are going to hate me, but ',
    'I was minding my own business and boom! ',
    'I feel terrible but ',
    'I regretfully can not attend, ',
    'This is going to sound like excuse but ',
  ]

  const scapegoat = [
    'my nephew ',
    'the ghost of Hitler ',
    'the Pope ',
    'my ex ',
    'a high school marching band ',
    'Dan Rather ',
    'a sad clown ',
    'a kid from Air Bud ',
    'a professional cricket team ',
    'my tinder date ',
  ]

  const delay = [
    'just shit the bad',
    'died in front of me',
    "won't stop telling me knock knock jokes",
    'is having a nervous breakdown',
    'gave me syphilis',
    'poured lemonade in my gas tank',
    'stabbed me',
    'found my box of human teeth',
    'stole my bicycle',
    'posted my nudes on instagram',
  ]

  const suggestionHandler = () => {
    setSuggestion(
      intro[Math.floor(Math.random() * intro.length)] +
        scapegoat[Math.floor(Math.random() * scapegoat.length)] +
        delay[Math.floor(Math.random() * delay.length)]
    )
  }

  return (
    <div className="App">
      <h1>{suggestion}</h1>
      <button onClick={suggestionHandler}>Random excuse</button>
    </div>
  )
}

export default App
