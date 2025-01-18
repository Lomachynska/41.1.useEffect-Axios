import React, { useState, useEffect } from 'react'; // Імпортуємо необхідні хуки з React
import axios from 'axios'; // Імпортуємо бібліотеку axios для виконання HTTP-запитів

const DataFetchingComponent = ({ id }) => { // Компонент приймає пропс id, який буде використовуватись для завантаження конкретного поста
  const [data, setData] = useState(null); // Стан для зберігання отриманих даних
  const [loading, setLoading] = useState(true); // Стан для управління процесом завантаження
  const [error, setError] = useState(null); // Стан для зберігання помилок, якщо вони виникнуть

  // Хук useEffect використовується для виконання асинхронного запиту при зміні id
  useEffect(() => {
    const fetchData = async () => { // Визначаємо асинхронну функцію fetchData, яка виконує HTTP-запит
      setLoading(true); // Встановлюємо стан завантаження в true перед початком запиту
      setError(null); // Скидаємо попередню помилку, якщо вона була

      try {
        // Виконуємо HTTP-запит за допомогою axios
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
        setData(response.data); // Якщо запит успішний, зберігаємо отримані дані в стан
      } catch (error) {
        // Якщо виникла помилка під час запиту
        setError('Помилка при завантаженні даних'); // Встановлюємо помилку в стан
      } finally {
        setLoading(false); // Завжди після запиту змінюємо стан завантаження на false
      }
    };

    fetchData(); // Викликаємо асинхронну функцію для завантаження даних
  }, [id]);  // Залежність від id, що означає, що ефект буде викликаний кожного разу, коли id змінюється

  // Повертаємо JSX, який відображає:
  return (
    <div>
      {loading && <p>Завантаження даних...</p>} {/* Якщо дані ще завантажуються, показуємо повідомлення про завантаження */}
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Якщо сталася помилка, відображаємо її */}
      {data && ( // Якщо дані завантажено, показуємо їх
        <div>
          <h2>{data.title}</h2> {/* Виводимо заголовок поста */}
          <p>{data.body}</p> {/* Виводимо текст поста */}
        </div>
      )}
    </div>
  );
};

export default DataFetchingComponent; // Експортуємо компонент для використання в інших частинах програми
