import { useQuery } from '@tanstack/react-query';
import CreaturesService from '../service/CreaturesService';
import './Creatures.css'; 

const creaturesService = new CreaturesService();

const Creatures = () => {
  const { isError, isLoading, error, data } = useQuery({
    queryKey: ["creatures"],
    queryFn: () => creaturesService.getAllCreatures(),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>{error.message}</div>;

  return (
    <div>
      <h1 className="horror-text">Elden Ring Creatures</h1> 
      <div className="creatures-container">
        {data && data.map(creature => (
          <div key={creature.id} className="creature-card">
            <h2 className="creature-name">{creature.name}</h2>
            <img src={creature.image} alt={creature.name} className="creature-image" />
            <p className="creature-description">{creature.description}</p>
            <p className="creature-location">Location: {creature.location}</p>
            <p className="creature-drops">Drops: {creature.drops.join(", ")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Creatures;
