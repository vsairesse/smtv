const questions = [
    {
        id: '',
        pts: 8,
        question: `Represente graficamente as funções:`,
        ls: [
            `\\(f(x)=\\log_{2}^{x}\\)`,
            `\\(f(x)=\\log_{\\frac{${1+Math.round(Math.random()*2)}}{${4+Math.round(Math.random()*3)}}}^{x}\\)`,

        ],
        img: ``
    },
    {
        id: '',
        pts: 12,
        question: `Represente graficamente as funções:`,
        ls: [
            `\\(f(x)=\\log_{2}^{(x+${1+Math.round(Math.random() * 5)})}+${1+Math.round(Math.random() * 5)}\\)`,
            `\\(f(x)=\\log_{\\frac{${1+Math.round(Math.random()*2)}}{${4+Math.round(Math.random()*3)}}}^{(x-${1+Math.round(Math.random() * 5)})}-${1+Math.round(Math.random() * 5)}\\)`,
        ],
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
        .save(nome_std + '-RPCL_S2' + '.pdf');
}

document.querySelector('form').addEventListener('submit', e => {
    e.preventDefault();
    document.querySelector('button').style.display = 'none';
    generatePDF();
});