console.log("Loading script");
const calculatePtoDays = () => {
    console.log("Calculating PTO");
    //define initial parameters
    let ptoRate = 3.692;
    let currentPto = 15.266;
    let daysOff = currentPto/8;

    //parse form for calculation parameters
    currentPto = Number.parseFloat(document.getElementById('balance').value);
    ptoRate = Number.parseFloat(document.getElementById('rate').value);
    let weeks = Number.parseFloat(document.getElementById('weeks').value);
    console.log(`balance: ${currentPto} rate: ${ptoRate} weeks: ${weeks}`);

    //calculate pto days
    if(weeks > 0){
        currentPto = currentPto + (Number.parseInt(weeks/2)*ptoRate);
        daysOff = currentPto/8;
    }
    else{
        daysOff = currentPto/8;
    }

    //Display days off
    let daysOffText = document.getElementById('daysOffText');
    let balanceText = document.getElementById('balance-text');
    balanceText.innerText = `Balance: ${currentPto}`
    daysOffText.innerText = `You have ${daysOff.toFixed(2)} days off`;
}

const submitButton = document.getElementById('submit-button');
submitButton.addEventListener('click', calculatePtoDays);