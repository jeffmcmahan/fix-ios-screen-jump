window.addEventListener('scroll', () => {
    
    const focusedElement = document.activeElement

    function unscroll() {
        setTimeout(() => window.scrollTo(0, 0), 100)
        focusedElement.removeEventListener('blur', unscroll)
        document.activeElement.removeAttribute('willUnscroll')
    }

    if (!document.activeElement.hasAttribute('willUnscroll')) {
        document.activeElement.setAttribute('willUnscroll', '1')
        focusedElement.addEventListener('blur', unscroll)
    }
})
