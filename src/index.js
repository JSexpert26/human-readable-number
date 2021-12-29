module.exports = function toReadable(number) {
    const unit = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const ten = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const twenty = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
    ];

    const result =
        number < 10
            ? unit[number]
            : number < 20
            ? ten[number % 10]
            : number < 100
            ? `${
                  number % 10 === 0
                      ? twenty[Math.floor(number / 10) - 2]
                      : `${twenty[Math.floor(number / 10) - 2]} ${
                            unit[number % 10]
                        }`
              }`
            : number < 1000
            ? `${
                  number % 100 === 0
                      ? `${unit[number / 100]} hundred`
                      : number % 100 >= 20
                      ? `${unit[Math.floor(number / 100)]} hundred ${
                            number % 10 === 0
                                ? twenty[Math.floor((number % 100) / 10) - 2]
                                : twenty[Math.floor((number % 100) / 10) - 2] +
                                  " " +
                                  unit[number % 10]
                        }`
                      : number % 100 >= 10
                      ? `${unit[Math.floor(number / 100)]} hundred ${
                            ten[Math.floor((number % 100) % 10)]
                        }`
                      : `${unit[Math.floor(number / 100)]} hundred ${
                            unit[number % 10]
                        }`
              }`
            : "Invalid number or number is above 1000.";
    return result;
};
