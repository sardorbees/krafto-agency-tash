// components/TeamList.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaTelegram, FaInstagram, FaFacebook } from 'react-icons/fa';

const TeamList = () => {
  const [team, setTeam] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/team/')
      .then(res => setTeam(res.data))
      .catch(err => console.error("Ошибка загрузки команды:", err));
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
      {team.map(member => (
        <div key={member.id} className="bg-white shadow-lg rounded-xl p-4 text-center">
          <img
            src={member.photo}
            alt={member.full_name}
            className="w-32 h-32 rounded-full object-cover mx-auto mb-3"
          />
          <h2 className="text-xl font-semibold">{member.full_name}</h2>
          <p className="text-gray-600">{member.profession}</p>
          <p className="text-sm text-gray-500">Возраст: {member.age}</p>

          <div className="flex justify-center gap-4 mt-4 text-xl text-blue-600">
            {member.telegram_username && (
              <a href={`https://t.me/${member.telegram_username.replace('@', '')}`} target="_blank" rel="noreferrer">
                <FaTelegram />
              </a>
            )}
            {member.instagram_link && (
              <a href={member.instagram_link} target="_blank" rel="noreferrer">
                <FaInstagram />
              </a>
            )}
            {member.facebook_link && (
              <a href={member.facebook_link} target="_blank" rel="noreferrer">
                <FaFacebook />
              </a>
            )}
          </div>

          {member.telegram_number && (
            <p className="text-sm mt-2 text-gray-700">Номер: {member.telegram_number}</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default TeamList;