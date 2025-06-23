# How to Add Your Logo to the Menagenix Website

To use your MXN logo in the website, follow these steps:

## 1. Replace the Logo File

1. The logo file should be placed at: `/public/images/mxn-logo.png`
2. Save your MXN logo image file with this exact name to replace the placeholder file.
3. For best results, use a PNG image with a transparent background.
4. Recommended dimensions: 500x500 pixels (or maintain a 1:1 aspect ratio)

## 2. Adjusting Logo Display

The logo is now configured to display in the `Logo.tsx` component. By default, it will use the image version:

- The component accepts a prop `useImage={true|false}` to toggle between image and SVG versions
- If you ever need to use the SVG version again, you can set `useImage={false}` when using the Logo component

## 3. Usage in Components

The Logo component is used in the Header and possibly other components. It's already set up to use the image by default.

Example usage:

```tsx
// In Header.tsx or other components
import Logo from './Logo';

// Using with default settings (image)
<Logo />

// Using with custom options
<Logo size="lg" showText={false} />
```

## 4. Logo Options

The Logo component accepts the following props:

- `size`: "sm" | "md" | "lg" | "xl" (default: "md")
- `animated`: boolean (default: true)
- `showText`: boolean (default: true)
- `useImage`: boolean (default: true)
- `className`: string for additional CSS classes

## 5. Testing

After replacing the logo file, run the development server to see your changes:

```bash
npm run dev
```

And open [http://localhost:5173](http://localhost:5173) in your browser to preview.
