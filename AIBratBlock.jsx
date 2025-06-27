import React from "react";

const AIBratBlock = () => {
  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <div style={{ backgroundColor: "#f2f2f2", padding: "1rem", borderRadius: "10px", marginBottom: "2rem" }}>
        <h2>💬 Совет от AI брата</h2>
        <p style={{ fontSize: "1.2rem" }}>
          Не бойся тестить идеи — бабки любят движение! 🚀
        </p>
      </div>

      <div>
        <h2>❓ Частые вопросы — отвечает брат 🤖</h2>
        <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
          <li style={{ marginBottom: "1rem" }}>
            <strong>💡 Как заработать на сайте?</strong>
            <br />
            Пихай рекламу, пиши годный контент, гони трафик — всё остальное мы сделаем!
          </li>
          <li style={{ marginBottom: "1rem" }}>
            <strong>📈 Как сделать сайт популярным?</strong>
            <br />
            Reddit, TikTok, Telegram — народ любит, когда жаришь по фактам и не врёшь.
          </li>
          <li>
            <strong>🧠 А что если идея не взлетит?</strong>
            <br />
            Меняй. Двигай. Поднимай. Настоящий движ не ждёт!
          </li>
        </ul>
      </div>

      <div style={{ marginTop: "2rem", backgroundColor: "#e6f7ff", padding: "1rem", borderRadius: "10px" }}>
        <h2>📩 Спроси у AI брата</h2>
        <form onSubmit={(e) => { e.preventDefault(); alert("Брат, пока это форма-заглушка — скоро настроим!"); }}>
          <input
            type="text"
            placeholder="Введи вопрос, брат..."
            style={{ padding: "0.5rem", width: "80%", marginRight: "0.5rem" }}
          />
          <button type="submit" style={{ padding: "0.5rem" }}>Отправить</button>
        </form>
      </div>
    </div>
  );
};

export default AIBratBlock;