# Responsiveness with Bootstrap

- Adapt to viewport;
- Variety of screens;
- Mobile first;

## Foundations
- Grid System;
- Fluid Images
- Media queries
- possible because of the viewport meta tag

### Media Queries
- Min or max size limits of the viewport
- eg.:
``` css
 @media (min-width: 576px) {
      /** ... */
  }
```

### CSS Flexbox
- Standard for Bootstrap
- Easy adaptation
- Easy vertical alignment, reordering of content.

## Bootstrap Grid
 ``` html
<div class="container"> <!--The outermost unit within which the actual content is laid out - Auto adjust to screen -->

    <div class="row"> <!-- Each row is divided into 12 columns ->
 ```

- Five classes
  - default: all screens
  - sm
  - md
  - lg
  - xl
- col classes
  - defines how many of the 12 columns will be used
  - eg: .col-*; .col-sm-*; col-md-*; col-lg-*;

 ``` html
<div class="container"> 
    <div class="row">
        <div class="col-sm-5">
            <!-- will occupy 5 columns from small to xtra large screens and the extra small screen will have the default behaviour (occupy all) -->
        </div>
        <div class="col-sm-7">
        <!-- sum of 12 -->
        </div>
    </div>
</div>
 ```

### Grid Details
- xs (<576px) -> Max container width: None; prefix:.col-
- s (>=576px) -> Max container width: 540px; prefix:.col-sm-
- md (>=768px) -> Max container width: 720px; prefix:.col-md-
- lg (>=992px) -> Max container width: 960px; prefix:.col-lg-
- lg (>=1200px) -> Max container width: 1140px; prefix:.col-xl-

#### Order hiphen classes
- Reorder the content
- eg
``` html
<div class="col-sm-5 order-sm-last">
</div>
<div class="col-sm-7 order-sm-first">
</div>

<!-- The upper div will be forced to the right on sm, md, lg and xl screens. Numbers can be used to-->
``` 

#### Vertical and horizontal alignment
- class align-items-* (in a row; vertical alignment)
- class justify-content-* (horizontal)
- class offset-*: allows moving through the columns
- eg.:
``` html
<!-- ... -->
<div class="row">
    <div class="col-sm-4 offset-sm-1"> <!-- Will occupy the columns 2 to 5 on sm to xl screens-->
    </div>
    <div class="col-sm-7"><!-- Will automatically occupy the columns 6 to 12 on sm to xl screens-->
    </div>
</div>
``` 

#### Bootstrap allows nesting
