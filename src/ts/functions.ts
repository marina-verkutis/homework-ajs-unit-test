export default function getHealthStatus(character: Character) {
    if(character.health > 50) {
        return "healthy";
    } else if(character.health < 15 ) {
        return "critical";
    } else {
        return "wounded";
    }
}

export function sortCharacters(characters: Character[]) {
    return characters.sort((a: Character, b: Character) => b.health - a.health);
}