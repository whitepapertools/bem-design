# Типографика

Переменные размеров используются в текстовых блоках и подчёркивают информационную иерархию.

Они задают размер и высоту строк для контентного блока [text](content-text.md).
Эти переменные могут использоваться в локальных стилях, но только когда нет возможности использовать блок [text](content-text.md).

```css
:root {
    /* Размер текста */
    --size-typo-xs: 11px;
    --size-typo-s: 13px;
    --size-typo-m: 15px;
    --size-typo-l: 18px;
    --size-typo-xl: 20px;
    --size-typo-xxl: 24px;
    --size-typo-xxxl: 32px;
    --size-typo-xxxxl: 48px;
    --size-typo-xxxxxl: 72px;
    --size-typo-xxxxxxl: 96px;

    /* Межстрочный интервал */
    --line-height-typo-xs: 15px;
    --line-height-typo-s: 18px;
    --line-height-typo-m: 21px;
    --line-height-typo-l: 25px;
    --line-height-typo-xl: 28px;
    --line-height-typo-xxl: 34px;
    --line-height-typo-xxxl: 42px;
    --line-height-typo-xxxxl: 62px;
    --line-height-typo-xxxxxl: 82px;
    --line-height-typo-xxxxxxl: 115px;
}
```

Стили модификаторов на блоке текст можно посмотреть [здесь](http://whitepaper.tools/doc.html#/content-text).
