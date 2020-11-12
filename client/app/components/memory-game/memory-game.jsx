import React from 'react';
import { Row, Column } from '../grid';
import Card from '../card';
import images from './memory-game.mock';
import styles from './memory-game.scss';

class MemoryGame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentCard: '',
      currentId: 0,
      previousId: 0,
      previousCard: '',
      isClicked: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(name, id) {
    const { currentCard, currentId } = this.state;
    let newState;

    if (currentCard === '') {
      newState = {
        currentCard: name,
        currentId: id,
        isClicked: true,
      };
    }

    if (currentCard !== '') {
      newState = {
        currentCard: name,
        currentId: id,
        previousId: currentId,
        previousCard: currentCard,
        isClicked: true,
      };
    }

    this.setState(newState);
  }

  isSameCard() {
    const {
      currentCard,
      previousCard,
      isClicked,
    } = this.state;
    const cardsFliped = [];

    const sameCard = !!((currentCard === previousCard) && isClicked);

    if (sameCard) {
      cardsFliped.push(currentCard);
    }

    return cardsFliped;
  }

  render() {
    console.log(this.state);

    const { currentId, previousId, currentCard } = this.state;
    const sameCard = this.isSameCard();
    const bothCardsFliped = sameCard.includes(currentCard);
    const randomNumber = Math.floor(Math.random() * 20) + 1;
    console.log(bothCardsFliped);
    return (
      <div className={styles['memory-game']}>
        <Row>
          {images.map((item) => (
            <>
              <Column>
                <div className={styles['memory-game__item']}>
                  <Card
                    image={(currentId === item.id)
                      || (previousId === item.id) ?
                      item.url : ''}
                    name={item.name}
                    id={item.id}
                    cardOrder={randomNumber}
                    onClick={this.handleClick}
                  />
                </div>
              </Column>
              <Column>
                <div className={styles['memory-game__item']}>
                  <Card
                    image={(currentId === item.id + images.length)
                      || (previousId === item.id + images.length) ?
                      item.url : ''}
                    name={item.name}
                    id={item.id + images.length}
                    cardOrder={randomNumber}
                    onClick={this.handleClick}
                  />
                </div>
              </Column>
            </>
          ))}
        </Row>
      </div>
    );
  }
}

export default MemoryGame;
