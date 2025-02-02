document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector(".carousel");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");

    let scrollAmount = 0;
    const scrollStep = 120;

    nextBtn.addEventListener("click", function () {
        carousel.scrollBy({ left: scrollStep, behavior: "smooth" });
    });

    prevBtn.addEventListener("click", function () {
        carousel.scrollBy({ left: -scrollStep, behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const books = [
        { title: "Amar é assim", author: "Dolly Alderton", epub: "./ebook/Amar_e_assim.epub" },
        { title: "Amor em Roma", author: "Sarah Adams", epub: "./ebook/Amor_em_Roma.epub" },
        { title: "Apenas amigos", author: "Abby Jimenez", epub: "./ebook/Apenas amigos.epub" },
        { title: "Cleópatra e Frankenstein", author: "Coco Mellors", epub: "./ebook/Cleópatra_e_Frankenstein.epub" },
        { title: "Em agosto nos vemos", author: "Gabriel García Márquez", epub: "./ebook/Em_agosto_nos_vemos.epub" },
        { title: "Flores Para Algernon", author: "Daniel Keys", epub: "./ebook/Flores_Para_Algernon.epub" },
        { title: "Leitura de Verão", author: "Emily Henry", epub: "./ebook/Leitura_de_Verão.epub" },
        { title: "Minha melhor parte", author: "Hannah Bonam-Young", epub: "./ebook/Minha_melhor_parte.epub" },
        { title: "Nem te conto", author: "Emily Henry", epub: "./ebook/Nem_te_conto.epub" },
        { title: "O estrangeiro", author: "Albert Camus", epub: "./ebook/O_estrangeiro.epub" },
        { title: "O Jardim Secreto", author: "Frances Hodgson Burnett", epub: "./ebook/O_Jardim_Secreto.epub" },
        { title: "Ontem à noite", author: "Mhairi McFarlane", epub: "./ebook/Ontem_a_noite.epub" },
        { title: "Os Sete Maridos de Evelyn Hugo", author: "Taylor Jenkins Reid", epub: "./ebook/Os_Sete_maridos_de_Evelyn_Hugo.epub" },
        { title: "Parte do seu mundo", author: "Abby Jimenez", epub: "./ebook/Parte_do_seu_mundo.epub" },
        { title: "Pessoas normais", author: "Sally Rooney", epub: "./ebook/Pessoas_normais.epub" },
        { title: "Playlist para um final feliz", author: "Abby Jimenez", epub: "./ebook/Playlist_para_um_final_feliz.epub" },
        { title: "Sinais do amor", author: "Hannah Bonam-Young", epub: "./ebook/Sinais_do_amor.epub" },
        { title: "Três", author: "Valerie Perrin", epub: "./ebook/Tres.epub" }
    ];

    const bookList = document.getElementById("bookList");
    const searchInput = document.getElementById("searchInput");

    function displayBooks(filteredBooks) {
        bookList.innerHTML = ""; 
        filteredBooks.forEach(book => {
            const bookElement = document.createElement("div");
            bookElement.classList.add("book");
            bookElement.innerHTML = `
                <h3>${book.title}</h3>
                <p>${book.author}</p>
                <a href="${book.epub}" download="/ebook/${book.title}.epub">
                    <button>epub</button>
                </a>
            `;
            bookList.appendChild(bookElement);
        });
    }
    displayBooks(books);

    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        const filteredBooks = books.filter(book =>
            book.title.toLowerCase().includes(query) || book.author.toLowerCase().includes(query)
        );
        displayBooks(filteredBooks);
    });
});
