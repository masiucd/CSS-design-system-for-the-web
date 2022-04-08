# CSS Design system

## What does the repo contains? 📖

- Normalize CSS
- Minimize CSS
- CSS variables
- Color pallette
- proper heading sizes
- themes

## Tools 🛠

- Parcel

### CSS specificity

`Least to most`

- h1,div
- class,attributes, [type="input"]
- IDs
- !important (don't use please!!!!)

There are some more details to think about...
For example if write our css like this:

```css
h1 {
  font-size: 1rem;
}

/* This will be selected not the first h1 */
h1 {
  font-size: 10rem;
}
```

We are going from top to bottom and the second `h1` will be applied, `font-size 10rem`.

What about nested classes?
For example:

```css
.wrapper .container .header {
  background: #fe3232;
}
.header {
  background: #eee212;
}
```

The first selector will be applied since it has an higher specificity value where we go three levels.
So `.header` with background `#eee212` will never be applied in this case.

### Typography

Recommended sites for typography.

- [type scale](https://www.type-scale.com)
- [font pair](https://www.fontpair.co)
