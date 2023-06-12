class ProductManager {
    constructor(){
        this.products =[];
        this.ids = 1;
    }
    addProduct(title, description, price, thumbnail, code, stock) {
        const productoExistente = this.products.find((product) => product.code === code);

        if (productoExistente) {
            console.log('Ya existe un producto con el mismo código');
            return;     
        }
        const id = this.ids;
        this.ids++;
        this.products.push({id, title, description, price, thumbnail, code, stock});

    }
    getProduct(){
        return this.products; 
    }
    getProductById(id) {
        const productoEncontrado = this.products.find((producto) => producto.id === id);
    
        if (productoEncontrado) {
          return [productoEncontrado];
        } 
        else {
            console.log("Not Found");
        }
    }
}   
const productosActuales = new ProductManager
productosActuales.addProduct('PC Gamer','Juega a lo que quieras', 1000, 'image', '33', 5);
productosActuales.addProduct('PC Gamer','Juega a lo que quieras', 1000, 'image', '33', 5);
console.log(productosActuales.getProduct())
console.log(productosActuales.getProductById(5))
console.log(productosActuales.getProductById(1))


