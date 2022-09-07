import axios from 'axios'

const allCharacters = async () => {
    const characters = await axios.get('https://rickandmortyapi.com/api/character')
    console.log(characters)
}

export {
    allCharacters
}
