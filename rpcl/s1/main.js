const questions = [
    {
        id: '',
        pts: 7,
        question: `Calcule usando a definição:`,
        ls: [
            `\\(\\log_\\sqrt[3]{${Math.pow(2, Math.round(2 + Math.random() * 4))}}^{${Math.pow(2, Math.round(2 + Math.random() * 4))}}\\)`,
            `\\(\\log_\\sqrt[${3+Math.round(Math.random()*3)}]{${Math.pow(3, Math.round(2 + Math.random() * 3))}}^{\\frac{1}{9}}\\)`

        ],
        img: ``
    },
    {
        id: '',
        pts: 8,
        question: `Calcule usando propriedades:`,
        ls: [
            `\\(\\log_\\sqrt[3]{${Math.pow(2, Math.round(2 + Math.random() * 4))}}^{0,25}\\)`,
            `\\(\\log_\\sqrt[3]{${Math.pow(7, Math.round(1 + Math.random() * 2))}}^{7^{\\sqrt{2}}}\\)`

        ],
        img: ``
    },
    {
        id: '',
        pts: 5,
        question: `Calcule usando a calculadora:`,
        ls: [
            `\\(\\log_\\sqrt[3]{${Math.round(2 + Math.random() * 10)}}^{${Math.round(2 + Math.random() * 10)}\\sqrt{2}}\\)`,
            `\\(\\log_\\sqrt[3]{\\pi-${Math.round(2 + Math.random() * 10)}}^{(4-\\pi)}\\)`,
            `\\(\\log_\\sqrt[3]{${Math.round(2 + Math.random() * 10)}}^{${Math.round(2 + Math.random() * 10)}}\\)`,
            `\\(\\log_\\sqrt[${3+Math.round(Math.random()*3)}]{(4\\pi-${Math.round(2 + Math.random() * 10)})}^{(4-\\pi)}\\)`

        ],
        gaps: [0, 0, 0, 0],
        img: ``
    },
]

let qs = ''

for (let i = 0; i < questions.length; i++) {
    const q = questions[i];
    qs += `<li><p>(${q.pts} v.) ${q.question}</p>${q.img || ''}</li>`

    let _ls = ''
    if(q.ls) {
        for(const l of q.ls) {
            console.log(q.gaps)
            _ls += `<li><p style="margin-bottom: ${q.gaps ? q.gaps[0] :  270}px;">${l}</p></li>`
        }
    }

    if(_ls) {
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
        .save(nome_std + '-RPCL_S1' + '.pdf');
}

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    document.querySelector('button').style.display = 'none';
    generatePDF();
});