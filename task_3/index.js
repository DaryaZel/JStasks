function formatText(line, maxLineLength, maxLines, formattingType) {
    let str = line
    let sublines = str.split('')
    let delimiter = ''
    if (formattingType) {
        if (formattingType === 'перенос по слову') {
            sublines = str.split(' ')
            delimiter = ' '
        }
        if (formattingType === 'перенос по символу') {
            sublines = str.split('')
            delimiter = ''
            maxLineLength++
        }
        if (formattingType === 'перенос по предложению') {
            sublines = str.split('.')
            delimiter = '.'
        }
        if (!maxLineLength) {
            str = '';
            for (let i = 0; i < sublines.length; i++) {
                if (i < maxLines || maxLines === null) {
                    str = str + sublines[i] + "\r\n"
                }

            }
        }
    }
    if (maxLineLength && formattingType !== 'переносов нет') {
        let lineCounter = 1
        str = '';
        let length = maxLineLength;//длина разбиения
        let j = 0;
        for (let i = 0; i < sublines.length; i++) {
            if (j + sublines[i].length < length) {
                str = str + sublines[i] + delimiter;
                if (delimiter === ' ') {
                    j = j + sublines[i].length + 1;
                }
                else {
                    j = j + sublines[i].length
                }

            }
            else {
                if (lineCounter < maxLines || maxLines === null) {
                    j = 0;
                    str = str + "\r\n";
                    i--;
                    lineCounter++
                }
            }
        }
    }

    return str
}
//console.log(formatText('Люди забираются в скорые поезда, но они сами не понимают, чего они ищут, поэтому они не знают покоя, бросаются то в одну сторону, а то в другую. И все напрасно. Глаза слепы. Искать надо сердцем.', 30, 3, 'перенос по слову'))