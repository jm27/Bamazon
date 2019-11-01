DROP DATABASE IF EXISTS bamazon;
--  Create a MySQL Database called `bamazon`.
CREATE database bamazon;

USE bamazon;
-- Then create a Table inside of that database called `products`
CREATE TABLE products (
--    * item_id (unique id for each product)

--    * product_name (Name of product)
    product_name VARCHAR(100) NOT NULL,
--    * department_name
    department_name VARCHAR(100) NOT NULL,
--    * price (cost to customer)
    price DECIMAL(10,4) NOT NULL,
--    * stock_quantity (how much of the product is available in stores)
    stock_quantity DECIMAL(10,4) NOT NULL,
)