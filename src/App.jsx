import { useState, useEffect } from 'react';
import { Error } from './Error';

import { Loading } from './Loading';
import { Tours } from './Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setIsLoading(false);
      setTours(data);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      throw new Error(`Status: ${error.message}`);
    }
  };

  useEffect(() => {
    // fetchTours se ejecuta cuando el componente se renderiza
    fetchTours();
  }, []);

  if (isLoading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (isError) {
    return (
      <main>
        <Error />
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
}

export default App;
