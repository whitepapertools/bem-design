module.exports = {
	block: 'page',
	title: 'BEM DESIGN',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'doc.min.css' }
	],
	scripts: [
		{ elem: 'js', url: 'doc.min.js' },
		{ elem: 'js', url: '//cdn.jsdelivr.net/npm/docsify/lib/docsify.min.js' },
		{ elem: 'js', url: '//unpkg.com/docsify/lib/plugins/search.min.js' },
		{ elem: 'js', url: '//unpkg.com/prismjs/components/prism-json.min.js' }
	],
	mix: {
		block: 'theme',
		mods: { color: 'liquid-default', space: 'default', size: 'default' }
	},
	content: [
	{
		block: 'docsify',
		attrs: { id: 'app' }
	},
	{
		tag: 'script',
		content: 'window.$docsify = { '+
					'auto2top: true, '+
					'autoHeader: true, '+
					'loadSidebar: true, '+
  					'autoHeader: true, '+
  					'mergeNavbar: true, '+
					'name: \'BEM Design\', '+
					'basePath: \'/docs/\', '+

					'search: { '+
						'paths: \'auto\', '+
						'placeholder: \'Тут можно поискать\', '+
						'noData: \'Не нашлось!\', '+
					'}'+
				'}'
	}]
};
