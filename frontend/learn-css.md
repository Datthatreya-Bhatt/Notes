https://udemybusiness.click/course/css-the-complete-guide-incl-flexbox-grid-sass/learn/lecture/9429312?kw=css+grid&src=sac#overview


1. Adding css to a file
    There are 3 ways to add css file to html:
     1.Inline: by adding style tag to html element
     2.Internal: by adding <style> element in the html file
     3.External: by adding <link> element in the head element


2. Setting up css rules
    CSS Rule Sets
    h1 {
        color: blue;
        text-align: center;
    }
    A CSS rule set contains one or more selectors and one or more declarations. The selector(s), which in this example is h1, points to an HTML element. The declaration(s), which in this example are color: blue and text-align: center style the element with a property and value. The rule set is the main building block of a CSS sheet.


3. What are selectors?
    selector are used to select html element, there are many ways to select html elements like Selecting elements from class, id, element [like h1, body etc], * [which selects all the elements], attribute selectors.
    ex for attribute selectors
    [disabled] {
        color: red;
    }
    Refer the link for more: https://www.w3schools.com/css/css_attribute_selectors.asp

    
4. Css specificity
    Refer this link for more understanding: https://blogs.halodoc.io/best-practices-that-we-follow-to-avoid-specificity-issues/#:~:text=CSS%20specificity%20rule&text=1)%20Inline%20style%3A%20Inline%20style,These%20selectors%20has%20lowest%20priority.    
    
    Below selectors are structured according to their specificity weight [in descending order]
    1. Inline style
    2. Id selector (#IdNam)
    3. Classes, attributes and pseudo-classes
    4. Elements and pseudo-elements
    5. Universal (*)  selector

    We can override the specificity with !important keyword.


4. What are conflicting styles?
     When styles from multiple stylesheets are applied to the same element, the browser will have to decide which style to use, leading to conflicts.
     Another cause of conflicting styles is the use of multiple selectors that apply to the same element. If these selectors have conflicting styles, the browser will have to decide which style to apply, based on the specificity and order of the selectors.


5. What is the meaning of cascade?
Cascading means multiple rules can be applied to the same element and specificity means resolving conflicts arising from multiple rules.



Understanding combinator

1. Adjacent sibling
    dev + p {

    }
    Rules: 1. Elements should share same parents 2. Second element should come immediately after the first element 


2. General sibling
    dev ~ p {
        
    }
    Rules: 1. Elements should share same parents 2. Second element comes after the first element 

3. Child
    dev > p {
        
    }
    Rules: 1. Second element is a direct child of first element


4. Descendants
    dev  p {
        
    }

    Rules: 1. Second element is a Descendant of first element




5. Understanding Box Model.
    There are 4 property in the box model.
    1.Content: It is content we add in the html element
    2.Padding: Refers to distance between content and border.
    3.Border: It is applied on the padding. 
    4.Margin: It is the outermost layer, it refers to distance between the other elements.
    The box-sizing property allows us to include the padding and border in an element's total width and height. If you set box-sizing: border-box; on an element, padding and border are included in the width and height:


6. Understanding pseudo class [:not(), :hover, :active].
    Pseudo class adds special functionality to our elements. Refer the below link for further understanding
    https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes


7. Understanding position property.
    The position property has 5 different values
    
    1.static: It is the default value. top, bottom, left, right properties will not have any effects.

    2.relative: Setting the top, right, bottom, and left properties of a relatively-positioned element will cause it to be adjusted away from its normal position. Other content will not be adjusted to fit into any gap left by the element.
    
    3.fixed: An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element.
    A fixed element does not leave a gap in the page where it would normally have been located.
    
    4.absolute: An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed).if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.
    Note: Absolute positioned elements are removed from the normal flow, and can overlap elements.
    
    5.sticky: An element with position: sticky; is positioned based on the user's scroll position.
    A sticky element toggles between relative and fixed, depending on the scroll position. It is positioned relative until a given offset position is met in the viewport - then it "sticks" in place (like position:fixed). 

    Elements are then positioned using the top, bottom, left, and right properties. However, these properties will not work unless the position property is set first. They also work differently depending on the position value.


8. Understanding the z-index.
    The z-index property specifies the stack order of an element. The z-index property specifies the stack order of an element (which element should be placed in front of, or behind, the others). An element can have a positive or negative stack order.
    z-index only works on positioned elements (position: absolute, position: relative, position: fixed, or position: sticky) and flex items (elements that are direct children of display: flex elements).


POSITIONING PRACTICE
    Practice Using absolute and relative value as stand alone and combined.


9. CSS UNITS
    pixels - px
    percentage - % [relative to its parent  element]
    rem - (root em) [1 rem = 16px] [relative to the font size of the root element]
    em - em 
    viewport height - vh
    viewport width - vw
    vh and vw are relative to the viewport's height and width, respectively
    vmin
    vmax


