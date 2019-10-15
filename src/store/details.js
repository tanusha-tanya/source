export default{
  state: {
        
  },  
  actions:{},
  getters:{
    cards (state){
      return state.cards
    },
    cardById (state){
      return cardId => {
        return state.cards.find(card => card.id === cardId)
      }
    },
  }
}
