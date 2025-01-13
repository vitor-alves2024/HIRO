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

function atualizarVisualizacao() {
    const aro = document.getElementById("select_aros").value;
    const furacao = document.getElementById("furacao").value;
    const imagens = document.querySelectorAll('.fotos img');
    const legendas = document.querySelectorAll('.legendas');

    let encontrouImagem = false;

    imagens.forEach(imagem => {
        if ((aro === "all" || imagem.classList.contains(aro)) &&
            (furacao === "all" || imagem.classList.contains(furacao))) {
            imagem.classList.add("active");
            imagem.classList.remove("inactive");
            encontrouImagem = true;
        } else {
            imagem.classList.add("inactive");
            imagem.classList.remove("active");
        }
    });

    legendas.forEach(legenda => {
        if ((aro === "all" || legenda.classList.contains(aro)) &&
            (furacao === "all" || legenda.classList.contains(furacao))) {
            legenda.classList.add("active");
            legenda.classList.remove("inactive");
        } else {
            legenda.classList.add("inactive");
            legenda.classList.remove("active");
        }
    });

    // if (!encontrouImagem) {
    //     alert("Não há imagens correspondentes à combinação selecionada.");
    // }
}

document.getElementById("select_aros").addEventListener("change", atualizarVisualizacao);
document.getElementById("furacao").addEventListener("change", atualizarVisualizacao);
atualizarVisualizacao();
