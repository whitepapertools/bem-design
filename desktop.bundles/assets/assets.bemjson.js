module.exports = {
	block: 'page',
	title: 'Материалы',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'assets.min.css' },
		{ elem: 'css', url: '/assets/bem-grid/bem-grid-l.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' }
	],
	scripts: [{ elem: 'js', url: 'assets.min.js' }],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'liquid-default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' }
	},
	content: [
	{
		block: 'demo',
		elem: 'content',
		elemMods: { size: 'm' },
		content: [
			{
				block: 'text',
				mods: { size: 'xxxxl', weight: 'bold', font: 'sans' },
				mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxl' }},
				content: 'Материалы'
			},

			/* KIT BILL */
			{
				elem: 'section',
				content: [
					{
						block: 'text',
						mods: { size: 'xxl', weight: 'bold', font: 'sans' },
						mix: { block: 'decorator', mods: { 'indent-b': 'xxl' }},
						content: 'KIT BILL'
					},
					{
						elem: 'row',
						mix: [
							{ block: 'tpl-grid', mods: { ratio: '1-1-1', 'col-gap': 'half', 'row-gap': 'half' }},
							{ block: 'decorator', mods: { 'indent-b': 'xxxxl' }}
						],
						content: [
							'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.'
						]
					}
				]
			},
			/* KIT BILL */


			/* BEM STARTER KIT */
			{
				elem: 'section',
				content: [
					{
						block: 'text',
						mods: { size: 'xxl', weight: 'bold', font: 'sans' },
						mix: { block: 'decorator', mods: { 'indent-b': 'xxl' }},
						content: 'BEM STARTER KIT'
					},
					{
						elem: 'row',
						mix: [
							{ block: 'tpl-grid', mods: { ratio: '1-1-1', 'col-gap': 'half', 'row-gap': 'half' }},
							{ block: 'decorator', mods: { 'indent-b': 'xxxxl' }}
						],
						content: [
							'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.'
						]
					}
				]
			}
			/* BEM STARTER KIT */

		]
	},
	{
		block: 'demo',
		elem: 'footer'
	}]
};