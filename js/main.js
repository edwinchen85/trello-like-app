(function() {
  const mainEl = document.querySelector("main");
  const columnEls = db.columns.map(col => {
    let column = document.createElement("trello-column");
    let columnTitle = document.createElement("DIV");
    columnTitle.textContent = col.title;
    columnTitle.setAttribute("slot", "title");
    column.appendChild(columnTitle);
    column.setAttribute("id", "col-" + col.id);
    return column;
  });
  columnEls.forEach(col => {
    mainEl.appendChild(col);
  });
  db.cards.map(c => {
    let card = document.createElement("trello-card");
    let cardTitle = document.createElement("DIV");
    let cardDesc = document.createElement("DIV");
    cardTitle.textContent = c.title;
    cardTitle.setAttribute("slot", "title");
    cardDesc.textContent = c.description;
    cardDesc.setAttribute("slot", "desc");
    card.appendChild(cardTitle);
    card.appendChild(cardDesc);
    card.setAttribute("id", "card-" + c.id);
    document
      .querySelector("trello-column[id='col-" + c.columnId + "']")
      .appendChild(card);
    return card;
  });
})();
