import React from 'react';
import { Link } from 'react-router-dom';

export const Tag = ({ item, classes, urlPrefix = '' }) => {

  return (
    <Link to={`/${urlPrefix}${item}`} className={classes}>{item}</Link>
  )
}