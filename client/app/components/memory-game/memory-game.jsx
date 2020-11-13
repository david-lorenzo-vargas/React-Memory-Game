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
      cardsFliped: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  areBothCardsFliped(name) {
    const { cardsFliped } = this.state;
    const bothCardsFliped = cardsFliped.includes(name);

    return bothCardsFliped;
  }

  handleClick(name, id) {
    const {
      currentCard,
      previousCard,
      currentId,
      cardsFliped,
    } = this.state;

    let newState;

    if (currentCard === '') {
      newState = {
        currentCard: name,
        currentId: id,
        isClicked: true,
      };
    }

    if (currentCard !== '' && currentCard !== previousCard) {
      newState = {
        currentCard: name,
        currentId: id,
        previousId: currentId,
        previousCard: currentCard,
        isClicked: true,
      };
    }

    if (currentCard !== '' && currentCard === previousCard) {
      newState = {
        currentCard: name,
        currentId: id,
        previousId: currentId,
        previousCard: currentCard,
        isClicked: true,
        cardsFliped: [...cardsFliped, currentCard],
      };
    }

    this.setState(newState);
  }

  render() {
    console.log(this.state);

    const { currentId, previousId } = this.state;
    const randomNumber = Math.floor(Math.random() * 20) + 1;

    return (
      <div className={styles['memory-game']}>
        <Row>
          {images.map((item) => (
            <>
              <Column cardOrder={randomNumber}>
                <div className={styles['memory-game__item']}>
                  <Card
                    image={(currentId === item.id)
                      || (previousId === item.id)
                      || this.areBothCardsFliped(item.name) ?
                      item.url : ''}
                    name={item.name}
                    id={item.id}
                    onClick={this.handleClick}
                  />
                </div>
              </Column>
              <Column cardOrder={randomNumber}>
                <div className={styles['memory-game__item']}>
                  <Card
                    image={(currentId === item.id + images.length)
                      || (previousId === item.id + images.length)
                      || this.areBothCardsFliped(item.name) ?
                      item.url : ''}
                    name={item.name}
                    id={item.id + images.length}
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
