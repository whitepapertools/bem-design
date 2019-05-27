# Цвета

Переменные цветов используются в модификациях блоков и типографики, подчёркивая их смысл или состояние. Все переменные для цветов называются по смыслу и месту их использования. Они не зависят от значения цвета.

?> Для вычисления цветов мы используем плагин [postcss-color-function](https://github.com/postcss/postcss-color-function), но также подойдёт любой другой популярный препроцессор.

Цвета делятся на несколько групп:
## Базовые цвета
От них наследуются все остальные. Использовать их в других случаях не рекомендуется. С префиксом `color-base-`
<div class="tpl-grid tpl-grid_s-ratio_1-1 tpl-grid_col-gap_two-thirds tpl-grid_row-gap_third decorator decorator_indent-b_xxxxl" style="padding-top: 0px; grid-row-gap: var(--col-gap-third);">
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_base"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-base-base: #ffffff;</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_essential"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-base-essential: #000000;</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_project"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-base-project: #0056b3;</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_phantom"></div>
        </div>
        <div class="pt-icon-plus__phantom">
            <code>$color-base-phantom: #000000;</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_path"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-base-path: #000000;</code>
        </div>
    </div>
</div>

## Статусные цвета
5 цветов для статусов. Они не наследуются от основной палитры, но влияют на статусные цвета текста и фонов блоков. С префиксом `color-base-`

<div class="tpl-grid tpl-grid_s-ratio_1-1 tpl-grid_col-gap_two-thirds tpl-grid_row-gap_third decorator decorator_indent-b_xxxxl" style="padding-top: 0px; grid-row-gap: var(--col-gap-third);">
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_success"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-base-success: #00985f;</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_warning"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-base-warning: #ff9900;</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_alert"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-base-alert: #ff3333;</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_system"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-base-system: #778a9b;</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_normal"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-base-normal: #dde3e5;</code>
        </div>
    </div>
</div>


## Цвета фонов

С префиксом `--color-bg-`

<div class="tpl-grid tpl-grid_row-gap_third decorator decorator_indent-b_xxxxl" style="padding-top: 0px; grid-row-gap: var(--col-gap-third);">
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_brand"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-bg-brand: $color-base-project;</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_action"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-bg-action: color($color-base-project l(+15%));</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_selection"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-bg-selection: color($color-base-project h(-1) l(+31%));</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_hover"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-bg-hover: color($color-base-base a(15%));</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_border"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-bg-border: color($color-base-phantom a(5%));</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_stripe"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-bg-stripe: color($color-base-phantom a(4%));</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_ghost"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-bg-ghost: color($color-base-phantom a(8%));</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_default"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-bg-default: $color-base-essential;</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_tone"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-bg-tone: color($color-base-phantom a(90%));</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_soft"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-bg-soft: color($color-base-essential a(97%));</code>
        </div>
    </div>
</div>

<div class="tpl-grid tpl-grid_row-gap_third decorator decorator_indent-b_xxxxl" style="padding-top: 0px; grid-row-gap: var(--col-gap-third);">
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_success"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-bg-success: $color-base-success;</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_alert"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-bg-alert: $color-base-alert;</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_warning"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-bg-warning: $color-base-warning;</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_normal"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-bg-normal: $color-base-normal;</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_system"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-bg-system: $color-base-system;</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_link"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-bg-link: color($color-base-path h(-7%) s(-13) l(+14) a(40%));</code>
        </div>
    </div>
</div>

## Цвета текста

С префиксом `--color-typo-`

<div class="tpl-grid tpl-grid_row-gap_third decorator decorator_indent-b_xxxxl" style="padding-top: 0px; grid-row-gap: var(--col-gap-third);">
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_typo-brand"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-typo-brand: $color-base-project;</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_typo-primary"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-typo-primary: $color-base-base;</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_typo-promo"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-typo-promo: color($color-base-base a(80%));</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_typo-secondary"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-typo-secondary: color($color-base-base a(60%));</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_typo-ghost"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-typo-ghost: color($color-base-base a(30%));</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_typo-disable"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-typo-disable: color($color-base-base a(30%));</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_typo-success"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-typo-success: $color-base-success;</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_typo-warning"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-typo-warning: $color-base-warning;</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_typo-alert"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-typo-alert: $color-base-alert;</code>
        </div>
    </div>
</div>

## Цвета ссылок

С префиксом `--color-link`

<div class="tpl-grid tpl-grid_row-gap_third decorator decorator_indent-b_xxxxl" style="padding-top: 0px; grid-row-gap: var(--col-gap-third);">
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_typo-brand"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-link: $color-base-path;</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_typo-primary"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-link-external: $color-base-path;</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_typo-promo"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-link-minor: color($color-base-path h(+22) s(-80%) l(+13%));</code>
        </div>
    </div>
    <div class="pt-icon-plus pt-icon-plus_vertical-align_center">
        <div class="pt-icon-plus__icon pt-icon-plus__icon_indent-r_s">
            <div class="color color_view_typo-secondary"></div>
        </div>
        <div class="pt-icon-plus__block">
            <code>$color-link-hover: color($color-base-path l(-7%));</code>
        </div>
    </div>
</div>

Postcss-переменные присваиваются как значение в <a href='https://developer.mozilla.org/en-US/docs/Web/CSS/--*'>custom properties</a>. Чтобы применить цвет к своему локальном блоку используй custom properties.

```css
background: var(--color-bg-brand);
```
