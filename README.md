# svelte5-skeleton

[![NPM version](https://img.shields.io/npm/v/svelte5-skeleton.svg?style=flat)](https://www.npmjs.com/package/svelte5-skeleton) [![NPM downloads](https://img.shields.io/npm/dm/svelte5-skeleton.svg?style=flat)](https://www.npmjs.com/package/svelte5-skeleton) [![Svelte v5](https://img.shields.io/badge/svelte-v5-blueviolet.svg)](https://svelte.dev)

Simple implementation of SVG skeletons in Svelte 5 with types

![example](https://user-images.githubusercontent.com/25938785/90191444-8f443b80-ddc9-11ea-918f-da77070549b8.gif)

Forked from [denisstasyev/svelte-skeleton](https://github.com/denisstasyev/svelte-skeleton).

## :rocket: Features

This is Svelte's component to create custom SVG skeletons to improve level of UX of loading images and interface.

- Easy to use (Svelte component allow to use any SVG forms, such as `<rect />` and `<circle />`)
- Fully customizable: you can adjust the colors, sizes and speed :t-rex:
- Works fine with SSR
- Light size :fire:
- Pure SVG: any custom SVG shapes can be used
- All backgrounds within one Svelte component will be synchronized
- Supports types
- Respects Users' Motion Preferences

P.S. It's recommended to use this package only for middle or large images. If you want to achieve the best UX for icons, use this package with `animate = false`.

## Install

```bash
npm i svelte5-skeleton -D
```

## Usage

```html
<script>
  import Skeleton from 'svelte5-skeleton/Skeleton.svelte'

  ...
</script>

<Skeleton height="360" width="360">
  <rect width="96" height="72" x="0" y="0" rx="12" ry="12" />
  <rect width="260" height="10" x="108" y="19" rx="5" ry="5" />
  <rect width="150" height="10" x="108" y="43" rx="5" ry="5" />

  <rect width="96" height="72" x="0" y="96" rx="12" ry="12" />
  <rect width="260" height="10" x="108" y="115" rx="5" ry="5" />
  <rect width="150" height="10" x="108" y="139" rx="5" ry="5" />

  <!-- Any custom SVG shapes -->
</Skeleton>
```

Also you can combine it with Svelte's `{#await ...}`:

```html
{#await promise}
<!-- promise is pending -->
<Skeleton height="360" width="360">
  <rect width="96" height="72" x="0" y="0" rx="12" ry="12" />
  <rect width="260" height="10" x="108" y="19" rx="5" ry="5" />
  <rect width="150" height="10" x="108" y="43" rx="5" ry="5" />
</Skeleton>
{:then value}
<!-- promise was fulfilled -->
<YourCoolComponent {value} />
{:catch error}
<!-- promise was rejected -->
<Error title="{error.message}" />
{/await}
```

## API

### Parameters

| Name                       | Type           | Default     | Description                        |
| -------------------------- | -------------- | ----------- | ---------------------------------- |
| primaryColor               | string         | `'#ebecef'` | Main background color              |
| secondaryColor             | string         | `'#f5f5f7'` | Animation line color               |
| height                     | number         | `200`       |                                    |
| width                      | number, string | `400`       |                                    |
| speed                      | number, string | `2`         |                                    |
| animate                    | boolean        | `true`      |                                    |
| secondaryColorPercentWidth | number         | `100`       | Initial secondaryColor-part offset |
| ariaLabel                  | string         | `null`      | Aria Label                         |

Please note that some older browsers (like Internet Explorer 11) do not support SVG animations. They will only show the background color without the animation line. To create skeletons for these browsers, you need to write your own CSS animations.

## License

This library is available under the MIT license.
