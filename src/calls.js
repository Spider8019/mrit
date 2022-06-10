import axios from 'axios'

const getData = async (url) => {
    const response = await axios({
        method: "GET",
        url,
    })

    if (response.status === 200) {
        return {
            data: response.data,
            error: null
        }
    }

    return {
        data: null,
        error: response.data
    }
}

export const getWeather = async (url) => await getData(url)