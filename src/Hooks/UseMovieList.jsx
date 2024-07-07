import { useState, useEffect } from 'react';

const useMovieList = () => {
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const fetchMovies = async () => {
        try {
            const response = await fetch('/movies.json');
            const data = await response.json();
            setMovies(data);
        } catch (error) {
            setError(error);
            console.error('Error fetching movies:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchMovies();
    }, []);


    return [movies, error, loading];
};

export default useMovieList;
