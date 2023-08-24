import React from 'react';
import css from './Card.module.css';

export default function Card({ title, desc, priority, deadline }) {
  const getColor = () => {
    switch (priority) {
      case 'high':
        return '#bedbb0';
      case 'medium':
        return '#e09cb5';
      case 'low':
        return '#8fa1d0';
      default:
        return '#bababa';
    }
  };

  const priorityStyle = {
    '--priority-color': getColor(),
  };

  return (
    <div className={css.overWrapper}>
      <div className={css.wrapper} style={priorityStyle}>
        <h4 className={css.title}>{title}</h4>
        <p className={css.desc}>{desc}</p>
        <div className={css.additionWrapper}>
          <div className={css.additionInfo}>
            <p className={css.additionInfoHeading}>priority</p>
            <p className={css.priority} style={priorityStyle}>
              {priority}
            </p>
          </div>
          <div className={css.additionInfo}>
            <p className={css.additionInfoHeading}>deadline</p>
            <p>{deadline}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
