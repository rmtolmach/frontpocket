import { GamesComponent } from '../app/games.component';

export function main() {
	describe('header component', () => {

		it('should add string to header names', () => {
			var header = new Header();
			var name = 'foo';
			header.addName(name);
			expect(header.names.length).toBe(1);
			expect(header.names[0]).toBe(name);
		});
	});
}
