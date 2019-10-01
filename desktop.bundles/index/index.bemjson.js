module.exports = {
    block: 'page',
    title: 'whitepaper',
    favicon: '/favicon.ico',
    lang: 'ru',
    head: [
        { elem: 'meta', attrs: { name: 'description', content: '' } },
        { elem: 'meta', attrs: { name: 'viewport', content: 'width=device-width, initial-scale=1' } },
        { elem: 'css', url: '//cdn-images.mailchimp.com/embedcode/classic-10_7.css' },
        { elem: 'css', url: 'index.min.css' },
        { elem: 'js', url: 'https://code.jquery.com/jquery-3.2.1.js' },
    ],
    scripts: [{ elem: 'js', url: 'index.min.js' }],
    mix: [
        {
            block: 'theme',
            mods: { color: 'whitepaper-portal-inverse', space: 'default', breakpoint: 'default', space: 'default', size: 'default', gap: 'medium', menu: 'default', font: 'nitti' }
        },
        {
            block: 'component',
            mods: { whitepaper: 'default' }
        }
    ],
    content: [
        {
            block: 'tpl-layout',
            content: [

                /* Grid-decor */
                {
                    elem: 'content',
                    content: {
                        elem: 'container',
                        elemMods: { distribute: 'center', size: 'm' },
                        content: [
                            {
                                block: 'grid-decoration',
                                mix: [
                                    { block: 'tpl-grid', mods: { ratio: '1-1-1-1', 'col-gap': 'full' } }
                                ],
                                content: [
                                    {
                                        elem: 'column'
                                    },
                                    {
                                        elem: 'column'
                                    },
                                    {
                                        elem: 'column'
                                    },
                                    {
                                        elem: 'column'
                                    }
                                ]
                            }
                        ]
                    }
                },
                /* Grid-decor */

                /* Menu */
                {
                    block: 'menu',
                    content: [
                        {
                            elem: 'content',
                            mix: { block: 'tpl-layout', elem: 'content' },
                            content: [
                                {
                                    elem: 'container',
                                    mix: { block: 'tpl-layout', elem: 'container', elemMods: { size: 'm', distribute: 'center' }},
                                    content: [
                                        {
                                            elem: 'inner',
                                            content: [
                                                {
                                                    elem: 'paper',
                                                    content: [
                                                        {
                                                            elem: 'logo',
                                                            tag: 'a',
                                                            attrs: { href: '/index.html' }
                                                        },
                                                        {
                                                            elem: 'download',
                                                            content: [
                                                                {
                                                                    block: 'figured-button',
                                                                    tag: 'a',
                                                                    attrs: { href: 'https://github.com/whitepapertools' } ,
                                                                    mix: { block: 'theme', mods: { color: 'whitepaper-portal-brand' }},
                                                                    content: 'GitHub'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'nav',
                                                    content: [
                                                        {
                                                            elem: 'item',
                                                            tag: 'a',
                                                            attrs: { href: '/doc.html' },
                                                            mix: { block: 'text', mods: { size: 'xl', view: 'primary', weight: 'light' } },
                                                            content: 'Документация'
                                                        },
                                                        {
                                                            elem: 'item',
                                                            tag: 'a',
                                                            attrs: { href: '/starter-kit.html' },
                                                            mix: { block: 'text', mods: { size: 'xl', view: 'primary', weight: 'light' } },
                                                            content: 'Starter Kit'
                                                        },
                                                        {
                                                            elem: 'item',
                                                            tag: 'a',
                                                            attrs: { href: '/community.html' },
                                                            mix: { block: 'text', mods: { size: 'xl', view: 'primary', weight: 'light' } },
                                                            content: 'Сообщество'
                                                        },
                                                        {
                                                            elem: 'item',
                                                            tag: 'a',
                                                            attrs: { href: '/changelog.html' },
                                                            mix: { block: 'text', mods: { size: 'xl', view: 'primary', weight: 'light' } },
                                                            content: 'Changelog'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }

                    ]
                },
                /* Menu */

                /* Intro */
                {
                    elem: 'content',
                    content: {
                        elem: 'container',
                        elemMods: { distribute: 'center', size: 'm' },
                        content: [
                            {
                                block: 'intro',
                                content: [
                                    {
                                        elem: 'title',
                                        content: [
                                            {
                                                block: 'text',
                                                mods: { view: 'primary', font: 'mono', weight: 'light', display: 'inline-block' },
                                                content: 'Открытый инструмент для разработки дизайн-системы на основе '
                                            },
                                            {
                                                elem: 'combination',
                                                mix: { block: 'text', mods: { view: 'primary', weight: 'light', display: 'inline-block' } },
                                                content: 'комбинаций'
                                            },
                                            {
                                                elem: 'simple',
                                                mix: { block: 'text', mods: { view: 'primary', weight: 'light', display: 'inline-block' } },
                                                content: 'простых'
                                            },
                                            {
                                                elem: 'entities',
                                                mix: { block: 'text', mods: { view: 'primary', weight: 'light', display: 'inline-block' } },
                                                content: 'сущностей'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                },
                /* /Intro  */

                /* Layers */
                {
                    elem: 'content',
                    mix: { block: 'decorator', mods: { 'indent-b': '6xl' } },
                    content: {
                        elem: 'container',
                        elemMods: { distribute: 'center', size: 'm' },
                        content: [
                            {
                                block: 'layers',
                                content: [
                                    {
                                        block: 'layer-card',
                                        mods: { view: 'blue' },
                                        content: [
                                            {
                                                block: 'text',
                                                mods: { size: '6xl', view: 'primary', font: 'mono' },
                                                content: '1.'
                                            },
                                            {
                                                block: 'text',
                                                mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
                                                mods: { size: '3xl', view: 'primary', font: 'mono' },
                                                content: 'Тема'
                                            },
                                            {
                                                block: 'text',
                                                mods: { size: 'l', view: 'secondary', font: 'mono' },
                                                content: 'Цвета, отступы, размеры, брейкпоинты'
                                            }
                                        ]
                                    },
                                    {
                                        block: 'layer-card',
                                        attrs: { 'data-scroll-speed': '3' },
                                        mods: { view: 'gray-monochrome' },
                                        content: [
                                            {
                                                block: 'text',
                                                mods: { size: '6xl', view: 'primary', font: 'mono' },
                                                content: '2.'
                                            },
                                            {
                                                block: 'text',
                                                mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
                                                mods: { size: '3xl', view: 'primary', font: 'mono' },
                                                content: 'Каркас'
                                            },
                                            {
                                                block: 'text',
                                                mods: { size: 'l', view: 'secondary', font: 'mono' },
                                                content: 'Обвязка, сетка'
                                            }
                                        ]
                                    },
                                    {
                                        block: 'layer-card',
                                        attrs: { 'data-scroll-speed': '2' },
                                        mods: { view: 'black-blue' },
                                        content: [
                                            {
                                                block: 'text',
                                                mods: { size: '6xl', view: 'primary', font: 'mono' },
                                                content: '3.'
                                            },
                                            {
                                                block: 'text',
                                                mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
                                                mods: { size: '3xl', view: 'primary', font: 'mono' },
                                                content: 'Паттерны'
                                            },
                                            {
                                                block: 'text',
                                                mods: { size: 'l', view: 'secondary', font: 'mono' },
                                                content: 'Списки, карточки, таблицы, формы и т.д.'
                                            }
                                        ]
                                    },
                                    {
                                        block: 'layer-card',
                                        attrs: { 'data-scroll-speed': '1' },
                                        mods: { view: 'black-monochrome' },
                                        content: [
                                            {
                                                block: 'text',
                                                mods: { size: '6xl', view: 'primary', font: 'mono' },
                                                content: '4.'
                                            },
                                            {
                                                block: 'text',
                                                mix: { block: 'decorator', mods: { 'indent-b': 'm' } },
                                                mods: { size: '3xl', view: 'primary', font: 'mono' },
                                                content: 'Контент'
                                            },
                                            {
                                                block: 'text',
                                                mods: { size: 'l', view: 'secondary', font: 'mono' },
                                                content: 'Типографика, бэйджи, аватарки'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                },
                /* /Layers */

                /* Demo */
                {
                    elem: 'content',
                    mix: { block: 'decorator', mods: { 'indent-b': '6xl' } },
                    content: {
                        elem: 'container',
                        elemMods: { distribute: 'center', size: 'm' },
                        content: [
                        {
                            block: 'editor',
                            content: [
                            {
                                elem: 'interface',
                                mix: { block: 'theme', mods: { gap: 'editor-default', color: 'whitepaper-portal-inverse', size: 'editor-default', space: 'editor-default', font: 'nitti' } },
                                content: [
                                {
                                    block: 'tpl-layout',
                                    mods: { structure: '20-80' },
                                    content: [
                                    {
                                        elem: 'section',
                                        mix: [{ block: 'decorator', mods: { 'space-h': 'l', 'space-v': 'xl' } },
                                              { block: 'editor', elem: 'left-section' }],
                                        content: [
                                        {
                                            block: 'pt-list',
                                            mods: { 'space-v': 'xs' },
                                            content: [
                                            {
                                                elem: 'item',
                                                content: [
                                                {
                                                    block: 'text',
                                                    mods: { size: 'm', view: 'primary', align: 'left', weight: 'regular' },
                                                    mix: { block: 'editor', elem: 'editable-text' },
                                                    attrs: { 'data-name': 'left-list-title' },
                                                    content: 'Browse Music'
                                                }]
                                            },
                                            {
                                                elem: 'item',
                                                content: [
                                               {
                                                    block: 'text',
                                                    mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                                    mix: { block: 'editor', elem: 'editable-text' },
                                                    attrs: { 'data-name': 'left-list-item' },
                                                    content: 'Discover'
                                                }]
                                            },
                                            {
                                                elem: 'item',
                                                content: [
                                                {
                                                    block: 'text',
                                                    mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                                    mix: { block: 'editor', elem: 'editable-text' },
                                                    attrs: { 'data-name': 'left-list-item' },
                                                    content: 'Genres'
                                                }]
                                            },
                                            {
                                                elem: 'item',
                                                content: [
                                                {
                                                    block: 'text',
                                                    mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                                    mix: { block: 'editor', elem: 'editable-text' },
                                                    attrs: { 'data-name': 'left-list-item' },
                                                    content: 'Top Charts'
                                                }]
                                            },
                                            {
                                                elem: 'item',
                                                content: [
                                                {
                                                    block: 'text',
                                                    mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                                    mix: { block: 'editor', elem: 'editable-text' },
                                                    attrs: { 'data-name': 'left-list-item' },
                                                    content: 'Collabs'
                                                }]
                                            },
                                            {
                                                elem: 'item',
                                                content: [
                                                {
                                                    block: 'text',
                                                    mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                                    mix: { block: 'editor', elem: 'editable-text' },
                                                    attrs: { 'data-name': 'left-list-item' },
                                                    content: 'Free Music'
                                                }]
                                            },
                                            {
                                                elem: 'item',
                                                content: [
                                                {
                                                    block: 'text',
                                                    mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                                    mix: { block: 'editor', elem: 'editable-text' },
                                                    attrs: { 'data-name': 'left-list-item' },
                                                    content: 'Stations'
                                                }]
                                            }]
                                        },
                                        {
                                            block: 'pt-list',
                                            mods: { 'space-v': 'xs' },
                                            mix: { block: 'decorator', mods: { 'indent-t': '3xl' } },
                                            content: [
                                            {
                                                elem: 'item',
                                                content: [
                                                {
                                                    block: 'text',
                                                    mods: { size: 'm', view: 'primary', align: 'left', weight: 'regular' },
                                                    mix: { block: 'editor', elem: 'editable-text' },
                                                    attrs: { 'data-name': 'left-list-title' },
                                                    content: 'Your Music'
                                                }]
                                            },
                                            {
                                                elem: 'item',
                                                content: [
                                                {
                                                    block: 'text',
                                                    mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                                    mix: { block: 'editor', elem: 'editable-text' },
                                                    attrs: { 'data-name': 'left-list-item' },
                                                    content: 'Favourites'
                                                }]
                                            },
                                            {
                                                elem: 'item',
                                                content: [
                                                {
                                                    block: 'text',
                                                    mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                                    mix: { block: 'editor', elem: 'editable-text' },
                                                    attrs: { 'data-name': 'left-list-item' },
                                                    content: 'History'
                                                }]
                                            }]
                                        },
                                        {
                                            block: 'pt-list',
                                            mods: { 'space-v': 'xs' },
                                            mix: { block: 'decorator', mods: { 'indent-t': '3xl' } },
                                            content: [
                                            {
                                                elem: 'item',
                                                content: [
                                                {
                                                    block: 'text',
                                                    mods: { size: 'm', view: 'primary', align: 'left', weight: 'regular' },
                                                    mix: { block: 'editor', elem: 'editable-text' },
                                                    attrs: { 'data-name': 'left-list-title' },
                                                    content: 'Your Playlists'
                                                }]
                                            },
                                            {
                                                elem: 'item',
                                                content: [
                                                {
                                                    block: 'text',
                                                    mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                                    mix: { block: 'editor', elem: 'editable-text' },
                                                    attrs: { 'data-name': 'left-list-item' },
                                                    content: 'Public Playlist'
                                                }]
                                            },
                                            {
                                                elem: 'item',
                                                content: [
                                                {
                                                    block: 'text',
                                                    mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                                    mix: { block: 'editor', elem: 'editable-text' },
                                                    attrs: { 'data-name': 'left-list-item' },
                                                    content: 'Purchased'
                                                }]
                                            },
                                            {
                                                elem: 'item',
                                                content: [
                                                {
                                                    block: 'text',
                                                    mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                                    mix: { block: 'editor', elem: 'editable-text' },
                                                    attrs: { 'data-name': 'left-list-item' },
                                                    content: 'My First Playlist'
                                                }]
                                            }]
                                        }]
                                    },
                                    {
                                        elem: 'section',
                                        mix: [{ block: 'decorator', mods: { 'space-h': '3xl', 'space-v': '4xl' } }],
                                        content: [
                                        {
                                            block: 'text',
                                            mods: { size: '4xl', view: 'primary', align: 'left', weight: 'regular' },
                                            mix: { block: 'editor', elem: 'editable-text' },
                                            attrs: { 'data-name': 'main-title' },
                                            content: 'Music'
                                        },
                                        {
                                            block: 'text',
                                            mods: { size: 'xl', view: 'secondary', align: 'left', weight: 'regular' },
                                            mix: { block: 'editor', elem: 'editable-text' },
                                            attrs: { 'data-name': 'main-subtitle' },
                                            content: 'Best singles of month'
                                        },
                                        {
                                            block: 'decorator',
                                            mods: { 'indent-t': 'xl' },
                                            content: [
                                            {
                                                block: 'editor',
                                                elem: 'button',
                                                elemMods: { type: 'play' },
                                                mix: { block: 'decorator', mods: { 'indent-r': 'xs' } },
                                                content: 'Play'
                                            },
                                            {
                                                block: 'editor',
                                                elem: 'button',
                                                elemMods: { type: 'favourites' },
                                                content: '★'
                                            }]
                                        },
                                        {
                                            block: 'decorator',
                                            mods: { 'indent-t': '4xl', 'indent-b': 's' },
                                            content: [
                                            {
                                                block: 'text',
                                                mods: { size: 'xl', view: 'primary', align: 'left', weight: 'regular' },
                                                mix: { block: 'editor', elem: 'editable-text' },
                                                attrs: { 'data-name': 'h2' },
                                                content: 'What hot this weekend'
                                            }]
                                        },
                                        {
                                            block: 'tpl-grid',
                                            mods: { 's-ratio': '1-1-1-1', 'm-ratio': '1-1-1-1-1-1', 'col-gap': 'third' },
                                            content: [
                                            {
                                                block: 'pt-card',
                                                content: [
                                                {
                                                    elem: 'content',
                                                    content: [
                                                    {
                                                        block: 'img',
                                                        attrs: { style: 'background-color: var(--color-bg-brand)' },
                                                        mix: { block: 'decorator', mods: { 'indent-b': 's' } },
                                                        content: [
                                                        {
                                                            html: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path fill="var(--color-bg-default)" d="M49.5 31l20.5 35h-41z"/></svg>`
                                                        }]
                                                    },
                                                    {
                                                        block: 'text',
                                                        mods: { size: 'm', view: 'secondary', align: 'center', weight: 'regular' },
                                                        mix: { block: 'editor', elem: 'editable-text' },
                                                        attrs: { 'data-name': 'card-name' },
                                                        content: 'What hot this weekend'
                                                    }]
                                                }]
                                            },
                                            {
                                                block: 'pt-card',
                                                content: [
                                                {
                                                    elem: 'content',
                                                    content: [
                                                    {
                                                        block: 'img',
                                                        attrs: { style: 'background-color: var(--color-bg-action);' },
                                                        mix: { block: 'decorator', mods: { 'indent-b': 's' } },
                                                        content: [
                                                        {
                                                            html: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path fill="var(--color-bg-default)" d="M50 10l4.84 25.486 19.263-17.842-11.431 23.396 26.328-3.382-23.337 12.369 23.337 12.369-26.328-3.383 11.431 23.396-19.263-17.842-4.84 25.486-4.84-25.486-19.263 17.842 11.431-23.396-26.328 3.383 23.337-12.369-23.337-12.369 26.328 3.382-11.431-23.396 19.263 17.842z"/></svg>`
                                                        }]
                                                    },
                                                    {
                                                        block: 'text',
                                                        mods: { size: 'm', view: 'secondary', align: 'center', weight: 'regular' },
                                                        mix: { block: 'editor', elem: 'editable-text' },
                                                        attrs: { 'data-name': 'card-name' },
                                                        content: 'What hot this weekend'
                                                    }]
                                                }]
                                            },
                                            {
                                                block: 'pt-card',
                                                content: [
                                                {
                                                    elem: 'content',
                                                    content: [
                                                    {
                                                        block: 'img',
                                                        attrs: { style: 'background-color: var(--color-bg-brand);' },
                                                        mix: { block: 'decorator', mods: { 'indent-b': 's' } },
                                                        content: [
                                                        {
                                                            html: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path fill="var(--color-bg-default)" d="M50.5 28l6.077 16.423 16.423 6.077-16.423 6.077-6.077 16.423-6.077-16.423-16.423-6.077 16.423-6.077z"/></svg>`
                                                        }]
                                                    },
                                                    {
                                                        block: 'text',
                                                        mods: { size: 'm', view: 'secondary', align: 'center', weight: 'regular' },
                                                        mix: { block: 'editor', elem: 'editable-text' },
                                                        attrs: { 'data-name': 'card-name' },
                                                        content: 'What hot this weekend'
                                                    }]
                                                }]
                                            },
                                            {
                                                block: 'pt-card',
                                                content: [
                                                {
                                                    elem: 'content',
                                                    content: [
                                                    {
                                                        block: 'img',
                                                        attrs: { style: 'background-color: var(--color-bg-action);' },
                                                        mix: { block: 'decorator', mods: { 'indent-b': 's' } },
                                                        content: [
                                                        {
                                                            html: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path fill="var(--color-bg-default)" d="M50.472 7l1.665 27.123 7.011-26.282-3.745 26.922 12.088-24.432-9.011 25.686 16.7-21.642-13.931 23.462 20.67-18.021-18.316 20.337 23.847-13.707-21.996 16.431 26.106-8.866-24.832 11.893 27.362-3.685-26.713 6.898 27.567 1.638-27.567 1.638 26.713 6.898-27.362-3.685 24.832 11.893-26.106-8.866 21.996 16.431-23.847-13.707 18.316 20.337-20.67-18.021 13.931 23.462-16.7-21.642 9.011 25.686-12.088-24.432 3.745 26.922-7.011-26.283-1.665 27.123-1.665-27.123-7.011 26.283 3.745-26.922-12.088 24.432 9.011-25.686-16.7 21.642 13.931-23.462-20.67 18.021 18.316-20.337-23.846 13.707 21.996-16.431-26.106 8.866 24.832-11.893-27.362 3.685 26.713-6.898-27.567-1.638 27.567-1.638-26.713-6.898 27.362 3.685-24.832-11.893 26.106 8.866-21.996-16.431 23.846 13.707-18.316-20.337 20.67 18.021-13.931-23.462 16.7 21.642-9.011-25.686 12.088 24.432-3.745-26.922 7.011 26.282z"/></svg>`
                                                        }]
                                                    },
                                                    {
                                                        block: 'text',
                                                        mods: { size: 'm', view: 'secondary', align: 'center', weight: 'regular' },
                                                        mix: { block: 'editor', elem: 'editable-text' },
                                                        attrs: { 'data-name': 'card-name' },
                                                        content: 'Remixes'
                                                    }]
                                                }]
                                            }]
                                        },
                                        {
                                            block: 'tpl-grid',
                                            mods: { 's-ratio': '1-1', 'm-ratio': '1-1-1', 'col-gap': 'full' },
                                            mix: [{ block: 'decorator', mods: { 'indent-t': 'm' } }],
                                            content: [
                                            {
                                                elem: 'fraction',
                                                content: [
                                                {
                                                    block: 'text',
                                                    mods: { size: 'xl', view: 'primary', align: 'left', weight: 'regular' },
                                                    mix: [{ block: 'decorator', mods: { 'indent-b': 'm' } },
                                                          { block: 'editor', elem: 'editable-text' }],
                                                    attrs: { 'data-name': 'h2' },
                                                    content: 'Latest relises'
                                                },
                                                {
                                                    tag: 'table',
                                                    block: 'pt-table',
                                                    content: [
                                                    {
                                                        tag: 'tr',
                                                        elem: 'row',
                                                        content: [
                                                        {
                                                            tag: 'td',
                                                            elem: 'col',
                                                            elemMods: { width: '15' },
                                                            content: [
                                                            {
                                                                block: 'img',
                                                                attrs: { style: 'background-color: var(--color-bg-action);' },
                                                                content: [
                                                                {
                                                                    html: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path fill="var(--color-bg-default)" d="M50.5 28l6.077 16.423 16.423 6.077-16.423 6.077-6.077 16.423-6.077-16.423-16.423-6.077 16.423-6.077z"/></svg>`
                                                                }]
                                                            }]
                                                        },
                                                        {
                                                            tag: 'td',
                                                            elem: 'col',
                                                            elemMods: { width: '55' },
                                                            content: [
                                                            {
                                                                block: 'text',
                                                                mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                                                mix: [{ block: 'editor', elem: 'editable-text' },
                                                                      { block: 'decorator', mods: { 'indent-l': 's' } }],
                                                                attrs: { 'data-name': 'table-text' },
                                                                content: 'Worry Bout Us'
                                                            }]
                                                        },
                                                        {
                                                            tag: 'td',
                                                            elem: 'col',
                                                            elemMods: { width: '15', align: 'right' },
                                                            content: [
                                                            {
                                                                block: 'text',
                                                                mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                                                mix: { block: 'editor', elem: 'editable-text' },
                                                                attrs: { 'data-name': 'table-text' },
                                                                content: '6:20'
                                                            }]
                                                        },
                                                        {
                                                            tag: 'td',
                                                            elem: 'col',
                                                            elemMods: { width: '10', align: 'right' },
                                                            content: [
                                                            {
                                                                block: 'text',
                                                                mods: { size: 'm', view: 'primary', align: 'left', weight: 'regular' },
                                                                mix: { block: 'editor', elem: 'editable-text' },
                                                                attrs: { 'data-name': 'table-text' },
                                                                content: '★'
                                                            }]
                                                        }]
                                                    },
                                                    {
                                                        tag: 'tr',
                                                        elem: 'row',
                                                        content: [
                                                        {
                                                            tag: 'td',
                                                            elem: 'col',
                                                            elemMods: { width: '15' },
                                                            content: [
                                                            {
                                                                block: 'img',
                                                                attrs: { style: 'background-color: var(--color-bg-brand)' },
                                                                mix: { block: 'decorator', mods: { 'indent-b': 's' } },
                                                                content: [
                                                                {
                                                                    html: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path fill="var(--color-bg-default)" d="M49.5 31l20.5 35h-41z"/></svg>`
                                                                }]
                                                            }]
                                                        },
                                                        {
                                                            tag: 'td',
                                                            elem: 'col',
                                                            elemMods: { width: '55' },
                                                            content: [
                                                            {
                                                                block: 'text',
                                                                mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                                                mix: [{ block: 'editor', elem: 'editable-text' },
                                                                      { block: 'decorator', mods: { 'indent-l': 's' } }],
                                                                attrs: { 'data-name': 'table-text' },
                                                                content: 'Worry Bout Us'
                                                            }]
                                                        },
                                                        {
                                                            tag: 'td',
                                                            elem: 'col',
                                                            elemMods: { width: '15', align: 'right' },
                                                            content: [
                                                            {
                                                                block: 'text',
                                                                mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                                                mix: { block: 'editor', elem: 'editable-text' },
                                                                attrs: { 'data-name': 'table-text' },
                                                                content: '6:20'
                                                            }]
                                                        },
                                                        {
                                                            tag: 'td',
                                                            elem: 'col',
                                                            elemMods: { width: '10', align: 'right' },
                                                            content: [
                                                            {
                                                                block: 'text',
                                                                mods: { size: 'm', view: 'primary', align: 'left', weight: 'regular' },
                                                                mix: { block: 'editor', elem: 'editable-text' },
                                                                attrs: { 'data-name': 'table-text' },
                                                                content: '★'
                                                            }]
                                                        }]
                                                    }]
                                                }]
                                            },
                                            {
                                                elem: 'fraction',
                                                content: [
                                                {
                                                    block: 'text',
                                                    mods: { size: 'xl', view: 'primary', align: 'left', weight: 'regular' },
                                                    mix: [{ block: 'decorator', mods: { 'indent-b': 'm' } },
                                                          { block: 'editor', elem: 'editable-text' }],
                                                    attrs: { 'data-name': 'h2' },
                                                    content: 'Top songs'
                                                },
                                                {
                                                    tag: 'table',
                                                    block: 'pt-table',
                                                    content: [
                                                    {
                                                        tag: 'tr',
                                                        elem: 'row',
                                                        content: [
                                                        {
                                                            tag: 'td',
                                                            elem: 'col',
                                                            elemMods: { width: '15' },
                                                            content: [
                                                            {
                                                                block: 'img',
                                                                attrs: { style: 'background-color: var(--color-bg-brand)' },
                                                                content: [
                                                                {
                                                                    html: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path fill="var(--color-bg-default)" d="M49.5 31l20.5 35h-41z"/></svg>`
                                                                }]
                                                            }]
                                                        },
                                                        {
                                                            tag: 'td',
                                                            elem: 'col',
                                                            elemMods: { width: '55' },
                                                            content: [
                                                            {
                                                                block: 'text',
                                                                mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                                                mix: [{ block: 'editor', elem: 'editable-text' },
                                                                      { block: 'decorator', mods: { 'indent-l': 's' } }],
                                                                attrs: { 'data-name': 'table-text' },
                                                                content: 'Worry Bout Us'
                                                            }]
                                                        },
                                                        {
                                                            tag: 'td',
                                                            elem: 'col',
                                                            elemMods: { width: '15', align: 'right' },
                                                            content: [
                                                            {
                                                                block: 'text',
                                                                mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                                                mix: { block: 'editor', elem: 'editable-text' },
                                                                attrs: { 'data-name': 'table-text' },
                                                                content: '6:20'
                                                            }]
                                                        },
                                                        {
                                                            tag: 'td',
                                                            elem: 'col',
                                                            elemMods: { width: '10', align: 'right' },
                                                            content: [
                                                            {
                                                                block: 'text',
                                                                mods: { size: 'm', view: 'primary', align: 'left', weight: 'regular' },
                                                                mix: { block: 'editor', elem: 'editable-text' },
                                                                attrs: { 'data-name': 'table-text' },
                                                                content: '★'
                                                            }]
                                                        }]
                                                    },
                                                    {
                                                        tag: 'tr',
                                                        elem: 'row',
                                                        content: [
                                                        {
                                                            tag: 'td',
                                                            elem: 'col',
                                                            elemMods: { width: '15' },
                                                            content: [
                                                            {
                                                                block: 'img',
                                                                attrs: { style: 'background-color: var(--color-bg-action);' },
                                                                content: [
                                                                {
                                                                    html: `<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path fill="var(--color-bg-default)" d="M50 10l4.84 25.486 19.263-17.842-11.431 23.396 26.328-3.382-23.337 12.369 23.337 12.369-26.328-3.383 11.431 23.396-19.263-17.842-4.84 25.486-4.84-25.486-19.263 17.842 11.431-23.396-26.328 3.383 23.337-12.369-23.337-12.369 26.328 3.382-11.431-23.396 19.263 17.842z"/></svg>`
                                                                }]
                                                            }]
                                                        },
                                                        {
                                                            tag: 'td',
                                                            elem: 'col',
                                                            elemMods: { width: '55' },
                                                            content: [
                                                            {
                                                                block: 'text',
                                                                mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                                                mix: [{ block: 'editor', elem: 'editable-text' },
                                                                      { block: 'decorator', mods: { 'indent-l': 's' } }],
                                                                attrs: { 'data-name': 'table-text' },
                                                                content: 'Worry Bout Us'
                                                            }]
                                                        },
                                                        {
                                                            tag: 'td',
                                                            elem: 'col',
                                                            elemMods: { width: '15', align: 'right' },
                                                            content: [
                                                            {
                                                                block: 'text',
                                                                mods: { size: 'm', view: 'secondary', align: 'left', weight: 'regular' },
                                                                mix: { block: 'editor', elem: 'editable-text' },
                                                                attrs: { 'data-name': 'table-text' },
                                                                content: '6:20'
                                                            }]
                                                        },
                                                        {
                                                            tag: 'td',
                                                            elem: 'col',
                                                            elemMods: { width: '10', align: 'right' },
                                                            content: [
                                                            {
                                                                block: 'text',
                                                                mods: { size: 'm', view: 'primary', align: 'left', weight: 'regular' },
                                                                mix: { block: 'editor', elem: 'editable-text' },
                                                                attrs: { 'data-name': 'table-text' },
                                                                content: '★'
                                                            }]
                                                        }]
                                                    }]
                                                }]
                                            }]
                                        }]
                                    }]
                                }]
                            },
                            {
                                elem: 'local-settings',
                                mix: [{ block: 'theme', mods: { color: 'whitepaper-default' } },
                                      { block: 'decorator', mods: { 'space-t': 'l', 'space-h': 'l', 'space-b': 'l' } }],
                                content: [
                                {
                                    elem: 'text-settings',
                                    mix: { block: 'tpl-grid', mods: { columns: '12' } },
                                    content: [
                                    {
                                        block: 'tpl-grid',
                                        elem: 'fraction',
                                        elemMods: { col: '12' },
                                        mix: [{ block: 'decorator', mods: { 'indent-b': 'xs' } },
                                              { block: 'text-size' }],
                                        content: [
                                        {
                                            block: 'plus-minus',
                                            content: [
                                            {
                                                block: 'btn-minus',
                                                mix: [{ block: 'decorator', mods: { 'indent-r': 'xs' } },
                                                      { block: 'text-size', elem: 'minus' }],
                                                content: '-'
                                            },
                                            {
                                                block: 'text',
                                                mods: { size: '4xl', view: 'primary', display: 'inline-block' },
                                                mix: { block: 'text-size', elem: 'number' },
                                                content: '24'
                                            },
                                            {
                                                block: 'btn-plus',
                                                mix: [{ block: 'decorator', mods: { 'indent-l': 'xs' } },
                                                      { block: 'text-size', elem: 'plus' }],
                                                content: '+'
                                            }]
                                        },
                                        {
                                            block: 'text',
                                            mods: { size: 'xs', view: 'ghost', align: 'center' },
                                            mix: { block: 'text-size', elem: 'name' },
                                            content: '3xl'
                                        }]
                                    },

                                    {
                                        block: 'tpl-grid',
                                        elem: 'fraction',
                                        elemMods: { col: '4' },
                                        mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
                                        content: [
                                        {
                                            block: 'control',
                                            mods: { type: 'weight', active: true },
                                            attrs: { weight: 'text_weight_regular' },
                                            content: 'Aa'
                                        }]
                                    },
                                    {
                                        block: 'tpl-grid',
                                        elem: 'fraction',
                                        elemMods: { col: '4' },
                                        mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
                                        content: [
                                        {
                                            block: 'control',
                                            mods: { type: 'weight' },
                                            mix: [{ block: 'text', mods: { weight: 'semibold' } }],
                                            attrs: { weight: 'text_weight_semibold' },
                                            content: 'Aa'
                                        }]
                                    },
                                    {
                                        block: 'tpl-grid',
                                        elem: 'fraction',
                                        elemMods: { col: '4' },
                                        mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
                                        content: [
                                        {
                                            block: 'control',
                                            mods: { type: 'weight' },
                                            mix: [{ block: 'text', mods: { weight: 'bold' } }],
                                            attrs: { weight: 'text_weight_bold' },
                                            content: 'Aа'
                                        }]
                                    },

                                    {
                                        block: 'tpl-grid',
                                        elem: 'fraction',
                                        elemMods: { col: '4' },
                                        mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
                                        content: [
                                        {
                                            block: 'control',
                                            mods: { type: 'align', active: true },
                                            attrs: { align: 'text_align_left' },
                                            content: {
                                                block: 'icon',
                                                mods: { name: 'align-left', size: 's', view: 'primary' }
                                            }
                                        }]
                                    },
                                    {
                                        block: 'tpl-grid',
                                        elem: 'fraction',
                                        elemMods: { col: '4' },
                                        mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
                                        content: [
                                        {
                                            block: 'control',
                                            mods: { type: 'align' },
                                            attrs: { align: 'text_align_center' },
                                            content: {
                                                block: 'icon',
                                                mods: { name: 'align-center', size: 's', view: 'primary' }
                                            }
                                        }]
                                    },
                                    {
                                        block: 'tpl-grid',
                                        elem: 'fraction',
                                        elemMods: { col: '4' },
                                        mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
                                        content: [
                                        {
                                            block: 'control',
                                            mods: { type: 'align' },
                                            attrs: { align: 'text_align_right' },
                                            content: {
                                                block: 'icon',
                                                mods: { name: 'align-right', size: 's', view: 'primary' }
                                            }
                                        }]
                                    },

                                    {
                                        block: 'tpl-grid',
                                        elem: 'fraction',
                                        elemMods: { col: '3' },
                                        content: [
                                        {
                                            block: 'control',
                                            mods: { type: 'view' },
                                            attrs: { view: 'text_view_primary' },
                                            mix: { block: 'theme', mods: { color: 'whitepaper-portal-inverse' } },
                                            content: {
                                                elem: 'color',
                                                elemMods: { size: 'm', view: 'primary' }
                                            }
                                        }]
                                    },
                                    {
                                        block: 'tpl-grid',
                                        elem: 'fraction',
                                        elemMods: { col: '3' },
                                        content: [
                                        {
                                            block: 'control',
                                            mods: { type: 'view' },
                                            attrs: { view: 'text_view_secondary' },
                                            mix: { block: 'theme', mods: { color: 'whitepaper-portal-inverse' } },
                                            content: {
                                                elem: 'color',
                                                elemMods: { size: 'm', view: 'secondary' }
                                            }
                                        }]
                                    },
                                    {
                                        block: 'tpl-grid',
                                        elem: 'fraction',
                                        elemMods: { col: '3' },
                                        content: [
                                        {
                                            block: 'control',
                                            mods: { type: 'view' },
                                            attrs: { view: 'text_view_ghost' },
                                            mix: { block: 'theme', mods: { color: 'whitepaper-portal-inverse' } },
                                            content: {
                                                elem: 'color',
                                                elemMods: { size: 'm', view: 'ghost' }
                                            }
                                        }]
                                    },
                                    {
                                        block: 'tpl-grid',
                                        elem: 'fraction',
                                        elemMods: { col: '3' },
                                        content: [
                                        {
                                            block: 'control',
                                            mods: { type: 'view', active: true },
                                            attrs: { view: 'text_view_brand' },
                                            mix: { block: 'theme', mods: { color: 'whitepaper-portal-inverse' } },
                                            content: {
                                                elem: 'color',
                                                elemMods: { size: 'm', view: 'brand' }
                                            }
                                        }]
                                    }]
                                }]
                            },
                            {
                                elem: 'global-settings',
                                mix: { block: 'decorator', mods: { 'space-a': 'xl' } },
                                content: [
                                {
                                    block: 'tpl-grid',
                                    mods: { columns: '10' },
                                    content: [
                                    {
                                        elem: 'fraction',
                                        elemMods: { col: '6' },
                                        mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
                                        content: [
                                        {
                                            block: 'plus-minus',
                                            mix: { block: 'editor', elem: 'grid-settings' },
                                            content: [
                                            {
                                                block: 'btn-minus',
                                                mix: { block: 'decorator', mods: { 'indent-r': 'xs' } },
                                                content: '-'
                                            },
                                            {
                                                block: 'text',
                                                mods: { size: '4xl', view: 'primary', display: 'inline-block' },
                                                content: '2'
                                            },
                                            {
                                                block: 'text',
                                                mods: { size: '4xl', view: 'secondary', display: 'inline-block' },
                                                mix: { block: 'decorator', mods: { 'indent-h': 'xs' } },
                                                content: '∥'
                                            },
                                            {
                                                block: 'text',
                                                mods: { size: '4xl', view: 'primary', display: 'inline-block' },
                                                content: '8'
                                            },
                                            {
                                                block: 'btn-plus',
                                                mix: { block: 'decorator', mods: { 'indent-l': 'xs' } },
                                                content: '+'
                                            }]
                                        },
                                        {
                                            block: 'text',
                                            mods: { size: 'xs', view: 'ghost', align: 'center' },
                                            mix: { block: 'decorator', mods: { 'indent-t': 'xs' } },
                                            content: 'grid ratio'
                                        }]
                                    },
                                    {
                                        elem: 'fraction',
                                        elemMods: { col: '4' },
                                        mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
                                        content: [
                                        {
                                            block: 'plus-minus',
                                            mix: { block: 'editor', elem: 'space-settings' },
                                            content: [
                                            {
                                                block: 'btn-minus',
                                                mix: { block: 'decorator', mods: { 'indent-r': 'xs' } },
                                                content: '-'
                                            },
                                            {
                                                block: 'text',
                                                mods: { size: '4xl', view: 'primary', display: 'inline-block' },
                                                content: '4'
                                            },
                                            {
                                                block: 'btn-plus',
                                                mix: { block: 'decorator', mods: { 'indent-l': 'xs' } },
                                                content: '+'
                                            }]
                                        },
                                        {
                                            block: 'text',
                                            mods: { size: 'xs', view: 'ghost', align: 'center' },
                                            mix: { block: 'decorator', mods: { 'indent-t': 'xs' } },
                                            content: 'space module'
                                        }]
                                    },

                                    {
                                        elem: 'fraction',
                                        elemMods: { col: '2' },
                                        content: [
                                        {
                                            block: 'control',
                                            mods: { type: 'palette', active: true },
                                            attrs: { palette: 'whitepaper-portal-inverse' },
                                            mix: { block: 'theme', mods: { color: 'whitepaper-portal-inverse' } },
                                            content: [
                                            {
                                                elem: 'color',
                                                elemMods: { size: 's' }
                                            },
                                            {
                                                elem: 'color',
                                                elemMods: { size: 's' }
                                            },
                                            {
                                                elem: 'color',
                                                elemMods: { size: 's' }
                                            },
                                            {
                                                elem: 'color',
                                                elemMods: { size: 's' }
                                            }]
                                        }]
                                    },
                                    {
                                        elem: 'fraction',
                                        elemMods: { col: '2' },
                                        content: [
                                        {
                                            block: 'control',
                                            mods: { type: 'palette' },
                                            attrs: { palette: 'portal-2' },
                                            mix: { block: 'theme', mods: { color: 'portal-2' } },
                                            content: [
                                            {
                                                elem: 'color',
                                                elemMods: { size: 's' }
                                            },
                                            {
                                                elem: 'color',
                                                elemMods: { size: 's' }
                                            },
                                            {
                                                elem: 'color',
                                                elemMods: { size: 's' }
                                            },
                                            {
                                                elem: 'color',
                                                elemMods: { size: 's' }
                                            }]
                                        }]
                                    },
                                    {
                                        elem: 'fraction',
                                        elemMods: { col: '2' },
                                        content: [
                                        {
                                            block: 'control',
                                            mods: { type: 'palette' },
                                            attrs: { palette: 'portal-3' },
                                            mix: { block: 'theme', mods: { color: 'portal-3' } },
                                            content: [
                                            {
                                                elem: 'color',
                                                elemMods: { size: 's' }
                                            },
                                            {
                                                elem: 'color',
                                                elemMods: { size: 's' }
                                            },
                                            {
                                                elem: 'color',
                                                elemMods: { size: 's' }
                                            },
                                            {
                                                elem: 'color',
                                                elemMods: { size: 's' }
                                            }]
                                        }]
                                    },
                                    {
                                        elem: 'fraction',
                                        elemMods: { col: '2' },
                                        content: [
                                        {
                                            block: 'control',
                                            mods: { type: 'palette' },
                                            attrs: { palette: 'portal-4' },
                                            mix: { block: 'theme', mods: { color: 'portal-4' } },
                                            content: [
                                            {
                                                elem: 'color',
                                                elemMods: { size: 's' }
                                            },
                                            {
                                                elem: 'color',
                                                elemMods: { size: 's' }
                                            },
                                            {
                                                elem: 'color',
                                                elemMods: { size: 's' }
                                            },
                                            {
                                                elem: 'color',
                                                elemMods: { size: 's' }
                                            }]
                                        }]
                                    },
                                    {
                                        elem: 'fraction',
                                        elemMods: { col: '2' },
                                        content: [
                                        {
                                            block: 'control',
                                            mods: { type: 'palette' },
                                            attrs: { palette: 'portal-5' },
                                            mix: { block: 'theme', mods: { color: 'portal-5' } },
                                            content: [
                                            {
                                                elem: 'color',
                                                elemMods: { size: 's' }
                                            },
                                            {
                                                elem: 'color',
                                                elemMods: { size: 's' }
                                            },
                                            {
                                                elem: 'color',
                                                elemMods: { size: 's' }
                                            },
                                            {
                                                elem: 'color',
                                                elemMods: { size: 's' }
                                            }]
                                        }]
                                    },
                                    {
                                        elem: 'fraction',
                                        elemMods: { col: '10' },
                                        mix: { block: 'decorator', mods: { 'indent-b': 'l' } },
                                        content: [
                                        {
                                            block: 'text',
                                            mods: { size: 'xs', view: 'ghost', align: 'center' },
                                            mix: { block: 'decorator', mods: { 'indent-t': 'xs' } },
                                            content: 'color scheme'
                                        }]
                                    },

                                    {
                                        elem: 'fraction',
                                        elemMods: { col: '3' },
                                        content: [
                                        {
                                            block: 'control',
                                            mods: { type: 'text-style', active: true },
                                            attrs: { 'text-style': 'theme_font_nitti' },
                                            mix: [{ block: 'text' },
                                                  { block: 'theme', mods: { font: 'nitti' } }],
                                            content: 'Aa'
                                        }]
                                    },
                                    {
                                        elem: 'fraction',
                                        elemMods: { col: '2' },
                                        content: [
                                        {
                                            block: 'control',
                                            mods: { type: 'text-style' },
                                            attrs: { 'text-style': 'theme_font_plex' },
                                            mix: [{ block: 'text' },
                                                  { block: 'theme', mods: { font: 'plex' } }],
                                            content: 'Aa'
                                        }]
                                    },
                                    {
                                        elem: 'fraction',
                                        elemMods: { col: '2' },
                                        content: [
                                        {
                                            block: 'control',
                                            mods: { type: 'text-style' },
                                            attrs: { 'text-style': 'theme_font_times' },
                                            mix: [{ block: 'text' },
                                                  { block: 'theme', mods: { font: 'times' } }],
                                            content: 'Aa'
                                        }]
                                    },
                                    {
                                        elem: 'fraction',
                                        elemMods: { col: '3' },
                                        content: [
                                        {
                                            block: 'control',
                                            mods: { type: 'text-style' },
                                            attrs: { 'text-style': 'theme_font_helvetica' },
                                            mix: [{ block: 'text' },
                                                  { block: 'theme', mods: { font: 'helvetica' } }],
                                            content: 'Aa'
                                        }]
                                    },
                                    {
                                        elem: 'fraction',
                                        elemMods: { col: '10' },
                                        content: [
                                        {
                                            block: 'text',
                                            mods: { size: 'xs', view: 'ghost', align: 'center' },
                                            mix: { block: 'decorator', mods: { 'indent-t': 'xs' } },
                                            content: 'typography styles'
                                        }]
                                    }]
                                }]
                            }]
                        }]
                    }
                },
                /* /Demo */

                /* Comparing */
                {
                    elem: 'content',
                    mix: { block: 'decorator', mods: { 'indent-b': '6xl' } },
                    content: {
                        elem: 'container',
                        elemMods: { distribute: 'center', size: 'm' },
                        content: [
                            {
                                block: 'text',
                                mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
                                mods: { size: '3xl', view: 'primary' },
                                content: 'Как это работает'
                            },
                            {
                                block: 'text',
                                mods: { size: 'xl', view: 'secondary', weight: 'light' },
                                mix: { block: 'decorator', mods: { 'indent-b': '4xl' } },
                                content: 'Дизайн-система whitepaper помогает сократить количество этапов и участников, для того чтобы сформировать интерфейс готовый к продакшну'
                            },
                            {
                                block: 'process',
                                content: [
                                    {
                                        elem: 'item',
                                        content: [
                                            {
                                                block: 'text',
                                                attrs: { style: 'width: 252px; margin-right: 20px;' },
                                                mods: { size: 'xl', view: 'secondary', weight: 'light' },
                                                content: 'Классический процесс'
                                            },
                                            {
                                                block: 'steps',
                                                content: [
                                                    {
                                                        block: 'step-badge',
                                                        mods: { view: 'other' },
                                                        content: 'Прототип'
                                                    },
                                                    {
                                                        block: 'step-badge',
                                                        mods: { view: 'other' },
                                                        content: 'Дизайн'
                                                    },
                                                    {
                                                        block: 'step-badge',
                                                        mods: { view: 'other' },
                                                        content: 'HTML & CSS'
                                                    },
                                                    {
                                                        block: 'step-badge',
                                                        mods: { view: 'other' },
                                                        content: 'Фронтенд технология'
                                                    }
                                                ]
                                            },
                                            {
                                                block: 'text',
                                                mods: { size: 'l', view: 'secondary', weight: 'light' },
                                                content: 'Готово'
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'item',
                                        content: [
                                            {
                                                block: 'text',
                                                attrs: { style: 'width: 252px; margin-right: 20px;' },
                                                mods: { size: 'l', view: 'secondary', weight: 'light' },
                                                content: 'Процесс по whitepaper'
                                            },
                                            {
                                                block: 'steps',
                                                content: [
                                                    {
                                                        block: 'step-badge',
                                                        mix: { block: 'theme', mods: { color: 'whitepaper-portal-brand' } },
                                                        mods: { view: 'wp' },
                                                        content: 'Дизайн-система'
                                                    },
                                                    {
                                                        block: 'step-badge',
                                                        mix: { block: 'theme', mods: { color: 'whitepaper-portal-brand' } },
                                                        mods: { view: 'wp' },
                                                        content: 'Фронтенд фреймворк'
                                                    }
                                                ]
                                            },
                                            {
                                                block: 'text',
                                                mods: { size: 'l', view: 'secondary', weight: 'light' },
                                                content: 'Готово'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                },
                /* /Comparing */

                /* FAQ */
                {
                    elem: 'content',
                    mix: { block: 'decorator', mods: { 'indent-b': '6xl' } },
                    content: {
                        elem: 'container',
                        elemMods: { distribute: 'center', size: 'm' },
                        content: [
                            {
                                block: 'text',
                                mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
                                mods: { size: '3xl', view: 'primary' },
                                content: 'Ответы на частые вопросы'
                            },
                            {
                                block: 'faq',
                                mix: { block: 'tpl-grid', mods: { 'xs-ratio': '1', 's-ratio': '1-1', 's-ratio': '1-1-1', 'col-gap': 'full', 'row-gap': 'full' } },
                                content: [
                                    {
                                        elem: 'item',
                                        mix: { block: 'e-accordion', elem: 'item' },
                                        content: [
                                            {
                                                elem: 'question',
                                                mix: [
                                                    { block: 'e-accordion', elem: 'short' },
                                                    { block: 'text', mods: { size: 'xl', view: 'primary', weight: 'light', display: 'inline' } },
                                                ],
                                                content: '— Можно ли попробовать в песочнице?'
                                            },
                                            {
                                                elem: 'answer',
                                                mix: { block: 'e-accordion', elem: 'more' },
                                                content: {
                                                    block: 'text',
                                                    mods: { size: 'xl', view: 'secondary', weight: 'light' },
                                                    content: '— В любую песочницу можно подключить CSS-файл со всеми собранными стилями дизайн-системы'
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'item',
                                        mix: { block: 'e-accordion', elem: 'item' },
                                        content: [
                                            {
                                                elem: 'question',
                                                mix: [
                                                    { block: 'e-accordion', elem: 'short' },
                                                    { block: 'text', mods: { size: 'xl', view: 'primary', weight: 'light', display: 'inline' } },
                                                ],
                                                content: '— Можно ли добавить в готовый проект?'
                                            },
                                            {
                                                elem: 'answer',
                                                mix: { block: 'e-accordion', elem: 'more' },
                                                content: {
                                                    block: 'text',
                                                    mods: { size: 'xl', view: 'secondary', weight: 'light' },
                                                    content: '— Можно установить whitepaper как зависимость в проект или подключить файл со всеми стилями на страницу'
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'item',
                                        mix: { block: 'e-accordion', elem: 'item' },
                                        content: [
                                            {
                                                elem: 'question',
                                                mix: [
                                                    { block: 'e-accordion', elem: 'short' },
                                                    { block: 'text', mods: { size: 'xl', view: 'primary', weight: 'light', display: 'inline' } },
                                                ],
                                                content: '— Как передавать UI в разработку?'
                                            },
                                            {
                                                elem: 'answer',
                                                mix: { block: 'e-accordion', elem: 'more' },
                                                content: {
                                                    block: 'text',
                                                    mods: { size: 'xl', view: 'secondary', weight: 'light' },
                                                    content: '— В виде собранного прототипа вместе с набором используемых блоков'
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'item',
                                        mix: { block: 'e-accordion', elem: 'item' },
                                        content: [
                                            {
                                                elem: 'question',
                                                mix: [
                                                    { block: 'e-accordion', elem: 'short' },
                                                    { block: 'text', mods: { size: 'xl', view: 'primary', weight: 'light', display: 'inline' } },
                                                ],
                                                content: '— Можно ли использовать с Реактом?'
                                            },
                                            {
                                                elem: 'answer',
                                                mix: { block: 'e-accordion', elem: 'more' },
                                                content: {
                                                    block: 'text',
                                                    mods: { size: 'xl', view: 'secondary', weight: 'light' },
                                                    content: '— Можно использовать с любой технологией, которая умеет оперировать CSS-классами'
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'item',
                                        mix: { block: 'e-accordion', elem: 'item' },
                                        content: [
                                            {
                                                elem: 'question',
                                                mix: [
                                                    { block: 'e-accordion', elem: 'short' },
                                                    { block: 'text', mods: { size: 'xl', view: 'primary', weight: 'light', display: 'inline' } },
                                                ],
                                                content: '— Можно ли переопределить блоки?'
                                            },
                                            {
                                                elem: 'answer',
                                                mix: { block: 'e-accordion', elem: 'more' },
                                                content: {
                                                    block: 'text',
                                                    mods: { size: 'xl', view: 'secondary', weight: 'light' },
                                                    content: '— Все блоки дизайн-системы можно переопределять и доопределять на уровне проекта'
                                                }
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'item',
                                        mix: { block: 'e-accordion', elem: 'item' },
                                        content: [
                                            {
                                                elem: 'question',
                                                mix: [
                                                    { block: 'e-accordion', elem: 'short' },
                                                    { block: 'text', mods: { size: 'xl', view: 'primary', weight: 'light', display: 'inline' } },
                                                ],
                                                content: '— В чём отличие от Bootstrap?'
                                            },
                                            {
                                                elem: 'answer',
                                                mix: { block: 'e-accordion', elem: 'more' },
                                                content: {
                                                    block: 'text',
                                                    mods: { size: 'xl', view: 'secondary', weight: 'light' },
                                                    content: '— Дизайн-система предоставляет весь необходимый набор инструментов, позволяющий реализовать и гибко настроить интерфейсы любого уровня сложности и масштаба'
                                                }
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                },
                /* /FAQ */

                /* Community / Events */
                {
                    elem: 'container',
                    elemMods: { distribute: 'center', size: 'm' },
                    content: [
                        {
                            block: 'tpl-grid',
                            mix: { block: 'decorator', mods: { 'indent-b': '6xl' } },
                            mods: { 'xs-ratio': '1', 's-ratio': '1-1' },
                            content: [
                                {
                                    block: 'community',
                                    content: [
                                        {
                                            block: 'text',
                                            mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
                                            mods: { size: '3xl', view: 'primary' },
                                            content: 'Сообщество'
                                        },
                                        {
                                            elem: 'content',
                                            mix: { block: 'pt-list', mods: { distribute: 'between', 'vertical-align': 'center', bordered: true, 'space-v': 's' } },
                                            content: [
                                                {
                                                    elem: 'item',
                                                    mix: { block: 'pt-list', elem: 'item' },
                                                    tag: 'a',
                                                    attrs: { href: 'https://www.patreon.com/whitepapertools' },
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            mods: { size: 'l', view: 'secondary', weight: 'light' },
                                                            content: 'Поддержка'
                                                        },
                                                        {
                                                            block: 'text',
                                                            mods: { size: 'l', view: 'secondary', weight: 'light' },
                                                            content: 'Patreon'
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'item',
                                                    mix: { block: 'pt-list', elem: 'item' },
                                                    tag: 'a',
                                                    attrs: { href: 'https://github.com/orgs/whitepapertools/projects/3' },
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            mods: { size: 'l', view: 'secondary', weight: 'light' },
                                                            content: 'Борд с задачами'
                                                        },
                                                        {
                                                            block: 'text',
                                                            mods: { size: 'l', view: 'secondary', weight: 'light' },
                                                            content: '4 открытых'
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'item',
                                                    mix: { block: 'pt-list', elem: 'item' },
                                                    tag: 'a',
                                                    attrs: { href: 'https://t.me/whitepapertools' },
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            mods: { size: 'l', view: 'secondary', weight: 'light' },
                                                            content: 'Чат'
                                                        },
                                                        {
                                                            block: 'text',
                                                            mods: { size: 'l', view: 'secondary', weight: 'light' },
                                                            content: 'Telegram'
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'item',
                                                    mix: { block: 'pt-list', elem: 'item' },
                                                    tag: 'a',
                                                    attrs: { href: 'https://codepen.io/whitepapertools/' },
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            mods: { size: 'l', view: 'secondary', weight: 'light' },
                                                            content: 'Песочница'
                                                        },
                                                        {
                                                            block: 'text',
                                                            mods: { size: 'l', view: 'secondary', weight: 'light' },
                                                            content: 'Сodepen'
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'item',
                                                    mix: { block: 'pt-list', elem: 'item' },
                                                    tag: 'a',
                                                    attrs: { href: 'https://twitter.com/whitepapertools' },
                                                    content: [
                                                        {
                                                            block: 'text',
                                                            mods: { size: 'l', view: 'secondary', weight: 'light' },
                                                            content: 'Новости'
                                                        },
                                                        {
                                                            block: 'text',
                                                            mods: { size: 'l', view: 'secondary', weight: 'light' },
                                                            content: 'Twitter'
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    block: 'events',
                                    mix: [
                                        { block: 'theme', mods: { color: 'whitepaper-portal-brand' }},
                                        { block: 'pt-card' }
                                    ],
                                    content: [
                                        {
                                            elem: 'content',
                                            mix: { block: 'pt-card', elem: 'content' },
                                            content: [
                                                {
                                                    block: 'text',
                                                    mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
                                                    mods: { size: '3xl', view: 'primary' },
                                                    content: 'События'
                                                },
                                                {
                                                    block: 'pt-list',
                                                    content: [
                                                        {
                                                            elem: 'item',
                                                            elemMods: { distribute: 'between', 'vertical-align': 'center', border: 'bottom', 'space-v': 'xl' },
                                                            content: [
                                                                {
                                                                    block: 'text',
                                                                    mods: { size: 'l', view: 'primary', weight: 'light' },
                                                                    content: ' CSS MINSK JS, 2019'
                                                                },
                                                                {
                                                                    block: 'text',
                                                                    mods: { size: 'l', view: 'primary', weight: 'light' },
                                                                    content: 'Минск'
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            elem: 'item',
                                                            elemMods: { distribute: 'between', 'vertical-align': 'center', border: 'bottom', 'space-v': 'xl' },
                                                            content: [
                                                                {
                                                                    block: 'text',
                                                                    mods: { size: 'l', view: 'primary', weight: 'light' },
                                                                    content: 'РИТ++, 2019'
                                                                },
                                                                {
                                                                    block: 'text',
                                                                    mods: { size: 'l', view: 'primary', weight: 'light' },
                                                                    content: 'Москва'
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        },
                                        {
                                            elem: 'footer',
                                            mix: { block: 'pt-card', elem: 'footer', elemMods: { 'space-a': '2xl' }},
                                            content: [
                                                {
                                                    block: 'text',
                                                    mods: { size: 'l', view: 'secondary', weight: 'light' },
                                                    content: 'Если у вашей продуктовой команды есть потребность в персональной консультации, вы всегда можете связатьс с нами и договориться о частной лекции. Просто напишите нам на почту whatsup@whitepaper.tools'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
                /* Community / Events */

                /* Contribution / Learning */
                {
                    elem: 'content',
                    mix: { block: 'decorator', mods: { 'indent-b': '6xl' } },
                    content: {
                        elem: 'container',
                        elemMods: { distribute: 'center', size: 'm' },
                        content: [
                            {
                                block: 'tpl-grid',
                                mods: { 'xs-ratio': '1', 'm-ratio': '1-1', 'col-gap': 'full', 'row-gap': 'full' },
                                content: [
                                    {
                                        block: 'contribution',
                                        content: [
                                            {
                                                block: 'text',
                                                mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
                                                mods: { size: '3xl', view: 'primary' },
                                                content: 'Контрибьюторы'
                                            },
                                            {
                                                block: 'avatars',
                                                mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
                                                content: [
                                                    {
                                                        block: 'avatar',
                                                        content: [
                                                            {
                                                                elem: 'photo',
                                                                elemMods: { size: 's' },
                                                                tag: 'a',
                                                                attrs: {
                                                                    href: 'https://twitter.com/kirillback',
                                                                    style: 'display: block'
                                                                },
                                                                content: [
                                                                    {
                                                                        block: 'image',
                                                                        url: '/assets/team/kirill.jpg',
                                                                        width: 40
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'avatar',
                                                        content: [
                                                            {
                                                                elem: 'photo',
                                                                elemMods: { size: 's' },
                                                                content: [
                                                                    {
                                                                        elem: 'photo',
                                                                        elemMods: { size: 's' },
                                                                        tag: 'a',
                                                                        attrs: {
                                                                            href: 'https://twitter.com/NieriLight',
                                                                            style: 'display: block'
                                                                        },
                                                                        content: [
                                                                            {
                                                                                block: 'image',
                                                                                url: '/assets/team/ksusha.jpg',
                                                                                width: 40
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'avatar',
                                                        content: [
                                                            {
                                                                elem: 'photo',
                                                                elemMods: { size: 's' },
                                                                content: [
                                                                    {
                                                                        elem: 'photo',
                                                                        elemMods: { size: 's' },
                                                                        tag: 'a',
                                                                        attrs: {
                                                                            href: 'https://twitter.com/kolebayev',
                                                                            style: 'display: block'
                                                                        },
                                                                        content: [
                                                                            {
                                                                                block: 'image',
                                                                                url: '/assets/team/ilya.png',
                                                                                width: 40
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'avatar',
                                                        content: [
                                                            {
                                                                elem: 'photo',
                                                                elemMods: { size: 's' },
                                                                content: [
                                                                    {
                                                                        elem: 'photo',
                                                                        elemMods: { size: 's' },
                                                                        tag: 'a',
                                                                        attrs: {
                                                                            href: 'https://twitter.com/nitasoki?s=09',
                                                                            style: 'display: block'
                                                                        },
                                                                        content: [
                                                                            {
                                                                                block: 'image',
                                                                                url: '/assets/team/nikita.png',
                                                                                width: 40
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'avatar',
                                                        content: [
                                                            {
                                                                elem: 'photo',
                                                                elemMods: { size: 's' },
                                                                content: [
                                                                    {
                                                                        elem: 'photo',
                                                                        elemMods: { size: 's' },
                                                                        tag: 'a',
                                                                        attrs: {
                                                                            href: 'https://twitter.com/koloskof',
                                                                            style: 'display: block'
                                                                        },
                                                                        content: [
                                                                            {
                                                                                block: 'image',
                                                                                url: '/assets/team/misha.png',
                                                                                width: 40
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'avatar',
                                                        content: [
                                                            {
                                                                elem: 'photo',
                                                                elemMods: { size: 's' },
                                                                content: [
                                                                    {
                                                                        elem: 'photo',
                                                                        elemMods: { size: 's' },
                                                                        tag: 'a',
                                                                        attrs: {
                                                                            href: 'https://twitter.com/sergibysergi',
                                                                            style: 'display: block'
                                                                        },
                                                                        content: [
                                                                            {
                                                                                block: 'image',
                                                                                url: '/assets/team/serega.png',
                                                                                width: 40
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'avatar',
                                                        content: [
                                                            {
                                                                elem: 'photo',
                                                                elemMods: { size: 's' },
                                                                tag: 'a',
                                                                attrs: {
                                                                    href: 'https://twitter.com/julia_miocene',
                                                                    style: 'display: block'
                                                                },
                                                                content: [
                                                                    {
                                                                        block: 'image',
                                                                        url: '/assets/team/julya.jpg',
                                                                        width: 40
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'avatar',
                                                        content: [
                                                            {
                                                                elem: 'photo',
                                                                elemMods: { size: 's' },
                                                                tag: 'a',
                                                                attrs: {
                                                                    href: 'https://twitter.com/dandycolor',
                                                                    style: 'display: block'
                                                                },
                                                                content: [
                                                                    {
                                                                        block: 'image',
                                                                        url: '/assets/team/sava.jpg',
                                                                        width: 40
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'avatar',
                                                        content: [
                                                            {
                                                                elem: 'photo',
                                                                elemMods: { size: 's' },
                                                                tag: 'a',
                                                                attrs: {
                                                                    href: 'https://twitter.com/fooontic_',
                                                                    style: 'display: block'
                                                                },
                                                                content: [
                                                                    {
                                                                        block: 'image',
                                                                        url: '/assets/team/vadik.jpg',
                                                                        width: 40
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    }
                                                ]
                                            },
                                            {
                                                block: 'text',
                                                mods: { size: 'xl', view: 'secondary', weight: 'light' },
                                                content: 'Вся работа над дизайн системой ведётся открыто. Всегда есть несколько задач разного уровня сложности, поэтому любой человек может внести свой вклад'
                                            },
                                            {
                                                block: 'figured-button',
                                                tag: 'a',
                                                attrs: { href: 'https://github.com/whitepapertools' },
                                                mix: [
                                                    { block: 'decorator', mods: { 'indent-t': 'xl' } },
                                                    { block: 'theme', mods: { color: 'whitepaper-portal-brand' }},
                                                ],
                                                content: 'GitHub'
                                            }
                                        ]
                                    },
                                    {
                                        block: 'contribution',
                                        content: [
                                            {
                                                block: 'text',
                                                mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
                                                mods: { size: '3xl', view: 'primary' },
                                                content: 'Обучение'
                                            },
                                            {
                                                block: 'text',
                                                mods: { size: 'xl', view: 'secondary', weight: 'light' },
                                                content: [
                                                    'Для того, чтобы более уверено чувствовать себя в процессе сборки интерфейсов на whitepaper, мы рекоммендуем:',
                                                    {
                                                        block: 'text',
                                                        content: '1. Укрепить ваши знания по вёрстке;'
                                                    },
                                                    {
                                                        block: 'text',
                                                        content: '2. Ознакомится с БЭМ-методологией;'
                                                    },
                                                    {
                                                        block: 'text',
                                                        content: '3. Понять пост-обработку стилей.'
                                                    }
                                                ]



                                            },
                                            {
                                                block: 'figured-button',
                                                tag: 'a',
                                                attrs: { href: '/doc.html' },
                                                mix: [
                                                    { block: 'decorator', mods: { 'indent-t': 'xl' }},
                                                    { block: 'theme', mods: { color: 'whitepaper-portal-brand' }},
                                                ],
                                                content: 'Документация'
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                },
                /* Contribution / Learning */

                /* Start */
                {
                    elem: 'content',
                    mix: { block: 'decorator', mods: { 'indent-b': '6xl' } },
                    content: {
                        elem: 'container',
                        elemMods: { distribute: 'center', size: 'm' },
                        content: [
                            {
                                block: 'text',
                                mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
                                mods: { size: '3xl', view: 'primary' },
                                content: 'Как начать использовать'
                            },
                            {
                                block: 'text',
                                mods: { size: 'xl', view: 'secondary', weight: 'light' },
                                mix: { block: 'decorator', mods: { 'indent-b': '4xl' } },
                                content: 'Для старта прототипирования с нуля можно установить БЭМ-платформу с предустановленной дизайн-системой и настроенной сборкой. В уже имеющийся проект можно подключить файл со всеми стилями дизайн-системы или установить её как зависимость'
                            },



                            {
                                block: 'process',
                                content: [
                                    {
                                        elem: 'item',
                                        content: [
                                            {
                                                block: 'steps',
                                                content: [
                                                    {
                                                        block: 'step-badge',
                                                        mods: { view: 'scratch' },
                                                        content: [
                                                            {
                                                                block: 'pt-icon-plus',
                                                                mods: { 'vertical-align': 'top' },
                                                                content: [
                                                                    {
                                                                        elem: 'block',
                                                                        content: 'git clone'
                                                                    },
                                                                    {
                                                                        elem: 'icon',
                                                                        tag: 'a',
                                                                        attrs: { href: 'x-github-client://openRepo/https://github.com/whitepapertools/whitepaper-stub' },
                                                                        elemMods: { 'indent-l': 's' },
                                                                        content: [
                                                                            {
                                                                                block: 'icon',
                                                                                mods: { name: 'link', size: 'm', view: 'secondary' }
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'step-badge',
                                                        mods: { view: 'scratch' },
                                                        content: 'cd my-whitepaper-project'
                                                    },
                                                    {
                                                        block: 'step-badge',
                                                        mods: { view: 'scratch' },
                                                        content: 'npm install'
                                                    },
                                                    {
                                                        block: 'step-badge',
                                                        mods: { view: 'scratch' },
                                                        content: '0.0.0.0:8080/'
                                                    }
                                                ]
                                            }
                                        ]
                                    },
                                    {
                                        elem: 'item',
                                        content: [
                                            {
                                                elem: 'label',
                                                mix: { block: 'text', mods: { size: 'l', view: 'secondary' } },
                                                content: 'В работающем проекте:'
                                            },
                                            {
                                                block: 'steps',
                                                content: [
                                                    {
                                                        block: 'step-badge',
                                                        mods: { view: 'prod' },
                                                        content: [
                                                            {
                                                                block: 'pt-icon-plus',
                                                                mods: { 'vertical-align': 'top' },
                                                                content: [
                                                                    {
                                                                        elem: 'block',
                                                                        content: '<link rel="stylesheet"'
                                                                    },
                                                                    {
                                                                        elem: 'icon',
                                                                        tag: 'a',
                                                                        attrs: { href: 'https://whitepaper.tools/cdn/whitepaper-1.0.0.min.css', target: '_blank' },
                                                                        elemMods: { 'indent-l': 's' },
                                                                        content: [
                                                                            {
                                                                                block: 'icon',
                                                                                mods: { name: 'link', size: 'm', view: 'secondary' }
                                                                            }
                                                                        ]
                                                                    }
                                                                ]
                                                            }
                                                        ]
                                                    },
                                                    {
                                                        block: 'step-badge',
                                                        mods: { view: 'prod' },
                                                        content: 'npm install whitepaper-bem'
                                                    }
                                                ]
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                },
                /* /Start */

                /* Partners */
                {
                    elem: 'content',
                    mix: { block: 'decorator', mods: { 'indent-b': '6xl' } },
                    content: {
                        elem: 'container',
                        elemMods: { distribute: 'center', size: 'm' },
                        content: [
                            {
                                block: 'text',
                                mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
                                mods: { size: '3xl', view: 'primary' },
                                content: 'Партнеры и друзья'
                            },
                            {
                                block: 'tpl-grid',
                                mods: { 'xs-ratio': '1', 's-ratio': '1-1', 'm-ratio': '1-1-1-1', 'col-gap': 'full' },
                                content: [
                                    {
                                        block: 'partner',
                                        tag: 'a',
                                        attrs: {
                                            'href': 'https://yandex.ru',
                                            'target': '_blank'
                                        },
                                        content: [
                                            {
                                                block: 'image',
                                                url: '/assets/partners/yandex-logo.svg',
                                                width: 150
                                            }
                                        ]
                                    },
                                    {
                                        block: 'partner',
                                        tag: 'a',
                                        attrs: {
                                            'href': 'https://tochka.com',
                                            'target': '_blank'
                                        },
                                        content: [
                                            {
                                                block: 'image',
                                                url: '/assets/partners/tochka-logo.svg',
                                                width: 150
                                            }
                                        ]
                                    },
                                    {
                                        block: 'partner',
                                        tag: 'a',
                                        attrs: {
                                            'href': 'https://gazprom-neft.com',
                                            'target': '_blank',
                                            style: 'top: -8px;'
                                        },
                                        content: [
                                            {
                                                block: 'image',
                                                url: '/assets/partners/gpn-logo.svg',
                                                width: 150
                                            }
                                        ]
                                    },
                                    {
                                        block: 'partner',
                                        tag: 'a',
                                        attrs: {
                                            'href': 'https://bookmate.com',
                                            'target': '_blank'
                                        },
                                        content: [
                                            {
                                                block: 'image',
                                                url: '/assets/partners/bookmate-logo.svg',
                                                width: 150
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }
                },
                /* /Partners */

                /* Yandex.Metrika counter */
                {
                    block: 'count',
                    content: {
                        html: `<script type="text/javascript" >
                        (function (d, w, c) {
                                (w[c] = w[c] || []).push(function() {
                                        try {
                                                w.yaCounter50119540 = new Ya.Metrika2({
                                                        id:50119540,
                                                        clickmap:true,
                                                        trackLinks:true,
                                                        accurateTrackBounce:true,
                                                        webvisor:true
                                                });
                                        } catch(e) { }
                                });

                                var n = d.getElementsByTagName("script")[0],
                                        s = d.createElement("script"),
                                        f = function () { n.parentNode.insertBefore(s, n); };
                                s.type = "text/javascript";
                                s.async = true;
                                s.src = "https://mc.yandex.ru/metrika/tag.js";

                                if (w.opera == "[object Opera]") {
                                        d.addEventListener("DOMContentLoaded", f, false);
                                } else { f(); }
                        })(document, window, "yandex_metrika_callbacks2");
                </script>
                <noscript><div><img src="https://mc.yandex.ru/watch/50119540" style="position:absolute; left:-9999px;" alt="" /></div></noscript>`
                    }
                },
                /* /Yandex.Metrika counter */

                /* Footer */
                {
                    block: 'footer',
                    mix: { block: 'tpl-layout' },
                    content: [
                        {
                            elem: 'content',
                            mix: { block: 'tpl-layout', elem: 'content' },
                            content: [
                                {
                                    elem: 'container',
                                    mix: { block: 'tpl-layout', elem: 'container', elemMods: { distribute: 'center', size: 'm' }},
                                    content: [
                                        {
                                            elem: 'inner',
                                            mix: { block: 'tpl-grid', mods: { 's-columns': '12', 'm-columns': '12', 'l-columns': '12', 'col-gap': 'full', 'raw-gap': 'full' }},
                                            content: [
                                                {
                                                    elem: 'logo',
                                                    mix: { block: 'tpl-grid', elem: 'fraction', elemMods: { 'xs-col': '3', 's-col': '3', 'm-col': '4', 'l-col': '4' }},
                                                    content: [
                                                        {
                                                            block: 'image',
                                                            url: '/assets/partners/whitepaper.svg',
                                                            width: 230
                                                        }
                                                    ]
                                                },
                                                {
                                                    elem: 'menu',
                                                    mix: { block: 'tpl-grid', elem: 'fraction', elemMods: { 'xs-col': '3', 's-col': '3', 'm-col': '8', 'l-col': '8' }},
                                                    content: [
                                                        {
                                                            elem: 'menu-list',
                                                            mix: { block: 'tpl-grid', mods: { 'xs-ratio': '1', 's-ratio': '1-1', 'm-ratio': '1-1-1', 'col-gap': 'half' }},
                                                            content: [
                                                                {
                                                                    elem: 'unit',
                                                                    content: [
                                                                        // {
                                                                        //  elem: 'item',
                                                                        //  tag: 'a',
                                                                        //  attrs: {
                                                                        //      href: '#'
                                                                        //  },
                                                                        //  content: [
                                                                        //      {
                                                                        //          block: 'text',
                                                                        //          mods: { size: 'l', view: 'primary' },
                                                                        //          mix: { block: 'decorator', mods: { 'indent-b': 's' }},
                                                                        //          tag: 'a',
                                                                        //          attrs: {
                                                                        //              href: 'http://whitepaper.tools',
                                                                        //              style: 'text-decoration: none; display: block'
                                                                        //          },
                                                                        //          content: 'О дизайн-системе'
                                                                        //      }
                                                                        //  ]
                                                                        // },
                                                                        // {
                                                                        //  elem: 'item',
                                                                        //  tag: 'a',
                                                                        //  attrs: {
                                                                        //      href: '#'
                                                                        //  },
                                                                        //  content: [
                                                                        //      {
                                                                        //          block: 'text',
                                                                        //          mods: { size: 'l', view: 'primary' },
                                                                        //          mix: { block: 'decorator', mods: { 'indent-b': 's' }},
                                                                        //          tag: 'a',
                                                                        //          attrs: {
                                                                        //              href: 'http://whitepaper.tools',
                                                                        //              style: 'text-decoration: none; display: block'
                                                                        //          },
                                                                        //          content: 'Контрибьюторы'
                                                                        //      }
                                                                        //  ]
                                                                        // },
                                                                        // {
                                                                        //  elem: 'item',
                                                                        //  tag: 'a',
                                                                        //  attrs: {
                                                                        //      href: '#'
                                                                        //  },
                                                                        //  content: [
                                                                        //      {
                                                                        //          block: 'text',
                                                                        //          mods: { size: 'l', view: 'primary' },
                                                                        //          mix: { block: 'decorator', mods: { 'indent-b': 's' }},
                                                                        //          tag: 'a',
                                                                        //          attrs: {
                                                                        //              href: 'http://whitepaper.tools',
                                                                        //              style: 'text-decoration: none; display: block'
                                                                        //          },
                                                                        //          content: 'ПрессКит'
                                                                        //      }
                                                                        //  ]
                                                                        // }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'unit',
                                                                    content: [

                                                                        {
                                                                            elem: 'item',
                                                                            content: [
                                                                                {
                                                                                    block: 'text',
                                                                                    mods: { size: 'l', view: 'primary' },
                                                                                    mix: { block: 'decorator', mods: { 'indent-b': 's' }},
                                                                                    tag: 'a',
                                                                                    attrs: { href: 'https://github.com/whitepapertools' },
                                                                                    content: 'Github'
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            content: [
                                                                                {
                                                                                    block: 'text',
                                                                                    mods: { size: 'l', view: 'primary' },
                                                                                    mix: { block: 'decorator', mods: { 'indent-b': 's' }},
                                                                                    tag: 'a',
                                                                                    attrs: { href: 'https://codepen.io/whitepapertools/' },
                                                                                    content: 'CodePen'
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            content: [
                                                                                {
                                                                                    block: 'text',
                                                                                    mods: { size: 'l', view: 'primary' },
                                                                                    mix: { block: 'decorator', mods: { 'indent-b': 's' }},
                                                                                    tag: 'a',
                                                                                    attrs: { href: 'https://t.me/whitepapertools' },
                                                                                    content: 'Telegram'
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            content: [
                                                                                {
                                                                                    block: 'text',
                                                                                    mods: { size: 'l', view: 'primary' },
                                                                                    mix: { block: 'decorator', mods: { 'indent-b': 's' }},
                                                                                    tag: 'a',
                                                                                    attrs: { href: 'https://twitter.com/whitepapertools' },
                                                                                    content: 'Twitter'
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                },
                                                                {
                                                                    elem: 'unit',
                                                                    content: [
                                                                        {
                                                                            elem: 'item',
                                                                            content: [
                                                                                {
                                                                                    block: 'text',
                                                                                    mods: { size: 'l', view: 'primary' },
                                                                                    mix: { block: 'decorator', mods: { 'indent-b': 's' }},
                                                                                    tag: 'a',
                                                                                    attrs: { href: '/doc.html' },
                                                                                    content: 'Документация'
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            content: [
                                                                                {
                                                                                    block: 'text',
                                                                                    mods: { size: 'l', view: 'primary' },
                                                                                    mix: { block: 'decorator', mods: { 'indent-b': 's' }},
                                                                                    tag: 'a',
                                                                                    attrs: { href: '/starter-kit.html' },
                                                                                    content: 'Starter Kit'
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            content: [
                                                                                {
                                                                                    block: 'text',
                                                                                    mods: { size: 'l', view: 'primary' },
                                                                                    mix: { block: 'decorator', mods: { 'indent-b': 's' }},
                                                                                    tag: 'a',
                                                                                    attrs: { href: '/community.html' },
                                                                                    content: 'Сообщество'
                                                                                }
                                                                            ]
                                                                        },
                                                                        {
                                                                            elem: 'item',
                                                                            content: [
                                                                                {
                                                                                    block: 'text',
                                                                                    mods: { size: 'l', view: 'primary' },
                                                                                    mix: { block: 'decorator', mods: { 'indent-b': 's' }},
                                                                                    tag: 'a',
                                                                                    attrs: { href: '/changelog.html' },
                                                                                    content: 'Changelog'
                                                                                }
                                                                            ]
                                                                        }
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
                /* /Footer */

            ]
        }
    ]
};
