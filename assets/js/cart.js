import { products } from "./data.js";
const headerCartLenth = document.querySelector('.header__cart-lenth')


const allProducts = [...products].map( item => ({...item , quantity: 1}) )

function cartUser(){
    let cart = []

    return {
        addProduct: (product) => {
            const findProductsInCart = cart.find( item => item.id === product.id )
            
            if(findProductsInCart){
                cart = cart.map( item => item.id === product.id ? {...item , quantity: item.quantity + 1} : item )
            }
            cart.push(product)
            headerCartLenth.textContent = userCart.lengthCart()
        },

        lengthCart: () => {
            if(cart.length){
                return ` (${cart.length}) `
            }else {
                return  ` (0) `
            }
        },

         getProducts: () => {
            return cart
        }
    }
}


const userCart = cartUser()


document.addEventListener('click' , (e) => {
    const adedInCartBtn = e.target.closest('.group-products__add-product')
    if(!adedInCartBtn) return

    const idProduct = Number(adedInCartBtn.dataset.id)
    const findProduct = allProducts.find( elem => elem.id === idProduct )

    if(!findProduct) return
    userCart.addProduct(findProduct)

    console.log(userCart.getProducts())

})



headerCartLenth.textContent = userCart.lengthCart()