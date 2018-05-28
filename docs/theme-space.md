# Отступы

Используется для значений модификаторов паттернов на внешние и внутренние отступы. В дефолтной теме используются отступы с модулем 4px + самое маленькое значение 2px.
Также используется для блока `decorator`, который можно миксовать к блокам на страницах, чтобы не дублировать CSS и держать интерфейс консистентным.

<iframe height='265' scrolling='no' title='theme. space' src='//codepen.io/bem_design/embed/b810a2c80814d7c696fb08f2d1d7932e/?height=265&theme-id=0&default-tab=css&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/bem_design/pen/b810a2c80814d7c696fb08f2d1d7932e/'>theme. space</a> by BEM DESIGN (<a href='https://codepen.io/bem_design'>@bem_design</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Эти переменные можно использовать, как в локальных стилях блока, так и в разметке с помощью специального блока `decorator`.

```css
.your-block {
	padding: var(--space-m);
}
```
```js
{
	block: 'your-block',
	mix: { block: 'decorator', mods: { 'indent-a': 'l', 'space-a': 'l' } }
}
```

Модификаторы decorator | Значение                                                                 | Описание
---------------------- | ------------------------------------------------------------------------ | ----------------
space-a                | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl                    | Внутренний отступ со всех сторон
space-v                | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl / xxxxxl / xxxxxxl | Внутренний отступ по вертикали
space-h                | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl / xxxxxl / xxxxxxl | Внутренний отступ по горизонтали
space-t                | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl / xxxxxl / xxxxxxl | Внутренний отступ сверху
space-r                | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl / xxxxxl / xxxxxxl | Внутренний отступ справа
space-b                | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl / xxxxxl / xxxxxxl | Внутренний отступ снизу
space-l                | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl / xxxxxl / xxxxxxl | Внутренний отступ слева
indent-a               | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl / xxxxxl / xxxxxxl | Внешний отступ со всех сторон
indent-v               | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl / xxxxxl / xxxxxxl | Внешний отступ по вертикали
indent-h               | auto                                                                     | Ценртирование блока по горизонтали
indent-h               | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl / xxxxxl / xxxxxxl | Внешний отступ по горизонтали
indent-t               | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl / xxxxxl / xxxxxxl | Внешний отступ сверху
indent-r               | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl / xxxxxl / xxxxxxl | Внешний отступ справа
indent-b               | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl / xxxxxl / xxxxxxl | Внешний отступ снизу
indent-l               | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl / xxxxxl / xxxxxxl | Внешний отступ слева