const questions = [
    {
        id: '',
        pts: 9,
        question: `Uma StartUp começa seu primeiro ano de actividade com ${rndInt(2000)} clientes e cresce a uma taxa anual de ${12+rndInt(12)}%.`,
        ls: [
            `Quantos clientes estima-se para os próximos ${2 + rndInt(5)} anos?`,
            `Quanto tempo será necessário para que a empresa atinja um milhão de clientes?`,
            `Qual seria a quantidade de clientes em uma década se a taxa de crescimento fosse o dobro?`

        ],
        img: ``
    },
    {
        id: '',
        pts: 11,
        question: `Estude a complexidade de dois algoritmos que a cada iteração reduzem seus 
        números possíveis de instruções no pior caso segundo as sequências \\(8, 16, 32, ...\\) e \\(2^1, 2^4, 2^9, ...\\) respectivamente. Qual dos algoritmos é mais eficiente?`,
        img: ``
    },
];

let qs = '';

for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    qs += `<li><p>(${q.pts} v.) ${q.question}</p>${q.img || ''}</li>`;

    let _ls = '';
    if (q.ls) {
        for (const l of q.ls) {
            console.log(q.gaps);
            _ls += `<li><p style="margin-bottom: ${q.gaps ? q.gaps[0] : 270}px;">${l}</p></li>`;
        }
    }

    if (_ls) {
        qs += `<ol>${_ls}</ol>`;
    }
}

const el = document.querySelector('ol');
el.innerHTML = qs;

// MathJax.typesetPromise([el]);

function generatePDF() {
    const element = document.querySelector('body');
    const nome_std = document.querySelector('input').value;

    html2pdf()
        .from(element)
        .save(nome_std + '-RPCL_S4' + '.pdf');
}

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    document.querySelector('button').style.display = 'none';
    generatePDF();
});