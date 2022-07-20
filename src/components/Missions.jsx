import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';

class Missions extends React.Component {
  render() {
    const missoes = missions.map((missao, index) => (
      <MissionCard
        key={ index }
        name={ missao.name }
        year={ missao.year }
        country={ missao.country }
        destination={ missao.destination }
      />
    ));

    const titulo = <Title headline="Missões" />;
    return (
      <div>
        <div data-testid="missions">{ titulo }</div>
        <div>{ missoes }</div>
      </div>
    );
  }
}

export default Missions;
