import React from 'react';
import Title from './Title';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';

class SolarSystem extends React.Component {
  render() {
    const planetas = planets.map((planeta, index) => (
      <PlanetCard
        key={ index }
        planetName={ planeta.name }
        planetImage={ planeta.image }
      />
    ));
    const title = <Title headline="Planetas" />;
    return (
      <div>
        <div data-testid="solar-system">{ title }</div>
        <div>
          { planetas }
        </div>
      </div>
    );
  }
}

export default SolarSystem;
