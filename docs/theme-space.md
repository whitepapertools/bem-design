# Отступы

Переменные отступов используются как для ритма внутри сеток, так и для обозначения уровней вложенности и разделения смысловых сущностей внутри паттернов.

<div class="tpl-grid tpl-grid_s-ratio_1-1-1 tpl-grid_m-ratio_1-1-1-1 tpl-grid_row-gap_third decorator decorator_indent-b_xxxxl" style="padding-top: 0px; grid-row-gap: var(--col-gap-third);">
    <div class="space">
        <div class="space__image">
            <div class="space-image space-image_size_xxxxxxl"></div>
        </div>
        <code>--space-xxxxxxl</code>
    </div>
    <div class="space">
        <div class="space__image">
            <div class="space-image space-image_size_xxxxxl"></div>
        </div>
        <code>--space-xxxxxl</code>
    </div>
    <div class="space">
        <div class="space__image">
            <div class="space-image space-image_size_xxxxl"></div>
        </div>
        <code>--space-xxxxl</code>
    </div>
    <div class="space">
        <div class="space__image">
            <div class="space-image space-image_size_xxxl"></div>
        </div>
        <code>--space-xxxl</code>
    </div>
    <div class="space">
        <div class="space__image">
            <div class="space-image space-image_size_xxl"></div>
        </div>
        <code>--space-xxl</code>
    </div>
    <div class="space">
        <div class="space__image">
            <div class="space-image space-image_size_xl"></div>
        </div>
        <code>--space-xl</code>
    </div>
    <div class="space">
        <div class="space__image">
            <div class="space-image space-image_size_l"></div>
        </div>
        <code>--space-l</code>
    </div>
    <div class="space">
        <div class="space__image">
            <div class="space-image space-image_size_m"></div>
        </div>
        <code>--space-m</code>
    </div>
    <div class="space">
        <div class="space__image">
            <div class="space-image space-image_size_s"></div>
        </div>
        <code>--space-s</code>
    </div>
    <div class="space">
        <div class="space__image">
            <div class="space-image space-image_size_xs"></div>
        </div>
        <code>--space-xs</code>
    </div>
    <div class="space">
        <div class="space__image">
            <div class="space-image space-image_size_xxs"></div>
        </div>
        <code>--space-xxs</code>
    </div>
    <div class="space">
        <div class="space__image">
            <div class="space-image space-image_size_xxxs"></div>
        </div>
        <code>--space-xxxs</code>
    </div>
</div>

Эти переменные указываются для значений модификаторов паттернов на внешние и внутренние отступы. В дефолтной теме используются отступы с модулем 4px + самое маленькое значение 2px.
Также эти переменные используется для блока `decorator`, который можно миксовать к блокам на страницах, чтобы не дублировать CSS и держать интерфейс консистентным.

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
## Decorator

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
indent-h               | auto                                                                     | Центрирование блока по горизонтали
indent-h               | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl / xxxxxl / xxxxxxl | Внешний отступ по горизонтали
indent-t               | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl / xxxxxl / xxxxxxl | Внешний отступ сверху
indent-r               | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl / xxxxxl / xxxxxxl | Внешний отступ справа
indent-b               | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl / xxxxxl / xxxxxxl | Внешний отступ снизу
indent-l               | xxxs / xxs / xs / s / m / l / xl / xxl / xxxl / xxxxl / xxxxxl / xxxxxxl | Внешний отступ слева
