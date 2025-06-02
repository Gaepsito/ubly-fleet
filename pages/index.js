import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Bienvenido a Ubly Fleet Management</h1>
      <p>Administra la flota de vehículos de manera eficiente.</p>
      <Link href="/fleet">Ir a Gestión de Flotas</Link>
    </div>
  );
}
