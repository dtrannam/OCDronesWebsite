// Home Page Quote Button
let quotes = [
    '"We were treated like royalty. I would be lost without OC Aerial Photos."- Kelcy', 
    '"I did not even need training. Your company is truly upstanding and is behind its product 100%. I would be lost without OC Aerial Photos."- Cristy W.',
    '"OC Aerial Photos is great. Very easy to use." - Morris J.',
    '"OC Aerial Photos is the most valuable business resource we have EVER purchased." - Beverly L.',
    '"OC Aerial Photos saved my business. We have no regrets! Thanks guys, keep up the good work!"- Joanna S.',
    '"I couldn not have asked for more than this."- Otha G.',
    '"It is exactly what I have been looking for. This is simply unbelievable!"- Bonnee C.',
    '"I am completely blown away. OC Aerial Photos is worth much more than I paid. We can not understand how we have been living without OC Aerial Photos. "- Klarika B.',
]

quoteBtn = document.querySelector('#newQuotes');
quoteBtn.addEventListener('click', () => {
    let newNumber = Math.floor(Math.random() * 8)
    document.querySelector('#quotes').innerText = quotes[newNumber]
})


// External Alerts

navAlerts = document.querySelector('#alerts')
navAlerts.addEventListener('click', (e) => {
    move = alert('Note that clicking on this link will take you to an external page')
    })

// price card hover