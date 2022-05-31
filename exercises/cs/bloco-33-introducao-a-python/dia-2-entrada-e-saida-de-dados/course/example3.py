import json

# with open("pokemons.json") as file:
#     content = file.read()
#     pokemons = json.loads(content)["results"]

with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

print(pokemons[0])

grass_type_pokemons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

print(grass_type_pokemons)

with open("grass_pokemon.json", "w") as file:
    json.dump(grass_type_pokemons, file)
