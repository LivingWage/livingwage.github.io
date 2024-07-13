function copyText() {
    var range = document.createRange();
    range.selectNode(document.getElementById("payRiseBox"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}

function calculateValues() {

    //Gets the value of the Community dropdown box
    const e = document.getElementById("community");
    let communityValue = e.options[e.selectedIndex].value;
    let communityText = e.options[e.selectedIndex].text;

    //Gets the value of the Healthcare percentage dropdown box
    const f = document.getElementById("healthBenefits");
    let healthValue = f.options[f.selectedIndex].value;
    let healthText = f.options[f.selectedIndex].text;

    //Gets the value of the Healthcare percentage dropdown box
    const g = document.getElementById("hbaBenefits");
    let hbaValue = g.value;
    if (hbaValue > 3348) {
      hbaValue = 3348;
    }

    //Gets the value of the Vacation days dropdown box
    const h = document.getElementById("vacationBenefits");
    let vacationValue = h.options[h.selectedIndex].value;
    let vacationText = h.options[h.selectedIndex].text;

    //Gets the value of the Other Benefits input box
    const i = document.getElementById("otherBenefits");
    let otherValue = i.value;

    //Gets the value of the Lowest Paid Staff Member input box
    const j = document.getElementById("lowestWage");
    let lowestWageValue = parseFloat(j.value);

    //Creates variables for LW rate, benefits value, existing lowest wage, gap to reach LW, and required pay rise.    
    let wageRate = 0.00;
    let benefitHealth = 0.00;
    let benefitHBA = 0.00;
    let hbaVector = 0.00;
    let vacationVector = 0.00;
    let benefitVacation = vacationValue * vacationVector;
    let benefitsVector = 0.00;
    let benefitHBATotal = hbaValue * hbaVector;
    let healthBenefitTotal = benefitHealth + benefitHBATotal;
    let benefitOther = otherValue * benefitsVector;
    let totalBenefits = benefitHealth+benefitVacation+benefitOther;
    let lowestWage = lowestWageValue;

    //Creates Arrays to store regional variables.
    const wageRates = [25.68,25.40,26.51,22.02,25.20,22.63,26.25,20.64,20.66,25.78,20.91,24.60,22.87,21.14,22.09,25.06,24.60,25.61,21.55]
    const healthBenefits100 = [2.33,2.30,2.30,2.39,2.29,2.39,2.33,2.37,2.37,2.34,2.38,2.28,2.38,2.38,2.37,2.29,2.36,2.30,2.37]
    const healthBenefits75 = [1.64,1.63,1.64,1.70,1.64,1.70,1.64,1.68,1.69,1.65,1.69,1.63,1.69,1.69,1.68,1.63,1.67,1.62,1.68]
    const healthBenefits50 = [1.06,1.07,1.06,1.12,1.07,1.13,1.07,1.11,1.12,1.06,1.12,1.05,1.11,1.12,1.11,1.06,1.09,1.05,1.10]
    const healthBenefits25 = [0.53,0.54,0.53,0.57,0.54,0.57,0.54,0.56,0.57,0.53,0.57,0.53,0.56,0.57,0.56,0.53,0.53,0.53,0.54]
    const healthBenefits0 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    const hbaVectors = [0.00063,0.00064,0.00067,0.0006734,0.00067,0.00067,0.00065,0.00067,0.0006734,0.00067,0.00062,0.00067,0.00067,0.00067,0.00067,0.00067,0.00067,0.00067]
    const vacationVectors = [0.14,0.14,0.14,0.12,0.14,0.13,0.14,0.12,0.12,0.12,0.13,0.13,0.12,0.12,0.14,0.13,0.14,0.12]
    const benefitsVectors = [0.0005814,0.0005882,0.00059,0.00059,0.00059,0.00059,0.00059,0.00059,0.0005882,0.00059,0.00059,0.00059,0.00059,0.00059,0.00059,0.00059,0.00059,0.00059]

    //Creates variables for page elements which need to be filled with visible text.
    const communityName = document.querySelector("#communityName");
    const livingWageRate = document.querySelector("#livingWageRate");
    const livingWageRate2 = document.querySelector("#livingWageRate2");
    const benefitRateHealth = document.querySelector("#benefitRateHealth");
    const benefitRateHealth2 = document.querySelector("#benefitRateHealth2");
    const benefitRateHBA = document.querySelector("#benefitRateHBA");
    const maxHealthValue = document.querySelector("#maxHealthValue");
    const benefitRateVacation = document.querySelector("#benefitRateVacation");
    const benefitRateVacation2 = document.querySelector("#benefitRateVacation2");
    const benefitRateOther = document.querySelector("#benefitRateOther");
    const benefitRateOther2 = document.querySelector("#benefitRateOther2");
    const hourlyBenefitTotal = document.querySelector("#hourlyBenefitTotal");
    const wageBenefitsGap = document.querySelector("#wageBenefitsGap");
    const fullWage = document.querySelector("#fullWage");
    const payRise = document.querySelector("#payRise");
    
    communityName.innerHTML=" - "+communityText;
    wageRate=wageRates[communityValue];
    
    switch(healthValue) {
      case "100":
        benefitHealth = healthBenefits100[communityValue];
        break;
      case "75":
        benefitHealth = healthBenefits75[communityValue];
        break;
      case "50":
        benefitHealth = healthBenefits50[communityValue];
        break;
      case "25":
        benefitHealth = healthBenefits25[communityValue];
        break;
      case "0":
        benefitHealth = 0;
        break;
    }
    
        hbaVector = hbaVectors[communityValue];
        vacationVector = vacationVectors[communityValue];
        benefitsVector = benefitsVectors[communityValue];
        benefitHBATotal = hbaValue * hbaVector;
        healthBenefitTotal = benefitHealth + benefitHBATotal;
        healthBenefitsMax = healthBenefits100[communityValue];;
        if (healthBenefitTotal > healthBenefitsMax) {
          healthBenefitTotal = healthBenefitsMax
        }
        benefitVacation = vacationValue * vacationVector;
        benefitOther = otherValue * benefitsVector;
        totalBenefits = healthBenefitTotal+benefitVacation+benefitOther;
        livingWageRate.innerHTML="$"+(Math.round(100*(wageRate))/100).toFixed(2);
        livingWageRate2.innerHTML="$"+(Math.round(100*(wageRate))/100).toFixed(2);
        benefitRateHealth.innerHTML="$"+(Math.round(100*(benefitHealth))/100).toFixed(2);
        benefitRateHealth2.innerHTML="$"+(Math.round(100*(healthBenefitTotal))/100).toFixed(2);
        benefitRateHBA.innerHTML="$"+(Math.round(100*(benefitHBATotal))/100).toFixed(2);
        maxHealthValue.innerHTML="$"+(Math.round(100*(healthBenefitsMax))/100).toFixed(2);
        benefitRateVacation.innerHTML="$"+(Math.round(100*(benefitVacation))/100).toFixed(2);
        benefitRateVacation2.innerHTML="$"+(Math.round(100*(benefitVacation))/100).toFixed(2);
        benefitRateOther.innerHTML="$"+(Math.round(100*(benefitOther))/100).toFixed(2);
        benefitRateOther2.innerHTML="$"+(Math.round(100*(benefitOther))/100).toFixed(2);
        hourlyBenefitTotal.innerHTML="$"+(Math.round(100*(totalBenefits))/100).toFixed(2);
        wageBenefitsGap.innerHTML="$"+(Math.round(100*(wageRate-totalBenefits))/100).toFixed(2);
        fullWage.innerHTML="$"+(Math.round(100*(lowestWage+totalBenefits))/100).toFixed(2);
        if (Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100 > 0) {
          payRise.innerHTML="$"+(Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100).toFixed(2);
        } else {
          payRise.innerHTML="No pay rise required to meet the Living Wage! Your lowest paid employee exceeds the local Living Wage by $" + (Math.round(100*((lowestWage+totalBenefits)-wageRate))/100)..toFixed(2) + " per hour.";
        }
        break;
  }
  document.addEventListener("DOMContentLoaded", function() {
  calculateValues();
});
