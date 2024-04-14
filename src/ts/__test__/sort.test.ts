import {sortCharacters} from "../functions";

test("[test](sortCharacters): верный порядок сортировки", () => {
    const inputArray: Character[] = [
        { name: "мечник", health: 10 },
        { name: "маг", health: 100 },
        { name: "лучник", health: 80 },
    ];

    const outputArray: Character[] = [
        { name: "маг", health: 100 },
        { name: "лучник", health: 80 },
        { name: "мечник", health: 10 },
    ];

    const sortedArray = sortCharacters(inputArray);

    expect(sortedArray).toEqual(outputArray);
});
