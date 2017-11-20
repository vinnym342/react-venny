export function repeat(n) {
  let hi = []
  for (let i = 0; i < n; i++){
    hi.push(<div>!Hola!</div>)
  }
  return(hi)
}

export function generateCards() {
  let suits = ['Clubs','Spades','Diamonds','Hearts']
  let cards = ['Ace','2','3','4','5','6','7','8','9','10','Jack','Queen','King']
  let deck = []
  for(let suit_index= 0; suit_index < suits.length; suit_index++){
    for(let card_index = 0; card_index < cards.length; card_index++){
      deck.push([cards[card_index],suits[suit_index]])
    }
  }
    return(deck)
}
