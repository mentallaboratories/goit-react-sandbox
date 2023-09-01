import { CardSet } from './CardSet/CardSet';

import cards from '../cards.json';




export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <CardSet cards={cards}/>

    </div>
  );
};
