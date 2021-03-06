(() => {
    const forEach = Array.prototype.forEach.call.bind(Array.prototype.forEach)

    const setMsie11ColumnPositions = columns => {
        let offsetPosX = 0,
            y = 0,
            colX = 0,
            gridColumnRow

        forEach(columns, item => {
            
            let classList = [...item.classList],
                tmp = classList.filter(col => col.indexOf('fr-col') > -1)[0],
                colN = +tmp.substr('fr-col-'.length, tmp.length)

            let x = offsetPosX + 1
            if (colX === 0) {
                // create first parent Element, styling, and append to parentNode
                gridColumnRow = document.createElement('div')
                gridColumnRow.className = 'grid__column fr-col-12 fr-row-1 grid grid--default'
                gridColumnRow.style['-ms-grid-rows'] = '1fr 10px';
                gridColumnRow.style['-ms-grid-row'] = y + y * 1 + 1;
                gridColumnRow.style['-ms-grid-column'] = 1;
                gridColumnRow.style['-ms-grid-column-span'] = 23;
                gridColumnRow.setAttribute('pos-row', y + y * 1 + 1) // not necessarily
                item.parentNode.appendChild(gridColumnRow)
            }

            colX += colN
            offsetPosX += colN * 2

            let msie11ColumnPosition = {
                '-ms-grid-row': y + y * 1 + 1,
                '-ms-grid-column': x
            }

            item.style['-ms-grid-row'] = 1
            item.style['-ms-grid-column'] = msie11ColumnPosition['-ms-grid-column']
            item.setAttribute('pos-row', 1) // not necessarily
            item.setAttribute('pos-column', msie11ColumnPosition['-ms-grid-column']) // not necessarily
            gridColumnRow.appendChild(item)

            if (colX >= 12) {
                colX = 0
                offsetPosX = 0
                ++y
            }

            return msie11ColumnPosition
        })
    }

    const finalizeGridClassNames = grid => {
        const classNamesToRemove = ['grid', 'grid--default', 'grid--responsive']
        const classList = grid.classList
        classNamesToRemove.forEach(item => {
            if (classList.contains(item)) classList.remove(item)
        })

        classList.remove('grid--msie')
        classList.add('grid--msie-fix')
    }

    const init = () => {
        forEach(document.querySelectorAll('.grid--msie'), grid => {
            setMsie11ColumnPositions(grid.querySelectorAll('.grid__column'))
            finalizeGridClassNames(grid)
        })
    }
    // Detect MSIE 11 disgusting
    let isIE11 = !!window.MSInputMethodContext && !!document.documentMode
    if (isIE11) {
        init()
    }
})()
