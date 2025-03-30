function ScrolltoTopo(){
    const btn = document.querySelector('#btn')
    
    const SubirTopo = (() => {
        window.scrollTo({
            top: 0, 
            left: 0,
            behavior: 'smooth'
        })
    })
    
    btn.addEventListener('click', () => SubirTopo())
}
ScrolltoTopo()
