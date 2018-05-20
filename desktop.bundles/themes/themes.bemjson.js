module.exports = {
	block: 'page',
	title: 'Тема',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'themes.min.css' },
		{ elem: 'css', url: '/assets/bem-grid/bem-grid-l.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
	],
	scripts: [{ elem: 'js', url: 'themes.min.js' }],
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

				/* Menu */
				{
					block: 'new-menu',
				},
				/* /Menu */

				/* Content */
				{
					block: 'demo',
					elem: 'content',
					elemMods: { size: 'm' },
					content: [

						{
							block: 'text',
							mods: { size: 'xxxxl', weight: 'bold', font: 'sans' },
							content: 'Тема'
						},

						/* Цвета */
						{
							elem: 'section',
							mix: { block: 'decorator', mods: { 'space-t': 'xxxxl' }},
							attrs: {
								'id': 'color'
							},
							content: [
								{
									block: 'decorator',
									mods: { 'indent-b' : 'xxxxxl' },
									content: [
									{
										block: 'text',
										mods: { size: 'xxl', weight: 'bold' },
										mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
										content: 'Цвета'
									},
									{
										block: 'text',
										mods: { size: 'l' },
										mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
										content: [
											{
												elem: 'row',
												content: 'Переменные цветов используются в модификациях блоков и типографики'
											},
											{
												elem: 'row',
												content: 'подчеркивая их смысл или состояние.'
											}
										]
									},
									{
										elem: 'section',
										mix: [
											{ block: 'tpl-grid', mods: { ratio: '1-1-1-1', 'col-gap': 'two-thirds', 'row-gap': 'two-thirds' }},
											{ block: 'decorator', mods: { 'indent-b': 'xxxxl' }}
										],
										content: [
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'brand'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-bg-brand'
												}]
											},
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'action'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-bg-action'
												}]
											},
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'selection'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-bg-selection'
												}]
											},
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'hover'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-bg-hover'
												}]
											},
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'default'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-bg-default'
												}]
											},
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'border'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-bg-border'
												}]
											},
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'ghost'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-bg-ghost'
												}]
											},
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'soft'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-bg-soft'
												}]
											},
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'tone'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-bg-tone'
												}]
											},
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'success'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-bg-success'
												}]
											},
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'alert'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-bg-alert'
												}]
											},
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'warning'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-bg-warning'
												}]
											},
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'soft'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-bg-system'
												}]
											},
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'normal'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-bg-normal'
												}]
											}
										]
									},
									{
										elem: 'section',
										mix: [
											{ block: 'tpl-grid', mods: { ratio: '1-1-1-1', 'col-gap': 'two-thirds', 'row-gap': 'two-thirds' }},
											{ block: 'decorator', mods: { 'indent-b': 'xxxxl' }}
										],
										content: [
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'typo-primary'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-typo-primary'
												}]
											},
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'typo-promo'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-typo-promo'
												}]
											},
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'typo-secondary'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-typo-secondary'
												}]
											},
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'typo-ghost'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-typo-ghost'
												}]
											},
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'typo-disable'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-typo-disable'
												}]
											},
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'typo-success'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-typo-success'
												}]
											},
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'typo-alert'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-typo-alert'
												}]
											}
										]
									},
									{
										elem: 'section',
										mix: [
											{ block: 'tpl-grid', mods: { ratio: '1-1-1-1', 'col-gap': 'two-thirds', 'row-gap': 'two-thirds' }},
											{ block: 'decorator', mods: { 'indent-b': 'xxxxl' }}
										],
										content: [
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'link'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-link'
												}]
											},
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'link-hover' }
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-link-hover'
												}]
											},
											{
												block: 'color',
												content: [
												{
													elem: 'image',
													elemMods: { color: 'link-minor'}
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: '--color-link-minor'
												}]
											}
										]
									}]
								}
							]
						},
						/* /Цвета */

						/* Отступы */
						{
							elem: 'section',
							attrs: {
								'id': 'space'
							},
							content: [
								{
									block: 'text',
									mods: { size: 'xxl', weight: 'bold' },
									mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
									content: 'Отступы'
								},
								{
									block: 'text',
									mods: { size: 'l' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
									content: [
										{
											elem: 'row',
											content: 'Переменные отступов используются как для ритма внутри сеток, так и для'
										},
										{
											elem: 'row',
											content: 'обозначения уровней вложенности и разделения смысловых сущностей'
										},
										{
											elem: 'row',
											content: 'внутри паттернов.'
										}
									]
								},
								{
									elem: 'row',
									mix: { block: 'tpl-grid', mods: { ratio: '1-1-1-1', 'col-gap': 'two-thirds', 'row-gap': 'two-thirds' }},
									content: [
										
										{
											block: 'space',
											content: [
											{
												elem: 'image',
												content: [
												{
													block: 'space-image',
													mods: { size: 'xxxxl' },
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', display: 'inline-block' },
												content: [
												{
													block: 'text',
													mods: { weight: 'bold' },
													content: '--space-xxxxl'
												}
												]
											}]
										},
										{
											block: 'space',
											content: [
											{
												elem: 'image',
												content: [
												{
													block: 'space-image',
													mods: { size: 'xxxl' },
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', display: 'inline-block' },
												content: [
												{
													block: 'text',
													mods: { weight: 'bold' },
													content: '--space-xxxl'
												}
												]
											}]
										},
										{
											block: 'space',
											content: [
											{
												elem: 'image',
												content: [
												{
													block: 'space-image',
													mods: { size: 'xxl' },
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', display: 'inline-block' },
												content: [
												{
													block: 'text',
													mods: { weight: 'bold' },
													content: '--space-xxl'
												}
												]
											}]
										},
										{
											block: 'space',
											content: [
											{
												elem: 'image',
												content: [
												{
													block: 'space-image',
													mods: { size: 'xl' },
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', display: 'inline-block' },
												content: [
												{
													block: 'text',
													mods: { weight: 'bold' },
													content: '--space-xl'
												}
												]
											}]
										},

										{
											block: 'space',
											content: [
											{
												elem: 'image',
												content: [
												{
													block: 'space-image',
													mods: { size: 'l' },
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', display: 'inline-block' },
												content: [
												{
													block: 'text',
													mods: { weight: 'bold' },
													content: '--space-l'
												}]
											}]
										},
										{
											block: 'space',
											content: [
											{
												elem: 'image',
												content: [
												{
													block: 'space-image',
													mods: { size: 'm' },
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', display: 'inline-block' },
												content: [
												{
													block: 'text',
													mods: { weight: 'bold' },
													content: '--space-m'
												}]
											}]
										},
										{
											block: 'space',
											content: [
											{
												elem: 'image',
												content: [
												{
													block: 'space-image',
													mods: { size: 's' },
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', display: 'inline-block' },
												content: [
												{
													block: 'text',
													mods: { weight: 'bold' },
													content: '--space-s'
												}]
											}]
										},

										{
											block: 'space',
											content: [
											{
												elem: 'image',
												content: [
												{
													block: 'space-image',
													mods: { size: 'xs' },
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', display: 'inline-block' },
												content: [
												{
													block: 'text',
													mods: { weight: 'bold' },
													content: '--space-xs'
												}]
											}]
										},
										{
											block: 'space',
											content: [
											{
												elem: 'image',
												content: [
												{
													block: 'space-image',
													mods: { size: 'xxs' },
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', display: 'inline-block' },
												content: [
												{
													block: 'text',
													mods: { weight: 'bold' },
													content: '--space-xxs'
												}]
											}]
										},
										{
											block: 'space',
											content: [
											{
												elem: 'image',
												content: [
												{
													block: 'space-image',
													mods: { size: 'xxxs' },
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', display: 'inline-block' },
												content: [
												{
													block: 'text',
													mods: { weight: 'bold' },
													content: '--space-xxxs'
												}]
											}]
										}

									]
								}
							]
						},
						/* /Отступы */

						/* Размеры */
						{
							elem: 'section',
							attrs: {
								'id': 'size'
							},
							content: [
								{
									block: 'text',
									mods: { size: 'xxl', weight: 'bold' },
									mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
									content: 'Размеры'
								},
								{
									block: 'text',
									mods: { size: 'l' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
									content: [
										{
											elem: 'row',
											content: 'Переменные размеров используются в текстовых блоках и подчеркивают'
										},
										{
											elem: 'row',
											content: 'информационную иерархию.'
										}

									]
								},
								{
									elem: 'row',
									mix: { block: 'tpl-grid', mods: { ratio: '1-1-1', 'col-gap': 'two-thirds', 'row-gap': 'two-thirds' }},
									content: [
										{
											block: 'typography',
											content: [
											{
												elem: 'view',
												content: [
												{
													block: 'text',
													mods: { size: 'xxxl' },
													content: 'Typography'
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', weight: 'bold' },
												content: "--size-typo-xxxl"
											}]
										},
										{
											block: 'typography',
											content: [
											{
												elem: 'view',
												content: [
												{
													block: 'text',
													mods: { size: 'xxl'},
													content: 'Typography'
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', weight: 'bold' },
												content: "--size-typo-xxl"
											}]
										},
										{
											block: 'typography',
											content: [
											{
												elem: 'view',
												content: [
												{
													block: 'text',
													mods: { size: 'xl'},
													content: 'Typography'
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', weight: 'bold' },
												content: "--size-typo-xl"
											}]
										},
										{
											block: 'typography',
											content: [
											{
												elem: 'view',
												content: [
												{
													block: 'text',
													mods: { size: 'l'},
													content: 'Typography'
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', weight: 'bold' },
												content: "--size-typo-l"
											}]
										},
										{
											block: 'typography',
											content: [
											{
												elem: 'view',
												content: [
												{
													block: 'text',
													mods: { size: 'm'},
													content: 'Typography'
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', weight: 'bold' },
												content: "--size-typo-m"
											}]
										},
										{
											block: 'typography',
											content: [
											{
												elem: 'view',
												content: [
												{
													block: 'text',
													mods: { size: 's'},
													content: 'Typography'
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', weight: 'bold' },
												content: "--size-typo-s"
											}]
										},
										{
											block: 'typography',
											content: [
											{
												elem: 'view',
												content: [
												{
													block: 'text',
													mods: { size: 'xs'},
													content: 'Typography'
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', weight: 'bold' },
												content: "--size-typo-xs"
											}]
										}
									]
								},
							]
						},
						/* /Размеры */


						/* Точки перестроения */
						{
							elem: 'section',
							attrs: {
								'id': 'gap'
							},
							content: [
								{
									block: 'text',
									mods: { size: 'xxl', weight: 'bold' },
									mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
									content: 'Точки перестроения'
								},
								{
									block: 'text',
									mods: { size: 'l' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
									content: [
										{
											elem: 'row',
											content: 'Переменные используются внутри адаптивных модификации сеток.'
										}
									]
								},
								{
									elem: 'subject',
									mix: [
										{ block: 'tpl-grid', mods: { ratio: '1-1', 'col-gap': 'two-thirds', 'row-gap': 'two-thirds' }},
										{ block: 'decorator', mods: { 'indent-b': 'xxxxl' }}
									],
									content: [
										// {
										// 	block: 'breakpoint',
										// 	content: [
										// 		{
										// 			elem: 'view',
										// 			content: [

										// 			]
										// 		},
										// 		{
										// 			elem: 'text',
										// 			content: [
										// 				{
										// 					block: 'text',
										// 					mods: { size: 'm', weight: 'bold' },
										// 					content: "--screen-xl"
										// 				}
										// 			]
										// 		}
										// 	]
										// },
										{
											block: 'breakpoint',
											content: [
												{
													elem: 'view',
													content: [
														{
															block: 'image',
															width: 460,
															url: '../../../../assets/i/screen-l.svg'
														}
													]
												},
												{
													elem: 'text',
													content: [
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold', align: 'center' },
															content: "--screen-l"
														}
													]
												}
											]
										},
										{
											block: 'breakpoint',
											content: [
												{
													elem: 'view',
													content: [
														{
															block: 'image',
															width: 460,
															url: '../../../../assets/i/screen-m.svg'
														}
													]
												},
												{
													elem: 'text',
													content: [
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold', align: 'center' },
															content: "--screen-m"
														}
													]
												}
											]
										},
										{
											block: 'breakpoint',
											content: [
												{
													elem: 'view',
													content: [
														{
															block: 'image',
															width: 460,
															url: '../../../../assets/i/screen-s.svg'
														}
													]
												},
												{
													elem: 'text',
													content: [
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold', align: 'center' },
															content: "--screen-s"
														}
													]
												}
											]
										},
										{
											block: 'breakpoint',
											content: [
												{
													elem: 'view',
													content: [
														{
															block: 'image',
															width: 460,
															url: '../../../../assets/i/screen-xs.svg'
														}
													]
												},
												{
													elem: 'text',
													content: [
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold', align: 'center' },
															content: "--screen-xs"
														}
													]
												}
											]
										}
									]
								}
							]
						},
						/* /Точки перестроения */

						/* Расстояния */
						{
							elem: 'section',
							attrs: {
								'id': 'gap'
							},
							content: [
								{
									block: 'text',
									mods: { size: 'xxl', weight: 'bold' },
									mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
									content: 'Расстояния'
								},
								{
									block: 'text',
									mods: { size: 'l' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
									content: [
										{
											elem: 'row',
											content: 'Переменные используются для формирования отступов внутри обвязок и сеток.'
										}
									]
								},
								{
									elem: 'subject',
									mix: { block: 'tpl-grid', mods: { ratio: '1-1', 'col-gap': 'two-thirds', 'row-gap': 'two-thirds' }},
									content: [
										{
											block: 'gap',
											content: [
												{
													elem: 'view',
													content: [
														{
															block: 'image',
															attrs: { style: 'display: block' },
															width: 468,
															url: '../../assets/i/col-gap-full.svg'
														}
													]
												},
												{
													elem: 'text',
													content: [
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold' },
															content: "--col-gap-full"
														}
													]
												}
											]
										},
										{
											block: 'gap',
											content: [
												{
													elem: 'view',
													content: [
														{
															block: 'image',
															attrs: { style: 'display: block' },
															width: 468,
															url: '../../assets/i/col-gap-two-thirds.svg'
														}
													]
												},
												{
													elem: 'text',
													content: [
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold' },
															content: "--col-gap-two-thirds"
														}
													]
												}
											]
										},
										{
											block: 'gap',
											content: [
												{
													elem: 'view',
													content: [
														{
															block: 'image',
															attrs: { style: 'display: block' },
															width: 468,
															url: '../../assets/i/col-gap-half.svg'
														}
													]
												},
												{
													elem: 'text',
													content: [
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold' },
															content: "--col-gap-half"
														}
													]
												}
											]
										},
										{
											block: 'gap',
											content: [
												{
													elem: 'view',
													content: [
														{
															block: 'image',
															attrs: { style: 'display: block' },
															width: 468,
															url: '../../assets/i/col-gap-third.svg'
														}
													]
												},
												{
													elem: 'text',
													content: [
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold' },
															content: "--col-gap-third"
														}
													]
												}
											]
										}
									]
								}
							]
						},
						/* /Расстояния */

						/* Меню */
						{
							elem: 'section',
							attrs: {
								'id': 'menu'
							},
							content: [
								{
									block: 'text',
									mods: { size: 'xxl', weight: 'bold' },
									mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
									content: 'Меню'
								},
								{
									block: 'text',
									mods: { size: 'l' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
									content: [
										{
											elem: 'row',
											content: 'Переменные используются для формирования ширины элемента обвязки,'
										},
										{
											elem: 'row',
											content: 'предназначенного для размещения меню.'
										},
									]
								},
								{
									elem: 'subject',
									mix: { block: 'tpl-grid', mods: { ratio: '1-1', 'col-gap': 'two-thirds', 'row-gap': 'two-thirds' }},
									content: [
										{
											block: 'menu',
											content: [
												{
													elem: 'view',
													content: [
														{
															elem: 'menu-image',
															elemMods: { size: 'unfold' },
															content: [
																{
																	block: 'image',
																	attrs: { style: 'display: block' },
																	width: 300,
																	url: '../../assets/i/menu-unfold.svg'
																}
															]
														}
													]
												},
												{
													elem: 'text',
													content: [
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold' },
															content: "--menu-unfold"
														}
													]
												}
											]
										},
										{
											block: 'menu',
											content: [
												{
													elem: 'view',
													content: [
														{
															elem: 'menu-image',
															elemMods: { size: 'fold' },
															content: [
																{
																	block: 'image',
																	attrs: { style: 'display: block' },
																	width: 56,
																	url: '../../assets/i/menu-fold.svg'
																}
															]
														}
													]
												},
												{
													elem: 'text',
													content: [
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold' },
															content: "--menu-fold"
														}
													]
												}
											]
										}
									]
								}
							]
						},
						/* /Меню */

						/* Шрифт */
						{
							elem: 'section',
							attrs: {
								'id': 'font'
							},
							content: [
								{
									block: 'text',
									mods: { size: 'xxl', weight: 'bold' },
									mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
									content: 'Шрифт'
								},
								{
									block: 'text',
									mods: { size: 'l' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
									content: 'Переменные используются для обозначения шрифта у текстовых блоков.'
								},
								{
									block: 'fonts',
									mix: { block: 'tpl-grid', mods: { ratio: '1-1', 'col-gap': 'two-thirds' } },
									content: [
										{
											elem: 'item-wrapper',
											content: [
												{
													elem: 'item',
													elemMods: { view: 'museo' },
													content: [
														{
															block: 'pt-icon-plus',
															mix: { block: 'theme', mods: { color: 'whitepaper-inverse' } },
															mods: { 'vertical-align': 'center' },
															content: [
																{
																	elem: 'icon',
																	elemMods: { 'indent-r': 'l'},
																	content: {
																		block: 'image',
																		url: ''
																	}
																},
																{
																	elem: 'block',
																	content: {
																		block: 'text',
																		mods: { view: 'primary', size: 'xxxxl', weight: 'bold' },
																		content: 'Museo'
																	}
																}
															]
														}
													]
												},
												{
													block: 'text',
													mix: { block: 'decorator', mods: { 'indent-t': 's' } },
													mods: { size: 'm', view: 'primary', weight: 'bold' },
													content: "font: 'Museo'"
												}
											]
										},
										{
											elem: 'item-wrapper',
											content: [
												{
													elem: 'item',
													elemMods: { view: 'plex' },
													content: [
														{
															block: 'pt-icon-plus',
															mix: { block: 'theme', mods: { color: 'whitepaper-inverse' } },
															mods: { 'vertical-align': 'center' },
															content: [
																{
																	elem: 'icon',
																	elemMods: { 'indent-r': 'l'},
																	content: {
																		block: 'image',
																		url: '../../../../assets/i/ibm-logo.svg'
																	}
																},
																{
																	elem: 'block',
																	content: {
																		block: 'text',
																		mods: { size: 'xxxxl', view: 'primary', weight: 'bold', },
																		content: 'Plex'
																	}
																}
															]
														}
													]
												},
												{
													block: 'text',
													mix: { block: 'decorator', mods: { 'indent-t': 's' } },
													mods: { size: 'm', view: 'primary', weight: 'bold' },
													content: "font: 'ibm'"
												}
											]
										}
									]
								}
							]
						}
						/* /Шрифт */
					]
				},
				/* /Content */

				/* Footer */
				{
					block: 'footer',
				}
				/* /Footer */

			]
		}
	]
};
