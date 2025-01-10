// Função para abrir o modal com a imagem ampliada
function openModal(imageSrc) {
    const modal = document.getElementById("image-modal");
    const modalImage = document.getElementById("modal-image");

    modal.style.display = "block"; // Exibe o modal
    modalImage.src = imageSrc; // Define a imagem ampliada
}

// Função para fechar o modal
function closeModal() {
    const modal = document.getElementById("image-modal");
    modal.style.display = "none"; // Oculta o modal
}

// function SelecaoAros() {
//     const aro = document.getElementById("select_aros").value;
//     const imagens = document.querySelectorAll('.fotos img');
//     const legendas = document.querySelectorAll('.legendas');

//     imagens.forEach(imagem => {
//         if (aro === "all" || imagem.classList.contains(aro)) {
//             imagem.classList.add("active");
//         } else {
//             imagem.classList.remove("active");
//         }
//     });

//     legendas.forEach(legenda => {
//         if (aro === "all" || legenda.classList.contains(aro)) {
//             legenda.classList.add("active");
//         } else {
//             legenda.classList.remove("active");
//         }
//     });
// }

// document.getElementById("select_aros").addEventListener("change", SelecaoAros);

// // Inicializa a exibição correta ao carregar a página
// // SelecaoAros();


function atualizarVisualizacao() {
    const aro = document.getElementById("select_aros").value;
    const imagens = document.querySelectorAll('.fotos img');
    const legendas = document.querySelectorAll('.legendas');

    imagens.forEach(imagem => {
        if (aro === "all" || imagem.classList.contains(aro)) {
            imagem.classList.add("active");
            imagem.classList.remove("inactive");
        } else {
            imagem.classList.add("inactive");
            imagem.classList.remove("active");
        }
    });

    legendas.forEach(legenda => {
        if (aro === "all" || legenda.classList.contains(aro)) {
            legenda.classList.add("active");
            legenda.classList.remove("inactive");
        } else {
            legenda.classList.add("inactive");
            legenda.classList.remove("active");
        }
    });
}
document.getElementById("select_aros").addEventListener("change", SelecaoAros);
atualizarVisualizacao();