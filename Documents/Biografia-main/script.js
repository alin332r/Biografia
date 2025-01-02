function showDetails(year) {
    const detailsBox = document.getElementById('details-box');
    
    // Dados de exemplo sobre os eventos
    const details = {
        "1970": "Freddie Mercury se junta a Brian May, Roger Taylor e John Deacon para formar o Queen.",
        "1975": "Lançamento do álbum 'A Night at the Opera', com a icônica 'Bohemian Rhapsody'.",
        "1991": "Freddie Mercury falece em 24 de novembro após lutar contra a AIDS."
    };

    // Verificar se o ano está no objeto 'details'
    if (details[year]) {
        detailsBox.innerHTML = `
            <h3>Detalhes de ${year}</h3>
            <p>${details[year]}</p>
        `;
        detailsBox.classList.add('active');
    } else {
        detailsBox.innerHTML = `
            <h3>Detalhes não encontrados</h3>
            <p>Desculpe, não temos informações sobre este ano.</p>
        `;
        detailsBox.classList.add('active');
    }
}

// Fechar a caixa de detalhes clicando fora dela
document.addEventListener('click', function(event) {
    const detailsBox = document.getElementById('details-box');
    if (!detailsBox.contains(event.target) && event.target !== document.querySelector('.timeline-item')) {
        detailsBox.classList.remove('active');
    }
});

