# Тема

Блок, отвечающий за глобальные переменные цветов, типографики и отступов.
Миксуется к самому внешнему блоку, например `body`, и к секциям с измененной темой.

```json
{
	block: 'page',
	mix: { 
		block: 'theme',
		mods: { color: 'default',	// цвета
				space: 'default',	// отступы
				menu: 'default',	// размер меню
				size: 'default',	// типографика
				gap: 'medium' } 	// отступы в сетках
	}
}
```

## color

Цвета делятся на несколько частей: 
+ **Базовые цвета.** От них наследуются все остальные. Использовать их в других случаях не рекомендуется.
+ **Цвета фонов**
+ **Цвета текста**
+ **Цвета ссылок**

<iframe height='500' scrolling='no' title='289dd885a6773907fdff0546ce3a820a' src='//codepen.io/bem_design/embed/289dd885a6773907fdff0546ce3a820a/?height=265&theme-id=0&default-tab=css&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/bem_design/pen/289dd885a6773907fdff0546ce3a820a/'>289dd885a6773907fdff0546ce3a820a</a> by BEM DESIGN (<a href='https://codepen.io/bem_design'>@bem_design</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

В теме используются postcss переменные для функций. Если тебе не нужно дополнительно высчитывать цвет, используй custom properties. Так можно менять темы на странице без перезагрузки.

```css
	background: var(--color-brand);
```

Для создания собственного набора тем скопируй файлы дефолтных тем и создай свои на [уровне проекта](http://bem.design/doc.html#/bem-design-stub)

## space

Используется для значений модификаторов паттернов на внешние и внутренние отступы.
Также используется для блока `decorator`, который можно миксовать к блокам на страницах, чтобы не дублировать CSS и держать интерфейс консистентным.

<iframe height='265' scrolling='no' title='theme. space' src='//codepen.io/bem_design/embed/b810a2c80814d7c696fb08f2d1d7932e/?height=265&theme-id=0&default-tab=css&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/bem_design/pen/b810a2c80814d7c696fb08f2d1d7932e/'>theme. space</a> by BEM DESIGN (<a href='https://codepen.io/bem_design'>@bem_design</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

Эти переменные можно использовать, как в локальных блоках, так и в качестве `decorator` в разметке.

```json
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

## size

Задает размеры и высоты строк для блока `text`

<iframe height='265' scrolling='no' title='theme. size' src='//codepen.io/bem_design/embed/ada0df54d5ab15b80076cb883f81fe08/?height=265&theme-id=0&default-tab=css&embed-version=2&editable=true' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/bem_design/pen/ada0df54d5ab15b80076cb883f81fe08/'>theme. size</a> by BEM DESIGN (<a href='https://codepen.io/bem_design'>@bem_design</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

## menu

Задаёт две переменные

```css
:root {
	--menu-unfold: 300px;	// ширина развернутого бокового меню
	--menu-fold: 56px;		// ширина свернутого бокового меню
}
```

## gap

Задаёт расстояния между колонками и строками сетки. Значений всего три: `small`, `medium`, `large`