module.exports = {
	root: true,
	env: {
		node: true,
		es6: true,
		browser: true,
	},
	extends: [ 'plugin:vue/essential', '@vue/prettier' ],
	parserOptions: {
		parser: 'babel-eslint',
	},
	rules: {
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'prettier/prettier': 'error',
		indent: [ 'error', 2 ],
	},
	overrides: [
		{
			files: [ '**/__tests__/*.{j,t}s?(x)', '**/tests/unit/**/*.spec.{j,t}s?(x)' ],
			env: {
				jest: true,
			},
		},
	],
}
