const questions = [
    {
        id: '',
        question: `Determine as alturas das torres:`,
        img: `<img src='duas-tores.jpg' width="30%"/>`
    },
    {
        id: '',
        question: `Na figura abaixo \\(d_1\\) e \\(d_3\\) são perpendiculares, \\(d_3\\) excede \\(d_1\\) em \\(${2 + Math.round(Math.random() * 5)}\\) unidades e \\(d_2\\) mede \\(${10 + Math.round(Math.random() * 7)}\\) m. Determine \\(d_1\\) e \\(d_3\\).`,
        img: `<img src='tor3.jpg' width="25%"/>`
    },
    {
        id: '',
        question: `Um cabo eléctrico está preso entre dois postes de mesma altura
        (${Math.round(Math.random() * 50) + 10} m), separados por ${Math.ceil(Math.random() * 15) + 7} m. O cabo forma um triângulo com o ponto mais
        baixo, a ${Math.round(Math.random() * 3) + 1}/${Math.round(Math.random() * 3) + 5} do poste da esquerda e a ${Math.ceil(Math.random() * 5) + 2} m do solo. Determine o comprimento
        do cabo.`
    },
    {
        id: '',
        question: `Dois cabos partem do topo de um poste formando ângulos de ${(Math.random() * 70).toFixed(2)}°
        e ${(Math.random() * 70).toFixed(2)}° com o solo, em direcções opostas. Determine o ângulo que cada um
        dos cabos faz com o poste.`
    }
]

let qs = ''

for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    qs += `<li><p>${q.question}</p>${q.img || ''}</li>`
}

const el = document.querySelector('ol')
el.innerHTML = qs;

MathJax.typesetPromise([el]);

function generatePDF() {
    const element = document.querySelector('body');
    const nome_std = document.querySelector('input').value

    html2pdf()
        .from(element)
        .save(nome_std + '-CDEPDA_S2' + '.pdf');
}

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    document.querySelector('button').style.display = 'none';
    generatePDF();
})