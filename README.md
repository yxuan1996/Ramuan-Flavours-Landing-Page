# Ramuan-Flavours-Landing-Page
Landing Page for Ramuan Flavours, a foodservice and food manufacturing company

```
python -m http.server 8000
```

## Development Notes

### Hard Reload
Ctrl + Shift + R to clear cache and force hard reload.

### Sticky Nav offset
- https://www.w3schools.com/bootstrap5/bootstrap_scrollspy.php
- https://stackoverflow.com/questions/49331572/offset-scroll-anchor-in-html-with-bootstrap-4-fixed-navbar

When we make our navbars sticky and our links point to sections in the same page, we need to adjust for the offset caused by the height of the navbar. This is known as scrollspy in bootstrap. 

In our CSS file, we define the offset in terms of pixels. Then we attache the scrollspy to our body in HTML. 

```CSS
 html 
  { scroll-padding-top: 60px; }
```

```HTML
<body data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="60">
```

### Responsive Logo
We use 2 different logos for different screen sizes

https://stackoverflow.com/questions/45011242/media-query-for-img-src-attribute

### Carousel
We are using Tailwind Elements for the Carousel. For some reason the carousel in bootstrap and daisyUI are not working. 

https://tailwind-elements.com/docs/standard/components/carousel/

1280 X 550 is the preferred image size for the full-width photos. 

### Footer
We are using DaisyUI for the Footer

### Connect Custom HTML Form to Google Form
https://johnpels.hashnode.dev/how-to-connect-your-custom-html-form-to-google-form-response-api