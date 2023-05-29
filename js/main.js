function tableInfo() {
    let HTML = '';


    for (const month of months) {
        HTML += `<div class="table-row">
        <div class="cell">1</div>
        <div class="cell">${month}</div>
        <div class="cell">${account.income}Eur</div>
        <div class="cell">${account.expense}</div>
        <div class="cell">- Eur</div>`
    }

    servicesDOM.innerHTML = HTML;

    return Html


}