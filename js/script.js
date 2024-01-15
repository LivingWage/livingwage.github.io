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

    switch(communityText) {
      case "Metro Vancouver":
        wageRate = 25.68;
        communityName.innerHTML=" - "+communityText;
        switch(healthValue) {
          case "100":
            benefitHealth = 2.33
            break;
          case "75":
            benefitHealth = 1.64
            break;
          case "50":
            benefitHealth = 1.06
            break;
          case "25":
            benefitHealth = 0.53
            break;
          case "0":
            benefitHealth = 0.00
            break;
        }
        hbaVector = 0.00063;
        vacationVector = 0.14;
        benefitsVector = 0.0005814;
        benefitHBATotal = hbaValue * hbaVector;
        healthBenefitTotal = benefitHealth + benefitHBATotal;
        healthBenefitsMax = 2.33;
        if (healthBenefitTotal > healthBenefitsMax) {
          healthBenefitTotal = healthBenefitsMax
        }
        benefitVacation = vacationValue * vacationVector;
        benefitOther = otherValue * benefitsVector;
        totalBenefits = healthBenefitTotal+benefitVacation+benefitOther;
        livingWageRate.innerHTML="$"+Math.round(100*(wageRate))/100;
        livingWageRate2.innerHTML="$"+Math.round(100*(wageRate))/100;
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
        benefitRateHealth2.innerHTML="$"+Math.round(100*(healthBenefitTotal))/100;
        benefitRateHBA.innerHTML="$"+Math.round(100*(benefitHBATotal))/100;
        maxHealthValue.innerHTML="$"+Math.round(100*(healthBenefitsMax))/100
        benefitRateVacation.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateVacation2.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateOther.innerHTML="$"+Math.round(100*(benefitOther))/100;
        benefitRateOther2.innerHTML="$"+Math.round(100*(benefitOther))/100;
        hourlyBenefitTotal.innerHTML="$"+Math.round(100*(totalBenefits))/100;
        wageBenefitsGap.innerHTML="$"+Math.round(100*(wageRate-totalBenefits))/100;
        fullWage.innerHTML="$"+Math.round(100*(lowestWage+totalBenefits))/100;
        if (Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100 > 0) {
          payRise.innerHTML="$"+Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100;
        } else {
          payRise.innerHTML="No pay rise required to meet the Living Wage! Your lowest paid employee exceeds the local Living Wage by $" + Math.round(100*((lowestWage+totalBenefits)-wageRate))/100 + " per hour.";
        }
        break;
      case "Greater Victoria":
        wageRate = 25.40;
        communityName.innerHTML=" - "+communityText;
        switch(healthValue) {
          case "100":
            benefitHealth = 2.30
            break;
          case "75":
            benefitHealth = 1.63
            break;
          case "50":
            benefitHealth = 1.07
            break;
          case "25":
            benefitHealth = 0.54
            break;
          case "0":
            benefitHealth = 0.00
            break;
        }
        hbaVector = 0.00064;
        vacationVector = 0.14;
        benefitsVector = 0.0005882;
        benefitHBATotal = hbaValue * hbaVector;
        healthBenefitTotal = benefitHealth + benefitHBATotal;
        healthBenefitsMax = 2.30;
        if (healthBenefitTotal > healthBenefitsMax) {
          healthBenefitTotal = healthBenefitsMax
        }
        benefitVacation = vacationValue * vacationVector;
        benefitOther = otherValue * benefitsVector;
        totalBenefits = healthBenefitTotal+benefitVacation+benefitOther;
        livingWageRate.innerHTML="$"+Math.round(100*(wageRate))/100;
        livingWageRate2.innerHTML="$"+Math.round(100*(wageRate))/100;
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
        benefitRateHealth2.innerHTML="$"+Math.round(100*(healthBenefitTotal))/100;
        benefitRateHBA.innerHTML="$"+Math.round(100*(benefitHBATotal))/100;
        maxHealthValue.innerHTML="$"+Math.round(100*(healthBenefitsMax))/100
        benefitRateVacation.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateVacation2.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateOther.innerHTML="$"+Math.round(100*(benefitOther))/100;
        benefitRateOther2.innerHTML="$"+Math.round(100*(benefitOther))/100;
        hourlyBenefitTotal.innerHTML="$"+Math.round(100*(totalBenefits))/100;
        wageBenefitsGap.innerHTML="$"+Math.round(100*(wageRate-totalBenefits))/100;
        fullWage.innerHTML="$"+Math.round(100*(lowestWage+totalBenefits))/100;
        if (Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100 > 0) {
          payRise.innerHTML="$"+Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100;
        } else {
          payRise.innerHTML="No pay rise required to meet the Living Wage! Your lowest paid employee exceeds the local Living Wage by $" + Math.round(100*((lowestWage+totalBenefits)-wageRate))/100 + " per hour.";
        }
        break;
      case "Comox Valley":
        wageRate = 22.02;
        communityName.innerHTML=" - "+communityText;
        switch(healthValue) {
          case "100":
            benefitHealth = 2.39
            break;
          case "75":
            benefitHealth = 1.70
            break;
          case "50":
            benefitHealth = 1.12
            break;
          case "25":
            benefitHealth = 0.57
            break;
          case "0":
            benefitHealth = 0.00
            break;
        }
        hbaVector = 0.0006734;
        vacationVector = 0.12;
        benefitsVector = 0.00059;
        benefitHBATotal = hbaValue * hbaVector;
        healthBenefitTotal = benefitHealth + benefitHBATotal;
        healthBenefitsMax = 2.39;
        if (healthBenefitTotal > healthBenefitsMax) {
          healthBenefitTotal = healthBenefitsMax
        }
        benefitVacation = vacationValue * vacationVector;
        benefitOther = otherValue * benefitsVector;
        totalBenefits = healthBenefitTotal+benefitVacation+benefitOther;
        livingWageRate.innerHTML="$"+Math.round(100*(wageRate))/100;
        livingWageRate2.innerHTML="$"+Math.round(100*(wageRate))/100;
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
        benefitRateHealth2.innerHTML="$"+Math.round(100*(healthBenefitTotal))/100;
        benefitRateHBA.innerHTML="$"+Math.round(100*(benefitHBATotal))/100;
        maxHealthValue.innerHTML="$"+Math.round(100*(healthBenefitsMax))/100
        benefitRateVacation.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateVacation2.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateOther.innerHTML="$"+Math.round(100*(benefitOther))/100;
        benefitRateOther2.innerHTML="$"+Math.round(100*(benefitOther))/100;
        hourlyBenefitTotal.innerHTML="$"+Math.round(100*(totalBenefits))/100;
        wageBenefitsGap.innerHTML="$"+Math.round(100*(wageRate-totalBenefits))/100;
        fullWage.innerHTML="$"+Math.round(100*(lowestWage+totalBenefits))/100;
        if (Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100 > 0) {
          payRise.innerHTML="$"+Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100;
        } else {
          payRise.innerHTML="No pay rise required to meet the Living Wage! Your lowest paid employee exceeds the local Living Wage by $" + Math.round(100*((lowestWage+totalBenefits)-wageRate))/100 + " per hour.";
        }
        break;
      case "Kelowna":
        wageRate = 24.60;
        communityName.innerHTML=" - "+communityText;
        switch(healthValue) {
          case "100":
            benefitHealth = 2.28
            break;
          case "75":
            benefitHealth = 1.63
            break;
          case "50":
            benefitHealth = 1.05
            break;
          case "25":
            benefitHealth = 0.53
            break;
          case "0":
            benefitHealth = 0.00
            break;
        }
        hbaVector = 0.00062;
        vacationVector = 0.13;
        benefitsVector = 0.00059;
        benefitHBATotal = hbaValue * hbaVector;
        healthBenefitTotal = benefitHealth + benefitHBATotal;
        healthBenefitsMax = 2.28;
        if (healthBenefitTotal > healthBenefitsMax) {
          healthBenefitTotal = healthBenefitsMax
        }
        benefitVacation = vacationValue * vacationVector;
        benefitOther = otherValue * benefitsVector;
        totalBenefits = healthBenefitTotal+benefitVacation+benefitOther;
        livingWageRate.innerHTML="$"+Math.round(100*(wageRate))/100;
        livingWageRate2.innerHTML="$"+Math.round(100*(wageRate))/100;
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
        benefitRateHealth2.innerHTML="$"+Math.round(100*(healthBenefitTotal))/100;
        benefitRateHBA.innerHTML="$"+Math.round(100*(benefitHBATotal))/100;
        maxHealthValue.innerHTML="$"+Math.round(100*(healthBenefitsMax))/100
        benefitRateVacation.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateVacation2.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateOther.innerHTML="$"+Math.round(100*(benefitOther))/100;
        benefitRateOther2.innerHTML="$"+Math.round(100*(benefitOther))/100;
        hourlyBenefitTotal.innerHTML="$"+Math.round(100*(totalBenefits))/100;
        wageBenefitsGap.innerHTML="$"+Math.round(100*(wageRate-totalBenefits))/100;
        fullWage.innerHTML="$"+Math.round(100*(lowestWage+totalBenefits))/100;
        if (Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100 > 0) {
          payRise.innerHTML="$"+Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100;
        } else {
          payRise.innerHTML="No pay rise required to meet the Living Wage! Your lowest paid employee exceeds the local Living Wage by $" + Math.round(100*((lowestWage+totalBenefits)-wageRate))/100 + " per hour.";
        }
        break;
      case "Nanaimo":
        wageRate = 22.87;
        communityName.innerHTML=" - "+communityText;
        switch(healthValue) {
          case "100":
            benefitHealth = 2.38
            break;
          case "75":
            benefitHealth = 1.69
            break;
          case "50":
            benefitHealth = 1.11
            break;
          case "25":
            benefitHealth = 0.56
            break;
          case "0":
            benefitHealth = 0.00
            break;
        }
        hbaVector = 0.00067;
        vacationVector = 0.13;
        benefitsVector = 0.00059;
        benefitHBATotal = hbaValue * hbaVector;
        healthBenefitTotal = benefitHealth + benefitHBATotal;
        healthBenefitsMax = 2.38;
        if (healthBenefitTotal > healthBenefitsMax) {
          healthBenefitTotal = healthBenefitsMax
        }
        benefitVacation = vacationValue * vacationVector;
        benefitOther = otherValue * benefitsVector;
        totalBenefits = healthBenefitTotal+benefitVacation+benefitOther;
        livingWageRate.innerHTML="$"+Math.round(100*(wageRate))/100;
        livingWageRate2.innerHTML="$"+Math.round(100*(wageRate))/100;
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
        benefitRateHealth2.innerHTML="$"+Math.round(100*(healthBenefitTotal))/100;
        benefitRateHBA.innerHTML="$"+Math.round(100*(benefitHBATotal))/100;
        maxHealthValue.innerHTML="$"+Math.round(100*(healthBenefitsMax))/100
        benefitRateVacation.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateVacation2.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateOther.innerHTML="$"+Math.round(100*(benefitOther))/100;
        benefitRateOther2.innerHTML="$"+Math.round(100*(benefitOther))/100;
        hourlyBenefitTotal.innerHTML="$"+Math.round(100*(totalBenefits))/100;
        wageBenefitsGap.innerHTML="$"+Math.round(100*(wageRate-totalBenefits))/100;
        fullWage.innerHTML="$"+Math.round(100*(lowestWage+totalBenefits))/100;
        if (Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100 > 0) {
          payRise.innerHTML="$"+Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100;
        } else {
          payRise.innerHTML="No pay rise required to meet the Living Wage! Your lowest paid employee exceeds the local Living Wage by $" + Math.round(100*((lowestWage+totalBenefits)-wageRate))/100 + " per hour.";
        }
        break;
      case "Fraser Valley":
        wageRate = 20.66;
        communityName.innerHTML=" - "+communityText;
        switch(healthValue) {
          case "100":
            benefitHealth = 2.37
            break;
          case "75":
            benefitHealth = 1.69
            break;
          case "50":
            benefitHealth = 1.12
            break;
          case "25":
            benefitHealth = 0.57
            break;
          case "0":
            benefitHealth = 0.00
            break;
        }
        hbaVector = 0.0006734;
        vacationVector = 0.12;
        benefitsVector = 0.0005882;
        benefitHBATotal = hbaValue * hbaVector;
        healthBenefitTotal = benefitHealth + benefitHBATotal;
        healthBenefitsMax = 2.37;
        if (healthBenefitTotal > healthBenefitsMax) {
          healthBenefitTotal = healthBenefitsMax
        }
        benefitVacation = vacationValue * vacationVector;
        benefitOther = otherValue * benefitsVector;
        totalBenefits = healthBenefitTotal+benefitVacation+benefitOther;
        livingWageRate.innerHTML="$"+Math.round(100*(wageRate))/100;
        livingWageRate2.innerHTML="$"+Math.round(100*(wageRate))/100;
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
        benefitRateHealth2.innerHTML="$"+Math.round(100*(healthBenefitTotal))/100;
        benefitRateHBA.innerHTML="$"+Math.round(100*(benefitHBATotal))/100;
        maxHealthValue.innerHTML="$"+Math.round(100*(healthBenefitsMax))/100
        benefitRateVacation.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateVacation2.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateOther.innerHTML="$"+Math.round(100*(benefitOther))/100;
        benefitRateOther2.innerHTML="$"+Math.round(100*(benefitOther))/100;
        hourlyBenefitTotal.innerHTML="$"+Math.round(100*(totalBenefits))/100;
        wageBenefitsGap.innerHTML="$"+Math.round(100*(wageRate-totalBenefits))/100;
        fullWage.innerHTML="$"+Math.round(100*(lowestWage+totalBenefits))/100;
        if (Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100 > 0) {
          payRise.innerHTML="$"+Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100;
        } else {
          payRise.innerHTML="No pay rise required to meet the Living Wage! Your lowest paid employee exceeds the local Living Wage by $" + Math.round(100*((lowestWage+totalBenefits)-wageRate))/100 + " per hour.";
        }
        break;
      case "Nelson":
        wageRate = 21.14;
        communityName.innerHTML=" - "+communityText;
        switch(healthValue) {
          case "100":
            benefitHealth = 2.38
            break;
          case "75":
            benefitHealth = 1.69
            break;
          case "50":
            benefitHealth = 1.12
            break;
          case "25":
            benefitHealth = 0.57
            break;
          case "0":
            benefitHealth = 0.00
            break;
        }
        hbaVector = 0.00067;
        vacationVector = 0.12;
        benefitsVector = 0.00059;
        benefitHBATotal = hbaValue * hbaVector;
        healthBenefitTotal = benefitHealth + benefitHBATotal;
        healthBenefitsMax = 2.38;
        if (healthBenefitTotal > healthBenefitsMax) {
          healthBenefitTotal = healthBenefitsMax
        }
        benefitVacation = vacationValue * vacationVector;
        benefitOther = otherValue * benefitsVector;
        totalBenefits = healthBenefitTotal+benefitVacation+benefitOther;
        livingWageRate.innerHTML="$"+Math.round(100*(wageRate))/100;
        livingWageRate2.innerHTML="$"+Math.round(100*(wageRate))/100;
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
        benefitRateHealth2.innerHTML="$"+Math.round(100*(healthBenefitTotal))/100;
        benefitRateHBA.innerHTML="$"+Math.round(100*(benefitHBATotal))/100;
        maxHealthValue.innerHTML="$"+Math.round(100*(healthBenefitsMax))/100
        benefitRateVacation.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateVacation2.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateOther.innerHTML="$"+Math.round(100*(benefitOther))/100;
        benefitRateOther2.innerHTML="$"+Math.round(100*(benefitOther))/100;
        hourlyBenefitTotal.innerHTML="$"+Math.round(100*(totalBenefits))/100;
        wageBenefitsGap.innerHTML="$"+Math.round(100*(wageRate-totalBenefits))/100;
        fullWage.innerHTML="$"+Math.round(100*(lowestWage+totalBenefits))/100;
        if (Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100 > 0) {
          payRise.innerHTML="$"+Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100;
        } else {
          payRise.innerHTML="No pay rise required to meet the Living Wage! Your lowest paid employee exceeds the local Living Wage by $" + Math.round(100*((lowestWage+totalBenefits)-wageRate))/100 + " per hour.";
        }
        break;
      case "Prince George":
        wageRate = 22.09;
        communityName.innerHTML=" - "+communityText;
        switch(healthValue) {
          case "100":
            benefitHealth = 2.37
            break;
          case "75":
            benefitHealth = 1.68
            break;
          case "50":
            benefitHealth = 1.11
            break;
          case "25":
            benefitHealth = 0.56
            break;
          case "0":
            benefitHealth = 0.00
            break;
        }
        hbaVector = 0.00067;
        vacationVector = 0.12;
        benefitsVector = 0.00059;
        benefitHBATotal = hbaValue * hbaVector;
        healthBenefitTotal = benefitHealth + benefitHBATotal;
        healthBenefitsMax = 2.37;
        if (healthBenefitTotal > healthBenefitsMax) {
          healthBenefitTotal = healthBenefitsMax
        }
        benefitVacation = vacationValue * vacationVector;
        benefitOther = otherValue * benefitsVector;
        totalBenefits = healthBenefitTotal+benefitVacation+benefitOther;
        livingWageRate.innerHTML="$"+Math.round(100*(wageRate))/100;
        livingWageRate2.innerHTML="$"+Math.round(100*(wageRate))/100;
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
        benefitRateHealth2.innerHTML="$"+Math.round(100*(healthBenefitTotal))/100;
        benefitRateHBA.innerHTML="$"+Math.round(100*(benefitHBATotal))/100;
        maxHealthValue.innerHTML="$"+Math.round(100*(healthBenefitsMax))/100
        benefitRateVacation.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateVacation2.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateOther.innerHTML="$"+Math.round(100*(benefitOther))/100;
        benefitRateOther2.innerHTML="$"+Math.round(100*(benefitOther))/100;
        hourlyBenefitTotal.innerHTML="$"+Math.round(100*(totalBenefits))/100;
        wageBenefitsGap.innerHTML="$"+Math.round(100*(wageRate-totalBenefits))/100;
        fullWage.innerHTML="$"+Math.round(100*(lowestWage+totalBenefits))/100;
        if (Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100 > 0) {
          payRise.innerHTML="$"+Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100;
        } else {
          payRise.innerHTML="No pay rise required to meet the Living Wage! Your lowest paid employee exceeds the local Living Wage by $" + Math.round(100*((lowestWage+totalBenefits)-wageRate))/100 + " per hour.";
        }
        break;
      case "Grand Forks":
        wageRate = 20.19;
        communityName.innerHTML=" - "+communityText;
        switch(healthValue) {
          case "100":
            benefitHealth = 1.93
            break;
          case "75":
            benefitHealth = 1.38
            break;
          case "50":
            benefitHealth = 0.90
            break;
          case "25":
            benefitHealth = 0.45
            break;
          case "0":
            benefitHealth = 0.00
            break;
        }
        hbaVector = 0.00068;
        vacationVector = 0.11;
        benefitsVector = 0.00059;
        benefitHBATotal = hbaValue * hbaVector;
        healthBenefitTotal = benefitHealth + benefitHBATotal;
        healthBenefitsMax = 1.93;
        if (healthBenefitTotal > healthBenefitsMax) {
          healthBenefitTotal = healthBenefitsMax
        }
        benefitVacation = vacationValue * vacationVector;
        benefitOther = otherValue * benefitsVector;
        totalBenefits = healthBenefitTotal+benefitVacation+benefitOther;
        livingWageRate.innerHTML="$"+Math.round(100*(wageRate))/100;
        livingWageRate2.innerHTML="$"+Math.round(100*(wageRate))/100;
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
        benefitRateHealth2.innerHTML="$"+Math.round(100*(healthBenefitTotal))/100;
        benefitRateHBA.innerHTML="$"+Math.round(100*(benefitHBATotal))/100;
        maxHealthValue.innerHTML="$"+Math.round(100*(healthBenefitsMax))/100
        benefitRateVacation.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateVacation2.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateOther.innerHTML="$"+Math.round(100*(benefitOther))/100;
        benefitRateOther2.innerHTML="$"+Math.round(100*(benefitOther))/100;
        hourlyBenefitTotal.innerHTML="$"+Math.round(100*(totalBenefits))/100;
        wageBenefitsGap.innerHTML="$"+Math.round(100*(wageRate-totalBenefits))/100;
        fullWage.innerHTML="$"+Math.round(100*(lowestWage+totalBenefits))/100;
        if (Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100 > 0) {
          payRise.innerHTML="$"+Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100;
        } else {
          payRise.innerHTML="No pay rise required to meet the Living Wage! Your lowest paid employee exceeds the local Living Wage by $" + Math.round(100*((lowestWage+totalBenefits)-wageRate))/100 + " per hour.";
        }
        break;
      case "Kamloops":
        wageRate = 20.91;
        communityName.innerHTML=" - "+communityText;
        switch(healthValue) {
          case "100":
            benefitHealth = 2.38
            break;
          case "75":
            benefitHealth = 1.69
            break;
          case "50":
            benefitHealth = 1.12
            break;
          case "25":
            benefitHealth = 0.57
            break;
          case "0":
            benefitHealth = 0.00
            break;
        }
        hbaVector = 0.00067;
        vacationVector = 0.12;
        benefitsVector = 0.00059;
        benefitHBATotal = hbaValue * hbaVector;
        healthBenefitTotal = benefitHealth + benefitHBATotal;
        healthBenefitsMax = 2.38;
        if (healthBenefitTotal > healthBenefitsMax) {
          healthBenefitTotal = healthBenefitsMax
        }
        benefitVacation = vacationValue * vacationVector;
        benefitOther = otherValue * benefitsVector;
        totalBenefits = healthBenefitTotal+benefitVacation+benefitOther;
        livingWageRate.innerHTML="$"+Math.round(100*(wageRate))/100;
        livingWageRate2.innerHTML="$"+Math.round(100*(wageRate))/100;
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
        benefitRateHealth2.innerHTML="$"+Math.round(100*(healthBenefitTotal))/100;
        benefitRateHBA.innerHTML="$"+Math.round(100*(benefitHBATotal))/100;
        maxHealthValue.innerHTML="$"+Math.round(100*(healthBenefitsMax))/100
        benefitRateVacation.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateVacation2.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateOther.innerHTML="$"+Math.round(100*(benefitOther))/100;
        benefitRateOther2.innerHTML="$"+Math.round(100*(benefitOther))/100;
        hourlyBenefitTotal.innerHTML="$"+Math.round(100*(totalBenefits))/100;
        wageBenefitsGap.innerHTML="$"+Math.round(100*(wageRate-totalBenefits))/100;
        fullWage.innerHTML="$"+Math.round(100*(lowestWage+totalBenefits))/100;
        if (Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100 > 0) {
          payRise.innerHTML="$"+Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100;
        } else {
          payRise.innerHTML="No pay rise required to meet the Living Wage! Your lowest paid employee exceeds the local Living Wage by $" + Math.round(100*((lowestWage+totalBenefits)-wageRate))/100 + " per hour.";
        }
        break;
      case "Revelstoke":
        wageRate = 24.60;
        communityName.innerHTML=" - "+communityText;
        switch(healthValue) {
          case "100":
            benefitHealth = 2.36
            break;
          case "75":
            benefitHealth = 1.67
            break;
          case "50":
            benefitHealth = 1.09
            break;
          case "25":
            benefitHealth = 0.53
            break;
          case "0":
            benefitHealth = 0.00
            break;
        }
        hbaVector = 0.00067;
        vacationVector = 0.13;
        benefitsVector = 0.00059;
        benefitHBATotal = hbaValue * hbaVector;
        healthBenefitTotal = benefitHealth + benefitHBATotal;
        healthBenefitsMax = 2.36;
        if (healthBenefitTotal > healthBenefitsMax) {
          healthBenefitTotal = healthBenefitsMax
        }
        benefitVacation = vacationValue * vacationVector;
        benefitOther = otherValue * benefitsVector;
        totalBenefits = healthBenefitTotal+benefitVacation+benefitOther;
        livingWageRate.innerHTML="$"+Math.round(100*(wageRate))/100;
        livingWageRate2.innerHTML="$"+Math.round(100*(wageRate))/100;
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
        benefitRateHealth2.innerHTML="$"+Math.round(100*(healthBenefitTotal))/100;
        benefitRateHBA.innerHTML="$"+Math.round(100*(benefitHBATotal))/100;
        maxHealthValue.innerHTML="$"+Math.round(100*(healthBenefitsMax))/100
        benefitRateVacation.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateVacation2.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateOther.innerHTML="$"+Math.round(100*(benefitOther))/100;
        benefitRateOther2.innerHTML="$"+Math.round(100*(benefitOther))/100;
        hourlyBenefitTotal.innerHTML="$"+Math.round(100*(totalBenefits))/100;
        wageBenefitsGap.innerHTML="$"+Math.round(100*(wageRate-totalBenefits))/100;
        fullWage.innerHTML="$"+Math.round(100*(lowestWage+totalBenefits))/100;
        if (Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100 > 0) {
          payRise.innerHTML="$"+Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100;
        } else {
          payRise.innerHTML="No pay rise required to meet the Living Wage! Your lowest paid employee exceeds the local Living Wage by $" + Math.round(100*((lowestWage+totalBenefits)-wageRate))/100 + " per hour.";
        }
        break;
      case "Columbia Valley":
        wageRate = 22.63;
        communityName.innerHTML=" - "+communityText;
        switch(healthValue) {
          case "100":
            benefitHealth = 2.39
            break;
          case "75":
            benefitHealth = 1.70
            break;
          case "50":
            benefitHealth = 1.13
            break;
          case "25":
            benefitHealth = 0.57
            break;
          case "0":
            benefitHealth = 0.00
            break;
        }
        hbaVector = 0.00067;
        vacationVector = 0.13;
        benefitsVector = 0.00059;
        benefitHBATotal = hbaValue * hbaVector;
        healthBenefitTotal = benefitHealth + benefitHBATotal;
        healthBenefitsMax = 2.39;
        if (healthBenefitTotal > healthBenefitsMax) {
          healthBenefitTotal = healthBenefitsMax
        }
        benefitVacation = vacationValue * vacationVector;
        benefitOther = otherValue * benefitsVector;
        totalBenefits = healthBenefitTotal+benefitVacation+benefitOther;
        livingWageRate.innerHTML="$"+Math.round(100*(wageRate))/100;
        livingWageRate2.innerHTML="$"+Math.round(100*(wageRate))/100;
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
        benefitRateHealth2.innerHTML="$"+Math.round(100*(healthBenefitTotal))/100;
        benefitRateHBA.innerHTML="$"+Math.round(100*(benefitHBATotal))/100;
        maxHealthValue.innerHTML="$"+Math.round(100*(healthBenefitsMax))/100
        benefitRateVacation.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateVacation2.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateOther.innerHTML="$"+Math.round(100*(benefitOther))/100;
        benefitRateOther2.innerHTML="$"+Math.round(100*(benefitOther))/100;
        hourlyBenefitTotal.innerHTML="$"+Math.round(100*(totalBenefits))/100;
        wageBenefitsGap.innerHTML="$"+Math.round(100*(wageRate-totalBenefits))/100;
        fullWage.innerHTML="$"+Math.round(100*(lowestWage+totalBenefits))/100;
        if (Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100 > 0) {
          payRise.innerHTML="$"+Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100;
        } else {
          payRise.innerHTML="No pay rise required to meet the Living Wage! Your lowest paid employee exceeds the local Living Wage by $" + Math.round(100*((lowestWage+totalBenefits)-wageRate))/100 + " per hour.";
        }
        break;
      case "Powell River":
        wageRate = 25.06;
        communityName.innerHTML=" - "+communityText;
        switch(healthValue) {
          case "100":
            benefitHealth = 2.29
            break;
          case "75":
            benefitHealth = 1.63
            break;
          case "50":
            benefitHealth = 1.06
            break;
          case "25":
            benefitHealth = 0.53
            break;
          case "0":
            benefitHealth = 0.00
            break;
        }
        hbaVector = 0.00067;
        vacationVector = 0.14;
        benefitsVector = 0.00059;
        benefitHBATotal = hbaValue * hbaVector;
        healthBenefitTotal = benefitHealth + benefitHBATotal;
        healthBenefitsMax = 2.29;
        if (healthBenefitTotal > healthBenefitsMax) {
          healthBenefitTotal = healthBenefitsMax
        }
        benefitVacation = vacationValue * vacationVector;
        benefitOther = otherValue * benefitsVector;
        totalBenefits = healthBenefitTotal+benefitVacation+benefitOther;
        livingWageRate.innerHTML="$"+Math.round(100*(wageRate))/100;
        livingWageRate2.innerHTML="$"+Math.round(100*(wageRate))/100;
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
        benefitRateHealth2.innerHTML="$"+Math.round(100*(healthBenefitTotal))/100;
        benefitRateHBA.innerHTML="$"+Math.round(100*(benefitHBATotal))/100;
        maxHealthValue.innerHTML="$"+Math.round(100*(healthBenefitsMax))/100
        benefitRateVacation.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateVacation2.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateOther.innerHTML="$"+Math.round(100*(benefitOther))/100;
        benefitRateOther2.innerHTML="$"+Math.round(100*(benefitOther))/100;
        hourlyBenefitTotal.innerHTML="$"+Math.round(100*(totalBenefits))/100;
        wageBenefitsGap.innerHTML="$"+Math.round(100*(wageRate-totalBenefits))/100;
        fullWage.innerHTML="$"+Math.round(100*(lowestWage+totalBenefits))/100;
        if (Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100 > 0) {
          payRise.innerHTML="$"+Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100;
        } else {
          payRise.innerHTML="No pay rise required to meet the Living Wage! Your lowest paid employee exceeds the local Living Wage by $" + Math.round(100*((lowestWage+totalBenefits)-wageRate))/100 + " per hour.";
        }
        break;
      case "Trail":
        wageRate = 21.55;
        communityName.innerHTML=" - "+communityText;
        switch(healthValue) {
          case "100":
            benefitHealth = 2.37
            break;
          case "75":
            benefitHealth = 1.68
            break;
          case "50":
            benefitHealth = 1.10
            break;
          case "25":
            benefitHealth = 0.54
            break;
          case "0":
            benefitHealth = 0.00
            break;
        }
        hbaVector = 0.00067;
        vacationVector = 0.12;
        benefitsVector = 0.00059;
        benefitHBATotal = hbaValue * hbaVector;
        healthBenefitTotal = benefitHealth + benefitHBATotal;
        healthBenefitsMax = 2.37;
        if (healthBenefitTotal > healthBenefitsMax) {
          healthBenefitTotal = healthBenefitsMax
        }
        benefitVacation = vacationValue * vacationVector;
        benefitOther = otherValue * benefitsVector;
        totalBenefits = healthBenefitTotal+benefitVacation+benefitOther;
        livingWageRate.innerHTML="$"+Math.round(100*(wageRate))/100;
        livingWageRate2.innerHTML="$"+Math.round(100*(wageRate))/100;
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
        benefitRateHealth2.innerHTML="$"+Math.round(100*(healthBenefitTotal))/100;
        benefitRateHBA.innerHTML="$"+Math.round(100*(benefitHBATotal))/100;
        maxHealthValue.innerHTML="$"+Math.round(100*(healthBenefitsMax))/100
        benefitRateVacation.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateVacation2.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateOther.innerHTML="$"+Math.round(100*(benefitOther))/100;
        benefitRateOther2.innerHTML="$"+Math.round(100*(benefitOther))/100;
        hourlyBenefitTotal.innerHTML="$"+Math.round(100*(totalBenefits))/100;
        wageBenefitsGap.innerHTML="$"+Math.round(100*(wageRate-totalBenefits))/100;
        fullWage.innerHTML="$"+Math.round(100*(lowestWage+totalBenefits))/100;
        if (Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100 > 0) {
          payRise.innerHTML="$"+Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100;
        } else {
          payRise.innerHTML="No pay rise required to meet the Living Wage! Your lowest paid employee exceeds the local Living Wage by $" + Math.round(100*((lowestWage+totalBenefits)-wageRate))/100 + " per hour.";
        }
        break;
      case "Dawson Creek":
        wageRate = 20.64;
        communityName.innerHTML=" - "+communityText;
        switch(healthValue) {
          case "100":
            benefitHealth = 2.37
            break;
          case "75":
            benefitHealth = 1.68
            break;
          case "50":
            benefitHealth = 1.11
            break;
          case "25":
            benefitHealth = 0.56
            break;
          case "0":
            benefitHealth = 0.00
            break;
        }
        hbaVector = 0.00067;
        vacationVector = 0.12;
        benefitsVector = 0.00059;
        benefitHBATotal = hbaValue * hbaVector;
        healthBenefitTotal = benefitHealth + benefitHBATotal;
        healthBenefitsMax = 2.37;
        if (healthBenefitTotal > healthBenefitsMax) {
          healthBenefitTotal = healthBenefitsMax
        }
        benefitVacation = vacationValue * vacationVector;
        benefitOther = otherValue * benefitsVector;
        totalBenefits = healthBenefitTotal+benefitVacation+benefitOther;
        livingWageRate.innerHTML="$"+Math.round(100*(wageRate))/100;
        livingWageRate2.innerHTML="$"+Math.round(100*(wageRate))/100;
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
        benefitRateHealth2.innerHTML="$"+Math.round(100*(healthBenefitTotal))/100;
        benefitRateHBA.innerHTML="$"+Math.round(100*(benefitHBATotal))/100;
        maxHealthValue.innerHTML="$"+Math.round(100*(healthBenefitsMax))/100
        benefitRateVacation.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateVacation2.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateOther.innerHTML="$"+Math.round(100*(benefitOther))/100;
        benefitRateOther2.innerHTML="$"+Math.round(100*(benefitOther))/100;
        hourlyBenefitTotal.innerHTML="$"+Math.round(100*(totalBenefits))/100;
        wageBenefitsGap.innerHTML="$"+Math.round(100*(wageRate-totalBenefits))/100;
        fullWage.innerHTML="$"+Math.round(100*(lowestWage+totalBenefits))/100;
        if (Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100 > 0) {
          payRise.innerHTML="$"+Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100;
        } else {
          payRise.innerHTML="No pay rise required to meet the Living Wage! Your lowest paid employee exceeds the local Living Wage by $" + Math.round(100*((lowestWage+totalBenefits)-wageRate))/100 + " per hour.";
        }
        break;
      case "Golden":
        wageRate = 25.78;
        communityName.innerHTML=" - "+communityText;
        switch(healthValue) {
          case "100":
            benefitHealth = 2.34
            break;
          case "75":
            benefitHealth = 1.65
            break;
          case "50":
            benefitHealth = 1.06
            break;
          case "25":
            benefitHealth = 0.53
            break;
          case "0":
            benefitHealth = 0.00
            break;
        }
        hbaVector = 0.00065;
        vacationVector = 0.14;
        benefitsVector = 0.00059;
        benefitHBATotal = hbaValue * hbaVector;
        healthBenefitTotal = benefitHealth + benefitHBATotal;
        healthBenefitsMax = 2.34;
        if (healthBenefitTotal > healthBenefitsMax) {
          healthBenefitTotal = healthBenefitsMax
        }
        benefitVacation = vacationValue * vacationVector;
        benefitOther = otherValue * benefitsVector;
        totalBenefits = healthBenefitTotal+benefitVacation+benefitOther;
        livingWageRate.innerHTML="$"+Math.round(100*(wageRate))/100;
        livingWageRate2.innerHTML="$"+Math.round(100*(wageRate))/100;
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
        benefitRateHealth2.innerHTML="$"+Math.round(100*(healthBenefitTotal))/100;
        benefitRateHBA.innerHTML="$"+Math.round(100*(benefitHBATotal))/100;
        maxHealthValue.innerHTML="$"+Math.round(100*(healthBenefitsMax))/100
        benefitRateVacation.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateVacation2.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateOther.innerHTML="$"+Math.round(100*(benefitOther))/100;
        benefitRateOther2.innerHTML="$"+Math.round(100*(benefitOther))/100;
        hourlyBenefitTotal.innerHTML="$"+Math.round(100*(totalBenefits))/100;
        wageBenefitsGap.innerHTML="$"+Math.round(100*(wageRate-totalBenefits))/100;
        fullWage.innerHTML="$"+Math.round(100*(lowestWage+totalBenefits))/100;
        if (Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100 > 0) {
          payRise.innerHTML="$"+Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100;
        } else {
          payRise.innerHTML="No pay rise required to meet the Living Wage! Your lowest paid employee exceeds the local Living Wage by $" + Math.round(100*((lowestWage+totalBenefits)-wageRate))/100 + " per hour.";
        }
        break;
      case "Cowichan Valley":
        wageRate = 25.20;
        communityName.innerHTML=" - "+communityText;
        switch(healthValue) {
          case "100":
            benefitHealth = 2.29
            break;
          case "75":
            benefitHealth = 1.64
            break;
          case "50":
            benefitHealth = 1.07
            break;
          case "25":
            benefitHealth = 0.54
            break;
          case "0":
            benefitHealth = 0.00
            break;
        }
        hbaVector = 0.00067;
        vacationVector = 0.14;
        benefitsVector = 0.00059;
        benefitHBATotal = hbaValue * hbaVector;
        healthBenefitTotal = benefitHealth + benefitHBATotal;
        healthBenefitsMax = 2.29;
        if (healthBenefitTotal > healthBenefitsMax) {
          healthBenefitTotal = healthBenefitsMax
        }
        benefitVacation = vacationValue * vacationVector;
        benefitOther = otherValue * benefitsVector;
        totalBenefits = healthBenefitTotal+benefitVacation+benefitOther;
        livingWageRate.innerHTML="$"+Math.round(100*(wageRate))/100;
        livingWageRate2.innerHTML="$"+Math.round(100*(wageRate))/100;
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
        benefitRateHealth2.innerHTML="$"+Math.round(100*(healthBenefitTotal))/100;
        benefitRateHBA.innerHTML="$"+Math.round(100*(benefitHBATotal))/100;
        maxHealthValue.innerHTML="$"+Math.round(100*(healthBenefitsMax))/100
        benefitRateVacation.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateVacation2.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateOther.innerHTML="$"+Math.round(100*(benefitOther))/100;
        benefitRateOther2.innerHTML="$"+Math.round(100*(benefitOther))/100;
        hourlyBenefitTotal.innerHTML="$"+Math.round(100*(totalBenefits))/100;
        wageBenefitsGap.innerHTML="$"+Math.round(100*(wageRate-totalBenefits))/100;
        fullWage.innerHTML="$"+Math.round(100*(lowestWage+totalBenefits))/100;
        if (Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100 > 0) {
          payRise.innerHTML="$"+Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100;
        } else {
          payRise.innerHTML="No pay rise required to meet the Living Wage! Your lowest paid employee exceeds the local Living Wage by $" + Math.round(100*((lowestWage+totalBenefits)-wageRate))/100 + " per hour.";
        }
        break;
      case "Clayoquot":
        wageRate = 26.51;
        communityName.innerHTML=" - "+communityText;
        switch(healthValue) {
          case "100":
            benefitHealth = 2.30
            break;
          case "75":
            benefitHealth = 1.64
            break;
          case "50":
            benefitHealth = 1.06
            break;
          case "25":
            benefitHealth = 0.53
            break;
          case "0":
            benefitHealth = 0.00
            break;
        }
        hbaVector = 0.00067;
        vacationVector = 0.14;
        benefitsVector = 0.00059;
        benefitHBATotal = hbaValue * hbaVector;
        healthBenefitTotal = benefitHealth + benefitHBATotal;
        healthBenefitsMax = 2.30;
        if (healthBenefitTotal > healthBenefitsMax) {
          healthBenefitTotal = healthBenefitsMax
        }
        benefitVacation = vacationValue * vacationVector;
        benefitOther = otherValue * benefitsVector;
        totalBenefits = healthBenefitTotal+benefitVacation+benefitOther;
        livingWageRate.innerHTML="$"+Math.round(100*(wageRate))/100;
        livingWageRate2.innerHTML="$"+Math.round(100*(wageRate))/100;
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
        benefitRateHealth2.innerHTML="$"+Math.round(100*(healthBenefitTotal))/100;
        benefitRateHBA.innerHTML="$"+Math.round(100*(benefitHBATotal))/100;
        maxHealthValue.innerHTML="$"+Math.round(100*(healthBenefitsMax))/100
        benefitRateVacation.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateVacation2.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateOther.innerHTML="$"+Math.round(100*(benefitOther))/100;
        benefitRateOther2.innerHTML="$"+Math.round(100*(benefitOther))/100;
        hourlyBenefitTotal.innerHTML="$"+Math.round(100*(totalBenefits))/100;
        wageBenefitsGap.innerHTML="$"+Math.round(100*(wageRate-totalBenefits))/100;
        fullWage.innerHTML="$"+Math.round(100*(lowestWage+totalBenefits))/100;
        if (Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100 > 0) {
          payRise.innerHTML="$"+Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100;
        } else {
          payRise.innerHTML="No pay rise required to meet the Living Wage! Your lowest paid employee exceeds the local Living Wage by $" + Math.round(100*((lowestWage+totalBenefits)-wageRate))/100 + " per hour.";
        }
        break;
      case "Prince Rupert":
        wageRate = 22.69;
        communityName.innerHTML=" - "+communityText;
        switch(healthValue) {
          case "100":
            benefitHealth = 2.11
            break;
          case "75":
            benefitHealth = 1.51
            break;
          case "50":
            benefitHealth = 0.98
            break;
          case "25":
            benefitHealth = 0.49
            break;
          case "0":
            benefitHealth = 0.00
            break;
        }
        hbaVector = 0.00068;
        vacationVector = 0.13;
        benefitsVector = 0.00059;
        benefitHBATotal = hbaValue * hbaVector;
        healthBenefitTotal = benefitHealth + benefitHBATotal;
        healthBenefitsMax = 2.11;
        if (healthBenefitTotal > healthBenefitsMax) {
          healthBenefitTotal = healthBenefitsMax
        }
        benefitVacation = vacationValue * vacationVector;
        benefitOther = otherValue * benefitsVector;
        totalBenefits = healthBenefitTotal+benefitVacation+benefitOther;
        livingWageRate.innerHTML="$"+Math.round(100*(wageRate))/100;
        livingWageRate2.innerHTML="$"+Math.round(100*(wageRate))/100;
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
        benefitRateHealth2.innerHTML="$"+Math.round(100*(healthBenefitTotal))/100;
        benefitRateHBA.innerHTML="$"+Math.round(100*(benefitHBATotal))/100;
        maxHealthValue.innerHTML="$"+Math.round(100*(healthBenefitsMax))/100
        benefitRateVacation.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateVacation2.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateOther.innerHTML="$"+Math.round(100*(benefitOther))/100;
        benefitRateOther2.innerHTML="$"+Math.round(100*(benefitOther))/100;
        hourlyBenefitTotal.innerHTML="$"+Math.round(100*(totalBenefits))/100;
        wageBenefitsGap.innerHTML="$"+Math.round(100*(wageRate-totalBenefits))/100;
        fullWage.innerHTML="$"+Math.round(100*(lowestWage+totalBenefits))/100;
        if (Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100 > 0) {
          payRise.innerHTML="$"+Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100;
        } else {
          payRise.innerHTML="No pay rise required to meet the Living Wage! Your lowest paid employee exceeds the local Living Wage by $" + Math.round(100*((lowestWage+totalBenefits)-wageRate))/100 + " per hour.";
        }
        break;
      case "Cranbrook":
        wageRate = 21.90;
        communityName.innerHTML=" - "+communityText;
        switch(healthValue) {
          case "100":
            benefitHealth = 2.09
            break;
          case "75":
            benefitHealth = 1.49
            break;
          case "50":
            benefitHealth = 0.97
            break;
          case "25":
            benefitHealth = 0.48
            break;
          case "0":
            benefitHealth = 0.00
            break;
        }
        hbaVector = 0.00068;
        vacationVector = 0.12;
        benefitsVector = 0.00059;
        benefitHBATotal = hbaValue * hbaVector;
        healthBenefitTotal = benefitHealth + benefitHBATotal;
        healthBenefitsMax = 2.09;
        if (healthBenefitTotal > healthBenefitsMax) {
          healthBenefitTotal = healthBenefitsMax
        }
        benefitVacation = vacationValue * vacationVector;
        benefitOther = otherValue * benefitsVector;
        totalBenefits = healthBenefitTotal+benefitVacation+benefitOther;
        livingWageRate.innerHTML="$"+Math.round(100*(wageRate))/100;
        livingWageRate2.innerHTML="$"+Math.round(100*(wageRate))/100;
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
        benefitRateHealth2.innerHTML="$"+Math.round(100*(healthBenefitTotal))/100;
        benefitRateHBA.innerHTML="$"+Math.round(100*(benefitHBATotal))/100;
        maxHealthValue.innerHTML="$"+Math.round(100*(healthBenefitsMax))/100
        benefitRateVacation.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateVacation2.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateOther.innerHTML="$"+Math.round(100*(benefitOther))/100;
        benefitRateOther2.innerHTML="$"+Math.round(100*(benefitOther))/100;
        hourlyBenefitTotal.innerHTML="$"+Math.round(100*(totalBenefits))/100;
        wageBenefitsGap.innerHTML="$"+Math.round(100*(wageRate-totalBenefits))/100;
        fullWage.innerHTML="$"+Math.round(100*(lowestWage+totalBenefits))/100;
        if (Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100 > 0) {
          payRise.innerHTML="$"+Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100;
        } else {
          payRise.innerHTML="No pay rise required to meet the Living Wage! Your lowest paid employee exceeds the local Living Wage by $" + Math.round(100*((lowestWage+totalBenefits)-wageRate))/100 + " per hour.";
        }
        break;
      case "Castlegar":
        wageRate = 20.90;
        communityName.innerHTML=" - "+communityText;
        switch(healthValue) {
          case "100":
            benefitHealth = 1.92
            break;
          case "75":
            benefitHealth = 1.36
            break;
          case "50":
            benefitHealth = 0.90
            break;
          case "25":
            benefitHealth = 0.46
            break;
          case "0":
            benefitHealth = 0.00
            break;
        }
        hbaVector = 0.00068;
        vacationVector = 0.12;
        benefitsVector = 0.00059;
        benefitHBATotal = hbaValue * hbaVector;
        healthBenefitTotal = benefitHealth + benefitHBATotal;
        healthBenefitsMax = 1.92;
        if (healthBenefitTotal > healthBenefitsMax) {
          healthBenefitTotal = healthBenefitsMax
        }
        benefitVacation = vacationValue * vacationVector;
        benefitOther = otherValue * benefitsVector;
        totalBenefits = healthBenefitTotal+benefitVacation+benefitOther;
        livingWageRate.innerHTML="$"+Math.round(100*(wageRate))/100;
        livingWageRate2.innerHTML="$"+Math.round(100*(wageRate))/100;
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
        benefitRateHealth2.innerHTML="$"+Math.round(100*(healthBenefitTotal))/100;
        benefitRateHBA.innerHTML="$"+Math.round(100*(benefitHBATotal))/100;
        maxHealthValue.innerHTML="$"+Math.round(100*(healthBenefitsMax))/100
        benefitRateVacation.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateVacation2.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateOther.innerHTML="$"+Math.round(100*(benefitOther))/100;
        benefitRateOther2.innerHTML="$"+Math.round(100*(benefitOther))/100;
        hourlyBenefitTotal.innerHTML="$"+Math.round(100*(totalBenefits))/100;
        wageBenefitsGap.innerHTML="$"+Math.round(100*(wageRate-totalBenefits))/100;
        fullWage.innerHTML="$"+Math.round(100*(lowestWage+totalBenefits))/100;
        if (Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100 > 0) {
          payRise.innerHTML="$"+Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100;
        } else {
          payRise.innerHTML="No pay rise required to meet the Living Wage! Your lowest paid employee exceeds the local Living Wage by $" + Math.round(100*((lowestWage+totalBenefits)-wageRate))/100 + " per hour.";
        }
        break;
      case "Daajing Gids":
        wageRate = 26.25;
        communityName.innerHTML=" - "+communityText;
        switch(healthValue) {
          case "100":
            benefitHealth = 2.33
            break;
          case "75":
            benefitHealth = 1.64
            break;
          case "50":
            benefitHealth = 1.07
            break;
          case "25":
            benefitHealth = 0.54
            break;
          case "0":
            benefitHealth = 0.00
            break;
        }
        hbaVector = 0.00065;
        vacationVector = 0.14;
        benefitsVector = 0.00059;
        benefitHBATotal = hbaValue * hbaVector;
        healthBenefitTotal = benefitHealth + benefitHBATotal;
        healthBenefitsMax = 2.33;
        if (healthBenefitTotal > healthBenefitsMax) {
          healthBenefitTotal = healthBenefitsMax
        }
        benefitVacation = vacationValue * vacationVector;
        benefitOther = otherValue * benefitsVector;
        totalBenefits = healthBenefitTotal+benefitVacation+benefitOther;
        livingWageRate.innerHTML="$"+Math.round(100*(wageRate))/100;
        livingWageRate2.innerHTML="$"+Math.round(100*(wageRate))/100;
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
        benefitRateHealth2.innerHTML="$"+Math.round(100*(healthBenefitTotal))/100;
        benefitRateHBA.innerHTML="$"+Math.round(100*(benefitHBATotal))/100;
        maxHealthValue.innerHTML="$"+Math.round(100*(healthBenefitsMax))/100
        benefitRateVacation.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateVacation2.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateOther.innerHTML="$"+Math.round(100*(benefitOther))/100;
        benefitRateOther2.innerHTML="$"+Math.round(100*(benefitOther))/100;
        hourlyBenefitTotal.innerHTML="$"+Math.round(100*(totalBenefits))/100;
        wageBenefitsGap.innerHTML="$"+Math.round(100*(wageRate-totalBenefits))/100;
        fullWage.innerHTML="$"+Math.round(100*(lowestWage+totalBenefits))/100;
        if (Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100 > 0) {
          payRise.innerHTML="$"+Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100;
        } else {
          payRise.innerHTML="No pay rise required to meet the Living Wage! Your lowest paid employee exceeds the local Living Wage by $" + Math.round(100*((lowestWage+totalBenefits)-wageRate))/100 + " per hour.";
        }
        break;
        case "Sunshine Coast":
        wageRate = 25.61;
        communityName.innerHTML=" - "+communityText;
        switch(healthValue) {
          case "100":
            benefitHealth = 2.30
            break;
          case "75":
            benefitHealth = 1.62
            break;
          case "50":
            benefitHealth = 1.05
            break;
          case "25":
            benefitHealth = 0.53
            break;
          case "0":
            benefitHealth = 0.00
            break;
        }
        hbaVector = 0.00067;
        vacationVector = 0.14;
        benefitsVector = 0.00059;
        benefitHBATotal = hbaValue * hbaVector;
        healthBenefitTotal = benefitHealth + benefitHBATotal;
        healthBenefitsMax = 2.30;
        if (healthBenefitTotal > healthBenefitsMax) {
          healthBenefitTotal = healthBenefitsMax
        }
        benefitVacation = vacationValue * vacationVector;
        benefitOther = otherValue * benefitsVector;
        totalBenefits = healthBenefitTotal+benefitVacation+benefitOther;
        livingWageRate.innerHTML="$"+Math.round(100*(wageRate))/100;
        livingWageRate2.innerHTML="$"+Math.round(100*(wageRate))/100;
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
        benefitRateHealth2.innerHTML="$"+Math.round(100*(healthBenefitTotal))/100;
        benefitRateHBA.innerHTML="$"+Math.round(100*(benefitHBATotal))/100;
        maxHealthValue.innerHTML="$"+Math.round(100*(healthBenefitsMax))/100
        benefitRateVacation.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateVacation2.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateOther.innerHTML="$"+Math.round(100*(benefitOther))/100;
        benefitRateOther2.innerHTML="$"+Math.round(100*(benefitOther))/100;
        hourlyBenefitTotal.innerHTML="$"+Math.round(100*(totalBenefits))/100;
        wageBenefitsGap.innerHTML="$"+Math.round(100*(wageRate-totalBenefits))/100;
        fullWage.innerHTML="$"+Math.round(100*(lowestWage+totalBenefits))/100;
        if (Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100 > 0) {
          payRise.innerHTML="$"+Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100;
        } else {
          payRise.innerHTML="No pay rise required to meet the Living Wage! Your lowest paid employee exceeds the local Living Wage by $" + Math.round(100*((lowestWage+totalBenefits)-wageRate))/100 + " per hour.";
        }
        break;
    case "Salt Spring Island":
        wageRate = 24.36;
        communityName.innerHTML=" - "+communityText;
        switch(healthValue) {
          case "100":
            benefitHealth = 2.03
            break;
          case "75":
            benefitHealth = 1.47
            break;
          case "50":
            benefitHealth = 0.98
            break;
          case "25":
            benefitHealth = 0.53
            break;
          case "0":
            benefitHealth = 0.00
            break;
        }
        hbaVector = 0.00068;
        vacationVector = 0.14;
        benefitsVector = 0.00059;
        benefitHBATotal = hbaValue * hbaVector;
        healthBenefitTotal = benefitHealth + benefitHBATotal;
        healthBenefitsMax = 2.03;
        if (healthBenefitTotal > healthBenefitsMax) {
          healthBenefitTotal = healthBenefitsMax
        }
        benefitVacation = vacationValue * vacationVector;
        benefitOther = otherValue * benefitsVector;
        totalBenefits = healthBenefitTotal+benefitVacation+benefitOther;
        livingWageRate.innerHTML="$"+Math.round(100*(wageRate))/100;
        livingWageRate2.innerHTML="$"+Math.round(100*(wageRate))/100;
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
        benefitRateHealth2.innerHTML="$"+Math.round(100*(healthBenefitTotal))/100;
        benefitRateHBA.innerHTML="$"+Math.round(100*(benefitHBATotal))/100;
        maxHealthValue.innerHTML="$"+Math.round(100*(healthBenefitsMax))/100
        benefitRateVacation.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateVacation2.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateOther.innerHTML="$"+Math.round(100*(benefitOther))/100;
        benefitRateOther2.innerHTML="$"+Math.round(100*(benefitOther))/100;
        hourlyBenefitTotal.innerHTML="$"+Math.round(100*(totalBenefits))/100;
        wageBenefitsGap.innerHTML="$"+Math.round(100*(wageRate-totalBenefits))/100;
        fullWage.innerHTML="$"+Math.round(100*(lowestWage+totalBenefits))/100;
        if (Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100 > 0) {
          payRise.innerHTML="$"+Math.round(100*(wageRate-(lowestWage+totalBenefits)))/100;
        } else {
          payRise.innerHTML="No pay rise required to meet the Living Wage! Your lowest paid employee exceeds the local Living Wage by $" + Math.round(100*((lowestWage+totalBenefits)-wageRate))/100 + " per hour.";
        }
        break;
    }
  }
  document.addEventListener("DOMContentLoaded", function() {
  calculateValues();
});
  calculateValues();
