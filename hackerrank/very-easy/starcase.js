/*
* Staircase detail

*This is a staircase of size n = 4:

*      #
*     ##
*    ###
*   ####

*   Its base and height are both equal to n. It is drawn using # symbols and spaces. The last line is not preceded by any spaces.
*/

const n = 4;

function starcase(n) {
    for (let i = 0; i < n; i++) {
        let starsNum = i;
        let spacesNum = n - starsNum;
        let spaces = '';
        let symbols = '';
        while (spacesNum > 1) {
            spaces += ' ';
            spacesNum--;
        }
        while (starsNum >= 0) {
            symbols += '#';
            starsNum--;
        }
        console.log(spaces + symbols);
    }
}

starcase(n);
