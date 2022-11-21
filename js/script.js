function calculateValues() {

    //Gets the value of the Community dropdown box
    const e = document.getElementById("community");
    let communityValue = e.options[e.selectedIndex].value;
    let communityText = e.options[e.selectedIndex].text;

    //Gets the value of the Healthcare percentage dropdown box
    const f = document.getElementById("healthBenefits");
    let healthValue = f.options[f.selectedIndex].value;
    let healthText = f.options[f.selectedIndex].text;

    //Gets the value of the Vacation days dropdown box
    const g = document.getElementById("vacationBenefits");
    let vacationValue = g.options[g.selectedIndex].value;
    let vacationText = g.options[g.selectedIndex].text;

    //Gets the value of the Other Benefits input box
    const h = document.getElementById("otherBenefits");
    let otherValue = h.value;

    //Gets the value of the Lowest Paid Staff Member input box
    const i = document.getElementById("lowestWage");
    let lowestWageValue = parseFloat(i.value);

      //Creates variables for LW rate, benefits value, existing lowest wage, gap to reach LW, and required pay rise.
    let wageRate = 0.00;
    let benefitHealth = 0.00;
    let benefitVacation = vacationValue * 0.14;
    let benefitsVector = 0.00
    let benefitOther = otherValue * benefitsVector;
    let totalBenefits = benefitHealth+benefitVacation+benefitOther;
    let lowestWage = lowestWageValue;

      //Creates variables for page elements which need to be filled with visible text.
    const communityName = document.querySelector("#communityName");
    const livingWageRate = document.querySelector("#livingWageRate");
    const benefitRateHealth = document.querySelector("#benefitRateHealth");
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
          case "80":
            benefitHealth = 1.50
            break;
          case "75":
            benefitHealth = 1.39
            break;
          case "70":
            benefitHealth = 1.28
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
        benefitsVector = 0.000588235294117647;
        benefitOther = otherValue * benefitsVector;
        totalBenefits = benefitHealth+benefitVacation+benefitOther;
        livingWageRate.innerHTML="$"+Math.round(100*(wageRate))/100;
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
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
      case "Victoria":
        wageRate = 24.29;
        communityName.innerHTML=" - "+communityText;
        switch(healthValue) {
          case "100":
            benefitHealth = 1.94
            break;
          case "80":
            benefitHealth = 1.50
            break;
          case "75":
            benefitHealth = 1.39
            break;
          case "70":
            benefitHealth = 1.28
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
        benefitsVector = 0.000590318772136954;
        benefitOther = otherValue * benefitsVector;
        totalBenefits = benefitHealth+benefitVacation+benefitOther;
        livingWageRate.innerHTML="$"+Math.round(100*(wageRate))/100;
        benefitRateHealth.innerHTML="$"+Math.round(100*(benefitHealth))/100;
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
  calculateValues();
