export default async function SSRPage() {
  // SSR: siempre se ejecuta en el servidor en cada request
  const res = await fetch("https://randomuser.me/api/", {
    cache: "no-store", // fuerza SSR en cada request al no guardar caché
  });
  const data = await res.json();
  const user = data.results[0];

  return (
    <main className="min-h-screen bg-gradient-to-br from-yellow-100 to-orange-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-orange-700 mb-4">Server Side Rendering (SSR)</h1>
      <h3 className="text-lg text-gray-700 mb-6 max-w-xl text-center">Siempre se ejecuta en el servidor en cada request, por lo tanto, al recargar la página cambia el usuario y la hora.</h3>
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
        <p className="text-xl text-orange-800 mb-2"><strong>Nombre:</strong> {user.name.first} {user.name.last}</p>
        <p className="text-lg text-yellow-800 mb-2"><strong>Email:</strong> {user.email}</p>
        <p className="text-md text-gray-600"><strong>Hora render:</strong> {new Date().toLocaleTimeString()}</p>
      </div>
    </main>
  );
}
