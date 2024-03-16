import Character from "../character"

test('выброс ошибки при неправильной длине name', () => {
	expect(()=>new Character('p', 'Magician')).toThrowError(new Error('Ошибка'));
});

test('выброс ошибки при неправильной длине name', () => {
	expect(()=>new Character('testtesttest', 'Magician')).toThrowError(new Error('Ошибка'));
});

test('выброс ошибки при неправильном type', () => {
	expect(()=>new Character(test, 'Test')).toThrowError(new Error('Ошибка'));
});

test('обьект', () => {
	expect(new Character('Timmi', 'Magician')).toEqual({
		name: 'Timmi',
		type: 'Magician',
		health: 100,
		level: 1,
		attack: undefined,
		defence: undefined,
	});
});