function cardSwap(card){
    var cardOn = card.querySelector('.card--on');
    var cardOff = card.querySelector('.card--off');
    if (cardOff.style.display === 'none' || cardOff.style.display === '') {
        cardOff.style.display = 'block';
        cardOn.style.display = 'none';
      } else {
        cardOff.style.display = 'none';
        cardOn.style.display = 'block';
      }
}
