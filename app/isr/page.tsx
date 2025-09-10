export const revalidate = 15;

export default async function ISRPage() {
  const res = await fetch("https://randomuser.me/api/");
  const data = await res.json();
  const user = data.results[0];

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 to-red-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-red-700 mb-4">Incremental Static Regeneration (ISR)</h1>
      <h3 className="text-lg text-gray-700 mb-6 max-w-xl text-center">El HTML se genera durante la compilación (build), por lo que muestra siempre el mismo usuario hasta que se cumpla el tiempo de revalidación (<span className='font-semibold text-red-600'>15 segundos</span>) a partir del cual trae un nuevo usuario.</h3>
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
        <p className="text-xl text-red-800 mb-2"><strong>Nombre:</strong> {user.name.first} {user.name.last}</p>
        <p className="text-lg text-pink-800 mb-2"><strong>Email:</strong> {user.email}</p>
        <p className="text-md text-gray-600"><strong>Hora render:</strong> {new Date().toLocaleTimeString()}</p>
      </div>
    </main>
  );
}
