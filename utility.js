
const balance = document.getElementById('balance')
function inputValueById (heading,  inputValueId, inputText){
        const hedding = document.getElementById(heading).innerText
        const textValue = document.getElementById(inputValueId)
        const inputValue = document.getElementById(inputText).value 
        if(isNaN(inputValue) || 0 >= inputValue){
            alert ('Invalid data is found and stop the transaction.')
            return;    
        }
       else if(inputValue === ""){
        alert ('Please input your amount')
        return
        }
        if(parseFloat(inputValue) > parseFloat(balance.innerText)){
            alert('Your not available cash')
            return;
        }
         const serving = parseFloat(balance.innerText)- parseFloat(inputValue)
         const sum = parseFloat(textValue.innerText)+parseFloat(inputValue)
         document.getElementById( inputValueId).innerText = sum   
         document.getElementById('balance').innerText = serving
        document.getElementById('my_modal_6').checked = true
        document.getElementById('addAmount').innerText = inputValue
        document.getElementById('modalHeading').innerText = hedding
        document.getElementById(inputText).value = null 
    const div = document.createElement('div')
     div.classList.add('border','rounded-lg', 'p-16','container', 'mx-auto', 'my-4')
     div.innerHTML = `
     <h4 class="text-2xl font-bold mb-6">${inputValue} Taka is ${hedding} </h4>
     <p>${new Date()}</p>
     `
     document.getElementById('historyContainer').prepend(div)
    

}
 

 
 


 

 