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
    if (hbaValue > 2700) {
      hbaValue = 2700;
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
    const benefitRateHealth = document.querySelector("#benefitRateHealth");
    const benefitRateHBA = document.querySelector("#benefitRateHBA");
    const maxHealthValue = document.querySelector("#maxHealthValue");
    const benefitRateVacation = document.querySelector("#benefitRateVacation");
    const benefitRateOther = document.querySelector("#benefitRateOther");
    const hourlyBenefitTotal = document.querySelector("#hourlyBenefitTotal");
    const wageBenefitsGap = document.querySelector("#wageBenefitsGap");
    const fullWage = document.querySelector("#fullWage");
    const payRise = document.querySelector("#payRise");

    switch(communityText) {
      case "Metro Vancouver":
        wageRate = 24.08;
        communityName.innerHTML=" - "+communityText;
        switch(healthValue) {
          case "100":
            benefitHealth = 1.94
            break;
          case "75":
            benefitHealth = 1.39
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
        vacationVector = 0.14;
        benefitsVector = 0.00059;
        benefitHBATotal = hbaValue * hbaVector;
        healthBenefitTotal = benefitHealth + benefitHBATotal;
        healthBenefitsMax = 1.94;
        if (healthBenefitTotal > healthBenefitsMax) {
          healthBenefitTotal = healthBenefitsMax
        }
        benefitVacation = vacationValue * vacationVector;
        benefitOther = otherValue * benefitsVector;
        totalBenefits = healthBenefitTotal+benefitVacation+benefitOther;
        livingWageRate.innerHTML="$"+Math.round(100*(wageRate))/100;
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
        benefitRateHBA.innerHTML="$"+Math.round(100*(benefitHBATotal))/100;
        maxHealthValue.innerHTML="$"+Math.round(100*(healthBenefitsMax))/100
        benefitRateVacation.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateOther.innerHTML="$"+Math.round(100*(benefitOther))/100;
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
        wageRate = 24.29;
        communityName.innerHTML=" - "+communityText;
        switch(healthValue) {
          case "100":
            benefitHealth = 1.96
            break;
          case "75":
            benefitHealth = 1.40
            break;
          case "50":
            benefitHealth = 0.91
            break;
          case "25":
            benefitHealth = 0.46
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
        healthBenefitsMax = 1.96;
        if (healthBenefitTotal > healthBenefitsMax) {
          healthBenefitTotal = healthBenefitsMax
        }
        benefitVacation = vacationValue * vacationVector;
        benefitOther = otherValue * benefitsVector;
        totalBenefits = healthBenefitTotal+benefitVacation+benefitOther;
        livingWageRate.innerHTML="$"+Math.round(100*(wageRate))/100;
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
        benefitRateHBA.innerHTML="$"+Math.round(100*(benefitHBATotal))/100;
        maxHealthValue.innerHTML="$"+Math.round(100*(healthBenefitsMax))/100
        benefitRateVacation.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateOther.innerHTML="$"+Math.round(100*(benefitOther))/100;
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
        wageRate = 20.26;
        communityName.innerHTML=" - "+communityText;
        switch(healthValue) {
          case "100":
            benefitHealth = 1.92
            break;
          case "75":
            benefitHealth = 1.37
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
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
        benefitRateHBA.innerHTML="$"+Math.round(100*(benefitHBATotal))/100;
        maxHealthValue.innerHTML="$"+Math.round(100*(healthBenefitsMax))/100
        benefitRateVacation.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateOther.innerHTML="$"+Math.round(100*(benefitOther))/100;
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
        wageRate = 22.88;
        communityName.innerHTML=" - "+communityText;
        switch(healthValue) {
          case "100":
            benefitHealth = 1.95
            break;
          case "75":
            benefitHealth = 1.40
            break;
          case "50":
            benefitHealth = 0.91
            break;
          case "25":
            benefitHealth = 0.47
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
        healthBenefitsMax = 1.95;
        if (healthBenefitTotal > healthBenefitsMax) {
          healthBenefitTotal = healthBenefitsMax
        }
        benefitVacation = vacationValue * vacationVector;
        benefitOther = otherValue * benefitsVector;
        totalBenefits = healthBenefitTotal+benefitVacation+benefitOther;
        livingWageRate.innerHTML="$"+Math.round(100*(wageRate))/100;
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
        benefitRateHBA.innerHTML="$"+Math.round(100*(benefitHBATotal))/100;
        maxHealthValue.innerHTML="$"+Math.round(100*(healthBenefitsMax))/100
        benefitRateVacation.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateOther.innerHTML="$"+Math.round(100*(benefitOther))/100;
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
        wageRate = 20.49;
        communityName.innerHTML=" - "+communityText;
        switch(healthValue) {
          case "100":
            benefitHealth = 1.91
            break;
          case "75":
            benefitHealth = 1.36
            break;
          case "50":
            benefitHealth = 0.89
            break;
          case "25":
            benefitHealth = 0.44
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
        healthBenefitsMax = 1.91;
        if (healthBenefitTotal > healthBenefitsMax) {
          healthBenefitTotal = healthBenefitsMax
        }
        benefitVacation = vacationValue * vacationVector;
        benefitOther = otherValue * benefitsVector;
        totalBenefits = healthBenefitTotal+benefitVacation+benefitOther;
        livingWageRate.innerHTML="$"+Math.round(100*(wageRate))/100;
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
        benefitRateHBA.innerHTML="$"+Math.round(100*(benefitHBATotal))/100;
        maxHealthValue.innerHTML="$"+Math.round(100*(healthBenefitsMax))/100
        benefitRateVacation.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateOther.innerHTML="$"+Math.round(100*(benefitOther))/100;
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
        wageRate = 18.98;
        communityName.innerHTML=" - "+communityText;
        switch(healthValue) {
          case "100":
            benefitHealth = 1.91
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
        vacationVector = 0.11;
        benefitsVector = 0.00059;
        benefitHBATotal = hbaValue * hbaVector;
        healthBenefitTotal = benefitHealth + benefitHBATotal;
        healthBenefitsMax = 1.91;
        if (healthBenefitTotal > healthBenefitsMax) {
          healthBenefitTotal = healthBenefitsMax
        }
        benefitVacation = vacationValue * vacationVector;
        benefitOther = otherValue * benefitsVector;
        totalBenefits = healthBenefitTotal+benefitVacation+benefitOther;
        livingWageRate.innerHTML="$"+Math.round(100*(wageRate))/100;
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
        benefitRateHBA.innerHTML="$"+Math.round(100*(benefitHBATotal))/100;
        maxHealthValue.innerHTML="$"+Math.round(100*(healthBenefitsMax))/100
        benefitRateVacation.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateOther.innerHTML="$"+Math.round(100*(benefitOther))/100;
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
        wageRate = 20.83;
        communityName.innerHTML=" - "+communityText;
        switch(healthValue) {
          case "100":
            benefitHealth = 1.93
            break;
          case "75":
            benefitHealth = 1.37
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
        vacationVector = 0.12;
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
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
        benefitRateHBA.innerHTML="$"+Math.round(100*(benefitHBATotal))/100;
        maxHealthValue.innerHTML="$"+Math.round(100*(healthBenefitsMax))/100
        benefitRateVacation.innerHTML="$"+Math.round(100*(benefitVacation))/100;
        benefitRateOther.innerHTML="$"+Math.round(100*(benefitOther))/100;
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
