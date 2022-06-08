const defaultProduct = {
  nameProduct:'Фотоаппарат',
  imgSrc:'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
  priceProduct:'25000',
  descriptionProduct:'Фотоаппарат мгновенной печати Polaroid Now, белый, 10 Мпикс, макс. разрешение снимков 1440x900'
}
export const state = () =>({
    products: [],
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
    console.log({newProducts})

    if(newProducts !== undefined && newProducts.length !== 0)
      context.commit('setSavedProducts',newProducts)

    if (context.getters.Products.length === 0){
      context.commit('addProduct',defaultProduct)
    }
  },
  addProductState(context,product){
    context.commit('addProduct',product)
    localStorage.setItem('product', JSON.stringify(context.getters.Products))
  },
  deleteProductState(context, id) {
    context.commit('deleteProduct',id)
    localStorage.setItem('product', JSON.stringify(context.getters.Products))
  },

  SortByName(context){
    let newProductsName = context.getters.Products.slice()
    let comparer = (a,b) => {
      if(a.nameProduct>b.nameProduct) {return 1}
      else if (a.nameProduct<b.nameProduct){return -1}
      else {return 0}
    }
    console.log(newProductsName.sort(comparer))
    context.commit('setSavedProducts',newProductsName.sort(comparer))
  },
  SortByPriceMin(context){
    let newProductsPriceMin = context.getters.Products.slice()
    let comparer = (a,b) => {
      if(Number(a.priceProduct)>Number(b.priceProduct)) {return 1}
      else if (Number(a.priceProduct)<Number(b.priceProduct)){return -1}
      else {return 0}
    }
    console.log(newProductsPriceMin.sort(comparer))
    context.commit('setSavedProducts',newProductsPriceMin.sort(comparer))
  },
  SortByPriceMax(context){
    let newProductsPriceMax = context.getters.Products.slice()
    let comparer = (a,b) => {
      if(Number(a.priceProduct)<Number(b.priceProduct)) {return 1}
      else if (Number(a.priceProduct)>Number(b.priceProduct)){return -1}
      else {return 0}
    }
    console.log(newProductsPriceMax.sort(comparer))
    context.commit('setSavedProducts',newProductsPriceMax.sort(comparer))
  },
}
