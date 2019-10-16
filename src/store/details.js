export default{
  state: {
    isAlert: true,
    coocies: true,
  },  
  mutations: {
    turneOf(state) {    
      state.isAlert =false;
    },
    close(state) {
      state.coocies =false;
    }
  }
}
