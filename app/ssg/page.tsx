export default async function SSGPage() {
  // SSG: se genera en build, no cambia hasta que vuelvas a hacer `next build`
  const res = await fetch("https://randomuser.me/api/");
  const data = await res.json();
  const user = data.results[0];

  return (
    <div>
      <h1>SSG Example</h1>
      <h3>El HTML se genera durante la compilación (build), por lo que muestra siempre el mismo usuario hasta que se vuelva a correr `next build` </h3>
      <p><strong>Nombre:</strong> {user.name.first} {user.name.last}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Hora build:</strong> {new Date().toLocaleTimeString()}</p>
    </div>
  );
}
