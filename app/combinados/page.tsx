import React, { use } from "react";

// SSR - Reloj 
async function ServerTime() {
  const res = await fetch("https://timeapi.io/api/time/current/zone?timeZone=America%2FArgentina%2FBuenos_Aires", {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <div className="p-4 border rounded">
      <h2 className="font-bold">Server Side Rendering (SSR)</h2>
      <p>La página se genera en el servidor en cada request, mostrando siempre datos actualizados.</p>
      <p>Hora actual en Rosario: <b>{data.time}:{data.seconds}</b></p>
    </div>
  );
}

// SSG - Lista de categorías
async function StaticCategories() {
  const categories = ["Noticias", "Eventos", "Recursos", "Contacto"];

  return (
    <div className="p-4 border rounded">
      <h2 className="font-bold">Static Site Generation (SSG)</h2>
      <p>La página se preconstruye en el build, ideal para contenido que casi no cambia.</p>
      <p>Indice:</p>
      <ul className="list-disc ml-6">
        {categories.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

// ISR - Usuarios random
async function RandomUsers() {
  const res = await fetch("https://randomuser.me/api/?results=3", {
    next: { revalidate: 10 }, // ISR: se regenera cada 10s
  });
  const data = await res.json();

  return (
    <div className="p-4 border rounded">
      <h2 className="font-bold">Incremental Static Regeneration (ISR)</h2>
      <p>Similar a SSG, pero permite regenerar páginas estáticas periódicamente sin necesidad de un nuevo build.</p>
      <p>Usuarios conectados:</p>
      <ul className="list-disc ml-6">
        {data.results.map((user: any, i: number) => (
          <li key={i}>
            <img src={user.picture.thumbnail} alt="avatar" className="inline-block ml-2 rounded-full" />
            {user.name.first} {user.name.last} ({user.email}) 
          </li>
        ))}
      </ul>
    </div>
  );
}

// Página principal combinando todo
export default function CombinedPage() {
  return (
    <main className="p-6 space-y-6">
      <h1 className="text-2xl font-bold mb-6">Ejemplo Combinado de Rendering en Next.js</h1>
      <ServerTime />
      <StaticCategories />
      <RandomUsers />
    </main>
  );
}
