block('new-menu')(
	content()(function() {
		return {
			elem: 'container',
			mix: { block: 'tpl-layout', elem: 'container', elemMods: { size: 'm', align: 'center' }, },
			content: [
				{
					elem: 'logo',
					tag: 'a',
					attrs: { href: '/index.html' }
				},
				{
					elem: 'nav',
					content: [
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							tag: 'a',
							attrs: { href: '../../../../desktop.bundles/themes/themes.html' },
							mix: { block: 'new-menu', elem: 'item', elemMods: { view: 'link' }, },
							content: 'Тема'
						},
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							tag: 'a',
							attrs: { href: '../../../../desktop.bundles/content/content.html' },
							mix: { block: 'new-menu', elem: 'item', elemMods: { view: 'link' }, },
							content: 'Контент'
						},
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							tag: 'a',
							attrs: { href: '../../../../desktop.bundles/patterns/patterns.html' },
							mix: { block: 'new-menu', elem: 'item', elemMods: { view: 'link' }, },
							content: 'Паттерны'
						},
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							tag: 'a',
							attrs: { href: '../../../../desktop.bundles/layouts/layouts.html' },

							mix: { block: 'new-menu', elem: 'item', elemMods: { view: 'link' }, },
							content: 'Шаблоны'
						},
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							tag: 'a',
							attrs: { href: '../../../../desktop.bundles/doc/doc.html' },
							mix: { block: 'new-menu', elem: 'item', elemMods: { view: 'link' }, },
							content: 'Обучение'
						},
						{
							block: 'text',
							mods: { size: 'm', view: 'primary' },
							tag: 'a',
							attrs: { href: '../../../../desktop.bundles/assets/assets.html' },
							mix: { block: 'new-menu', elem: 'item', elemMods: { view: 'link' }, },
							content: 'Материалы'
						},
						// {
						// 	elem: 'item',
						// 	elemMods: { view: 'dropdown' },
						// 	content: [
						// 		{
						// 			block: 'pt-icon-plus',
						// 			mods: { 'vertical-align': 'center' },
						// 			content: [
						// 				{
						// 					elem: 'block',
						// 					content: {
						// 						block: 'text',
						// 						mods: { size: 'm', view: 'primary' },
						// 						content: 'Инфо'
						// 					}
						// 				},
						// 				{
						// 					elem: 'icon',
						// 					elemMods: { 'indent-l': 'xs'},
						// 					content: { block: 'icon', mods: { 'name': 'arrow-down', view: 'ghost', size: 's' }}
						// 				}
						// 			]
						// 		},
						// 		{
						// 			elem: 'dropdown',
						// 			content: [
						// 				{
						// 					block: 'text',
						// 					mods: { size: 'm', view: 'primary' },
						// 					tag: 'a', attrs: { href: '/templates.html' },
						// 					mix: { block: 'new-menu', elem: 'dropdown-link' },
						// 					content: 'Документы'
						// 				},
						// 				{
						// 					block: 'text',
						// 					mods: { size: 'm', view: 'primary' },
						// 					tag: 'a', attrs: { href: '/templates.html' },
						// 					mix: { block: 'new-menu', elem: 'dropdown-link' },
						// 					content: 'Материалы'
						// 				},
						// 			]
						// 		}
						// 	]
						// }
					]
				}
			]
		}
	})
);