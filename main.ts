window.addEventListener('scroll', () => {
    
    const focusedElement = document.activeElement

    function unscroll() {
        setTimeout(() => window.scrollTo(0, 0), 100)
        focusedElement.removeEventListener('blur', unscroll)
    }
    
    focusedElement.addEventListener('blur', unscroll)
})
