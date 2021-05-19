// Price Card
pricing = document.querySelectorAll('.pricingOption')
pricing.forEach(element => {
    element.addEventListener('mouseover', e => {
        element.style.color = '#ffff00'
        element.style.backgroundColor = '#0086ff'
    })
    element.addEventListener('mouseout', e => {
        element.style.color = '#FB8500'
        element.style.backgroundColor = '#DFF2E6'
    })
});


// Download Terms and conditions

download = document.querySelector('#terms')

function email() {
    window.open('mailto:legal@ocdrones.com?subject=Terms/Conditions');
}
download.addEventListener('click', email)
