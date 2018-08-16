import * as assert from 'assert';
import * as UNTITLED from '../src/index';

describe('UNTITLED', () => {
	it('returns hello world', () => {
		assert.equal(UNTITLED.hello(), 'hello world!');	
	});
	
	it('has tests', () => {
		assert.ok(false);
	});
});
