'use client';

import React, { useEffect, useState } from "react";

type RandomUser = {
  name: { first: string; last: string };
  email: string;
};

export default function CSRPage() {
  const [user, setUser] = useState<RandomUser | null>(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setUser(data.results[0]));
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-100 flex flex-col items-center justify-center p-8">
      <h1 className="text-4xl font-bold text-purple-700 mb-4">Client Side Rendering (CSR)</h1>
      <h3 className="text-lg text-gray-700 mb-6 max-w-xl text-center">
        El HTML se genera en el cliente, por lo que el usuario se carga dinámicamente al renderizar la página.
      </h3>
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center">
        {user ? (
          <>
            <p className="text-xl text-purple-800 mb-2">
              <strong>Nombre:</strong> {user.name.first} {user.name.last}
            </p>
            <p className="text-lg text-blue-800 mb-2">
              <strong>Email:</strong> {user.email}
            </p>
            <p className="text-md text-gray-600">
              <strong>Hora render:</strong> {new Date().toLocaleTimeString()}
            </p>
          </>
        ) : (
          <span className="text-gray-500">Cargando usuario...</span>
        )}
      </div>
    </main>
  );
}
