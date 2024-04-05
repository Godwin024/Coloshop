// AddToChart: (state, {payload})=>{
//     const itemInCart = state.MyCart.find ((item) => item.id === payload.id);
//     if(itemInCart){
//         itemInCart.quantity++;
//     }else{
//         state.MyCart.push({payload, quantity: 1})
//         console.log(payload)
//     }
  
// },
// removefrmCart : (state,   {payload})=> {
//    const removefrmCart = state.MyCart.filter((item) => item.id !== payload.id);
//    state.MyCart = removefrmCart;
// },
// increamentQuantity: (state, {payload})=>{
//     const itemInCart = state.MyCart.find((item) => item.id === payload.id);
//     itemInCart.quantity ++;
// },
// decreamentQuantity: (state, {payload})=>{
//     const itemInCart = state.MyCart.find((item) => item.id === payload.id);
//     if (itemInCart.quantity === 1){
//         const removefrmCart = state.MyCart.filter((item) => item.id !== payload.id);
//         state.MyCart = removefrmCart;

//     }else{
//         itemInCart.quantity--;
//     }


// }