10. viewport
    viewport is important for responsive design, The viewport is the area of a web page that's visible to the user. 

11. media query [@media]
    media query for responsive web design
    Link: https://www.w3schools.com/cssref/css3_pr_mediaquery.php




150
    We can mention the min and max width in media query argument which will trigger the media query on that particular width 


12. To add scroll bar we can use overflow property with scroll value.



174 working with fonts

180 understanding @import function
    It is used to import the external data to our css file like fonts

182 using custom fonts
    We have to use @font-face 


189 font display

FLEXBOX - 193

    The flex container
    Main axis vs cross axis
    The flex items

To use flexbox we have to use display: flex

First we will have parent or flex container and children or flex-items

flex-container [display, flex-flow, justify-content, align-items]

flex-items [order, flex, align-self]

display can take 2 value for flex i,e. flex and inline-flex

FLEX-CONTAINER
flex-container{
    display: flex/ inline-flex,
    flex-direction: row/ column/ column-reverse/ row-reverse,
    flex-wrap: wrap/ nowrap/ wrap-reverse
    align-items: center/ stretched/ flex-start/ flex-end
    justify-content: center/ flex-start/ flex-end
    align-content: center/ flex-start/ space-between/ 
}

main-axis and cross-axis

flex-direction: row -> main-axis starts from top left to right and cross-axis start from top left to bottom.

flex-direction: row-reverse -> main starts from top left to right and cross starts from bottom right to top. 

flex-direction: column -> Same as row but cross works as main and vice versa

flex-direction: column-reverse -> main starts from bottom right to top and cross starts from bottom left to right

justify-content aligns element according to main axis

align-items aligns element according to cross axis

justify-content refers main axis and align-items refers cross axis

align-content is combination of justify-content and align-items

short hands:
For flex-direction and flex-wrap
    flex-flow: row wrap;


FLEX-ITEMS
order: default value is 0, 1 pushes element back and -1 front
align-self: works according to cross
flex-grow: default value is 0
flex-shrink: default value is 1
flex-basis: defines size of an element based on main axis, takes value in pixels




flex-items{
    order: 0/ 1/,
    align-self: flex-start/ flex-end/
    flex-grow: 0/ 1
    flex-shrink: 1/
    flex-basis: %/ px/ auto/
}


GRID:

grid-container [display]


grid-container{
    display: grid;
    grid-template-columns: px/% etc;
    grid-template-rows: px/% etc;
    grid-column-start: 3;
    grid-column-end: 5;
    grid-row-start: 1;
    grid-row-end: 3;
}


short hand

grid-column
grid-row

grid-area

232
    repeat(number, px/% etc)

238
    flex box is 1 dimensional and grid is 2 dimensional 

242 Css transformation [rotating, moving, skewing, scaling, 3D transformation]


.transform-item{
    transform: rotateZ(45deg) translateX(10rem) translateY(10rem) / skewX(20deg) skewY(20deg) scaleX(2) scaleY(2) / perspective ;
    transform-origin: left top/ 50% 50%/ 1rem 1rem etc; [default is center]
}


Transition and animation

259: ANIMATION: We have to use @keyframes wiggle/name{} it takes 2 obj from and to which is starting and ending animation type

269 css prefix is the way to check if the browser supports some css feature and if not then giving alternative features
272: polyfills: A polyfill is a javascript package which enables certain CSS feature in browser which would not support it otherwise.

279 Sass and Scss



//JS












//layer = [3,2,3]


let layer = [
  [1,2,3],
  [4,5],
  [6,7,8]
]

let weight = [
  [
    [6,2],
    [8,4],
    [5,9]
  ],
  [
    [1,7,3],
    [4,8,3],
  ]
]

let bias = [
  
    [4,5,7],
    [8,4]
  

]

let obj = {
  sigmoid: function(num){
    if (num > 1) return 1
    if(num < 0) return 0
  }
}

let activationFunction = [
  ['sigmoid'],
  ['sigmoid'],
]


function multiply(layers, weights, biases, activationFunctions){
  const out  = [];

  for(let i=0; i<weights[0].length; i++){

    let sum = 0;
    for(let j=0; j<layers.length; j++){
      const n = layers[j];
      const w = weights[j][i];
      const b = biases[j] 
      
      sum += n*w+b;
     
    }
    let af = obj[activationFunction[i] || 'sigmoid']
  
    out.push(af(sum))




  }

  return out;



}

function run(layers, weights, biases, activationFunctions){
    out = [];
    for(let i=0; i<bias.length; i++){
      out.push(layer[i])
      const currentLayer = layers[i];
      const weight = weights[i];
      const bias = biases[i];
      const af = activationFunctions[i] || 'sigmoid';

      
      console.log(multiply(currentLayer, weight, bias, af))
      
    }


}


const test = run(layer, weight, bias, activationFunction);

















