block('change-version')(
  content()(function(n, ctx) {
      // записывает данные со старницы в массив
      var majorArray   = ctx.majorList; // мажоры
      var minorArray   = ctx.minorList; // миноры
      var patchArray   = ctx.patchList; // багфиксы

      // создает ui компонент с контентом
      var majorComponents = majorArray.map(item => {
        return {
            elem: 'item',
            elemMods: { 'space-b': 'm' },
            content: [
              {
                block: 'change-item',
                mix: { block: 'text', mods: { view: 'secondary' }},
                content: item
              }
            ]
      }});

      var minorComponents = minorArray.map(item => {
        return {
            elem: 'item',
            elemMods: { 'space-b': 'm' },
            content: [
              {
                block: 'change-item',
                mix: { block: 'text', mods: { view: 'secondary' }},
                content: item
              }
            ]
      }});

      var patchComponents = patchArray.map(item => {
        return {
            elem: 'item',
            elemMods: { 'space-b': 'm' },
            content: [
              {
                block: 'change-item',
                mix: { block: 'text', mods: { view: 'secondary' }},
                content: item
              }
            ]
      }});

      return {
        // {
          block: 'tpl-grid',
          mods: { columns: '12', 'col-gap': 'full' },
          mix: { block: 'decorator', mods: { 'indent-b': 'xxxxxl' }},
          content: [
            // левая колонка
            {
              elem: 'fraction',
              elemMods: { col: '5' },
              content: [
                {
                  block: 'version-number',
                  mix: { block: 'text', mods: { size: 'xxxxl', weight: 'bold', view: 'primary' }},
                  tag: 'a',
                  attrs: {
                    href: ctx.versionLink,
                    id: ctx.versionId,
                    style: 'text-decoration: none;'
                  },
                  content: this.ctx.number
                },
                {
                  block: 'version-description',
                  mix: [
                    { block: 'text', mods: { size: 'l', view: 'secondary' }},
                    { block: 'decorator', mods: { 'space-t': 'm' }},
                  ],
                  content: this.ctx.description
                },
                {
                  block: 'version-date',
                  mix: [
                    { block: 'text', mods: { size: 'm', view: 'ghost' }},
                    { block: 'decorator', mods: { 'space-t': 's' }},
                  ],
                  content: this.ctx.date
                },
              ]
            },
            // правая колонка
            {
              elem: 'fraction',
              elemMods: {col: '7'},
              content: [
                {
                  block: 'changes-description',
                  mix: { block: 'decorator', mods: { 'indent-l': 'xxl', 'indent-t': 'l' }},
                  content: [
                    // мажоры: Важные изменения
                    {
                      elem: 'major-changes',
                      mix: { block: 'decorator', mods: { 'indent-b': 'l' }},
                      content: [
                        {
                          block: 'text',
                          mods: { size: 'xxl', view: 'primary' },
                          mix: [
                            // { block: 'decorator', mods: { 'indent-t': 'xs' }},
                            { block: 'decorator', mods: { 'indent-b': 'm' }},
                          ],
                          content: this.ctx.major
                        },
                        {
                          block: 'pt-list',
                          content: [ majorComponents
                            /*
                            {
                              elem: 'item',
                              elemMods: { 'space-b': 'm' },
                              content: mda
                              // content: ''
                              // content: [
                                // {
                                      // block: 'change-item',
                                      // mix: { block:'text', mods: { view:'secondary' }},
                                      // content: this.ctx.major1,

                                      // block('change-item')(
                                      //   content()(function(n, ctx) {
                                      //     var arr = ctx.major1;
                                      //     arr.map(function(item) {
                                      //         return {
                                      //             // block: 'change-item',
                                      //             mix: { block: 'text', mods: { view: 'secondary' }},
                                      //             content: item
                                      //         }
                                      //     });
                                      //   })
                                      // )
                                // }
                              // ]
                            },
                            */
                            /*
                            мажоры 2-5
                            {
                              elem: 'item',
                              elemMods: { 'space-b': 'm' },
                              mix: { block:'text', mods: { view:'secondary' }},
                              content: [
                                {
                                  block: 'change-item',
                                  content: this.ctx.major2
                                }
                              ]
                            },
                            {
                              elem: 'item',
                              elemMods: { 'space-b': 'm' },
                              mix: { block:'text', mods: { view:'secondary' }},
                              content: [
                                {
                                  block: 'change-item',
                                  content: this.ctx.major3
                                }
                              ]
                            },
                            {
                              elem: 'item',
                              elemMods: { 'space-b': 'm' },
                              mix: { block:'text', mods: { view:'secondary' }},
                              content: [
                                {
                                  block: 'change-item',
                                  content: this.ctx.major4
                                }
                              ]
                            },
                            {
                              elem: 'item',
                              elemMods: { 'space-b': 'm' },
                              mix: { block:'text', mods: { view:'secondary' }},
                              content: [
                                {
                                  block: 'change-item',
                                  content: this.ctx.major5
                                }
                              ]
                            }
                            */
                          ]
                        }
                      ]
                    },
                    // миноры: Изменения
                    {
                      elem: 'minor',
                      mix: { block:'decorator', mods: { 'indent-b': 'l' }},
                      content: [
                        {
                          block: 'text',
                          mods: { size: 'xxl', view: 'primary' },
                          mix: [
                            // { block: 'decorator', mods: { 'indent-t': 'xs' }},
                            { block: 'decorator', mods: { 'indent-b': 'm' }},
                          ],
                          content: this.ctx.minor
                        },
                        {
                          block: 'pt-list',
                          content: [ minorComponents
                            /*
                            {
                              elem: 'item',
                              elemMods: { 'space-b': 'm' },
                              content: [
                                {
                                  block: 'change-item',
                                  mix: { block:'text', mods: { view:'secondary' }},
                                  content: this.ctx.minor1
                                }
                              ]
                            },
                            {
                              elem: 'item',
                              elemMods: { 'space-b': 'm' },
                              mix: { block:'text', mods: { view: 'secondary' }},
                              content: [
                                {
                                  block: 'change-item',
                                  content: this.ctx.minor2
                                }
                              ]
                            },
                            {
                              elem: 'item',
                              elemMods: { 'space-b': 'm' },
                              mix: { block:'text', mods: { view: 'secondary' }},
                              content: [
                                {
                                  block: 'change-item',
                                  content: this.ctx.minor3
                                }
                              ]
                            },
                            {
                              elem: 'item',
                              elemMods: { 'space-b': 'm' },
                              mix: { block:'text', mods: { view: 'secondary' }},
                              content: [
                                {
                                  block: 'change-item',
                                  content: this.ctx.minor4
                                }
                              ]
                            },
                            {
                              elem: 'item',
                              elemMods: { 'space-b': 'm' },
                              mix: { block:'text', mods: { view: 'secondary' }},
                              content: [
                                {
                                  block: 'change-item',
                                  content: this.ctx.minor5
                                }
                              ]
                            },
                            */
                          ]
                        }
                      ]
                    },
                    // патчи: Багфиксы
                    {
                      elem: 'patch',
                      mix: { block:'decorator', mods: { 'indent-b': 'l' }},
                      content: [
                        {
                          block: 'text',
                          mods: { size: 'xxl', view: 'primary' },
                          mix: [
                            // { block: 'decorator', mods: { 'indent-t': 'xs' }},
                            { block: 'decorator', mods: { 'indent-b': 'm' }},
                          ],
                          content: this.ctx.patch
                        },
                        {
                          block: 'pt-list',
                          content: [ patchComponents
                            /*
                            {
                              elem: 'item',
                              elemMods: { 'space-b': 'm' },
                              content: [
                                {
                                  block: 'change-item',
                                  mix: { block:'text', mods: { view:'secondary' }},
                                  content: this.ctx.patch1
                                }
                              ]
                            },
                            {
                              elem: 'item',
                              elemMods: { 'space-b': 'm' },
                              mix: { block:'text', mods: { view:'secondary' }},
                              content: [
                                {
                                  block: 'change-item',
                                  content: this.ctx.patch2
                                }
                              ]
                            },
                            {
                              elem: 'item',
                              elemMods: { 'space-b': 'm' },
                              mix: { block:'text', mods: { view:'secondary' }},
                              content: [
                                {
                                  block: 'change-item',
                                  content: this.ctx.patch3
                                }
                              ]
                            },
                            {
                              elem: 'item',
                              elemMods: { 'space-b': 'm' },
                              mix: { block:'text', mods: { view:'secondary' }},
                              content: [
                                {
                                  block: 'change-item',
                                  content: this.ctx.patch4
                                }
                              ]
                            },
                            {
                              elem: 'item',
                              elemMods: { 'space-b': 'm' },
                              mix: { block:'text', mods: { view:'secondary' }},
                              content: [
                                {
                                  block: 'change-item',
                                  content: this.ctx.patch5
                                }
                              ]
                            }
                            */
                          ]
                        }
                      ]
                    },
                  ]
                }
              ]
            },
          ]
      }
    // )
  }),
);
