# StationeryCompass
StationeryCompass is a React based e-commerce store project. http://stationerycompass.herokuapp.com

It consists of three pages:

#### - Home Page
It's a basic landing page telling what this project is about. Nothing special.

#### - Products page
That's were all the products are. You can change color and quantity here or add item to your cart. Click on a product icon to zoom a picture.

#### - Checkout page
When you've added something to your cart all of it appears in here. In case if you got scared of total price you can adjust colors and quantity or delete items on this stage. 


#### General overview:
The project is responsive and runs well on screens dowt to Iphone 5 size. Inter-component communication was provided by "window.sessionStorage", which isn't the best solution in real life but as for such a project worked well. Data persists as long as page isn't closed or reloaded. I was intending to add tests, but I'd like it to be meaningful, but the components I wanted to tests were depended on previously mentioned "window.sessionStorage" which is browser API part and cannot be set by tests, this one the reasons why Redux would do better for architechture of the project. I wanted to keep it reusable so if you want to add a product all you need to do is add it in appropriate format to initial state in Products container component. If needed you can add picture, but it isn't necessary because it'll be swapped with default one.

To run the project download it on your device and run "npm install" in project's directory and you're good to go (by running "npm start"). Though, it's up on heroku: http://stationerycompass.herokuapp.com

TODOS:
- Fix blinking items on adding/changing
- Add Redux
- Add tests
