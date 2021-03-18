const autoprefixer = require('autoprefixer');
const sveltePreprocess = require('svelte-preprocess');
const production = !process.env.ROLLUP_WATCH;

module.exports = {
	dev: !production,
	css: (css) => {
		css.wirte('public/build/bundle.css');
	},
	preprocess: sveltePreprocess({
		postcss: {
			plugins: [autoprefixer()],
		},
	}),
};
