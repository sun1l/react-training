/**
 * Import all the librariers required
 */
import React from 'react';
import { render } from 'react-dom';
import Header from './components/header/Header';
import List from './components/list/List';
import data from '../api/userData';

render(
    <List data={data()} />,
  document.getElementById('root')
);