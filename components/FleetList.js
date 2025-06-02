import FleetCard from './FleetCard';

const fleetData = [
  { id: 1, model: 'Toyota Prius', status: 'Disponible', driver: 'Juan Pérez' },
  { id: 2, model: 'Honda Civic', status: 'En mantenimiento', driver: 'María López' },
  { id: 3, model: 'Tesla Model 3', status: 'En uso', driver: 'Carlos Gómez' }
];

export default function FleetList() {
  return (
    <div>
      {fleetData.map(vehicle => (
        <FleetCard key={vehicle.id} {...vehicle} />
      ))}
    </div>
  );
}