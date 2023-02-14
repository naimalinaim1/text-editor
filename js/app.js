const con = {
    text: {
        bold: false,
        italic: false,
        underline: false,
    },
    align: {
        left: false,
        center: false,
        right: false,
        justify: false,
    }
}
function elementSelectById (id) {
    const getElement = document.getElementById(id);
    return getElement;
}

/**
 * 
 * @param {give select element} selectBtn 
 * @param {toggle with true or false} condition 
 * @param {toggle apply element id} elementId 
 * @param {style property} property 
 * @param {property value} value 
 */
function toggleStatement (selectElement, condition, elementId, property, value) {
    const element = elementSelectById(elementId);
    if (condition) {
        selectElement.classList.add('hov');
        element.style[property] = value;
    } else {
        selectElement.classList.remove('hov');
        element.style[property] = value;
    }
}

//  bold button
const bold = elementSelectById('text-bold');
bold.addEventListener('click', function () {
    con.text.bold = !con.text.bold;
    let isBold = 'bold';
    if (!con.text.bold) {
        isBold = 'normal';
    }
    toggleStatement(bold, con.text.bold, 'text-area', 'fontWeight', isBold);
})
//  italic button
const italic = elementSelectById('text-italic');
italic.addEventListener('click', function () {
    con.text.italic = !con.text.italic;
    let isItalic = 'italic';
    if (!con.text.italic) {
        isItalic = 'normal';
    }
    toggleStatement(italic, con.text.italic, 'text-area', 'fontStyle', isItalic);
})

//  underline button
const underline = elementSelectById('text-underline');
underline.addEventListener('click', function () {
    con.text.underline = !con.text.underline;
    let isUnderline= 'underline';
    if (!con.text.underline) {
        isUnderline = 'none';
    }
    toggleStatement(underline, con.text.underline, 'text-area', 'textDecoration', isUnderline);
})

//  align left button
const alignLeft = elementSelectById('align-left');
alignLeft.addEventListener('click', function () {
    con.align.left = !con.align.left;
    let isAlignLeft= 'left';
    if (!con.align.left) {
        isAlignLeft = 'left';
    }
    toggleStatement(alignLeft, con.align.left, 'text-area', 'textAlign', isAlignLeft);
})

//  align right button
const alignRight = elementSelectById('align-right');
alignRight.addEventListener('click', function () {
    con.align.right = !con.align.right;
    let isAlignRight= 'right';
    if (!con.align.right) {
        isAlignRight = 'left';
    }

    toggleStatement(alignRight, con.align.right, 'text-area', 'textAlign', isAlignRight);
})
//  align center button
const alignCenter = elementSelectById('align-center');
alignCenter.addEventListener('click', function () {
    con.align.center = !con.align.center;
    let isAlignCenter= 'center';
    if (!con.align.center) {
        isAlignCenter = 'left';
    }

    toggleStatement(alignCenter, con.align.center, 'text-area', 'textAlign', isAlignCenter);
})
//  align justify button
const alignJustify = elementSelectById('align-justify');
alignJustify.addEventListener('click', function () {
    con.align.justify = !con.align.justify;
    let isAlignJustify= 'justify';
    if (!con.align.justify) {
        isAlignJustify = 'left';
    }

    toggleStatement(alignJustify, con.align.justify, 'text-area', 'textAlign', isAlignJustify);
})

// font size
const fontSize = elementSelectById('font-size-field');
fontSize.addEventListener('change', function (event) {
    let value = event.target.value;
    if (value > 150) {
        event.target.value = '150';
        value = 150;
        alert('font size maximum 150 px');
    }
    const textArea = elementSelectById('text-area');
    textArea.style.fontSize = value + 'px';
});

// font color
const fontColor = elementSelectById('color-field');
fontColor.addEventListener('input', function (event) {
    const color = event.target.value;
    const textArea = elementSelectById('text-area');
    const getIcon = elementSelectById('icon-color-change');
    getIcon.style.color = color;
    textArea.style.color = color;
});