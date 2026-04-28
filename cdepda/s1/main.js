const questions = [
    {
        id: '',
        question: `Na figura abaixo \\(|BD|=\\sqrt{${Math.round(2 + Math.random() * 10)}}\\). Determine \\(\\alpha\\),  \\(x\\) e \\(y\\)`,
        img: `<img src='1.png' width="40%"/>`
    },
    {
        id: '',
        question: `Nas figuras abaixo \\(|AB|=\\sqrt{${2 + Math.round(Math.random() * 5)}}\\), \\(|BC|=${3 + Math.round(Math.round(Math.random() * 8))}\\), \\(|DE|=x\\) e \\(|EF|=${3 + Math.round(Math.random() * 5)}x+4\\). Determine \\(x\\) .`,
        img: `<img src='2.png' width="30%"/>`
    },
    {
        id: '',
        question: `Nas figuras abaixo \\(\\alpha\\) e \\(\\beta\\) medem \\(45^\\circ\\) e \\(60^\\circ\\) respectivamente, \\(|AB|=${Math.round(5 + Math.random() * 5)}\\), \\(|AC|=\\sqrt{${2 + Math.round(Math.random() * 3)}}\\). Determine \\(|BC|\\) em cada uma das figuras.`,
        img: `<img src='3.png' width="40%"/>`
    },
]

let qs = ''

for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    qs += `<li><p>${q.question}</p>${q.img || ''}</li>`
}

const el = document.querySelector('ol')
el.innerHTML = qs;

// MathJax.typesetPromise([el]);

function generatePDF() {
    const element = document.querySelector('body');
    const nome_std = document.querySelector('input').value

    html2pdf()
        .from(element)
        .save(nome_std + '-CDEPDA_S1' + '.pdf');
}

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    document.querySelector('button').style.display = 'none';
    generatePDF();
});