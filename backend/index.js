import express from "express";

const app = express();

const sas= app.get("/api/products", (req, res) => {
    const products = [
        { "id": 1, "name": "Wireless Headphones", "price": 89.99, "image": "headphones.jpg", "wood": "shashi" },
        { "id": 2, "name": "Smartphone 12 Pro", "price": 999.99, "image": "smartphone.jpg", "wood": "shashi" },
        { "id": 3, "name": "Bluetooth Speaker", "price": 49.99, "image": "speaker.jpg" },
        { "id": 4, "name": "4K Ultra HD TV", "price": 599.99, "image": "tv.jpg" },
        { "id": 5, "name": "Smartwatch Series 7", "price": 399.99, "image": "smartwatch.jpg" },
        { "id": 6, "name": "Gaming Laptop", "price": 1299.99, "image": "laptop.jpg" },
        { "id": 7, "name": "Digital Camera", "price": 349.99, "image": "camera.jpg" },
        { "id": 8, "name": "Portable Power Bank", "price": 25.99, "image": "powerbank.jpg" },
        { "id": 9, "name": "Noise Cancelling Headphones", "price": 199.99, "image": "noise_cancelling.jpg" },
        { "id": 10, "name": "Action Camera", "price": 249.99, "image": "action_camera.jpg" }
    ];

    if(req.query.search){
        const filterProduct = products.filter(product => product.name.includes(req.query.search));
        res.send(filterProduct);
        return;
    }
    
    // res.json(products);
    setTimeout(()=>{
        res.send(sas);
    },3000)
  
});

const port = process.env.PORT || 5175;

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
