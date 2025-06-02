export default function FleetCard({ model, status, driver }) {
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px' }}>
      <h2>{model}</h2>
      <p><strong>Estado:</strong> {status}</p>
      <p><strong>Conductor:</strong> {driver}</p>
    </div>
  );
}