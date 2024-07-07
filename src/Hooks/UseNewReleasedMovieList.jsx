import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const UseNewReleasedMovieList = () => {
    const [newMovies, setNewMovies] = useState([])
    const [loading, isLoading] = useState(true)


    const fetchNewMovies = async () => {
        try {
            const res = await fetch("/newRelease.json")
            const data = await res.json()
            setNewMovies(data)
        }

        catch (err) {
            console.log("error while fetching new movies");
        }

        finally {
            isLoading(false)
        }
    }

    useEffect(() => {
        fetchNewMovies()
    })

    return [newMovies, loading]
}

export default UseNewReleasedMovieList