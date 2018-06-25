# React with fetch
This project demonstrate the usage of fetch api with react. I have create a form where user can search any type of images. This images are coming from anther website which is `[unsplash.com](https://unsplash.com/)`

### Form 

    There are three fields which is query, orientation, and number of images.
 * Query : A user must have to type something to find the images.
 * Number Of images : A user can select the number of images that they want to display on the page. Values are 5, 10 and 15. Default is 10.
        
* Number Of images : A user can select the orientation that they want to display images in that type on the page. Values are landscape, prtrait, squarish and all. Default is all.

### Random photo
There is an image wich is coming from unsplash api on every load of the browser. This image is has no specific url. I wrote a fetch request that request on evry load of the browser to get a random image from unsplash api

## External Source
[unsplash.com](https://unsplash.com/) 