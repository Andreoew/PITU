import React from 'react';
import Header from '../../components/Header';
import { Container } from 'react-bootstrap';

import ShortenerService from '../../services/shortenerServece';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {StatsContainer, StatsRow, StatsBox, StatsBoxTitle } from '.styles';

class StatsPage extends React.Component {
  constructor(props) {
    super(props);

    this.state  = {
      isLoading: false,
      shortenedURL: {},
      errorMessage: '',
    }
  }

  render() {
    return (
      <p>Stats</p>
    )
  }

}

export default StatsPage;