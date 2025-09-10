export default async function SSGPage() {
  // SSG: se genera en build, no cambia hasta que vuelvas a hacer `next build`
  const res = await fetch("https://randomuser.me/api/");
  const data = await res.json();
  const user = data.results[0];

  return (
    <main className="min-h-screen bg-gradient-to-br from-green-100 to-blue-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-green-700 mb-4">Static Site Generation (SSG)</h1>
      <h3 className="text-lg text-gray-700 mb-6 max-w-xl text-center">El HTML se genera durante la compilación (build), por lo que muestra siempre el mismo usuario hasta que se vuelva a correr <span className="font-semibold text-green-600">next build</span>.</h3>
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
        <p className="text-xl text-green-800 mb-2"><strong>Nombre:</strong> {user.name.first} {user.name.last}</p>
        <p className="text-lg text-blue-800 mb-2"><strong>Email:</strong> {user.email}</p>
        <p className="text-md text-gray-600"><strong>Hora build:</strong> {new Date().toLocaleTimeString()}</p>
      </div>
    </main>
  );
}
