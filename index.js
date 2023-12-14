class ProductManager {
    static ultId = 0;
    constructor(){
        this.products =[];
    }
    addProduct(title, description, price, thumbnail, code, stock) {
        


        if(!title || !description || !price || !thumbnail || !code || !stock) {

            console.log("Por favor completa todos los campos");
            return;
        
        }
        if (this.products.some(item => item.code === code)){
            console.log ("El codigo no debe repetirse");
            return;
    

        }



        const newProduct = {
            id: ++ProductManager.ultId,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        }

        this.products.push(newProduct);
     }
     getProduct() {
        console.log (this.products)
     }
     getProductById (id) {
        const product = this.products.find (item => item.id === id);
    if (!product){
        console.log ("Producto no encontrado")

    }
    else {
        console.log ("Producto encontrado", product);
    }
    return product;
}
    }

    const manager = new ProductManager ();
    manager.getProduct();
    manager.addProduct('PC Gamer','Juega a lo que quieras', 300,'image', 'abc15', 33);
    manager.getProduct();
    manager.addProduct('Mouse','Juega a lo que quieras', 300,'image', 'abc1225', 33);
    manager.getProduct();

manager.getProductById(2);