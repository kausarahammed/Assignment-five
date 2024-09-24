const donationContainer = document.getElementById('donationContainer');
const historyContainer = document.getElementById('historyContainer');
const historyButton = document.getElementById('historyButton');
const donationButton = document.getElementById('donationButton');
historyButton.addEventListener('click', () => {
    historyContainer.classList.remove('hidden')
    donationContainer.classList.add('hidden')
    historyButton.classList.add('bg-commonColor', 'font-semibold')
    donationButton.classList.remove('bg-commonColor', 'font-semibold')
})
donationButton.addEventListener('click', () => {
    historyContainer.classList.add('hidden')
    donationContainer.classList.remove('hidden')
    historyButton.classList.remove('bg-commonColor', 'font-semibold')
    donationButton.classList.add('bg-commonColor', 'font-semibold')
})
 

  const DonateNow = document.getElementById('donate-btn')
  DonateNow.addEventListener('click',function(){
    inputValueById ('noakhali-hedding','noakhali-balance','noakhali-input')
     
  } )
  const feniDonate = document.getElementById('feni-donate')
  feniDonate.addEventListener('click',function(){
  inputValueById ('feni-heading','feni-balance','feni-input')
     
  } )

  const quotaMovement = document.getElementById('quota-btn')
   quotaMovement.addEventListener('click',function(){
    inputValueById ('quota-movement','quota-balance','quota-input')
     
  } )

  const sylhetDonet = document.getElementById('sylhet-btn')
   sylhetDonet.addEventListener('click',function(){
   inputValueById ('sylhet-heading','sylhet-balance','sylhet-input')
    
 } )


 function sendData() {
    const balance = document.getElementById('balance').innerText;
    window.location.href = "blog.html?balance=" + encodeURIComponent(balance);
}