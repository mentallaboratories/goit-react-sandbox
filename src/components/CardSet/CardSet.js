import PropTypes from 'prop-types';

import { CardItem } from 'components/Card/Card';
import { CardList } from './CardSet.styled';

export const CardSet = ({cards})=>{
    return(
        <CardList>
            {cards.map((card)=>(
                 <li card = {card.id}><CardItem card={card}> </CardItem></li>
                
            ))}
        </CardList>
    );
};

CardSet.propTypes = {
    cards: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
    })
    ).isRequired,
}