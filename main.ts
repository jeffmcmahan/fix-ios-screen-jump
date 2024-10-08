window.addEventListener('scroll', () => {
    
    const focusedElement = document.activeElement as HTMLElement

    function unscroll() {
        setTimeout(() => window.scrollTo(0, 0), 100)
        focusedElement.removeEventListener('blur', unscroll)
        focusedElement.dataset.willunscroll = '0'
    }

    if (focusedElement.dataset.willunscroll != '1') {
        focusedElement.dataset.willunscroll = '1'
        focusedElement.addEventListener('blur', unscroll)
    }
})
