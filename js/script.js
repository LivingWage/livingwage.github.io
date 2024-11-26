function copyText() {
    let copyButton = document.getElementById("copyButton");
    var range = document.createRange();
    range.selectNode(document.getElementById("payRiseBox"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
    copyButton.innerHTML = "Info copied to your clipboard!";
    copyButton.style.opacity = 0.66;
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

    //Gets the value of the Vacation days dropdown box
    const h = document.getElementById("vacationBenefits");
    let vacationValue = h.options[h.selectedIndex].value;
    let vacationText = h.options[h.selectedIndex].text;

    //Gets the value of the Lowest Paid Staff Member input box
    const i = document.getElementById("lowestWage");
    let lowestWageValue = parseFloat(i.value);

    //Gets the value of the Education Benefits input box
    const j = document.getElementById("educationBenefits");
    let educationValue = parseFloat(j.value);

    //Gets the value of the Savings Benefits input box
    const k = document.getElementById("savingsBenefits");
    let savingsValue = parseFloat(k.value);

    //Gets the value of the Phone Benefits input box
    const l = document.getElementById("phoneBenefits");
    let phoneValue = parseFloat(l.value);

    //Gets the value of the Transit Benefits input box
    const m = document.getElementById("transitBenefits");
    let transitValue = parseFloat(m.value);

    //Gets the value of the PSA Benefits input box
    const n = document.getElementById("psaBenefits");
    let psaValue = parseFloat(n.value);

    //Gets the value of the Cash Benefits input box
    const o = document.getElementById("cashBenefits");
    let cashValue = parseFloat(o.value);

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
    let benefitOther = (educationValue+savingsValue+phoneValue+transitValue+psaValue+cashValue) * benefitsVector;
    let totalBenefits = benefitHealth+benefitVacation+benefitOther;
    let lowestWage = lowestWageValue;

    //Creates Arrays to store regional variables.
    const wageRates = [27.05,26.78,27.42,22.90,24.36,25.71,21.55,23.23,23.69,25.77,23.79,21.82,24.93,26.49,22.93,25.50,26.76,26.42,22.85]
    const healthBenefits100 = [1.97,1.96,1.95,2.02,1.97,1.94,2.00,2.02,1.98,1.97,2.02,1.97,1.95,1.94,2.00,2.02,1.95,1.97,2.02]
    const healthBenefits80 = [1.51,1.50,1.52,1.56,1.52,1.50,1.55,1.56,1.52,1.51,1.56,1.55,1.51,1.51,1.55,1.56,1.51,1.51,1.57]
    const healthBenefits75 = [1.39,1.39,1.41,1.45,1.40,1.39,1.43,1.45,1.41,1.40,1.45,1.43,1.4,1.4,1.43,1.45,1.40,1.39,1.45]
    const healthBenefits70 = [1.28,1.28,1.30,1.33,1.29,1.28,1.32,1.33,1.29,1.28,1.33,1.32,1.29,1.29,1.32,1.33,1.29,1.28,1.34]
    const healthBenefits50 = [0.88,0.88,0.89,0.93,0.88,0.88,0.94,0.92,0.88,0.88,0.93,0.92,0.89,0.88,0.92,0.92,0.89,0.88,0.93]
    const healthBenefits25 = [0.44,0.44,0.45,0.47,0.44,0.44,0.47,0.46,0.44,0.44,0.47,0.46,0.45,0.44,0.46,0.46,0.45,0.44,0.47]
    const healthBenefits0 = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    const hbaVectors = [0.00064,0.00064,0.00065,0.00067,0.000635,0.00064,0.00068,0.00067,0.000641,0.00064,0.00067,0.00066,0.00064,0.00065,0.00066,0.00066,0.00065,0.00064,0.00066]
    const vacationVectors = [0.15,0.14,0.16,0.14,0.13,0.14,0.12,0.15,0.13,0.14,0.15,0.12,0.15,0.16,0.13,0.15,0.16,0.14,0.14]
    const benefitsVectors = [0.00058,0.00058,0.00058,0.00058,0.0005814,0.00058,0.000587,0.00058,0.00058,0.00058,0.00058,0.00058,0.00058,0.00058,0.00058,0.00058,0.00058,0.00058,0.00058]

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
    
    communityName.innerHTML=communityText;
    wageRate=wageRates[communityValue];
    
    switch(healthValue) {
      case "100":
        benefitHealth = healthBenefits100[communityValue];
        break;
      case "80":
        benefitHealth = healthBenefits80[communityValue];
        break;
      case "75":
        benefitHealth = healthBenefits75[communityValue];
        break;
      case "70":
        benefitHealth = healthBenefits70[communityValue];
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
        if (hbaValue * hbaVector <= healthBenefits100[communityValue]) {
            benefitHBATotal = hbaValue * hbaVector;    
        } else {
            benefitHBATotal = healthBenefits100[communityValue];
        }
        healthBenefitTotal = benefitHealth + benefitHBATotal;
        healthBenefitsMax = healthBenefits100[communityValue];
        if (healthBenefitTotal > healthBenefitsMax) {
          healthBenefitTotal = healthBenefitsMax
        }
        benefitVacation = vacationValue * vacationVector;
        benefitOther = parseFloat(educationValue+savingsValue+phoneValue+transitValue+psaValue+cashValue) * benefitsVector;
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
          payRise.innerHTML="No pay rise required to meet the Living Wage! Your lowest paid employee exceeds the local Living Wage by $" + (Math.round(100*((lowestWage+totalBenefits)-wageRate))/100).toFixed(2) + " per hour.";
        }
    let copyButton = document.getElementById("copyButton");
    copyButton.innerHTML = "Copy information";
    copyButton.style.opacity = 1;
  }
  document.addEventListener("DOMContentLoaded", function() {
  calculateValues();
});
