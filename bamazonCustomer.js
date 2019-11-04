// Dependencies Library

let inquirer = require("inquirer");

let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "echoes27",
    database: "bamazon"
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    buy();
});


function displayProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement

        console.log("Displaying all products...\n");
        console.log("/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/\n");
        console.table(res);
        console.log("/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/\n");
    });
}


function buy() {
    inquirer.prompt([{
        name: "choice",
        type: "list",
        choices: [`Buy product`, `Don't buy(no money!)`],

    }]).then((res) => {

        if (res.choice == `Buy product`) {
            displayProducts();
            productSearch();

        } 
        else{
            console.log("Thanks!! come back with money!!");
            // close the connection before exit
            connection.destroy();

        };


    });
};


function productSearch() {
    inquirer
        .prompt([{
            name: "product",
            type: "input",
            message: "What product would you like to buy(id)?!\n"
        }

        ])
        .then(function (answer) {
           
            //let query = "SELECT * FROM products WHERE id = ?";
            connection.query('SELECT * FROM `products` WHERE `id` = ?', [answer.product],
            function (err, res) {
                if (err) throw err;
                // Log all results of the SELECT statement
                console.table(res);
                console.log("Inventoy : " + res[0].stock_quantity)
                productUpdate(res[0].stock_quantity, res[0].price, res[0].id);
            });

           
        });
}


 function productUpdate(stock, price, id) {
 inquirer
     .prompt([
          {
               name: "quantity",
                 type: "input",
                message: `How many units are you buying today?!\n`
             }
        ])
        .then(function (answer) {
            //let query = "SELECT * FROM products WHERE id = ?"
            if(answer.quantity > stock){
                console.log("Sorry our inventory is limited, Insufficient quantity!")
               buy();
            }
            else {
                let update = stock - answer.quantity;
                let total = price * answer.quantity;

                console.log("Congrats! your total is:  " + total + "  millions!!");
                console.log("Forgot to tell you we deal in millions! ps. No Refunds!")
                console.log("Updated Inventory " + update + " !");

                connection.query('UPDATE `products` SET ? WHERE ?', [
                    {
                      stock_quantity: update
                    },
                    {
                      id: id
                    }
                  ],
                function (err, res) {
                    if (err) throw err;
                    // Log all results of the SELECT statement
                    displayProducts();
                    buy();
                });
            } 
        });
}




