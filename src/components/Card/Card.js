import PropTypes from 'prop-types';
import { Card, IsDone } from './Card.styled';

export const CardItem = ({card:{about,name,isDone,id,image}})=>{
    return(
        <Card>

            
<div style={{
        display: 'flex',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '5px'
      }}>
            <img src={image} alt="{name}" width="48" />


           <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column'
      }}>
           <b>id:</b>
            <IsDone active={isDone === true}> {id}</IsDone>
                <p><b>name:</b></p> <h2>{name}</h2>
           </div>
           
                
                
                
                </div>
            <p><b>about:</b> {about}</p>
        </Card>
    );
};

CardItem.propTypes = {
    card: PropTypes.shape({
        about: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isDone: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    })
}