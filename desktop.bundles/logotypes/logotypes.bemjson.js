module.exports = {
	block: 'page',
	title: 'BEM Vectors',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'logotypes.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'logotypes.min.js' }],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'liquid-default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'ibm' }
	},
	content: [
	{
		block: 'demo',
		mix: { block: 'vectors' },
		content: [
		{
			elem: 'content',
			content: [
			{
				block: 'demo',
				elem: 'logo'
			},
			{
				block: 'text',
				mods: { size: 'xxxxl', weight: 'bold', font: 'sans' },
				mix: [{ block: 'decorator', mods: { 'indent-b': 'xxxxxl' } }, { block: 'demo', elem: 'title' }],
				content: 'Logotypes'
			},
			{
				block: 'logotype-list',
				content: [
				{
					block: 'logotype-item',
					content: [
					{
						block: 'brand-logo',
						mods: { view: 'beeline', size: 'l'},
						mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'primary' },
						content: 'Билайн'
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'link'},
						mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
						attrs: {
							href: 'http://beeline.ru'
						},
						content: 'http://beeline.ru'
					},
					{
						block: 'text',
						mods: { size: 'm', weight: 'bold' },
						content: "mods: { view: 'beeline' }"
					}]
				},
				{
					block: 'logotype-item',
					content: [
					{
						block: 'brand-logo',
						mods: { view: 'itunes', size: 'l'},
						mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'primary'},
						content: 'iTunes'
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'link'},
						mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
						attrs: {
							href: 'http://www.apple.com/ru/itunes'
						},
						content: 'http://www.apple.com/ru/itunes'
					},
					{
						block: 'text',
						mods: { size: 'm', weight: 'bold' },
						content: "mods: { view: 'itunes' }"
					}]
				},
				{
					block: 'logotype-item',
					content: [
					{
						block: 'brand-logo',
						mods: { view: 'megafon', size: 'l'},
						mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'primary'},
						content: 'Мегафон'
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'link'},
						mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
						attrs: {
							href: 'https://megafon.ru'
						},
						content: 'https://megafon.ru'
					},
					{
						block: 'text',
						mods: { size: 'm', weight: 'bold' },
						content: "mods: { view: 'megafon' }"
					}]
				},
				{
					block: 'logotype-item',
					content: [
					{
						block: 'brand-logo',
						mods: { view: 'mts', size: 'l'},
						mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'primary'},
						content: 'МТС'
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'link'},
						mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
						attrs: {
							href: 'http://www.mts.ru'
						},
						content: 'http://www.mts.ru'
					},
					{
						block: 'text',
						mods: { size: 'm', weight: 'bold' },
						content: "mods: { view: 'mts' }"
					}]
				},
				{
					block: 'logotype-item',
					content: [
					{
						block: 'brand-logo',
						mods: { view: 'ok', size: 'l'},
						mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'primary'},
						content: 'Одноклассники'
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'link'},
						mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
						attrs: {
							href: 'https://ok.ru'
						},
						content: 'https://ok.ru'
					},
					{
						block: 'text',
						mods: { size: 'm', weight: 'bold' },
						content: "mods: { view: 'ok' }"
					}]
				},
				{
					block: 'logotype-item',
					content: [
					{
						block: 'brand-logo',
						mods: { view: 'tele2', size: 'l'},
						mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'primary'},
						content: 'Tele2'
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'link'},
						mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
						attrs: {
							href: 'http://ru.tele2.ru'
						},
						content: 'http://ru.tele2.ru'
					},
					{
						block: 'text',
						mods: { size: 'm', weight: 'bold' },
						content: "mods: { view: 'tele2' }"
					}]
				},
				{
					block: 'logotype-item',
					content: [
					{
						block: 'brand-logo',
						mods: { view: 'vk', size: 'l'},
						mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'primary'},
						content: 'Вконтакте'
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'link'},
						mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
						attrs: {
							href: 'https://vk.com'
						},
						content: 'https://vk.com'
					},
					{
						block: 'text',
						mods: { size: 'm', weight: 'bold' },
						content: "mods: { view: 'vk' }"
					}]
				},
				{
					block: 'logotype-item',
					content: [
					{
						block: 'brand-logo',
						mods: { view: 'yota', size: 'l'},
						mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'primary'},
						content: 'Yota'
					},
					{
						block: 'text',
						mods: { size: 'm', view: 'link'},
						mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
						attrs: {
							href: 'http://www.yota.ru'
						},
						content: 'http://www.yota.ru'
					},
					{
						block: 'text',
						mods: { size: 'm', weight: 'bold' },
						content: "mods: { view: 'yota' }"
					}]
				}]
			}]
		},
		{
			elem: 'footer'
		}]
	}]
};
