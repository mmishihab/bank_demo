const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click',() => {
    const logArea = document.getElementById('login-area');
    logArea.style.display= 'none';
    const transArea = document.getElementById('transaction-area');
    transArea.style.display = 'block';
    
});



const depositBtn =document.getElementById("addDeposit");
depositBtn.addEventListener('click',() =>{
    
    const depAmount = document.getElementById('depositAmount').value;
    const depositNumber = parseFloat(depAmount);
    
    const currentDeposit = document.getElementById('currentDeposit').innerText;
    const currentDepositNumber = parseFloat(currentDeposit);
    
    const totalDeposit = depositNumber+currentDepositNumber;
    
    document.getElementById('currentDeposit').innerText = totalDeposit;
    document.getElementById('depositAmount').value ="";
    
    const currentBalance = document.getElementById('currentBalance').innerText;
    currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = depositNumber + currentBalanceNumber;
    document.getElementById('currentBalance').innerText = totalBalance;
    
    
    
})


//Withdraw section


const withdrawBtn =document.getElementById("addWithdraw");
withdrawBtn.addEventListener('click',() =>{
    
    const withAmount = document.getElementById('withdrawAmount').value;
    const withdrawNumber = parseFloat(withAmount);
    
    const currentWithdraw = document.getElementById('currentWithdraw').innerText;
    const currentWithdrawNumber = parseFloat(currentWithdraw);
    
    const totalWithdraw = withdrawNumber+currentWithdrawNumber;
    
    document.getElementById('currentWithdraw').innerText = totalWithdraw;
    document.getElementById('withdrawAmount').value ="";
    
    const currentBalance = document.getElementById('currentBalance').innerText;
    currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = currentBalanceNumber-withdrawNumber;
    document.getElementById('currentBalance').innerText = totalBalance;
    
    
    
})







