/*
REGULAR EXPRESSIONS
*/

let nameSearch = /peyton/;
// matches first 'peyton' (case sensitive)

/*
Flags appear after the final /

/peyton/g   -(global) will find all instances of 'peyton'
/peyton/i   -case insensitive
/peyton/gi  -the above two flags combined
*/

let altNameSearch = /p[ea]yton/gi;
// character sets placed inside []
// matches 'peyton' or 'payton' (case insensitive and global)

let ExclusiveNumSearch = /[^01234]000/gi;
// number cannot start with 0, 1, 2, 3, or 4

let rangesSearch = /[a-z].[a-z]./gi;
// matches 'P.B.' or any two single-letter initials

let altRangesSearch = /[a-zA-Z].[a-zA-Z]./g;
// upper and lower ranges without /i flag

let numRange = /[5-9]/g;
// searches for all numbers 5-9

let infiniteNumber = /[0-9]+/g;
// + means this will match any number with any number of digits (0-Infinity)
// must follow at least one initial match

let phoneNumber = /[0-9]{10}/g;
// {#} the number of times the preceding character should appear

let fiveLetterWords = /[a-z]{5}/gi;
// matches all five-letter words

fiveEightLetterWords = /[a-z]{5,8}/gi;
// matches all five-eight-letter words (5 and 8 are both inclusive)

let underThousand = /[0-9]{1,3}/g;
// matches all numbers 3 digits or less

let overThousand = /[0-9]{4,}/g;
// matches 4-digits numbers and everything above

/*
Meta-Characters:
    \d matches digit character (like [0-9])
    \w matches word character (also includes numbers and underscores)
    \s matches whitespace character (spaces and tabs)
    \t matches tab character
*/

let altPhoneNumber = /\d{10}/g;
// matches 10-digit phone number

/*
Special Characters:
    /   escape character
    []  character set
    [^] negate symbol in character set
    *   zero-or-more quantifier
    ?   zero-or-one quantifier (makes preceding char optional)
    +   one-or-more quantifier
    .   any character whatsoever (except newline)
*/

let detailedPhoneNum = /^\(*\d{3}\)*[\s\-]*\d{3}[\s\-]*\d{4}$/g;
// matches phone numbers as single num and/or with spaces and/or with dashes and/or with parentheses


let hell = /hello?/;
// matches hello and hell (o is optional)

let fiveLetterWord = /^[a-z]{5}$/gi;
// ^ means at start of test string
// $ means at end of test string
// therefore to match this string, it must be the only content
// these can also separately to get the first 5 letters or the last 5 letters
// in combination, these are very useful in form fields

let altCharactersOrWords = /option1|option2/;
altCharactersOrWords = /option(1|2)/;
// use pipe for OR

let options = /pet (dog|cat|bird)?/;
// matches pet dog, pet cat, pet bird, or pet