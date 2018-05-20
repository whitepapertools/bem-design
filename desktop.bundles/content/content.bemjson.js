module.exports = {
	block: 'page',
	title: 'Контент',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'content.min.css' },
		{ elem: 'css', url: '/assets/bem-grid/bem-grid-l.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' }
	],
	scripts: [{ elem: 'js', url: 'content.min.js' }],
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
							content: 'Контент'
						},

						/* Типографика */
						{
							elem: 'section',
							mix: { block: 'decorator', mods: { 'space-t': 'xxxxl' }},
							attrs: {
								'id': 'text'
							},
							content: [
								{
									block: 'text',
									mods: { size: 'xxl', weight: 'bold' },
									mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
									content: 'Типографика'
								},
								{
									block: 'text',
									mods: { size: 'l' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
									content: [
										{
											elem: 'row',
											content: 'Для легкой манипуляции внешним видом любой текст в интерфейсе выводится'
										},
										{
											elem: 'row',
											content: 'в { block: \'text\' }'
										}
									]
								},
								{
									elem: 'row',
									mix: [
										{ block: 'tpl-grid', mods: { ratio: '1-1-1', 'col-gap': 'two-thirds', 'row-gap': 'two-thirds' }},
										{ block: 'decorator', mods: { 'indent-b': 'xxxxl' }}
									],
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
												content: "mods: { size: 'xxxl' }"
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
												content: " mods: { size: 'xxl' } "
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
												content: " mods: { size: 'xl' } "
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
												content: "mods: { size: 'l' }"
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
												content: "mods: { size: 'm' }"
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
												content: "mods: { size: 's' }"
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
												content: "mods: { size: 'xs' }"
											}]
										}
									]
								},
								{
									elem: 'row',
									mix: [
										{ block: 'tpl-grid', mods: { ratio: '1-1-1', 'col-gap': 'half', 'row-gap': 'half' }},
										{ block: 'decorator', mods: { 'indent-b': 'xxxxl' }}
									],
									content: [
										{
											block: 'typography',
											content: [
											{
												elem: 'view',
												content: [
												{
													block: 'text',
													mods: { size: 'xxxl', view: 'primary' },
													content: 'Typography'
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', weight: 'bold' },
												content: " mods: { view: 'primary' } "
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
													mods: { size: 'xxxl', view: 'promo' },
													content: 'Typography'
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', weight: 'bold' },
												content: " mods: { view: 'promo' } "
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
													mods: { size: 'xxxl', view: 'secondary' },
													content: 'Typography'
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', weight: 'bold' },
												content: " mods: { view: 'secondary' } "
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
													mods: { size: 'xxxl', view: 'ghost' },
													content: 'Typography'
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', weight: 'bold' },
												content: " mods: { view: 'ghost' } "
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
													mods: { size: 'xxxl', view: 'disable' },
													content: 'Typography'
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', weight: 'bold' },
												content: " mods: { view: 'disable' }"
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
													mods: { size: 'xxxl', view: 'link' },
													content: 'Typography'
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', weight: 'bold' },
												content: " mods: { view: 'link' }"
											}]
										}

									]
								},
								{
									elem: 'row',
									mix: [
										{ block: 'tpl-grid', mods: { ratio: '1-1-1', 'col-gap': 'half', 'row-gap': 'half' }},
										{ block: 'decorator', mods: { 'indent-b': 'xxxxl' }}
									],
									content: [
										{
											block: 'typography',
											content: [
											{
												elem: 'view',
												content: [
												{
													block: 'text',
													mods: { size: 'xxxl', weight: 'bold' },
													content: 'Typography'
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', weight: 'bold' },
												content: " mods: { weight: 'bold' } "
											}]
										}
									]
								},
								{
									elem: 'row',
									mix: [
										{ block: 'tpl-grid', mods: { ratio: '1-1-1', 'col-gap': 'half', 'row-gap': 'half' }},
										{ block: 'decorator', mods: { 'indent-b': 'xxxxl' }}
									],
									content: [
										{
											block: 'typography',
											content: [
											{
												elem: 'view',
												content: [
												{
													block: 'text',
													mods: { size: 'xxxl', transform: 'uppercase' },
													content: 'Typography'
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', weight: 'bold' },
												content: " mods: { transform: 'uppercase' } "
											}]
										}
									]
								},
								{
									elem: 'row',
									mix: [
										{ block: 'tpl-grid', mods: { ratio: '1-1-1', 'col-gap': 'half', 'row-gap': 'half' }},
										{ block: 'decorator', mods: { 'indent-b': 'xxxxl' }}
									],
									content: [
										{
											block: 'typography',
											content: [
											{
												elem: 'view',
												content: [
												{
													block: 'text',
													mods: { size: 'xxxl', transform: 'uppercase', spacing: 's' },
													content: 'Typography'
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', weight: 'bold' },
												content: " mods: { spacing: 's' } "
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
													mods: { size: 'xxxl', transform: 'uppercase', spacing: 'm' },
													content: 'Typography'
												}]
											},
											{
												block: 'text',
												mods: { size: 'm', weight: 'bold' },
												content: " mods: { spacing: 'm' } "
											}]
										}
									]
								},
								{
									elem: 'row',
									mix: { block: 'tpl-grid', mods: { ratio: '1-1-1', 'col-gap': 'half', 'row-gap': 'half' }},
									content: [
										{
											elem: 'col',
											elemMods: { sw: 4 },
											content: [
											{
												block: 'typography',
												content: [
												{
													elem: 'view',
													content: [
													{
														block: 'text',
														mods: { size: 'xxxl', style: 'italic' },
														content: 'Typography'
													}]
												},
												{
													block: 'text',
													mods: { size: 'm', weight: 'bold' },
													content: " mods: { style: 'italic' } "
												}]
											}]
										}

									]
								}
							]
						},
						/* /Типографика */

						/* Векторы */
						// {
						// 	elem: 'section',
						// 	attrs: {
						// 		'id': 'vector'
						// 	},
						// 	content: [
						// 		{
						// 			block: 'text',
						// 			mods: { size: 'xxl', weight: 'bold', font: 'sans' },
						// 			mix: { block: 'decorator', mods: { 'indent-b': 'xxl' }},
						// 			content: 'Векторы'
						// 		},
						// 		{
						// 			elem: 'row',
						// 			mix: { block: 'tpl-grid', mods: { ratio: '1-1-1', 'col-gap': 'half', 'row-gap': 'half' }},
						// 			content: [
						// 				{
						// 					block: 'pt-icon-plus',
						// 					mods: { 'vertical-align': 'center' },
						// 					content: [
						// 						{
						// 							elem: 'icon',
						// 							elemMods: { 'indent-r': 'm' },
						// 							content: [
						// 								{
						// 									block: 'vector',
						// 									mods: { '1': 'm-primary-action'}
						// 								}
						// 							]
						// 						},
						// 						{
						// 							elem: 'block',
						// 							content: [
						// 								{
						// 									block: 'text',
						// 									mods: { size: 'm', view: 'primary' },
						// 									content: 'Название'
						// 								},
						// 								{
						// 									block: 'text',
						// 									mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
						// 									content: 'mods: { 1: \'m-primary\' }'
						// 								}
						// 							]
						// 						}
						// 					]
						// 				},
						// 				{
						// 					block: 'pt-icon-plus',
						// 					mods: { 'vertical-align': 'center' },
						// 					content: [
						// 						{
						// 							elem: 'icon',
						// 							elemMods: { 'indent-r': 'm' },
						// 							content: [
						// 								{
						// 									block: 'vector',
						// 									mods: { '2': 'm-primary-action'}
						// 								}
						// 							]
						// 						},
						// 						{
						// 							elem: 'block',
						// 							content: [
						// 								{
						// 									block: 'text',
						// 									mods: { size: 'm', view: 'primary' },
						// 									content: 'Название'
						// 								},
						// 								{
						// 									block: 'text',
						// 									mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
						// 									content: 'mods: { 1: \'m-primary\' }'
						// 								}
						// 							]
						// 						}
						// 					]
						// 				},
						// 				{
						// 					block: 'pt-icon-plus',
						// 					mods: { 'vertical-align': 'center' },
						// 					content: [
						// 						{
						// 							elem: 'icon',
						// 							elemMods: { 'indent-r': 'm' },
						// 							content: [
						// 								{
						// 									block: 'vector',
						// 									mods: { '3': 'm-primary-action'}
						// 								}
						// 							]
						// 						},
						// 						{
						// 							elem: 'block',
						// 							content: [
						// 								{
						// 									block: 'text',
						// 									mods: { size: 'm', view: 'primary' },
						// 									content: 'Название'
						// 								},
						// 								{
						// 									block: 'text',
						// 									mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
						// 									content: 'mods: { 1: \'m-primary\' }'
						// 								}
						// 							]
						// 						}
						// 					]
						// 				},
						// 				{
						// 					block: 'pt-icon-plus',
						// 					mods: { 'vertical-align': 'center' },
						// 					content: [
						// 						{
						// 							elem: 'icon',
						// 							elemMods: { 'indent-r': 'm' },
						// 							content: [
						// 								{
						// 									block: 'vector',
						// 									mods: { '4': 'm-primary-action'}
						// 								}
						// 							]
						// 						},
						// 						{
						// 							elem: 'block',
						// 							content: [
						// 								{
						// 									block: 'text',
						// 									mods: { size: 'm', view: 'primary' },
						// 									content: 'Название'
						// 								},
						// 								{
						// 									block: 'text',
						// 									mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
						// 									content: 'mods: { 4: \'m-primary\' }'
						// 								}
						// 							]
						// 						}
						// 					]
						// 				},
						// 				{
						// 					block: 'pt-icon-plus',
						// 					mods: { 'vertical-align': 'center' },
						// 					content: [
						// 						{
						// 							elem: 'icon',
						// 							elemMods: { 'indent-r': 'm' },
						// 							content: [
						// 								{
						// 									block: 'vector',
						// 									mods: { '5': 'm-primary-action'}
						// 								}
						// 							]
						// 						},
						// 						{
						// 							elem: 'block',
						// 							content: [
						// 								{
						// 									block: 'text',
						// 									mods: { size: 'm', view: 'primary' },
						// 									content: 'Название'
						// 								},
						// 								{
						// 									block: 'text',
						// 									mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
						// 									content: 'mods: { 5: \'m-primary\' }'
						// 								}
						// 							]
						// 						}
						// 					]
						// 				},
						// 				{
						// 					block: 'pt-icon-plus',
						// 					mods: { 'vertical-align': 'center' },
						// 					content: [
						// 						{
						// 							elem: 'icon',
						// 							elemMods: { 'indent-r': 'm' },
						// 							content: [
						// 								{
						// 									block: 'vector',
						// 									mods: { '6': 'm-primary-action'}
						// 								}
						// 							]
						// 						},
						// 						{
						// 							elem: 'block',
						// 							content: [
						// 								{
						// 									block: 'text',
						// 									mods: { size: 'm', view: 'primary' },
						// 									content: 'Название'
						// 								},
						// 								{
						// 									block: 'text',
						// 									mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
						// 									content: 'mods: { 6: \'m-primary\' }'
						// 								}
						// 							]
						// 						}
						// 					]
						// 				},
						// 				{
						// 					block: 'pt-icon-plus',
						// 					mods: { 'vertical-align': 'center' },
						// 					content: [
						// 						{
						// 							elem: 'icon',
						// 							elemMods: { 'indent-r': 'm' },
						// 							content: [
						// 								{
						// 									block: 'vector',
						// 									mods: { '7': 'm-primary-action'}
						// 								}
						// 							]
						// 						},
						// 						{
						// 							elem: 'block',
						// 							content: [
						// 								{
						// 									block: 'text',
						// 									mods: { size: 'm', view: 'primary' },
						// 									content: 'Название'
						// 								},
						// 								{
						// 									block: 'text',
						// 									mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
						// 									content: 'mods: { 7: \'m-primary\' }'
						// 								}
						// 							]
						// 						}
						// 					]
						// 				},
						// 				{
						// 					block: 'pt-icon-plus',
						// 					mods: { 'vertical-align': 'center' },
						// 					content: [
						// 						{
						// 							elem: 'icon',
						// 							elemMods: { 'indent-r': 'm' },
						// 							content: [
						// 								{
						// 									block: 'vector',
						// 									mods: { '8': 'm-primary-action'}
						// 								}
						// 							]
						// 						},
						// 						{
						// 							elem: 'block',
						// 							content: [
						// 								{
						// 									block: 'text',
						// 									mods: { size: 'm', view: 'primary' },
						// 									content: 'Название'
						// 								},
						// 								{
						// 									block: 'text',
						// 									mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
						// 									content: 'mods: { 8: \'m-primary\' }'
						// 								}
						// 							]
						// 						}
						// 					]
						// 				},
						// 				{
						// 					block: 'pt-icon-plus',
						// 					mods: { 'vertical-align': 'center' },
						// 					content: [
						// 						{
						// 							elem: 'icon',
						// 							elemMods: { 'indent-r': 'm' },
						// 							content: [
						// 								{
						// 									block: 'vector',
						// 									mods: { '9': 'm-primary-action'}
						// 								}
						// 							]
						// 						},
						// 						{
						// 							elem: 'block',
						// 							content: [
						// 								{
						// 									block: 'text',
						// 									mods: { size: 'm', view: 'primary' },
						// 									content: 'Название'
						// 								},
						// 								{
						// 									block: 'text',
						// 									mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
						// 									content: 'mods: { 9: \'m-primary\' }'
						// 								}
						// 							]
						// 						}
						// 					]
						// 				},
						// 				{
						// 					block: 'pt-icon-plus',
						// 					mods: { 'vertical-align': 'center' },
						// 					content: [
						// 						{
						// 							elem: 'icon',
						// 							elemMods: { 'indent-r': 'm' },
						// 							content: [
						// 								{
						// 									block: 'vector',
						// 									mods: { '10': 'm-primary-action'}
						// 								}
						// 							]
						// 						},
						// 						{
						// 							elem: 'block',
						// 							content: [
						// 								{
						// 									block: 'text',
						// 									mods: { size: 'm', view: 'primary' },
						// 									content: 'Название'
						// 								},
						// 								{
						// 									block: 'text',
						// 									mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
						// 									content: 'mods: { 10: \'m-primary\' }'
						// 								}
						// 							]
						// 						}
						// 					]
						// 				},
						// 				{
						// 					block: 'pt-icon-plus',
						// 					mods: { 'vertical-align': 'center' },
						// 					content: [
						// 						{
						// 							elem: 'icon',
						// 							elemMods: { 'indent-r': 'm' },
						// 							content: [
						// 								{
						// 									block: 'vector',
						// 									mods: { '11': 'm-primary-action'}
						// 								}
						// 							]
						// 						},
						// 						{
						// 							elem: 'block',
						// 							content: [
						// 								{
						// 									block: 'text',
						// 									mods: { size: 'm', view: 'primary' },
						// 									content: 'Название'
						// 								},
						// 								{
						// 									block: 'text',
						// 									mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
						// 									content: 'mods: { 11: \'m-primary\' }'
						// 								}
						// 							]
						// 						}
						// 					]
						// 				},
						// 				{
						// 					block: 'pt-icon-plus',
						// 					mods: { 'vertical-align': 'center' },
						// 					content: [
						// 						{
						// 							elem: 'icon',
						// 							elemMods: { 'indent-r': 'm' },
						// 							content: [
						// 								{
						// 									block: 'vector',
						// 									mods: { '12': 'm-primary-action'}
						// 								}
						// 							]
						// 						},
						// 						{
						// 							elem: 'block',
						// 							content: [
						// 								{
						// 									block: 'text',
						// 									mods: { size: 'm', view: 'primary' },
						// 									content: 'Название'
						// 								},
						// 								{
						// 									block: 'text',
						// 									mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
						// 									content: 'mods: { 12: \'m-primary\' }'
						// 								}
						// 							]
						// 						}
						// 					]
						// 				},
						// 				{
						// 					block: 'pt-icon-plus',
						// 					mods: { 'vertical-align': 'center' },
						// 					content: [
						// 						{
						// 							elem: 'icon',
						// 							elemMods: { 'indent-r': 'm' },
						// 							content: [
						// 								{
						// 									block: 'vector',
						// 									mods: { '13': 'm-primary-action'}
						// 								}
						// 							]
						// 						},
						// 						{
						// 							elem: 'block',
						// 							content: [
						// 								{
						// 									block: 'text',
						// 									mods: { size: 'm', view: 'primary' },
						// 									content: 'Название'
						// 								},
						// 								{
						// 									block: 'text',
						// 									mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
						// 									content: 'mods: { 13: \'m-primary\' }'
						// 								}
						// 							]
						// 						}
						// 					]
						// 				},
						// 				{
						// 					block: 'pt-icon-plus',
						// 					mods: { 'vertical-align': 'center' },
						// 					content: [
						// 						{
						// 							elem: 'icon',
						// 							elemMods: { 'indent-r': 'm' },
						// 							content: [
						// 								{
						// 									block: 'vector',
						// 									mods: { '14': 'm-primary-action'}
						// 								}
						// 							]
						// 						},
						// 						{
						// 							elem: 'block',
						// 							content: [
						// 								{
						// 									block: 'text',
						// 									mods: { size: 'm', view: 'primary' },
						// 									content: 'Название'
						// 								},
						// 								{
						// 									block: 'text',
						// 									mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
						// 									content: 'mods: { 14: \'m-primary\' }'
						// 								}
						// 							]
						// 						}
						// 					]
						// 				},
						// 				{
						// 					block: 'pt-icon-plus',
						// 					mods: { 'vertical-align': 'center' },
						// 					content: [
						// 						{
						// 							elem: 'icon',
						// 							elemMods: { 'indent-r': 'm' },
						// 							content: [
						// 								{
						// 									block: 'vector',
						// 									mods: { '15': 'm-primary-action'}
						// 								}
						// 							]
						// 						},
						// 						{
						// 							elem: 'block',
						// 							content: [
						// 								{
						// 									block: 'text',
						// 									mods: { size: 'm', view: 'primary' },
						// 									content: 'Название'
						// 								},
						// 								{
						// 									block: 'text',
						// 									mods: { size: 'm', view: 'primary', weight: 'bold', align: 'center' },
						// 									content: 'mods: { 15: \'m-primary\' }'
						// 								}
						// 							]
						// 						}
						// 					]
						// 				}
						// 			]
						// 		}
						// 	]
						// },
						/* /Векторы */

						/* Логотипы */
						{
							elem: 'section',
							attrs: {
								'id': 'brand-logo'
							},
							content: [
								{
									block: 'text',
									mods: { size: 'xxl', weight: 'bold' },
									mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
									content: 'Логотипы'
								},
								{
									block: 'text',
									mods: { size: 'l' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
									content: [
										{
											elem: 'row',
											content: 'Для отображения упрощенной версии логотипа используется { block: \'brand-logo\' }'
										}
									]
								},
								{
									elem: 'row',
									mix: { block: 'tpl-grid', mods: { ratio: '1-1-1', 'col-gap': 'two-thirds', 'row-gap': 'two-thirds' }},
									content: [
										{
											block: 'pt-icon-plus',
											mods: { 'vertical-align': 'center' },
											content: [
												{
													elem: 'icon',
													elemMods: { 'indent-r': 'm' },
													content: [
														{
															block: 'brand-logo',
															mods: { name: 'itunes', size: 'l'},
														}
													]
												},
												{
													elem: 'block',
													content: [
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
														}
													]
												}
											]
										},
										{
											block: 'pt-icon-plus',
											mods: { 'vertical-align': 'center' },
											content: [
												{
													elem: 'icon',
													elemMods: { 'indent-r': 'm' },
													content: [
														{
															block: 'brand-logo',
															mods: { name: 'steam', size: 'l'},
														}
													]
												},
												{
													elem: 'block',
													content: [
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
														}
													]
												}
											]
										},
										{
											block: 'pt-icon-plus',
											mods: { 'vertical-align': 'center' },
											content: [
												{
													elem: 'icon',
													elemMods: { 'indent-r': 'm' },
													content: [
														{
															block: 'brand-logo',
															mods: { name: 'skype', size: 'l'}
														}
													]
												},
												{
													elem: 'block',
													content: [
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
														}
													]
												}
											]
										},
										{
											block: 'pt-icon-plus',
											mods: { 'vertical-align': 'center' },
											content: [
												{
													elem: 'icon',
													elemMods: { 'indent-r': 'm' },
													content: [
														{
															block: 'brand-logo',
															mods: { name: 'forgame', size: 'l'},
														}
													]
												},
												{
													elem: 'block',
													content: [
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
														}
													]
												}
											]
										},
										{
											block: 'pt-icon-plus',
											mods: { 'vertical-align': 'center' },
											content: [
												{
													elem: 'icon',
													elemMods: { 'indent-r': 'm' },
													content: [
														{
															block: 'brand-logo',
															mods: { name: 'warthunder', size: 'l'},
														}
													]
												},
												{
													elem: 'block',
													content: [
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
														}
													]
												}
											]
										},
										{
											block: 'pt-icon-plus',
											mods: { 'vertical-align': 'center' },
											content: [
												{
													elem: 'icon',
													elemMods: { 'indent-r': 'm' },
													content: [
														{
															block: 'brand-logo',
															mods: { name: 'warface', size: 'l'},
														}
													]
												},
												{
													elem: 'block',
													content: [
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
														}
													]
												}
											]
										},
										{
											block: 'pt-icon-plus',
											mods: { 'vertical-align': 'center' },
											content: [
												{
													elem: 'icon',
													elemMods: { 'indent-r': 'm' },
													content: [
														{
															block: 'brand-logo',
															mods: { name: 'wargaming', size: 'l'}
														}
													]
												},
												{
													elem: 'block',
													content: [
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
														}
													]
												}
											]
										},
										{
											block: 'pt-icon-plus',
											mods: { 'vertical-align': 'center' },
											content: [
												{
													elem: 'icon',
													elemMods: { 'indent-r': 'm' },
													content: [
														{
															block: 'brand-logo',
															mods: { name: 'blizzard', size: 'l'}
														}
													]
												},
												{
													elem: 'block',
													content: [
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
														}
													]
												}
											]
										},
										{
											block: 'pt-icon-plus',
											mods: { 'vertical-align': 'center' },
											content: [
												{
													elem: 'icon',
													elemMods: { 'indent-r': 'm' },
													content: [
														{
															block: 'brand-logo',
															mods: { name: 'yota', size: 'l'},
															mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
														}
													]
												},
												{
													elem: 'block',
													content: [
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
														}
													]
												}
											]
										},
										{
											block: 'pt-icon-plus',
											mods: { 'vertical-align': 'center' },
											content: [
												{
													elem: 'icon',
													elemMods: { 'indent-r': 'm' },
													content: [
														{
															block: 'brand-logo',
															mods: { name: 'tele2', size: 'l'}
														}
													]
												},
												{
													elem: 'block',
													content: [
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
														}
													]
												}
											]
										},
										{
											block: 'pt-icon-plus',
											mods: { 'vertical-align': 'center' },
											content: [
												{
													elem: 'icon',
													elemMods: { 'indent-r': 'm' },
													content: [
														{
															block: 'brand-logo',
															mods: { name: 'beeline', size: 'l'},
															mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
														}
													]
												},
												{
													elem: 'block',
													content: [
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
														}
													]
												}
											]
										},
										{
											block: 'pt-icon-plus',
											mods: { 'vertical-align': 'center' },
											content: [
												{
													elem: 'icon',
													elemMods: { 'indent-r': 'm' },
													content: [
														{
															block: 'brand-logo',
															mods: { name: 'megafon', size: 'l'},
														}
													]
												},
												{
													elem: 'block',
													content: [
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
														}
													]
												}
											]
										},

										// {
										// 	block: 'pt-icon-plus',
										// 	mods: { 'vertical-align': 'center' },
										// 	content: [
										// 		{
										// 			elem: 'icon',
										// 			elemMods: { 'indent-r': 'm' },
										// 			content: [
										// 				{
										// 					block: 'brand-logo',
										// 					mods: { name: 'mts', size: 'l'},
										// 				}
										// 			]
										// 		},
										// 		{
										// 			elem: 'block',
										// 			content: [
										// 				{
										// 					block: 'text',
										// 					mods: { size: 'm', view: 'primary' },
										// 					content: 'МТС'
										// 				},
										// 				{
										// 					block: 'text',
										// 					mods: { size: 'm', view: 'link'},
										// 					mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
										// 					attrs: {
										// 						href: 'http://www.mts.ru'
										// 					},
										// 					content: 'http://www.mts.ru'
										// 				},
										// 				{
										// 					block: 'text',
										// 					mods: { size: 'm', weight: 'bold' },
										// 					content: "mods: { name: 'mts' }"
										// 				}
										// 			]
										// 		}
										// 	]
										// },
										// {
										// 	block: 'pt-icon-plus',
										// 	mods: { 'vertical-align': 'center' },
										// 	content: [
										// 		{
										// 			elem: 'icon',
										// 			elemMods: { 'indent-r': 'm' },
										// 			content: [
										// 				{
										// 					block: 'brand-logo',
										// 					mods: { name: 'kcell', size: 'l'},
										// 					mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
										// 				}
										// 			]
										// 		},
										// 		{
										// 			elem: 'block',
										// 			content: [
										// 				{
										// 					block: 'text',
										// 					mods: { size: 'm', view: 'primary' },
										// 					content: 'Kcell'
										// 				},
										// 				{
										// 					block: 'text',
										// 					mods: { size: 'm', view: 'link'},
										// 					mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
										// 					attrs: {
										// 						href: 'https://www.kcell.kz/ru'
										// 					},
										// 					content: 'https://www.kcell.kz/ru'
										// 				},
										// 				{
										// 					block: 'text',
										// 					mods: { size: 'm', weight: 'bold' },
										// 					content: "mods: { name: 'kcell' }"
										// 				}
										// 			]
										// 		}
										// 	]
										// },
										// {
										// 	block: 'pt-icon-plus',
										// 	mods: { 'vertical-align': 'center' },
										// 	content: [
										// 		{
										// 			elem: 'icon',
										// 			elemMods: { 'indent-r': 'm' },
										// 			content: [
										// 				{
										// 					block: 'brand-logo',
										// 					mods: { name: 'activ', size: 'l'},
										// 				}
										// 			]
										// 		},
										// 		{
										// 			elem: 'block',
										// 			content: [
										// 				{
										// 					block: 'text',
										// 					mods: { size: 'm', view: 'primary' },
										// 					content: 'Activ'
										// 				},
										// 				{
										// 					block: 'text',
										// 					mods: { size: 'm', view: 'link'},
										// 					mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
										// 					attrs: {
										// 						href: 'https://activ.kz'
										// 					},
										// 					content: 'https://activ.kz'
										// 				},
										// 				{
										// 					block: 'text',
										// 					mods: { size: 'm', weight: 'bold' },
										// 					content: "mods: { name: 'activ' }"
										// 				}
										// 			]
										// 		}
										// 	]
										// },
										// {
										// 	block: 'pt-icon-plus',
										// 	mods: { 'vertical-align': 'center' },
										// 	content: [
										// 		{
										// 			elem: 'icon',
										// 			elemMods: { 'indent-r': 'm' },
										// 			content: [
										// 				{
										// 					block: 'brand-logo',
										// 					mods: { name: 'ok', size: 'l'}
										// 				}
										// 			]
										// 		},
										// 		{
										// 			elem: 'block',
										// 			content: [
										// 				{
										// 					block: 'text',
										// 					mods: { size: 'm', view: 'primary' },
										// 					content: 'Одноклассники'
										// 				},
										// 				{
										// 					block: 'text',
										// 					mods: { size: 'm', view: 'link'},
										// 					mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
										// 					attrs: {
										// 						href: 'https://ok.ru'
										// 					},
										// 					content: 'https://ok.ru'
										// 				},
										// 				{
										// 					block: 'text',
										// 					mods: { size: 'm', weight: 'bold' },
										// 					content: "mods: { name: 'ok' }"
										// 				}
										// 			]
										// 		}
										// 	]
										// },
										// {
										// 	block: 'pt-icon-plus',
										// 	mods: { 'vertical-align': 'center' },
										// 	content: [
										// 		{
										// 			elem: 'icon',
										// 			elemMods: { 'indent-r': 'm' },
										// 			content: [
										// 				{
										// 					block: 'brand-logo',
										// 					mods: { name: 'vk', size: 'l'}
										// 				}
										// 			]
										// 		},
										// 		{
										// 			elem: 'block',
										// 			content: [
										// 				{
										// 					block: 'text',
										// 					mods: { size: 'm', view: 'primary' },
										// 					content: 'Вконтакте'
										// 				},
										// 				{
										// 					block: 'text',
										// 					mods: { size: 'm', view: 'link'},
										// 					mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
										// 					attrs: {
										// 						href: 'https://vk.com'
										// 					},
										// 					content: 'https://vk.com'
										// 				},
										// 				{
										// 					block: 'text',
										// 					mods: { size: 'm', weight: 'bold' },
										// 					content: "mods: { name: 'vk' }"
										// 				}
										// 			]
										// 		}
										// 	]
										// },
										// {
										// 	block: 'pt-icon-plus',
										// 	mods: { 'vertical-align': 'center' },
										// 	content: [
										// 		{
										// 			elem: 'icon',
										// 			elemMods: { 'indent-r': 'm' },
										// 			content: [
										// 				{
										// 					block: 'brand-logo',
										// 					mods: { name: 'regru', size: 'l'},
										// 				}
										// 			]
										// 		},
										// 		{
										// 			elem: 'block',
										// 			content: [
										// 				{
										// 					block: 'text',
										// 					mods: { size: 'm', view: 'primary' },
										// 					content: 'Reg.ru'
										// 				},
										// 				{
										// 					block: 'text',
										// 					mods: { size: 'm', view: 'link'},
										// 					mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
										// 					attrs: {
										// 						href: 'https://www.reg.ru'
										// 					},
										// 					content: 'https://www.reg.ru'
										// 				},
										// 				{
										// 					block: 'text',
										// 					mods: { size: 'm', weight: 'bold' },
										// 					content: "mods: { name: 'regru' }"
										// 				}
										// 			]
										// 		}
										// 	]
										// },
										// {
										// 	block: 'pt-icon-plus',
										// 	mods: { 'vertical-align': 'center' },
										// 	content: [
										// 		{
										// 			elem: 'icon',
										// 			elemMods: { 'indent-r': 'm' },
										// 			content: [
										// 				{
										// 					block: 'brand-logo',
										// 					mods: { name: 'ru-center', size: 'l'},
										// 				}
										// 			]
										// 		},
										// 		{
										// 			elem: 'block',
										// 			content: [
										// 				{
										// 					block: 'text',
										// 					mods: { size: 'm', view: 'primary' },
										// 					content: 'Ru-Center'
										// 				},
										// 				{
										// 					block: 'text',
										// 					mods: { size: 'm', view: 'link'},
										// 					mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
										// 					attrs: {
										// 						href: 'https://www.nic.ru'
										// 					},
										// 					content: 'https://www.nic.ru'
										// 				},
										// 				{
										// 					block: 'text',
										// 					mods: { size: 'm', weight: 'bold' },
										// 					content: "mods: { name: 'ru-center' }"
										// 				}
										// 			]
										// 		}
										// 	]
										// },
										// {
										// 	block: 'pt-icon-plus',
										// 	mods: { 'vertical-align': 'center' },
										// 	content: [
										// 		{
										// 			elem: 'icon',
										// 			elemMods: { 'indent-r': 'm' },
										// 			content: [
										// 				{
										// 					block: 'brand-logo',
										// 					mods: { name: 'no-logo', size: 'l'},
										// 					mix: { block: 'decorator', mods: { 'space-b': 'xs'} }
										// 				}
										// 			]
										// 		},
										// 		{
										// 			elem: 'block',
										// 			content: [
										// 				{
										// 					block: 'text',
										// 					mods: { size: 'm', view: 'primary' },
										// 					content: 'Нет логотипа'
										// 				},
										// 				{
										// 					block: 'text',
										// 					mods: { size: 'm', view: 'link'},
										// 					mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
										// 					content: 'нет адреса'
										// 				},
										// 				{
										// 					block: 'text',
										// 					mods: { size: 'm', weight: 'bold' },
										// 					content: "mods: { name: 'no-logo' }"
										// 				}
										// 			]
										// 		}
										// 	]
										// }
									]
								}
							]
						},
						/* Логотипы */

						/* Иконки */
						{
							elem: 'section',
							attrs: {
								'id': 'icon'
							},
							content: [
								{
									block: 'text',
									mods: { size: 'xxl', weight: 'bold' },
									mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
									content: 'Иконки'
								},
								{
									block: 'text',
									mods: { size: 'l' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
									content: [
										{
											elem: 'row',
											content: 'Для отображения иконок используется { block: \'icon\' }.'
										}
									]
								},
								{
									block: 'icon-list',
									mix: { block: 'tpl-grid', mods: { 'col-gap': 'two-thirds', 'row-gap': 'two-thirds', ratio: '1-1-1-1' }},
									content: [
										{
											block: 'icon-item',
											name: 'add-user'
										},
										{
											block: 'icon-item',
											name: 'bug'
										},
										{
											block: 'icon-item',
											name: 'filter'
										},
										{
											block: 'icon-item',
											name: 'trash'
										},
										{
											block: 'icon-item',
											name: 'phone-1'
										},
										{
											block: 'icon-item',
											name: 'photo'
										},
										{
											block: 'icon-item',
											name: 'picture'
										},
										{
											block: 'icon-item',
											name: 'search'
										}
									]
								}
							]
						},
						/* Иконки */

						/* Аватарки */
						{
							elem: 'section',
							attrs: {
								'id': 'avatar'
							},
							content: [
								{
									block: 'text',
									mods: { size: 'xxl', weight: 'bold' },
									mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
									content: 'Аватарки'
								},
								{
									block: 'text',
									mods: { size: 'l' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
									content: [
										{
											elem: 'row',
											content: 'Для отображения фотографий пользователей используется { block: \'avatar\' }, сами'
										},
										{
											elem: 'row',
											content: 'фотографии размещаются в { elem: \'photo\' }'
										}
									]
								},
								{
									elem: 'row',
									mix: { block: 'tpl-grid', mods: { ratio: '1-1-1', 'col-gap': 'full' }},
									content: [
										{
											block: 'pt-icon-plus',
											mods: { 'vertical-align': 'center' },
											content: [
												{
													elem: 'icon',
													elemMods: { 'indent-r': 'm' },
													content: [
														{
															block: 'avatar',
															content: [
																{
																	elem: 'photo',
																	elemMods: { size: 'l' }
																}
															]
														}
													]
												},
												{
													elem: 'block',
													content: [
														{
															block: 'text',
															mods: { size: 'm', view: 'primary' },
															mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
															content: "Крупный аватар"
														},
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold' },
															content: "elemMods: { size: 'l' }"
														}
													]
												}
											]
										},
										{
											block: 'pt-icon-plus',
											mods: { 'vertical-align': 'center' },
											content: [
												{
													elem: 'icon',
													elemMods: { 'indent-r': 'm' },
													content: [
														{
															block: 'avatar',
															content: [
																{
																	elem: 'photo',
																	elemMods: { size: 'm' }
																}
															]
														}
													]
												},
												{
													elem: 'block',
													content: [
														{
															block: 'text',
															mods: { size: 'm', view: 'primary' },
															mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
															content: "Стандартный аватар"
														},
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold' },
															content: "elemMods: { size: 'm' }"
														}
													]
												}
											]
										},
										{
											block: 'pt-icon-plus',
											mods: { 'vertical-align': 'center' },
											content: [
												{
													elem: 'icon',
													elemMods: { 'indent-r': 'm' },
													content: [
														{
															block: 'avatar',
															content: [
																{
																	elem: 'photo',
																	elemMods: { size: 's' }
																}
															]
														}
													]
												},
												{
													elem: 'block',
													content: [
														{
															block: 'text',
															mods: { size: 'm', view: 'primary' },
															mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
															content: "Мелкий аватар"
														},
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold' },
															content: "elemMods: { size: 's' }"
														}
													]
												}
											]
										}
									]
								}
							]
						},
						/* /Аватарки */
						
						/* Бейджи */
						{
							elem: 'section',
							attrs: {
								'id': 'badge'
							},
							content: [
								{
									block: 'text',
									mods: { size: 'xxl', weight: 'bold' },
									mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
									content: 'Бейджи'
								},
								{
									block: 'text',
									mods: { size: 'l' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
									content: [
										{
											elem: 'row',
											content: 'Для отображения статусов используется { block: \'badge\' }'
										}
									]
								},
								{
									elem: 'row',
									mix: { block: 'tpl-grid', mods: { ratio: '1-1-1', 'col-gap': 'two-thirds', 'row-gap': 'two-thirds' }},
									content: [
										{
											block: 'pt-icon-plus',
											mods: { 'vertical-align': 'center' },
											content: [
												{
													elem: 'icon',
													elemMods: { 'indent-r': 'm' },
													content: [
														{
															block: 'badge',
															mods: { view: 'alert' },
															content: 'alert'
														}
													]
												},
												{
													elem: 'block',
													content: [
														{
															block: 'text',
															mods: { size: 'm', view: 'primary' },
															mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
															content: "Алертный"
														},
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold' },
															content: "mods: { view: 'alert' }"
														}
													]
												}
											]
										},
										{
											block: 'pt-icon-plus',
											mods: { 'vertical-align': 'center' },
											content: [
												{
													elem: 'icon',
													elemMods: { 'indent-r': 'm' },
													content: [
														{
															block: 'badge',
															mods: { view: 'warning' },
															content: 'warning'
														}
													]
												},
												{
													elem: 'block',
													content: [
														{
															block: 'text',
															mods: { size: 'm', view: 'primary' },
															mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
															content: "Ворнинг"
														},
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold' },
															content: "mods: { view: 'warning' }"
														}
													]
												}
											]
										},
										{
											block: 'pt-icon-plus',
											mods: { 'vertical-align': 'center' },
											content: [
												{
													elem: 'icon',
													elemMods: { 'indent-r': 'm' },
													content: [
														{
															block: 'badge',
															mods: { view: 'success' },
															content: 'success'
														}
													]
												},
												{
													elem: 'block',
													content: [
														{
															block: 'text',
															mods: { size: 'm', view: 'primary' },
															mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
															content: "Успех"
														},
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold' },
															content: "mods: { view: 'success' }"
														}
													]
												}
											]
										},
										{
											block: 'pt-icon-plus',
											mods: { 'vertical-align': 'center' },
											content: [
												{
													elem: 'icon',
													elemMods: { 'indent-r': 'm' },
													content: [
														{
															block: 'badge',
															mods: { view: 'default' },
															content: 'default'
														}
													]
												},
												{
													elem: 'block',
													content: [
														{
															block: 'text',
															mods: { size: 'm', view: 'primary' },
															mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
															content: "Дефолтный"
														},
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold' },
															content: "mods: { view: 'default' }"
														}
													]
												}
											]
										}
									]
								}
							]
						},
						/* /Бейджи */

						/* Теги */
						{
							elem: 'section',
							attrs: {
								'id': 'tag'
							},
							content: [
								{
									block: 'text',
									mods: { size: 'xxl', weight: 'bold' },
									mix: { block: 'decorator', mods: { 'indent-b': 'm' }},
									content: 'Теги'
								},
								{
									block: 'text',
									mods: { size: 'l' },
									mix: { block: 'decorator', mods: { 'indent-b': 'xxxl' }},
									content: [
										{
											elem: 'row',
											content: 'Для классификации различных сущностей используется { block: \'tag\' }'
										}
									]
								},
								{
									elem: 'row',
									mix: { block: 'tpl-grid', mods: { ratio: '1-1-1', 'col-gap': 'two-thirds', 'row-gap': 'two-thirds' }},
									content: [
										{
											block: 'pt-icon-plus',
											mods: { 'vertical-align': 'center' },
											content: [
												{
													elem: 'icon',
													elemMods: { 'indent-r': 'm' },
													content: [
														{
															block: 'tag',
															mods: { view: 'default', size: 'm' },
															content: 'default'
														}
													]
												},
												{
													elem: 'block',
													content: [
														{
															block: 'text',
															mods: { size: 'm', view: 'primary' },
															mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
															content: "Дефолтный"
														},
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold' },
															content: "mods: { view: 'default' }"
														}
													]
												}
											]
										},
										{
											block: 'pt-icon-plus',
											mods: { 'vertical-align': 'center' },
											content: [
												{
													elem: 'icon',
													elemMods: { 'indent-r': 'm' },
													content: [
														{
															block: 'tag',
															mods: { view: 'disable', size: 'm' },
															content: 'disable'
														}
													]
												},
												{
													elem: 'block',
													content: [
														{
															block: 'text',
															mods: { size: 'm', view: 'primary' },
															mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
															content: "Дизейбл"
														},
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold' },
															content: "mods: { view: 'disable' }"
														}
													]
												}
											]
										},
										{
											block: 'pt-icon-plus',
											mods: { 'vertical-align': 'center' },
											content: [
												{
													elem: 'icon',
													elemMods: { 'indent-r': 'm' },
													content: [
														{
															block: 'tag',
															mods: { view: 'link', size: 'm' },
															content: 'link'
														}
													]
												},
												{
													elem: 'block',
													content: [
														{
															block: 'text',
															mods: { size: 'm', view: 'primary' },
															mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
															content: "Ссылочный"
														},
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold' },
															content: "mods: { view: 'link' }"
														}
													]
												}
											]
										},
										{
											block: 'pt-icon-plus',
											mods: { 'vertical-align': 'center' },
											content: [
												{
													elem: 'icon',
													elemMods: { 'indent-r': 'm' },
													content: [
														{
															block: 'tag',
															mods: { view: 'default', size: 's' },
															content: 'default'
														}
													]
												},
												{
													elem: 'block',
													content: [
														{
															block: 'text',
															mods: { size: 'm', view: 'primary' },
															mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
															content: "Дефолтный"
														},
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold' },
															content: "mods: { view: 'default' }"
														}
													]
												}
											]
										},
										{
											block: 'pt-icon-plus',
											mods: { 'vertical-align': 'center' },
											content: [
												{
													elem: 'icon',
													elemMods: { 'indent-r': 'm' },
													content: [
														{
															block: 'tag',
															mods: { view: 'disable', size: 's' },
															content: 'disable'
														}
													]
												},
												{
													elem: 'block',
													content: [
														{
															block: 'text',
															mods: { size: 'm', view: 'primary' },
															mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
															content: "Дизейбл"
														},
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold' },
															content: "mods: { view: 'disable' }"
														}
													]
												}
											]
										},
										{
											block: 'pt-icon-plus',
											mods: { 'vertical-align': 'center' },
											content: [
												{
													elem: 'icon',
													elemMods: { 'indent-r': 'm' },
													content: [
														{
															block: 'tag',
															mods: { view: 'link', size: 's' },
															content: 'link'
														}
													]
												},
												{
													elem: 'block',
													content: [
														{
															block: 'text',
															mods: { size: 'm', view: 'primary' },
															mix: { block: 'decorator', mods: { 'space-b': 'xxs'} },
															content: "Ссылочный"
														},
														{
															block: 'text',
															mods: { size: 'm', weight: 'bold' },
															content: "mods: { view: 'link' }"
														}
													]
												}
											]
										}
									]
								}
							]
						}
						/* /Теги */
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