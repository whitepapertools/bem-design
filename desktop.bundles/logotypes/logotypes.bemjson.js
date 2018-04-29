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
		elem: 'content',
		content: [
		{
			block: 'text',
			mods: { size: 'xxxxl', weight: 'bold', font: 'sans' },
			mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxl' }},
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
					mods: { name: 'itunes', size: 'l'},
					mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
				},
				{
					block: 'text',
					mods: { size: 'm', view: 'primary' },
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
					content: "mods: { name: 'itunes' }"
				}]
			},
			{
				block: 'logotype-item',
				content: [
				{
					block: 'brand-logo',
					mods: { name: 'steam', size: 'l'},
					mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
				},
				{
					block: 'text',
					mods: { size: 'm', view: 'primary' },
					content: 'Steam'
				},
				{
					block: 'text',
					mods: { size: 'm', view: 'link'},
					mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
					attrs: {
						href: 'http://store.steampowered.com'
					},
					content: 'http://store.steampowered.com'
				},
				{
					block: 'text',
					mods: { size: 'm', weight: 'bold' },
					content: "mods: { name: 'steam' }"
				}]
			},
			{
				block: 'logotype-item',
				content: [
				{
					block: 'brand-logo',
					mods: { name: 'forgame', size: 'l'},
					mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
				},
				{
					block: 'text',
					mods: { size: 'm', view: 'primary' },
					content: 'Фогейм'
				},
				{
					block: 'text',
					mods: { size: 'm', view: 'link'},
					mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
					attrs: {
						href: 'https://4game.com'
					},
					content: 'https://4game.com'
				},
				{
					block: 'text',
					mods: { size: 'm', weight: 'bold' },
					content: "mods: { name: 'forgame' }"
				}]
			},
			{
				block: 'logotype-item',
				content: [
				{
					block: 'brand-logo',
					mods: { name: 'warthunder', size: 'l'},
					mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
				},
				{
					block: 'text',
					mods: { size: 'm', view: 'primary' },
					content: 'Warthunder'
				},
				{
					block: 'text',
					mods: { size: 'm', view: 'link'},
					mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
					attrs: {
						href: 'http://warthunder.ru'
					},
					content: 'http://warthunder.ru'
				},
				{
					block: 'text',
					mods: { size: 'm', weight: 'bold' },
					content: "mods: { name: 'warthunder' }"
				}]
			},
			{
				block: 'logotype-item',
				content: [
				{
					block: 'brand-logo',
					mods: { name: 'warface', size: 'l'},
					mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
				},
				{
					block: 'text',
					mods: { size: 'm', view: 'primary' },
					content: 'Warface'
				},
				{
					block: 'text',
					mods: { size: 'm', view: 'link'},
					mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
					attrs: {
						href: 'https://wf.mail.ru'
					},
					content: 'https://wf.mail.ru'
				},
				{
					block: 'text',
					mods: { size: 'm', weight: 'bold' },
					content: "mods: { name: 'warface' }"
				}]
			},
			{
				block: 'logotype-item',
				content: [
				{
					block: 'brand-logo',
					mods: { name: 'wargaming', size: 'l'},
					mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
				},
				{
					block: 'text',
					mods: { size: 'm', view: 'primary' },
					content: 'Wargaming.net'
				},
				{
					block: 'text',
					mods: { size: 'm', view: 'link'},
					mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
					attrs: {
						href: 'http://ru.wargaming.net'
					},
					content: 'http://ru.wargaming.net'
				},
				{
					block: 'text',
					mods: { size: 'm', weight: 'bold' },
					content: "mods: { name: 'wargaming' }"
				}]
			},
			{
				block: 'logotype-item',
				content: [
				{
					block: 'brand-logo',
					mods: { name: 'blizzard', size: 'l'},
					mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
				},
				{
					block: 'text',
					mods: { size: 'm', view: 'primary' },
					content: 'Blizzard'
				},
				{
					block: 'text',
					mods: { size: 'm', view: 'link'},
					mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
					attrs: {
						href: 'http://blizzard.com'
					},
					content: 'http://blizzard.com'
				},
				{
					block: 'text',
					mods: { size: 'm', weight: 'bold' },
					content: "mods: { name: 'blizzard' }"
				}]
			},
			{
				block: 'logotype-item',
				content: [
				{
					block: 'brand-logo',
					mods: { name: 'yota', size: 'l'},
					mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
				},
				{
					block: 'text',
					mods: { size: 'm', view: 'primary' },
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
					content: "mods: { name: 'yota' }"
				}]
			},
			{
				block: 'logotype-item',
				content: [
				{
					block: 'brand-logo',
					mods: { name: 'tele2', size: 'l'},
					mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
				},
				{
					block: 'text',
					mods: { size: 'm', view: 'primary' },
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
					content: "mods: { name: 'tele2' }"
				}]
			},
			{
				block: 'logotype-item',
				content: [
				{
					block: 'brand-logo',
					mods: { name: 'beeline', size: 'l'},
					mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
				},
				{
					block: 'text',
					mods: { size: 'm', view: 'primary' },
					content: 'Beeline'
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
					mods: { name: 'megafon', size: 'l'},
					mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
				},
				{
					block: 'text',
					mods: { size: 'm', view: 'primary' },
					content: 'Megafon'
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
					content: "mods: { view: 'beeline' }"
				}]
			},
			{
				block: 'logotype-item',
				content: [
				{
					block: 'brand-logo',
					mods: { name: 'mts', size: 'l'},
					mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
				},
				{
					block: 'text',
					mods: { size: 'm', view: 'primary' },
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
					content: "mods: { name: 'mts' }"
				}]
			},
			{
				block: 'logotype-item',
				content: [
				{
					block: 'brand-logo',
					mods: { name: 'kcell', size: 'l'},
					mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
				},
				{
					block: 'text',
					mods: { size: 'm', view: 'primary' },
					content: 'Kcell'
				},
				{
					block: 'text',
					mods: { size: 'm', view: 'link'},
					mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
					attrs: {
						href: 'https://www.kcell.kz/ru'
					},
					content: 'https://www.kcell.kz/ru'
				},
				{
					block: 'text',
					mods: { size: 'm', weight: 'bold' },
					content: "mods: { name: 'kcell' }"
				}]
			},
			{
				block: 'logotype-item',
				content: [
				{
					block: 'brand-logo',
					mods: { name: 'activ', size: 'l'},
					mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
				},
				{
					block: 'text',
					mods: { size: 'm', view: 'primary' },
					content: 'Activ'
				},
				{
					block: 'text',
					mods: { size: 'm', view: 'link'},
					mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
					attrs: {
						href: 'https://activ.kz'
					},
					content: 'https://activ.kz'
				},
				{
					block: 'text',
					mods: { size: 'm', weight: 'bold' },
					content: "mods: { name: 'activ' }"
				}]
			},
			{
				block: 'logotype-item',
				content: [
				{
					block: 'brand-logo',
					mods: { name: 'ok', size: 'l'},
					mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
				},
				{
					block: 'text',
					mods: { size: 'm', view: 'primary' },
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
					content: "mods: { name: 'ok' }"
				}]
			},
			{
				block: 'logotype-item',
				content: [
				{
					block: 'brand-logo',
					mods: { name: 'vk', size: 'l'},
					mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
				},
				{
					block: 'text',
					mods: { size: 'm', view: 'primary' },
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
					content: "mods: { name: 'vk' }"
				}]
			},
			{
				block: 'logotype-item',
				content: [
				{
					block: 'brand-logo',
					mods: { name: 'skype', size: 'l'},
					mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
				},
				{
					block: 'text',
					mods: { size: 'm', view: 'primary' },
					content: 'Skype'
				},
				{
					block: 'text',
					mods: { size: 'm', view: 'link'},
					mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
					attrs: {
						href: 'https://www.skype.com/ru'
					},
					content: 'https://www.skype.com/ru'
				},
				{
					block: 'text',
					mods: { size: 'm', weight: 'bold' },
					content: "mods: { name: 'skype' }"
				}]
			},
			{
				block: 'logotype-item',
				content: [
				{
					block: 'brand-logo',
					mods: { name: 'regru', size: 'l'},
					mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
				},
				{
					block: 'text',
					mods: { size: 'm', view: 'primary' },
					content: 'Reg.ru'
				},
				{
					block: 'text',
					mods: { size: 'm', view: 'link'},
					mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
					attrs: {
						href: 'https://www.reg.ru'
					},
					content: 'https://www.reg.ru'
				},
				{
					block: 'text',
					mods: { size: 'm', weight: 'bold' },
					content: "mods: { name: 'regru' }"
				}]
			},
			{
				block: 'logotype-item',
				content: [
				{
					block: 'brand-logo',
					mods: { name: 'ru-center', size: 'l'},
					mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
				},
				{
					block: 'text',
					mods: { size: 'm', view: 'primary' },
					content: 'Ru-Center'
				},
				{
					block: 'text',
					mods: { size: 'm', view: 'link'},
					mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
					attrs: {
						href: 'https://www.nic.ru'
					},
					content: 'https://www.nic.ru'
				},
				{
					block: 'text',
					mods: { size: 'm', weight: 'bold' },
					content: "mods: { name: 'ru-center' }"
				}]
			},
			{
				block: 'logotype-item',
				content: [
				{
					block: 'brand-logo',
					mods: { name: 'no-logo', size: 'l'},
					mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
				},
				{
					block: 'text',
					mods: { size: 'm', view: 'primary' },
					content: 'Нет логотипа'
				},
				{
					block: 'text',
					mods: { size: 'm', view: 'link'},
					mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
					content: 'нет адреса'
				},
				{
					block: 'text',
					mods: { size: 'm', weight: 'bold' },
					content: "mods: { name: 'no-logo' }"
				}]
			}]
		}]
	},
	{
		block: 'demo',
		elem: 'footer'
	}]
};
