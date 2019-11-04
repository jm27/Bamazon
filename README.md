# Bamazon
   ======
BAMAZON is an Amazon-like storefront using MySQL . The app take in orders from customers and deplete stock from the store's inventory. 

Make sure you save and require the MySQL and Inquirer npm packages your app will need them for data input and storage.
[BAMAZON-APP GITHUB LINK](https://github.com/jm27/Bamazon "BAMAZON's REPO Homepage")
======

LIRI is divided into four JavaScript files(BIT.js, key.js, liri.js, OMDB.js). Contains a .env file and a .gitignore file. A random.txt file and a log.txt file. Also a folder named imgs with screenshoots of the app working and instructions. All inside a folder called liri-node-app.

# Instructions

First in order to run the app you must be sure that you have installed the node modules that are needed to run the app.

Type: "npm-init", inside folder's terminal/bash window.

####NOTE: CLICK ENTER THROUGHOUT PROMPT UNTIL COMMAND LINE RE-STARTS.

Make sure you save and require the MySQL and Inquirer npm packages your app will need them for data input and storage.

Type: "npm install" and make sure all dependencies are installed inside package.json file(inquirer, MySQL).

If any of the dependencies are missing you can just type inside folder's terminal/bash window: "npm install inquirer mysql" . 

 Running this application will first display a prompt with two choices "Buy" or "Don't Buy"
 
 
![MAIN MENU](https://github.com/jm27/Bamazon/blob/master/imgs/bamazon1.png "1")

 
 if you choose "Buy" this will display  all of the items available for sale. Including the ids, names, and prices of products for sale.
 
![BUY](https://github.com/jm27/Bamazon/blob/master/imgs/buy.png "2")


 
 if you choose "Don't Buy" this will log a phrase like `Please come back again, with some cash!`.
 

![NO](https://github.com/jm27/Bamazon/blob/master/imgs/no.png "3")

Then it prompts users with two messages.

   * The first should ask them the ID of the product they would like to buy.
   
![ID](https://github.com/jm27/Bamazon/blob/master/imgs/id.png "4")

   * The second message should ask how many units of the product they would like to buy.

![QUANTITY](https://github.com/jm27/liri-node-app/blob/master/imgs/inventory.png "5")



Once the customer has placed the order, application checks if inventory has enough of the product to meet the customer's request.

   * If not, the app logs a phrase like `Insufficient quantity!`, and then prevent the order from going through.

   
![INSUFFICIENT](https://github.com/jm27/Bamazon/blob/master/imgs/insufficient.png "6")


However, if there are enough of the product, the app should fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through, the app shows the customer the total cost of their purchase.

![TOTAL](https://github.com/jm27/Bamazon/blob/master/imgs/update.png "7")


# Technologies

BAMAZON app was written inside a Javascript file, it uses Inquirer.js, MySQL.js, NODE.js as Node packages to run.

BAMAZON communicates to MySQL Database.
