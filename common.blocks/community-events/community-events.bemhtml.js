block('community-events')(
  content()(function (n, ctx) {
    return {
      elem: 'wrapper',
      mix: [
        { block: 'pt-card' },
        { block: 'decorator', mods: { 'indent-b': '2xl' } }
      ],
      // attrs: { style: 'background:#000; min-width: 320px;' },
      // attrs: { style: `background: linear-gradient(180deg, rgba(0, 0, 0, 0.0001) 25.45%, rgba(30, 50, 62, 0.444599) 54.31%, #0D0E0F 100%), url(../../assets/community-events/${ctx.bgImg}); background-size: cover;` },
      content: [
        {
          elem: 'bg',
          mix: { block: 'pt-card', elem: 'image', elemMods: { size: 'cover' } },
          // attrs: { style: 'background-image: url(../../assets/community-events/pic1.jpg)' },
          content: [

          ]
        },
        {
          elem: 'content',
          mix: { block: 'pt-card', elem: 'content', elemMods: { 'vertical-align': 'center', distribute: 'center', 'space-a': 'xl' } },
          content: [
            {
              elem: 'info',
              content: [
                {
                  elem: 'graphics',
                  mix: { block: 'decorator', mods: { 'indent-b': 'xl' } },
                  content: [
                    {
                      elem: 'userpic',
                      content: [
                        {
                          block: 'avatar',
                          content: [
                            {
                              elem: 'photo',
                              elemMods: { size: 'm' },
                              content: [
                                {
                                  block: 'image',
                                  url: ctx.speakerPicUrl,
                                  width: 60
                                }
                              ]
                            }
                          ]
                        }
                      ]
                    },
                    {
                      elem: 'conf-logo',
                      content: [
                        {
                          block: 'brand-logo',
                          mods: { name: ctx.confName, size: 'm' }
                        }
                      ]
                    }
                  ]
                },
                {
                  block: 'text',
                  mods: { size: '2xl', view: 'primary', align: 'center', weight: 'light' },
                  attrs: { style: 'line-height: var(--line-height-typo-xl);' },
                  mix: { block: 'decorator', mods: { 'indent-b': 's' } },
                  content: ctx.speechName
                },
                {
                  block: 'text',
                  mods: { size: 'm', view: 'secondary', align: 'center', font: 'sans', weight: 'light' },
                  attrs: { style: 'width: 100%;' },
                  content: ctx.additionalInfo
                }
              ]
            }
          ]
        },
        {
          elem: 'footer',
          mix: { block: 'pt-card', elem: 'footer', elemMods: { distribute: 'center', 'space-a': 'xl' } },
          content: [
            {
              elem: 'source-text',
              tag: 'a',
              attrs: { href: ctx.linkUrl },
              mix: { block: 'text', mods: { size: 'm', view: 'link', weight: 'light', align: 'center' } },
              content: ctx.linkText
            },
            (
              function() {
                if (ctx.linkText2 != undefined && ctx.linkUrl2 != undefined) {
                  return (
                    {
                      elem: 'source-text',
                      tag: 'a',
                      attrs: { href: ctx.linkUrl2 },
                      mix: [
                        { block: 'text', mods: { size: 'm', view: 'link', weight: 'light', align: 'center' } },
                        { block: 'decorator', mods: { 'indent-l': 'xl' } }
                      ],
                      content: ctx.linkText2
                    }
                  )
                }
              }
            )()
          ]
        }
      ]
    }
  })
);
