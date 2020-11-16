import React from 'react';
import { Row, Column } from '../grid';
import Card from '../card';
import images from './memory-game.mock';
import animalImages from './memory-game-animals.mock';
import foodImages from './memory-game-food.mock';
import travelImages from './memory-game-travel.mock';
import Button from '../button';
import Text from '../text';
import styles from './memory-game.scss';

class MemoryGame extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      imageArray: [],
      currentCard: '',
      currentId: 0,
      previousId: 0,
      previousCard: '',
      cardsFliped: [],
      gameStarted: false,
    };

    this.handleCardClick = this.handleCardClick.bind(this);
    this.handlePlayAgainButtonClick = this.handlePlayAgainButtonClick.bind(this);
    this.handleTravelButtonClick = this.handleTravelButtonClick.bind(this);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.handleMiscelaneusButtonClick = this.handleMiscelaneusButtonClick.bind(this);
    this.handleAnimalButtonClick = this.handleAnimalButtonClick.bind(this);
    this.handleFoodButtonClick = this.handleFoodButtonClick.bind(this);
  }

  //Fisher–Yates shuffle algorithm =================
  //==================================
  shuffleCards() {
    const { imageArray } = this.state;
    const array = imageArray;
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  areBothCardsFliped(name) {
    const { cardsFliped } = this.state;
    const bothCardsFliped = cardsFliped.includes(name);

    return bothCardsFliped;
  }

  handleCardClick(name, id) {
    const {
      currentCard,
      previousCard,
      currentId,
      cardsFliped,
    } = this.state;

    let newState;

    if (!currentCard) {
      newState = {
        currentCard: name,
        currentId: id,
      };
    }

    if (currentId === id) {
      return;
    }

    if (currentCard && currentCard !== previousCard) {
      newState = {
        currentCard: name,
        currentId: id,
        previousId: currentId,
        previousCard: currentCard,
      };
    }

    if (currentCard && currentCard === previousCard) {
      newState = {
        currentCard: name,
        currentId: id,
        previousId: currentId,
        previousCard: currentCard,
        cardsFliped: [...cardsFliped, currentCard],
      };
    }

    if (currentCard && previousCard && currentCard !== previousCard) {
      newState = {
        currentCard: name,
        currentId: id,
        previousId: 0,
        previousCard: '',
      };
    }

    this.setState(newState);
  }

  handlePlayAgainButtonClick() {
    this.shuffleCards();
    this.setState({
      currentCard: '',
      previousCard: '',
      currentId: 0,
      previousId: 0,
      cardsFliped: [],
    });
  }

  handleTravelButtonClick() {
    this.shuffleCards();
    this.setState({
      imageArray: travelImages,
      gameStarted: true,
    })
  }

  handleMiscelaneusButtonClick() {
    this.setState({
      imageArray: images,
      gameStarted: true,
    })
  }

  handleAnimalButtonClick() {
    this.setState({
      imageArray: animalImages,
      gameStarted: true,
    })
  }

  handleFoodButtonClick() {
    this.setState({
      imageArray: foodImages,
      gameStarted: true,
    })
  }

  handleBackButtonClick() {
    this.shuffleCards();
    this.setState({
      currentCard: '',
      previousCard: '',
      currentId: 0,
      previousId: 0,
      cardsFliped: [],
      gameStarted: false,
    })
  }

  render() {
    console.log(this.state);

    const { currentId, previousId, gameStarted, imageArray } = this.state;

    return (
      <div className={styles['memory-game']}>
        <Text text="MEMORY GAME" theme="blue" size="big" />
        {!gameStarted ?
        <>
          <Row>
            <div className={styles['memory-game__item']}>
              <Button
                text="TRAVEL"
                theme="blue"
                size="medium"
                onClick={this.handleTravelButtonClick}
              />
            </div>
          </Row>
          <Row>
            <div className={styles['memory-game__item']}>
              <Button
                text="ANIMALS"
                theme="blue"
                size="medium"
                onClick={this.handleAnimalButtonClick}
              />
            </div>
          </Row>
          <Row>
            <div className={styles['memory-game__item']}>
              <Button
                text="FOOD"
                theme="blue"
                size="medium"
                onClick={this.handleFoodButtonClick}
              />
            </div>
          </Row>
          <Row>
            <div className={styles['memory-game__item']}>
              <Button
                text="MISCELLANEOUS"
                theme="blue"
                size="medium"
                onClick={this.handleMiscelaneusButtonClick}
              />
            </div>
          </Row>
        </> :
          <>
            <Row>
              {imageArray.map((item) => (
                <>
                  <Column>
                    <div className={styles['memory-game__item']}>
                      <Card
                        image={(currentId === item.id)
                          || (previousId === item.id)
                          || this.areBothCardsFliped(item.name) ?
                          item.url : ''}
                        name={item.name}
                        id={item.id}
                        onClick={this.handleCardClick}
                      />
                    </div>
                  </Column>
                </>
              ))}
            </Row>
            <>
              <Row>
                <Column>
                    <div className={styles['memory-game__item']}>
                      <Button
                        text="BACK"
                        theme="blue"
                        size="medium"
                        onClick={this.handleBackButtonClick}
                      />
                    </div>
                  </Column>
                  <Column>
                    <div className={styles['memory-game__item']}>
                      <Button
                      text="PLAY AGAIN"
                      theme="blue"
                      size="medium"
                      onClick={this.handlePlayAgainButtonClick}
                      />
                    </div>
                  </Column>
              </Row>
            </>
          </>
        }
      </div>
    );
  }
}

export default MemoryGame;
