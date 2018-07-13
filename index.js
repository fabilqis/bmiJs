function calculateBMI(berat, tinggi) {
	return berat / (tinggi * tinggi);
}

const bmiResult = calculateBMI(10, 1.63)

console.log("bmi:", bmiResult);

function categorizeBMI(bmi) {
	if (bmi <= 18) {
		return "Too skinny";
	} else if (bmi >= 25) {
		return "Too fat";
	} else {
		return "normal";
	}
}

const bmiCategory = categorizeBMI(bmiResult)

console.log("category:", bmiCategory);