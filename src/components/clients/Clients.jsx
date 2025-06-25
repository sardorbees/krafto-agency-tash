import React, { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'https://krafto-agency-admin.onrender.com/api/clientlogo/clients/';

function Clients() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(res => setClients(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="clients-section">
      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <h2>Наши клиенты</h2>
      <div className="clients-logos">
        {clients.map(client => (
          <div key={client.id} className="client-logo">
            <img src={client.logo} alt={client.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Clients;