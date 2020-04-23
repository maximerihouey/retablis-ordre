import React from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import './index.css';

const SortableItem = SortableElement(({value, extraClass}) => {
    var className = "sortable_list_element " + (extraClass ? extraClass : "");
    return (
        <div className={className}>{value}</div>
    );
});

const Timeline = SortableContainer(({items, disabled}) => {
  return (
    <div className="sortable_list_container">
      <span>Moins récent</span>
      {items.map((value, index) => (
        <SortableItem key={index} index={index} value={value.name} disabled={disabled} extraClass={value.extraClass} />
      ))}
      <span>Plus récent</span>
    </div>
  );
});

export default Timeline;
