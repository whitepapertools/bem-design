module.exports = {
	block: 'page',
	title: 'Паттерны',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'patterns.min.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'patterns.min.js' }],
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
					elem: 'content',
					block: 'demo',
					elemMods: { size: 'm' },
					content: [
						{
							block: 'text',
							mods: { size: 'xxxxl', weight: 'bold' },
							mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
							content: 'Паттерны'
						},
						{
							block: 'text',
							mods: { size: 'l' },
							mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' }},
							content: [
								{
									elem: 'row',
									content: 'Все бесконечное многообразие интерфейсных множеств сводится к числу фундаментальных'
								},
								{
									elem: 'row',
									content: 'конструкций, на основе которых можно получить практически любой визуал.'
								}
							]
						},

						/* PT-TABLE */
						{
							elem: 'pattern',
							attrs: {
								'id': 'pt-table'
							},
							block: 'demo',
							content: [
							{
								block: 'text',
								mods: { view: 'primary', size: 'xxxl', weight: 'bold', display: 'block' },
								mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
								content: '.pt-table',
							},
							{
								block: 'text',
								mods: { size: 'l' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
								content: [
									{
										elem: 'row',
										content: 'Паттерн { block: \'pt-table\'} используется для представления табличной информации'
									},
									{
										elem: 'row',
										content: 'в различных пропорциях.'
									}
								]
							},
							{
								block: 'pt-table',
								mods: { view: 'default', 'space-a': 's', stripe: 'even' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
								content: [
								{
									elem: 'row',
									elemMods: { 'view': 'head' },
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Модификатор'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Значение'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Описание'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'view'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'default / ghost / inverse'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Фона блока'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'border'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'all'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Бордер блока'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'stripe'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'even / odd'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Зебрирование таблицы'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'space-a / space-h / space-v'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'xs / s / m / l'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Внутренние отступы ячеек'
										}]
									}]
								}]
							},
							{
								block: 'text',
								mods: { size: 'l', weight: 'bold' },
								mix: { block: 'decorator', mods: { 'indent-b': 's' } },
								content: '__row'
							},
							{
								block: 'pt-table',
								mods: { view: 'default', 'space-a': 's', stripe: 'even' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
								content: [
								{
									elem: 'row',
									elemMods: { 'view': 'head' },
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Модификатор'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Значение'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Описание'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'border'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'top / bottom'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Бордер строки'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'view'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'head'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Применение стилей шапки'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'status'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'default / error / success / warning'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Отображение статуса цветной полоской слева'
										}]
									}]
								}]
							},
							{
								block: 'text',
								mods: { size: 'l', weight: 'bold' },
								mix: { block: 'decorator', mods: { 'indent-b': 's' } },
								content: '__col'
							},
							{
								block: 'pt-table',
								mods: { view: 'default', 'space-a': 's', stripe: 'even' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxxl' } },
								content: [
								{
									elem: 'row',
									elemMods: { 'view': 'head' },
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Модификатор'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Значение'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Описание'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'align'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'right'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Горизонтальное выравнивание внутри ячейки'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'width'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: '5 - 100 с шагом 5'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Ширина ячейки'
										}]
									}]
								}]
							}]
						},
						/* /PT-TABLE */

						/* PT-LIST */
						{
							elem: 'pattern',
							attrs: {
								'id': 'pt-list'
							},
							block: 'demo',
							content: [
							{
								block: 'text',
								mods: { view: 'primary', size: 'xxxl', weight: 'bold', display: 'block' },
								mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
								content: '.pt-list',
							},
							{
								block: 'text',
								mods: { size: 'l' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
								content: [
									{
										elem: 'row',
										content: 'Паттерн { block: \'pt-list\' } используется для представления вертикально повторяющихся'
									},
									{
										elem: 'row',
										content: 'пунктов с любым содержимым.'
									}
								]
							},
							{
								block: 'pt-table',
								mods: { view: 'default', 'space-a': 's', stripe: 'even' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
								content: [
								{
									elem: 'row',
									elemMods: { 'view': 'head' },
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Модификатор'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Значение'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Описание'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'view'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'default / ghost / inverse'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Фон блока'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'border'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'all'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Круговой бордер блока'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'shadow'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'cloud'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Тень'
										}]
									}]
								}]
							},
							{
								block: 'text',
								mods: { size: 'l', weight: 'bold' },
								mix: { block: 'decorator', mods: { 'indent-b': 's' } },
								content: '__item'
							},
							{
								block: 'pt-table',
								mods: { view: 'default', 'space-a': 's', stripe: 'even' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxxl' } },
								content: [
								{
									elem: 'row',
									elemMods: { 'view': 'head' },
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Модификатор'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Значение'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Описание'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'border'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'top / bottom'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Бордер строк'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'border'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'right / left'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Бордер строк'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'space-a / space-v / space-h / space-t / space-b / space-r / space-l'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'xxs / xs / s / m / l / xl / xxl'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Внутренние отступы'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'indent-a / indent-v / indent-h / indent-t / indent-b / indent-r / indent-l'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'xs / s / m / l / xl / xxl / xxxl'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Внешние отступы'
										}]
									}]
								}]
							}]
						},
						/* /PT-LIST */

						/* PT-FORM */
						{
							elem: 'pattern',
							attrs: {
								'id': 'pt-form'
							},
							block: 'demo',
							content: [
							{
								block: 'text',
								mods: { view: 'primary', size: 'xxxl', weight: 'bold', display: 'block' },
								mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
								content: '.pt-form',
							},
							{
								block: 'text',
								mods: { size: 'l' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
								content: [
									{
										elem: 'row',
										content: 'Паттерн { block: \'pt-form\' } используется для представления любой информации требующей'
									},
									{
										elem: 'row',
										content: 'ввода данных или выбора настроек пользователем для дальнейшей отправки.'
									}
								]
							},
							{
								block: 'pt-table',
								mods: { view: 'default', 'space-a': 's', stripe: 'even' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
								content: [
								{
									elem: 'row',
									elemMods: { 'view': 'head' },
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Модификатор'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Значение'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Описание'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'view'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'default / ghost / inverse'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Фон блока'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'border'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'all'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Круговой бордер блока'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'shadow'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'cloud'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Тень'
										}]
									}]
								}]
							},
							{
								block: 'text',
								mods: { size: 'l', weight: 'bold' },
								mix: { block: 'decorator', mods: { 'indent-b': 's' } },
								content: '__item'
							},
							{
								block: 'pt-table',
								mods: { view: 'default', 'space-a': 's', stripe: 'even' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxxl' } },
								content: [
								{
									elem: 'row',
									elemMods: { 'view': 'head' },
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Модификатор'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Значение'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Описание'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'border'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'top / bottom'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Бордер строк'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'border'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'all'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Бордер строк'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'distribute'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'default / between'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Распределение контента по горизонтали'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'type'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'action'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Отображение футера с активными действиями'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'space-a / space-h / space-v / space-t / space-r / space-b / space-l'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'xs / s / m / l / xl / xxl / xxxl'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Внутренние отступы'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'indent-a / indent-h / indent-v / indent-t / indent-r / indent-b / indent-l'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'xs / s / m / l / xl / xxl / xxxl'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Внешние отступы'
										}]
									}]
								}]
							},
							{
								block: 'text',
								mods: { size: 'l', weight: 'bold' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xxl' } },
								content: '__event'
							},
							{
								block: 'text',
								mods: { size: 'l', weight: 'bold' },
								mix: { block: 'decorator', mods: { 'indent-b': 's' } },
								content: '__label'
							},
							{
								block: 'pt-table',
								mods: { view: 'default', 'space-a': 's', stripe: 'even' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxxl' } },
								content: [
								{
									elem: 'row',
									elemMods: { 'view': 'head' },
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Модификатор'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Значение'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Описание'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'width'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'default / inverse'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Ширина'
										}]
									}]
								}]
							}]
						},
						/* /PT-FORM */

						/* PT-INFORMER */
						{
							elem: 'pattern',
							attrs: {
								'id': 'pt-informer'
							},
							block: 'demo',
							content: [
							{
								block: 'text',
								mods: { view: 'primary', size: 'xxxl', weight: 'bold', display: 'block' },
								mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
								content: '.pt-informer',
							},
							{
								block: 'text',
								mods: { size: 'l' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
								content: [
									{
										elem: 'row',
										content: 'Паттерн { block: pt-informer } используется для представления блоков информирующих'
									},


									{
										elem: 'row',
										content: 'об успехе/ошибке или предупреждающих/информирующих о чем либо.'
									}
								]
							},
							{
								block: 'pt-table',
								mods: { view: 'default', 'space-a': 's', stripe: 'even' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
								content: [
								{
									elem: 'row',
									elemMods: { 'view': 'head' },
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Модификатор'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Значение'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Описание'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'view'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'success / warning / alert'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Фон блока'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'view'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'normal'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Фон блока'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'border'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'all'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Круговой бордер блока'
										}]
									}]
								}]
							},
							{
								block: 'text',
								mods: { size: 'l', weight: 'bold' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xxl' } },
								content: '__col'
							},
							{
								block: 'text',
								mods: { size: 'l', weight: 'bold' },
								mix: { block: 'decorator', mods: { 'indent-b': 's' } },
								content: '__content'
							},
							{
								block: 'pt-table',
								mods: { view: 'default', 'space-a': 's', stripe: 'even' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
								content: [
								{
									elem: 'row',
									elemMods: { 'view': 'head' },
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Модификатор'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Значение'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Описание'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'space-a / space-v / space-h'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'm / l / xl / xxl'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Внутренние отступы'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'distribute'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'default / between'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Распределение контента по горизонтали'
										}]
									}]
								}]
							},
							{
								block: 'text',
								mods: { size: 'l', weight: 'bold' },
								mix: { block: 'decorator', mods: { 'indent-b': 's' } },
								content: '__action'
							},
							{
								block: 'pt-table',
								mods: { view: 'default', 'space-a': 's', stripe: 'even' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxxl' } },
								content: [
								{
									elem: 'row',
									elemMods: { 'view': 'head' },
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Модификатор'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Значение'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Описание'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'space-a / space-v / space-h / space-b'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'm / l / xl / xxl'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Внутренние отступы'
										}]
									}]
								}]
							}]
						},
						/* /PT-INFORMER */

						/* PT-ICON-PLUS */
						{
							elem: 'pattern',
							attrs: {
								'id': 'pt-icon-plus'
							},
							block: 'demo',
							content: [
							{
								block: 'text',
								mods: { view: 'primary', size: 'xxxl', weight: 'bold', display: 'block' },
								mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
								content: '.pt-icon-plus',
							},
							{
								block: 'text',
								mods: { size: 'l' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
								content: [
									{
										elem: 'row',
										content: 'Паттерн { block: \'pt-icon-plus\' }  используется для представления связки графической'
									},
									{
										elem: 'row',
										content: 'и любой другой информации'
									}
								]
							},
							{
								block: 'pt-table',
								mods: { view: 'default', 'space-a': 's', stripe: 'even' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
								content: [
								{
									elem: 'row',
									elemMods: { 'view': 'head' },
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Модификатор'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Значение'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Описание'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'vertical-align'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'center / top'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Вертикальное выравнивание'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'indent'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'xxs / xs / s / m / l'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Внешний отступ снизу'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'distribute'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'default / between'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Распределение контента по горизонтали'
										}]
									}]
								}]
							},
							{
								block: 'text',
								mods: { size: 'l', weight: 'bold' },
								mix: { block: 'decorator', mods: { 'indent-b': 's' } },
								content: '__icon'
							},
							{
								block: 'pt-table',
								mods: { view: 'default', 'space-a': 's', stripe: 'even' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
								content: [
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'indent-r'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'xxs / xs / s / m / l'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Отступ между иконкой и контентом справа'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'indent-l'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'xxs / xs / s / m / l'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Отступ между иконкой и контентом слева'
										}]
									}]
								}]
							},
							{
								block: 'text',
								mods: { size: 'l', weight: 'bold' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxxl' } },
								content: '__block'
							}]
						},
						/* /PT-ICON-PLUS */

						/* AVATAR */
						// {
						// 	elem: 'pattern',
						// 	block: 'demo',
						// 	content: [
						// 	{
						// 		block: 'text',
						// 		mods: { view: 'primary', size: 'xxxl', weight: 'bold', display: 'block' },
						// 		mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
						// 		content: '.avatar',
						// 	},
						// 	{
						// 		block: 'text',
						// 		mods: { size: 'l', weight: 'bold' },
						// 		mix: { block: 'decorator', mods: { 'indent-b': 's' } },
						// 		content: '__photo'
						// 	},
						// 	{
						// 		block: 'pt-table',
						// 		mods: { view: 'default', 'space-a': 's', stripe: 'even' },
						// 		mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxxl' } },
						// 		content: [
						// 		{
						// 			elem: 'row',
						// 			elemMods: { 'view': 'head' },
						// 			content: [
						// 			{
						// 				elem: 'col',
						// 				elemMods: { width: '30' },
						// 				content: [
						// 				{
						// 					block: 'text',
						// 					mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
						// 					content: 'Модификатор'
						// 				}]
						// 			},
						// 			{
						// 				elem: 'col',
						// 				elemMods: { width: '35' },
						// 				content: [
						// 				{
						// 					block: 'text',
						// 					mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
						// 					content: 'Значение'
						// 				}]
						// 			},
						// 			{
						// 				elem: 'col',
						// 				elemMods: { width: '35' },
						// 				content: [
						// 				{
						// 					block: 'text',
						// 					mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
						// 					content: 'Описание'
						// 				}]
						// 			}]
						// 		},
						// 		{
						// 			elem: 'row',
						// 			content: [
						// 			{
						// 				elem: 'col',
						// 				elemMods: { width: '30' },
						// 				content: [
						// 				{
						// 					block: 'text',
						// 					mods: { size: 'm', view: 'primary' },
						// 					content: 'size'
						// 				}]
						// 			},
						// 			{
						// 				elem: 'col',
						// 				elemMods: { width: '35' },
						// 				content: [
						// 				{
						// 					block: 'text',
						// 					mods: { size: 'm', view: 'primary' },
						// 					content: 's / m / l'
						// 				}]
						// 			},
						// 			{
						// 				elem: 'col',
						// 				elemMods: { width: '35' },
						// 				content: [
						// 				{
						// 					block: 'text',
						// 					mods: { size: 'm', view: 'primary' },
						// 					content: 'Размер'
						// 				}]
						// 			}]
						// 		}]
						// 	}]
						// },
						/* /AVATAR */

						/* BADGE */
						// {
						// 	elem: 'pattern',
						// 	block: 'demo',
						// 	content: [
						// 	{
						// 		block: 'text',
						// 		mods: { view: 'primary', size: 'xxxl', weight: 'bold', display: 'block' },
						// 		mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
						// 		content: '.badge',
						// 	},
						// 	{
						// 		block: 'pt-table',
						// 		mods: { view: 'default', 'space-a': 's', stripe: 'even' },
						// 		mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxxl' } },
						// 		content: [
						// 		{
						// 			elem: 'row',
						// 			elemMods: { 'view': 'head' },
						// 			content: [
						// 			{
						// 				elem: 'col',
						// 				elemMods: { width: '30' },
						// 				content: [
						// 				{
						// 					block: 'text',
						// 					mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
						// 					content: 'Модификатор'
						// 				}]
						// 			},
						// 			{
						// 				elem: 'col',
						// 				elemMods: { width: '35' },
						// 				content: [
						// 				{
						// 					block: 'text',
						// 					mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
						// 					content: 'Значение'
						// 				}]
						// 			},
						// 			{
						// 				elem: 'col',
						// 				elemMods: { width: '35' },
						// 				content: [
						// 				{
						// 					block: 'text',
						// 					mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
						// 					content: 'Описание'
						// 				}]
						// 			}]
						// 		},
						// 		{
						// 			elem: 'row',
						// 			content: [
						// 			{
						// 				elem: 'col',
						// 				elemMods: { width: '30' },
						// 				content: [
						// 				{
						// 					block: 'text',
						// 					mods: { size: 'm', view: 'primary' },
						// 					content: 'view'
						// 				}]
						// 			},
						// 			{
						// 				elem: 'col',
						// 				elemMods: { width: '35' },
						// 				content: [
						// 				{
						// 					block: 'text',
						// 					mods: { size: 'm', view: 'primary' },
						// 					content: 'default / success / warning / alert / inverse'
						// 				}]
						// 			},
						// 			{
						// 				elem: 'col',
						// 				elemMods: { width: '35' },
						// 				content: [
						// 				{
						// 					block: 'text',
						// 					mods: { size: 'm', view: 'primary' },
						// 					content: 'Фон блока'
						// 				}]
						// 			}]
						// 		}]
						// 	}]
						// },
						/* /BAGE */

						/* PT-SURFACE */
						{
							elem: 'pattern',
							attrs: {
								'id': 'pt-surface'
							},
							block: 'demo',
							content: [
							{
								block: 'text',
								mods: { view: 'primary', size: 'xxxl', weight: 'bold', display: 'block' },
								mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
								content: '.pt-surface',
							},
							{
								block: 'text',
								mods: { size: 'l' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
								content: [
									{
										block: 'row',
										content: 'Паттерн { block: \'pt-surface\' } используется для отображения перекрывающих слоев в которые'
									},
									{
										block: 'row',
										content: 'размещается контент'
									}
								]
							},
							{
								block: 'pt-table',
								mods: { view: 'default', 'space-a': 's', stripe: 'even' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
								content: [
								{
									elem: 'row',
									elemMods: { 'view': 'head' },
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Модификатор'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Значение'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Описание'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'view'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'tone / soft'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Фон подложки'
										}]
									}]
								}]
							},
							{
								block: 'text',
								mods: { size: 'l', weight: 'bold' },
								mix: { block: 'decorator', mods: { 'indent-b': 's' } },
								content: '__content'
							},
							{
								block: 'pt-table',
								mods: { view: 'default', 'space-a': 's', stripe: 'even' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
								content: [
								{
									elem: 'row',
									elemMods: { 'view': 'head' },
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Модификатор'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Значение'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Описание'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'size'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'xs / s / m / full'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Ширина модалки'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'view'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'default'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Фон модалки'
										}]
									}]
								}]
							},
							{
								block: 'text',
								mods: { size: 'l', weight: 'bold' },
								mix: { block: 'decorator', mods: { 'indent-b': 's' } },
								content: '__close'
							},
							{
								block: 'pt-table',
								mods: { view: 'default', 'space-a': 's', stripe: 'even' },
								mix: { block: 'decorator', mods: { 'indent-b': 'xxxxl' } },
								content: [
								{
									elem: 'row',
									elemMods: { 'view': 'head' },
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Модификатор'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Значение'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'xs', view: 'ghost', weight: 'bold', transform: 'uppercase', spacing: 'xs' },
											content: 'Описание'
										}]
									}]
								},
								{
									elem: 'row',
									content: [
									{
										elem: 'col',
										elemMods: { width: '30' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'view'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'desktop / mobile'
										}]
									},
									{
										elem: 'col',
										elemMods: { width: '35' },
										content: [
										{
											block: 'text',
											mods: { size: 'm', view: 'primary' },
											content: 'Размер закрывающего элемента'
										}]
									}]
								}]
							},
							{
								block: 'text',
								mods: { size: 'l', weight: 'bold' },
								// mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxxl' } },
								content: '__window'
							}]
						}
						/* /PT-SURFACE */

					]
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