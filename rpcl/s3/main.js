const questions = [
    {
        id: '',
        pts: 8,
        question: `Resolva usando o método analítico:`,
        ls: [
            `\\(\\log_{\\sqrt{${2 + rndInt(5)}}}^{\\sqrt{${rndInt(4) + 2}}x-${rndInt(3) + 2}-x}=2\\)`,
            `\\(\\log_{\\sqrt{\\frac{1}{${2 + rndInt(5)}}}}^{${rndInt(2) + 2}x^2-${rndInt(3) + 2}x}=-2\\)`,

        ],
        img: ``
    },
    {
        id: '',
        pts: 12,
        question: `Resolva usando o método gráfico:`,
        ls: [
            `\\(\\log_{3}^{2x+1}=${rndInt(2)}\\)`,
            `\\(\\log_{\\frac{1}{4}}^x=-\\frac{1}{2}\\)`,
        ],
        img: ``
    },
    {
        id: '',
        pts: 12,
        question: `Resolva os exercícios 1.1 e 1.2 como inequações usando o método gráfico, considere as desigualdades \\(\\geq\\) e <, respectivamente`,
        img: ``
    },
     {
        id: '',
        pts: 12,
        question: `Resolva os exercícios 2.1 e 2.2 como inequações usando o método gráfico, considere as desigualdades \\(\\geq\\) e <, respectivamente`,
        img: ``
    },
]

let qs = ''

for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    qs += `<li><p>(${q.pts} v.) ${q.question}</p>${q.img || ''}</li>`

    let _ls = ''
    if (q.ls) {
        for (const l of q.ls) {
            console.log(q.gaps)
            _ls += `<li><p style="margin-bottom: ${q.gaps ? q.gaps[0] : 270}px;">${l}</p></li>`
        }
    }

    if (_ls) {
        qs += `<ol>${_ls}</ol>`
    }
}

const el = document.querySelector('ol')
el.innerHTML = qs;

// MathJax.typesetPromise([el]);

function generatePDF() {
    const element = document.querySelector('body');
    const nome_std = document.querySelector('input').value

    html2pdf()
        .from(element)
        .save(nome_std + '-RPCL_S3' + '.pdf');
}

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    document.querySelector('button').style.display = 'none';
    generatePDF();
});