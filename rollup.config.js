import sucrase from 'rollup-plugin-sucrase';
import pkg from './package.json';

export default {
	input: 'src/index.ts',
	output: [
		{ file: pkg.main, format: 'umd' },
		{ file: pkg.module, format: 'esm' }
	],
	name: 'TODO',
	plugins: [
		sucrase({
			transforms: ['typescript']
		})
	]
};