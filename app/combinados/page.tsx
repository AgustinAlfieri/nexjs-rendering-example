import React from "react";
import Image from "next/image.js";
/*
// SSR - Reloj -- Comentado porque la API estaba caída
async function ServerTime() {
  const res = await fetch("https://timeapi.io/api/time/current/zone?timeZone=America%2FArgentina%2FBuenos_Aires", {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <div className="p-4 border rounded bg-gray-50">
      <h2 className="font-bold text-lg text-blue-900 mb-2">Server Side Rendering (SSR)</h2>
      <p className="text-base text-gray-800 mb-1">La página se genera en el servidor en cada request, mostrando siempre datos actualizados.</p>
      <p className="text-base text-gray-900">Hora actual en Rosario: <b className="text-blue-700">{data.time}:{data.seconds}</b></p>
    </div>
  );
} */

// SSR - Dato curioso en inglés
async function ServerFact() {
  const res = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random", {
    cache: "no-store",
  });
  const data = await res.json();

  return (
    <div className="p-4 border rounded bg-gray-50">
      <h2 className="font-bold text-lg text-blue-900 mb-2">Dato Curioso (SSR)</h2>
      <p className="text-base text-gray-800 mb-1">Dato curioso generado en el servidor en cada request:</p>
      <p className="text-base text-blue-700">{data.text}</p>
    </div>
  );
}

// SSG - Lista de categorías
async function StaticCategories() {
  const categories = ["Noticias", "Eventos", "Recursos", "Contacto"];

  return (
    <div className="p-4 border rounded bg-gray-50">
      <h2 className="font-bold text-lg text-green-900 mb-2">Static Site Generation (SSG)</h2>
      <p className="text-base text-gray-800 mb-1">La página se preconstruye en el build, ideal para contenido que casi no cambia.</p>
      <p className="text-base text-gray-900">Indice:</p>
      <ul className="list-disc ml-6 text-green-800">
        {categories.map((c) => (
          <li key={c} className="text-base">{c}</li>
        ))}
      </ul>
    </div>
  );
}

// ISR - Usuarios random
async function RandomUsers() {
  const res = await fetch("https://randomuser.me/api/?results=3", {
    next: { revalidate: 15 }, // ISR: se regenera cada 15s
  });
  const data = await res.json();

  return (
    <div className="p-4 border rounded bg-grey-50">
      <h2 className="font-bold text-lg text-pink-900 mb-2">Incremental Static Regeneration (ISR, 15seg)</h2>
      <p className="text-base text-gray-800 mb-1">Similar a SSG, pero permite regenerar páginas estáticas periódicamente sin necesidad de un nuevo build.</p>
      <br></br>
      <p className="text-base text-gray-900">Usuarios conectados:</p>
      <br></br>
      <ul className="list-disc ml-8 text-pink-800">
        {data.results.map((user: any, i: number) => (
          <li key={i} className="text-base flex items-center gap-2">
            <Image src={user.picture.thumbnail} width={40} height={40} alt="avatar" className="inline-block rounded-full border border-pink-300" />
            <span className="font-semibold">{user.name.first} {user.name.last}</span> <span className="text-xs text-gray-600">({user.email})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

// Página principal combinando todo
export default function CombinedPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-extrabold text-indigo-900 mb-6 drop-shadow-lg">Ejemplo Combinado de Rendering en Next.js</h1>
      <div className="bg-white shadow-xl rounded-xl p-8 flex flex-col md:flex-row items-start w-full max-w-4xl gap-8">
        <div className="bg-grey flex flex-col gap-6 flex-1">
          <ServerFact />
          <StaticCategories />
        </div>
        <div className="bg-grey flex-1 flex flex-col gap-8">
          <RandomUsers />
        </div>
      </div>
    </div>
  );
}
