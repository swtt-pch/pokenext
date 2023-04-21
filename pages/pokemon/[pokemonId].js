export const getStaticPaths = async () => {
  const maxPokemons = 251
  const api = 'https://pokeapi.co/api/v2/pokemon/'

  const res = await fetch(`${api}/?limit=${maxPokemons}`)
  const data = await res.json()

  const paths = data.results.map((pokemon, index) => {
    return { params: { pokemonId: (index + 1).toString() } }
  })

  console.log(paths)

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.pokemonId

  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)

  const data = await res.json()

  return {
    props: { pokemon: data },
  }
}

function Pokemon({ pokemon }) {
  return <p>{pokemon.name}</p>
}

export default Pokemon
