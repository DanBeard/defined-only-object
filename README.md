# defined-only-object
Javascript Library that will make it easy to find typo's when accessing object properties

## The problem

Let's say you have a api like this.
```javascript
var lightbulb = lightbulbFactory.getLightbulb(descriptor);
```   
that returns an object like this:
```javascript
var lightbulb =  {
turnOn: function() {...},
turnOff: function() {...},
isTurnedOn: true,
minimumPower : 12   //in Watts
}
```    
    
    
 There are some easy mistakes that can be made.  For example, given the above 12 watt lightbulb that is turned on:
 
 ```javascript
//alert if we are turned off
if(!lightbulb.isTunedOn) {
  alert("Turned Off")
}

// We only have 20 watts. make sure there is enough power to run this lightbulb
if(lightbulb.miniumPower < 20) {
  alert("Enough Power");
}
else alert("NOT ENOUGH POWER!");
```    
  
Will alert "Turned Off" and "NOT ENOUGH POWER!".  Surprised?  Did you catch the typos?
```javascript
> lightbulb.isTunedOn
undefined
>lightbulb.miniumPower
undefined
```    
        
OOPS! Wouldn't it be great if Javascript could help us find silly typos?  With this libary it can!

## The Solution

import the library:
```javascript
var DefinedOnlyObject = require('defined-only-object');
//or using fancy ES2016 syntax
import DefinedOnlyObject from 'defined-only-object';
```    
then wrap any object with DefinedOnlyObject(); and be saved from hours of debugging!
 ```javascript
var lightbulb = DefinedOnlyObject(lightbulbFactory.getLightbulb(descriptor));
```
Or better yet, if you're building an API, be nice to your users and return your objects already pre-wrapped.
```javascript    
function getLightbulb(descriptor) {
    ...
    return DefinedOnlyObject(result);

 }
```     
     
     
 Now if the user makes a typo like:
```javascript    
//alert if we are turned off
if(!lightbulb.isTunedOn) {
  alert("Turned Off")
}
 ```
 
    // throws
    > Uncaught isTunedOn is not a property of this object and would return undefined
    
    
## Questions? Comments? More Features?

Open an issue or create a pull request
