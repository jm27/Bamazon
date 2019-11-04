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
    console.log("Displaying all products...\n");
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        // Log all results of the SELECT statement
        console.table(res);
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
        },
           { 
            name: "quantity",
            type: "input",
            message: "`How many units are you buying today?!\n`"
           }
        ])
        .then(function (answer) {
            console.log(answer.product);
            console.log(answer.quantity);

            //let query = "SELECT * FROM products WHERE id = ?";
            connection.query('SELECT * FROM `products` WHERE `id` = ?', [answer.product],
            function (err, res) {
                if (err) throw err;
                // Log all results of the SELECT statement
                console.table(res);
            });

            productUpdate();
        });
}


// function productUpdate() {
//     inquirer
//         .prompt([
//             {
//                name: "quantity",
//                 type: "input",
//                 message: `How many units are you buying today?!\n`
//              }
//         ])
//         .then(function (answer) {
//             console.log(answer.product);
//             //let query = "SELECT * FROM products WHERE id = ?";
//             connection.query('SELECT `stock_quantity` FROM `products` WHERE `id` = ?', [answer.product],
//             function (err, res) {
//                 if (err) throw err;
//                 // Log all results of the SELECT statement
//                 console.table(res);
//                 connection.end();
//             });

            
//         });
// }




