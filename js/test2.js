/* custom.js */
function attachListeners() {
    for (var i = 0; i < nCards; i++) {
      attachListenerToCard(i);
    }
    closeContent.addEventListener('click', onCloseClick);
    window.addEventListener('resize', resize);
  }
  
  function attachListenerToCard(i) {
    cards[i].addEventListener('click', function(e) {
      var card = getCardElement(e.target);
      onCardClick(card, i);
    })
  }
  
  // 确保在页面加载完成后执行 attachListeners
  document.addEventListener('DOMContentLoaded', function() {
    attachListeners();
  });
  