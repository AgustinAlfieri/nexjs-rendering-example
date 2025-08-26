export default async function SSRPage() {
  // SSR: siempre se ejecuta en el servidor en cada request
  const res = await fetch("https://randomuser.me/api/", {
    cache: "no-store", // 👈 fuerza SSR en cada request
  });
  const data = await res.json();
  const user = data.results[0];

  return (
    <div>
      <h1>SSR Example</h1>
      <h3>Siempre se ejecuta en el servidor en cada request, por lo tanto, al recargar la página cambia el usuario y la hora. </h3>
      <p><strong>Nombre:</strong> {user.name.first} {user.name.last}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Hora render:</strong> {new Date().toLocaleTimeString()}</p>
    </div>
  );
}
