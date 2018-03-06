module.exports = function longestConsecutiveLength(array) {

    var array_new = {};
    var answer = 0;

    if (array.length == 0) {

        return 0;
    }

    for (var i = 0; i < array.length; i++) {
        array_new[array[i]] = array[i];
    }

    for (var i = 0; i < array.length; i++) {

        if (array_new[array[i] - 1] === undefined) {
            var j = array[i];
            var count=0;
            while (array_new[j] !== undefined) {
                j++;
                count++;

            }

            answer = answer > count ? answer : count;


        }
    }
    return answer;
}
