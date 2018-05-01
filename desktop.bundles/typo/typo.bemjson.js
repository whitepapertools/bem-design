module.exports = {
	block: 'page',
	title: 'BEM Typo',
	favicon: '/favicon.ico',
	lang: 'ru',
	head: [
		{ elem: 'meta', attrs: { name: 'description', content: '' } },
		{ elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
		{ elem: 'css', url: 'typo.min.css' },
		{ elem: 'css', url: '/assets/bem-grid/bem-grid-l.css' },
		{ elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' }
	],
	scripts: [{ elem: 'js', url: 'typo.min.js' }],
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
			content: 'Typography'
		},
		{
			elem: 'section',
			content: [
			/* Typography */
			{
				block: 'row',
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
								mods: { size: 'xxxl' },
								content: 'Typography'
							}]
						},
						{
							block: 'text',
							mods: { size: 'm', weight: 'bold' },
							content: "mods: { size: 'xxxl' }"
						},
						{
							block: 'text',
							mods: { size: 'm' },
							content: 'font-size: 32px'
						},
						{
							block: 'text',
							mods: { size: 'm' },
							content: 'line-height: 42px'
						}]
					}]
				},
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
								mods: { size: 'xxl'},
								content: 'Typography'
							}]
						},
						{
							block: 'text',
							mods: { size: 'm', weight: 'bold' },
							content: " mods: { size: 'xxl' } "
						},
						{
							block: 'text',
							mods: { size: 'm' },
							content: 'font-size: 24px'
						},
						{
							block: 'text',
							mods: { size: 'm' },
							content: 'line-height: 34px'
						}]
					}]
				},
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
								mods: { size: 'xl'},
								content: 'Typography'
							}]
						},
						{
							block: 'text',
							mods: { size: 'm', weight: 'bold' },
							content: " mods: { size: 'xl' } "
						},
						{
							block: 'text',
							mods: { size: 'm' },
							content: 'font-size: 20px'
						},
						{
							block: 'text',
							mods: { size: 'm' },
							content: 'line-height: 28px'
						}]
					}]
				}]
			},
			{
				block: 'row',
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
								mods: { size: 'l'},
								content: 'Typography'
							}]
						},
						{
							block: 'text',
							mods: { size: 'm', weight: 'bold' },
							content: "mods: { size: 'l' }"
						},
						{
							block: 'text',
							mods: { size: 'm' },
							content: 'font-size: 18px'
						},
						{
							block: 'text',
							mods: { size: 'm' },
							content: 'line-height: 25px'
						}]
					}]
				},
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
								mods: { size: 'm'},
								content: 'Typography'
							}]
						},
						{
							block: 'text',
							mods: { size: 'm', weight: 'bold' },
							content: "mods: { size: 'm' }"
						},
						{
							block: 'text',
							mods: { size: 'm' },
							content: 'font-size: 15px'
						},
						{
							block: 'text',
							mods: { size: 'm' },
							content: 'line-height: 21px'
						}]
					}]
				},
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
								mods: { size: 's'},
								content: 'Typography'
							}]
						},
						{
							block: 'text',
							mods: { size: 'm', weight: 'bold' },
							content: "mods: { size: 's' }"
						},
						{
							block: 'text',
							mods: { size: 'm' },
							content: 'font-size: 13px'
						},
						{
							block: 'text',
							mods: { size: 'm' },
							content: 'line-height: 18px'
						}]
					}]
				}]
			},
			{
				block: 'row',
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
								mods: { size: 'xs'},
								content: 'Typography'
							}]
						},
						{
							block: 'text',
							mods: { size: 'm', weight: 'bold' },
							content: "mods: { size: 'xs' }"
						},
						{
							block: 'text',
							mods: { size: 'm' },
							content: 'font-size: 11px'
						},
						{
							block: 'text',
							mods: { size: 'm' },
							content: 'line-height: 15px'
						}]
					}]
				}]
			},
			/* Typography */
			]
		},
		{
			elem: 'section',
			content: [
			{
				block: 'row',
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
								mods: { size: 'xxxl', view: 'primary' },
								content: 'Typography'
							}]
						},
						{
							block: 'text',
							mods: { size: 'm', weight: 'bold' },
							content: " mods: { view: 'primary' } "
						},
						{
							block: 'text',
							mods: { size: 'm' },
							content: '#000000'
						}]
					}]
				},
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
								mods: { size: 'xxxl', view: 'promo' },
								content: 'Typography'
							}]
						},
						{
							block: 'text',
							mods: { size: 'm', weight: 'bold' },
							content: " mods: { view: 'promo' } "
						},
						{
							block: 'text',
							mods: { size: 'm' },
							content: 'rgba(0, 0, 0, 0.7)'
						}]
					}]
				},
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
								mods: { size: 'xxxl', view: 'secondary' },
								content: 'Typography'
							}]
						},
						{
							block: 'text',
							mods: { size: 'm', weight: 'bold' },
							content: " mods: { view: 'secondary' } "
						},
						{
							block: 'text',
							mods: { size: 'm' },
							content: 'rgba(0, 0, 0, 0.60)'
						}]
					}]
				}]
			},
			{
				block: 'row',
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
								mods: { size: 'xxxl', view: 'ghost' },
								content: 'Typography'
							}]
						},
						{
							block: 'text',
							mods: { size: 'm', weight: 'bold' },
							content: " mods: { view: 'ghost' } "
						},
						{
							block: 'text',
							mods: { size: 'm' },
							content: 'rgba(0, 0, 0, 0.30)'
						}]
					}]
				},
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
								mods: { size: 'xxxl', view: 'disable' },
								content: 'Typography'
							}]
						},
						{
							block: 'text',
							mods: { size: 'm', weight: 'bold' },
							content: " mods: { view: 'disable' }"
						},
						{
							block: 'text',
							mods: { size: 'm' },
							content: 'rgba(0,0,0,0.30)'
						}]
					}]
				},
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
								mods: { size: 'xxxl', view: 'link' },
								content: 'Typography'
							}]
						},
						{
							block: 'text',
							mods: { size: 'm', weight: 'bold' },
							content: " mods: { view: 'link' }"
						},
						{
							block: 'text',
							mods: { size: 'm' },
							content: '#0070F0'
						}]
					}]
				}]
			},
			// {
			// 	block: 'row',
			// 	content: [
			// 	{
			// 		elem: 'col',
			// 		elemMods: { sw: 4 },
			// 		content: [
			// 		{
			// 			block: 'typography',
			// 			content: [
			// 			{
			// 				elem: 'view',
			// 				content: [
			// 				{
			// 					block: 'text',
			// 					mods: { size: 'xxxl', view: 'link-minor' },
			// 					content: 'Typography'
			// 				}]
			// 			},
			// 			{
			// 				block: 'text',
			// 				mods: { size: 'm', weight: 'bold' },
			// 				content: " mods: { view: 'link-minor' }"
			// 			},
			// 			{
			// 				block: 'text',
			// 				mods: { size: 'm' },
			// 				content: '#666699'
			// 			}]
			// 		}]
			// 	}]
			// }
			]
		},
		{
			elem: 'section',
			content: [
			{
				block: 'row',
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
								mods: { size: 'xxxl', weight: 'bold' },
								content: 'Typography'
							}]
						},
						{
							block: 'text',
							mods: { size: 'm', weight: 'bold' },
							content: " mods: { weight: 'bold' } "
						},
						{
							block: 'text',
							mods: { size: 'm' },
							content: 'weight: bold'
						}]
					}]
				}]
			}]
		},
		{
			elem: 'section',
			content: [
			{
				block: 'row',
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
								mods: { size: 'xxxl', transform: 'uppercase' },
								content: 'Typography'
							}]
						},
						{
							block: 'text',
							mods: { size: 'm', weight: 'bold' },
							content: " mods: { transform: 'uppercase' } "
						},
						{
							block: 'text',
							mods: { size: 'm' },
							content: 'transform: uppercase'
						}]
					}]
				}]
			}]
		},
		{
			elem: 'section',
			content: [
			{
				block: 'row',
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
								mods: { size: 'xxxl', transform: 'uppercase', spacing: 's' },
								content: 'Typography'
							}]
						},
						{
							block: 'text',
							mods: { size: 'm', weight: 'bold' },
							content: " mods: { spacing: 's' } "
						},
						{
							block: 'text',
							mods: { size: 'm' },
							content: 'letter-spacing: 1px'
						}]
					}]
				},
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
								mods: { size: 'xxxl', transform: 'uppercase', spacing: 'm' },
								content: 'Typography'
							}]
						},
						{
							block: 'text',
							mods: { size: 'm', weight: 'bold' },
							content: " mods: { spacing: 'm' } "
						},
						{
							block: 'text',
							mods: { size: 'm' },
							content: 'letter-spacing: 2px'
						}]
					}]
				}]
			}]
		},
		{
			elem: 'section',
			content: [
			{
				block: 'row',
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
						},
						{
							block: 'text',
							mods: { size: 'm' },
							content: 'font-style: italic'
						}]
					}]
				}]
			}]
		}]
	},
	{
		block: 'demo',
		elem: 'footer'
	}]
};