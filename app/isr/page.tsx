export const revalidate = 15;

export default async function ISRPage() {
  const res = await fetch("https://randomuser.me/api/");
  const data = await res.json();
  const user = data.results[0];

  return (
    <div>
      <h1>ISR Example (revalidate cada 15s)</h1>
      <h3>El HTML se genera durante la compilación (build), por lo que muestra siempre el mismo usuario hasta que se cumpla el tiempo de revalidación (en este caso 15 segundos) a partir del cual trae un nuevo usuario </h3>
      <p><strong>Nombre:</strong> {user.name.first} {user.name.last}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Hora render:</strong> {new Date().toLocaleTimeString()}</p>
    </div>
  );
}
