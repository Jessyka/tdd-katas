# TDD-katas

[![Run on Repl.it](https://repl.it/badge/github/Jessyka/tdd-katas)](https://repl.it/github/Jessyka/tdd-katas)

## Description

This Kata is designed to help practice what a test of a pure function ought to look like. It is intentionally designed to start with a very easy, non-branching base case which slowly becomes addled with complexity as additional requirements are added that will require significant branching and eventually a pressure to compose additional units.

# Katas

## Greeter

Before you start:

+ Try not to read ahead.

+ Do one task at a time. The trick is to learn to work incrementally.

This kata demonstrates the problems of static scoped functions and objects.

All tests should always pass, regardless of environment conditions.

+ Write a Greeter class with greet function that receives a name as input and outputs Hello <name>. The signature of greet should not change throughout the kata. You are allowed to construct Greeter object as you please.

+ greet trims the input

+ greet capitalizes the first letter of the name

+ greet returns *Good morning <name>* when the time is 06:00-12:00

+ greet returns *Good evening <name>* when the time is 18:00-22:00

+ greet returns *Good night <name>* when the time is 22:00-06:00

## Ip Address Validator

Create a class with one method called ​ValidateIpv4Address​. The method takes a string and return true if it is validhost assignable IP address and false if not.

[Instructions here.](http://www.tddbuddy.com/katas/IP%20Validator.pdf)

## Roman To Decimal

The Kata says you should write a function to convert from Roman Numerals to decimal numerals. In order to keep the kata light, we will not check for valid Roman Numeral.

Roman numerals, the numeral system of ancient Rome, uses combinations of letters from the Latin alphabet to signify values. They are based on seven symbols:

| Symbol   |      Value    |
|:--------:|:-------------:|
|    I     |       1       |
|    V     |       5       |
|    X     |      10       |
|    L     |      50       |
|    C     |     100       |
|    D     |     500       |
|    M     |    1000       |


Numbers are formed by combining symbols together and adding the values. Generally, symbols are placed in order of value, starting with the largest values. When smaller values precede larger values, the smaller values are subtracted from the larger values, and the result is added to the total.

Example:

| Roman Number   |      Computation      |     Value      |     Comment |
|----------|:-------------:|:------:|:------:|
| MMVI |  1000 + 1000 + 5 + 1 | 2006 | only + |
| MCMXLIV |    1000 + (1000 - 100) + (50 - 10) + (5 - 1)    |   1944 | + and - |

## Prime Number

This kata demonstrates the transformation priority premise.

Write a function generate under prime numbers that, given an integer, returns the list containing the prime factors in numerical sequence.

| Input   |      Output    |
|:--------:|:-------------:|
|1| [] |
|2| [2] |
|3| [2,3] |
|4| [2,3] |
|5| [2,3,5] |
|6| [2,3,5] |
|7| [2,3,5,7] |
|8| [2,3,5,7] |
|9| [2,3,5,7] |

## String calculator 

Write a method add under an object StringCalculator that, given a delimited string, returns the sum of the numbers in the string.

1. An empty string returns zero '' => 0

2. A single number returns the value '1' => 1 '2' => 2

3. Two numbers, comma delimited, returns the sum '1,2' => 3 '10,20' => 30

4. Two numbers, newline delimited, returns the sum '1\n2' => 3

5. Three numbers, delimited either way, returns the sum '1\n2,3\n4' => 10

6. Negative numbers throw an exception with the message '-1,2,-3' => 'negatives not allowed: -1,-3'

7. Numbers greater than 1000 are ignored

8. A single char delimiter can be defined on the first line starting with // (e.g //#\n1#2 for a ‘#’ as the delimiter)

9. A multi char delimiter can be defined on the first line starting with // (e.g. //###\n1###2 for ‘###’ as the delimiter)


![Coding](https://media.giphy.com/media/3oKIPnAiaMCws8nOsE/giphy.gif)