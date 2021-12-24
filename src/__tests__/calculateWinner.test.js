import calculateWinner from "../Utils/calculateWinner";

describe('calculate winner logic', () => {
	test('no winner', () => {
		const noWinner = [
			'X',
			'X',
			'X',
			null,
			'O',
			'O',
			'O',
			null,
			'X',
			'X',
			'X',
			null,
			'O',
			'O',
			'O',
			null,
		];
		expect(null).toBe(calculateWinner(noWinner));
	});
	test('horizontal alignment', () => {
		const horizontal = [
			'X',
			'X',
			'X',
			'X',
			'O',
			'O',
			'O',
			'O',
			'O',
			'O',
			'O',
			'O',
			'O',
			'O',
			'O',
			'O',
		];
		expect('X').toBe(calculateWinner(horizontal));
	});
	test('vertical alignment', () => {
		const vertical = [
			'X',
			'O',
			'O',
			'O',
			'X',
			'O',
			'O',
			'O',
			'X',
			'O',
			'O',
			'O',
			'X',
			'O',
			'O',
			'O',
		];
		expect('X').toBe(calculateWinner(vertical));
	});
	test('diagonal alignment', () => {
		const diagonal = [
			'X',
			'O',
			'O',
			'O',
			'O',
			'X',
			'O',
			'O',
			'O',
			'O',
			'X',
			'O',
			'O',
			'O',
			'O',
			'X',
		];
		expect('X').toBe(calculateWinner(diagonal));
	});
});