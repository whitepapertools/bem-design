module.exports = {
	block: 'page',
	title: 'BEM Icons article',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'article-icons.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'article-icons.min.js' }],
	mods: { theme: 'islands' },
	mix: {
		block: 'theme',
		mods: { color: 'whitepaper-default', space: 'default', size: 'default', gap: 'small', menu: 'default', font: 'museo' }
	},
	content: [
		{
			block: 'tpl-layout',
			attrs: { style: 'position: relative; top: 60px' },
			content: [
				{
					block: 'new-menu',
					mix: { block: 'tpl-layout', elem: 'section' },
					content: [
						{
							elem: 'container',
							mix: { block: 'tpl-layout', elem: 'container', elemMods: { size: 'm', align: 'center' }, },
							content: [
								{
									elem: 'logo',
									tag: 'a',
									attrs: { href: '../../../../desktop.bundles/index/index.html' },
									content: {
										block: 'image',
										attrs: { style: 'display: block' },
										width: 44,
										url: '../../assets/i/bem-design.svg'
									}
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
					]
				},
				{
					block: 'demo',
					elem: 'content',
					elemMods: { size: 's' },
					content: [
					{
						block: 'text',
						mods: { size: 'xxxxl', weight: 'bold', font: 'sans' },
						mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxl' }},
						content: 'Как рисовать иконки'
					},
					{
						block: 'text',
						mods: { view: 'primary', size: 'xl', type: 'h2', weight: 'bold', font: 'sans' },
						content: '1. Сетка'
					},
					{
						block: 'text',
						mods: { view: 'primary', size: 'm', type: 'p', font: 'sans' },
						content: 'Иконки должны быть выполнены с помощью сетки размером 16px (_size_s) или 24px (_size_m).'
					},
					{
						block: 'image',
						width: 740,
						url: '../../../../assets/i/icon-grid.png',
						attrs: {
							'style': 'border: 1px solid rgba(0, 0, 0, 0.05);'
						}
					},
					{
						block: 'text',
						mods: { view: 'primary', size: 'xl', type: 'h2', weight: 'bold', font: 'sans' },
						content: '2. Базовые формы'
					},
					{
						block: 'text',
						mods: { view: 'primary', size: 'm', type: 'p', font: 'sans' },
						content: 'Привязка к этим фигурам в сетке сохраняет пропорции во всем наборе.'
					},
					{
						block: 'text',
						mods: { view: 'primary', size: 'm', type: 'p', font: 'sans' },
						content: 'Круг прямоугольник (горизонтальные и вертикальные) квадрат.'
					},
					{
						block: 'image',
						width: 740,
						url: '../../../../assets/i/icon-form.png',
						attrs: {
							'style': 'border: 1px solid rgba(0, 0, 0, 0.05);'
						}
					},
					{
						block: 'text',
						mods: { view: 'primary', size: 'xl', type: 'h2', weight: 'bold', font: 'sans' },
						content: '3. Размер'
					},
					{
						block: 'text',
						mods: { view: 'primary', size: 'm', type: 'p', font: 'sans' },
						content: 'При создании иконок меньшего размера иногда можно просто изменить размер (выровняв по пиксельной сетке). Хороший пример иконки picture. Баланс между пробелами и штрихами по-прежнему выглядит хорошо при изменении размера.'
					},
					{
						block: 'image',
						width: 740,
						url: '../../../../assets/i/icon-size.png',
						attrs: {
							'style': 'border: 1px solid rgba(0, 0, 0, 0.05);'
						}
					},
					{
						block: 'text',
						mods: { view: 'primary', size: 'm', type: 'p', font: 'sans' },
						content: 'Но в большинстве случаев элементы слишком малы и становится нечитаемыми при сжатии, поэтому имеет смысл сделать эти элементы целыми.'
					},
					{
						block: 'image',
						width: 740,
						url: '../../../../assets/i/icon-sizes.png',
						attrs: {
							'style': 'border: 1px solid rgba(0, 0, 0, 0.05);'
						}
					},
					{
						block: 'text',
						mods: { view: 'primary', size: 'xl', type: 'h2', weight: 'bold', font: 'sans' },
						content: '4. Толщина штриха'
					},
					{
						block: 'text',
						mods: { view: 'primary', size: 'm', type: 'p', font: 'sans' },
						content: 'Толщина штриха должна быть 2px. Однако, в некоторых случаях допустима 1,5px.'
					},
					{
						block: 'text',
						mods: { view: 'primary', size: 'xl', type: 'h2', weight: 'bold', font: 'sans' },
						content: '5. Анатомия'
					},
					{
						block: 'text',
						mods: { view: 'primary', size: 'm', type: 'p', font: 'sans' },
						content: 'Сложные формы должны образовываться слиянием простых фигур. Для создания дуг используйте круги. (Пример иконок notification и picture).'
					},
					{
						block: 'text',
						mods: { view: 'primary', size: 'xl', type: 'h2', weight: 'bold', font: 'sans' },
						content: '6. Скругления'
					},
					{
						block: 'text',
						mods: { view: 'primary', size: 'm', type: 'p', font: 'sans' },
						content: 'Скругление углов не является обязательным и должно зависеть от того, как выглядят объект в реальной жизни. Обычно у конверта углы всегда прямые, а у телефона есть скругления.'
					},
					{
						block: 'text',
						mods: { view: 'primary', size: 'xl', type: 'h2', weight: 'bold', font: 'sans' },
						content: '7. Углы'
					},
					{
						block: 'text',
						mods: { view: 'primary', size: 'm', type: 'p', font: 'sans' },
						content: 'Углы форм должны быть стремиться к 45 или 90 градусам.'
					},
					{
						block: 'text',
						mods: { view: 'primary', size: 'xl', type: 'h2', weight: 'bold', font: 'sans' },
						content: '8. Использование логотипов в иконках'
					},
					{
						block: 'text',
						mods: { view: 'primary', size: 'm', type: 'p', font: 'sans' },
						content: 'Иногда в иконках необходимо использовать логотип других сервисов. В таких случаях мы не изменяем форму, а только подгоняем в сетку и если это возможно выравниваем по пиксельной сетке. (Пример иконок метки и блога)'
					},
					{
						block: 'text',
						mods: { view: 'ghost', size: 'xl', type: 'h2', weight: 'bold', font: 'sans' },
						content: '9. Примеры (хорошо и плохо)'
					}]
				},
				/* Footer */
				{
					elem: 'section',
					mix: [
						{ block: 'foot' },
						{ block: 'component', mods: { whitepaper: 'default' }}
					],
					content: {
						elem: 'container',
						elemMods: { size: 'm', align: 'center' },
						mix: { block: 'foot', elem: 'container' },
						content: [
							{
								block: 'text',
								mods: { size: 'm', view: 'secondary' },
								content: '© 2018 White Paper'
							},
							{
								block: 'foot',
								elem: 'social',
								content: [
									// {
									// 	block: 'social-icon',
									// 	mods: { name: 'ok', size: 'm', view: 'primary' },
									// 	mix: { block: 'decorator', mods: { 'indent-l': 'xs' }},
									// 	tag: 'a',
									// 	attrs: { href: 'https://github.com/whitepapertools' }
									// },
									// {
									// 	block: 'social-icon',
									// 	mods: { name: 'ya', size: 'm', view: 'primary' },
									// 	mix: { block: 'decorator', mods: { 'indent-l': 'xs' }},
									// 	tag: 'a',
									// 	attrs: { href: 'https://github.com/whitepapertools' }
									// },
									{
										block: 'social-icon',
										mods: { name: 'github', size: 'm', view: 'primary' },
										mix: { block: 'decorator', mods: { 'indent-l': 'xs' }},
										tag: 'a',
										attrs: { href: 'https://github.com/whitepapertools' }
									},
									{
										block: 'social-icon',
										mods: { name: 'telegram', size: 'm', view: 'primary' },
										mix: { block: 'decorator', mods: { 'indent-l': 'xs' }},
										tag: 'a',
										attrs: { href: 'https://t.me/whitepapertools' }
									},
									{
										block: 'social-icon',
										mods: { name: 'twitter', size: 'm', view: 'primary' },
										mix: { block: 'decorator', mods: { 'indent-l': 'xs' }},
										tag: 'a',
										attrs: { href: 'https://twitter.com/whitepapertools' }
									},
									{
										block: 'social-icon',
										mods: { name: 'codepen', size: 'm', view: 'primary' },
										mix: { block: 'decorator', mods: { 'indent-l': 'xs' }},
										tag: 'a',
										attrs: { href: 'https://codepen.io/whitepapertools' }
									},
									{
										block: 'social-icon',
										mods: { name: 'dribbble', size: 'm', view: 'primary' },
										mix: { block: 'decorator', mods: { 'indent-l': 'xs' }},
										tag: 'a',
										attrs: { href: 'https://dribbble.com/whitepapertools' }
									}
								]
							}
						]
					}
				}
				/* /Footer */
			]
		}
	]
};
