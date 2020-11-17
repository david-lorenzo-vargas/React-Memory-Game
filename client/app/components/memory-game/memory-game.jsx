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
      buttonActive: false,
    };

    this.handleCardClick = this.handleCardClick.bind(this);
    this.handlePlayAgainButtonClick = this.handlePlayAgainButtonClick.bind(this);
    this.handleTravelButtonClick = this.handleTravelButtonClick.bind(this);
    this.handleBackButtonClick = this.handleBackButtonClick.bind(this);
    this.handleMiscelaneusButtonClick = this.handleMiscelaneusButtonClick.bind(this);
    this.handleAnimalButtonClick = this.handleAnimalButtonClick.bind(this);
    this.handleFoodButtonClick = this.handleFoodButtonClick.bind(this);
    this.handleStartButtonClick = this.handleStartButtonClick.bind(this);
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

  automaticFlip(name, currentCard, previousCard) {
    const cardsNotMatching = ( name && previousCard !== currentCard );
    console.log('hello')

    if ( cardsNotMatching ) {
      setTimeOut (() => {
        this.setState({
          currentCard: '',
          previousCard: '',
          currentId: 0,
          previousId: 0,
        });
      }, 500);
    }
  }

  componentWillUnmount() {
    this.automaticFlip();
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

    if (currentCard && currentCard === name) {
      newState = {
        currentCard: '',
        currentId: 0,
        cardsFliped: [...cardsFliped, name],
      };
    }

    if (currentCard && previousCard && name !== previousCard) {
      newState = {
        currentCard: name,
        currentId: id,
        previousId: 0,
        previousCard: '',
      };
      // this.automaticFlip(name, currentCard, previousCard)
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

  handleStartButtonClick() {
    this.shuffleCards();
    this.setState({
      gameStarted: true,
      buttonActive: false,
    })
  }

  handleTravelButtonClick() {
    this.setState({
      imageArray: travelImages,
      buttonActive: 'travel',
    })
  }

  handleMiscelaneusButtonClick() {
    this.setState({
      imageArray: images,
      buttonActive: 'misce',
    })
  }

  handleAnimalButtonClick() {
    this.setState({
      imageArray: animalImages,
      buttonActive: 'animals',
    })
  }

  handleFoodButtonClick() {
    this.setState({
      imageArray: foodImages,
      buttonActive: 'food',
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

  createStartingWindow(buttonActive) {
    return(
      <>
          <Row>
            <div className={styles['memory-game__item']}>
              <Button
                text="TRAVEL"
                theme="blue"
                size="medium"
                type={buttonActive === 'travel' ? buttonActive : ''}
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
                type={buttonActive === 'animals' ? buttonActive : ''}
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
                type={buttonActive === 'food' ? buttonActive : ''}
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
                type={buttonActive === 'misce' ? buttonActive : ''}
                onClick={this.handleMiscelaneusButtonClick}
              />
            </div>
          </Row>
          <Row>
            <div className={styles['memory-game__item']}>
              {buttonActive ?
                <Button
                  text="START"
                  theme="blue"
                  size="medium"
                  type="start"
                  onClick={this.handleStartButtonClick}
                /> : ''}
            </div>
          </Row>
        </>
    )
  }

  createGameFooter() {
    return(
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
    )
  }

  render() {
    console.log(this.state);

    const { currentId, previousId, gameStarted, imageArray, buttonActive, } = this.state;

    return (
      <div className={styles['memory-game']}>
        <Text text="MEMORY GAME" theme="blue" size="big" />
        {!gameStarted ?
          this.createStartingWindow(buttonActive) :
          <>
            <Row>
              {imageArray.map((item) => {
                const image = (currentId === item.id)
                || (previousId === item.id)
                || this.areBothCardsFliped(item.name);

                return(
                  <>
                  <Column>
                    <div className={styles['memory-game__item']}>
                      <Card
                        image={ image ? item.url : ''}
                        name={item.name}
                        id={item.id}
                        onClick={this.handleCardClick}
                      />
                    </div>
                  </Column>
                </>
                )
              }
              )}
            </Row>
            {this.createGameFooter()}
          </>
        }
      </div>
    );
  }
}

export default MemoryGame;
