import React from 'react';
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import './index.css';

const SortableItem = SortableElement(({value, extraClass, displayDate, dateValue}) => {
    var className = "sortable_list_element " + (extraClass ? extraClass : "");
    if (displayDate) {
        return (
            <div className={className}>
                <div className="date_display">{dateValue.toLocaleDateString("fr-FR", { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                <span>{value}</span>
            </div>
        );
    } else {
        return (
            <div className={className}>
                <span>{value}</span>
            </div>
        );
    }
});

const Timeline = SortableContainer(({items, disabled, displayDate}) => {
  return (
    <div className="sortable_list_container">
      <span>Moins récent</span>
      {items.map((value, index) => (
        <SortableItem key={index} index={index} value={value.name} disabled={disabled} extraClass={value.extraClass} displayDate={displayDate} dateValue={value.date} />
      ))}
      <span>Plus récent</span>
    </div>
  );
});

export default Timeline;
