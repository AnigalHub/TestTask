export const state = () =>({
    products: []
  }
)
export  const  mutations ={
  addProduct(state,product){
    state.products.push(product)
  },
  deleteProduct(state,id){
    state.products.splice(id,1)
  },
  setSavedProducts (state, savedProducts){
    state.products = savedProducts
  }
}
export const getters = {
  Products(state){
    return state.products
  }
}
export const actions = {
  refreshSavedState(context){
    if (!process.browser)
      return;
    let newProducts = JSON.parse(localStorage.getItem('product'));
    console.log(newProducts)
    if(newProducts)
      context.commit('setSavedProducts',newProducts)
  },
  addProductState(context,product){
    context.commit('addProduct',product)
    localStorage.setItem('product', JSON.stringify(context.getters.Products))
  },
  deleteProductState(context, id) {
    context.commit('deleteProduct',id)
    localStorage.setItem('product', JSON.stringify(context.getters.Products))
  },
}
