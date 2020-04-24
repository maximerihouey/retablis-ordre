import React from 'react';
import arrayMove from 'array-move';
import cloneDeep from 'clone-deep';

import Timeline from '../Timeline';
import './index.css';

export default class GameBoard extends React.Component {
  state = {
    items: Array.from(this.props.items),
    stillPlaying: true
  };

  onSortEnd = ({oldIndex, newIndex}) => {
    this.setState(({items}) => ({
      items: arrayMove(items, oldIndex, newIndex),
    }));
  };

  donePlaying = () => {
    if (this.state.stillPlaying) {
        this.setState(({items}) => ({
          stillPlaying: false
        }));
    }
  };

  newGame = () => {
    window.location.reload();
  };

  render() {
    if (this.state.stillPlaying) {
        return (
            <div className="container">
            <div className="row">
                <div className="col-sm">
                <Timeline items={this.state.items} onSortEnd={this.onSortEnd} lockAxis="y" disabled={false} displayDate={false} />
                </div>
                <div className="col-sm">
                </div>
             </div>
             <div className="submit_button_wrapper">
                <button type="button" onClick={this.donePlaying} className="btn btn-primary submit_button">Soumettre</button>
            </div>
            </div>
        )
    } else {
      var sortedItems = Array.from(this.state.items).sort((a, b) => a.date - b.date);
      var itemsWithFlag = cloneDeep(this.state.items);
      console.log(sortedItems);
      console.log(itemsWithFlag);
      if (itemsWithFlag[0].date <= sortedItems[0].date) {
        itemsWithFlag[0].extraClass = "answer_ok";
      } else {
        itemsWithFlag[0].extraClass = "answer_ko";
      }
      for (let index = 1; index < itemsWithFlag.length; index++) {
          if (itemsWithFlag[index-1].date <= itemsWithFlag[index].date) {
            itemsWithFlag[index].extraClass = "answer_ok";
          } else {
            itemsWithFlag[index].extraClass = "answer_ko";
          }
      }
      console.log("sortedItems", sortedItems);
      console.log("itemsWithFlag", itemsWithFlag);
      return (
            <div className="container">
            <div className="row">
                <div className="col-sm">
                <Timeline items={itemsWithFlag} onSortEnd={this.onSortEnd} lockAxis="y" disabled={true} displayDate={false} />
                </div>
                <div className="col-sm">
                <Timeline items={sortedItems} onSortEnd={this.onSortEnd} lockAxis="y" disabled={true} displayDate={true} />
                </div>
             </div>
             <div className="submit_button_wrapper">
                <button type="button" onClick={this.newGame} className="btn btn-warning submit_button">Nouvelle Partie</button>
            </div>
            </div>
        )
    }
  }
}
