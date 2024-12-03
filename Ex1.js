//a:
const num = 30;
Number(num % 2 == 0 || num % 3 == 0 || num % 5 == 0) && console.log("1");
//b:
Number(
  (num % 2 == 0 && num % 3 == 0) ||
    (num % 3 == 0 && num % 5 == 0) ||
    (num % 2 == 0 && num % 5 == 0)
) && console.log("2");

//c:
Number((num % 20 == 0 && num % 3 == 0 && num % 5 == 0) || console.log("3"));
