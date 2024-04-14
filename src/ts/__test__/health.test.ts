import getHealthStatus from "../functions";

test("[test](getHealthStatus): здоровый персонаж", () => {
    const character = { name: "Маг", health: 90 };
    expect(getHealthStatus(character)).toBe("healthy");
});
test("[test](getHealthStatus): раненный персонаж", () => {
    const character = { name: "Маг", health: 45 };
    expect(getHealthStatus(character)).toBe("wounded");
});
test("[test](getHealthStatus): критическое состояние персонаж", () => {
    const character = { name: "Маг", health: 10 };
    expect(getHealthStatus(character)).toBe("critical");
});

test("[test](getHealthStatus): пограничное значение 15", () => {
    const character = { name: "Маг", health: 15 };
    expect(getHealthStatus(character)).toBe("wounded");
});
test("[test](getHealthStatus): пограничное значение 50", () => {
    const character = { name: "Маг", health: 50 };
    expect(getHealthStatus(character)).toBe("wounded");
});
