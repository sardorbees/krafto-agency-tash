import React, { useEffect, useState } from "react";
import axios from "axios";

const CardList = () => {
  const [cards, setCards] = useState([]);
  const [temporarilyRemoved, setTemporarilyRemoved] = useState([]);

  const fetchCards = async () => {
    try {
      const response = await axios.get("http://127.0.0.1:8000/api/card/api/cards/");
      const newCards = response.data;

      const newIds = newCards.map(card => card.id);
      const currentIds = cards.map(card => card.id);

      // найдём те, которых больше нет в API
      const disappeared = currentIds.filter(id => !newIds.includes(id));

      if (disappeared.length > 0) {
        setTemporarilyRemoved(disappeared);

        // через 1 секунду вернуть
        setTimeout(() => {
          setTemporarilyRemoved([]);
          setCards(newCards);
        }, 1000);
      } else {
        setCards(newCards);
      }
    } catch (error) {
      console.error("Ошибка при получении карточек:", error);
    }
  };

  useEffect(() => {
    fetchCards(); // первый запрос
    const interval = setInterval(fetchCards, 3000); // обновлять каждые 3 секунды
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", margin: "200px" }}>
      {cards
        .filter(card => !temporarilyRemoved.includes(card.id))
        .map(card => (
          <div key={card.id} style={{
            border: "1px solid #ccc",
            padding: "10px",
            width: "250px",
            borderRadius: "8px",
            opacity: 1,
            transition: "opacity 0.5s"
          }}>
            {card.image && (
              <img src={card.image} alt={card.title} style={{ width: "100%" }} />
            )}
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
    </div>
  );
};

export default CardList;