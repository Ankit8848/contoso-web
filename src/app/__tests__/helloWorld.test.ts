import { helloWorld } from '../helloWorld';

test('hello world!', () => {
	expect(helloWorld()).toBe('Hello, World!');
});