// ***************** map filter reduce *******************



/**
 *  ************ Map function ************
 *  const arr = [1, 2, 3, 4, 5, 6]
 *  const greater_than_two = arr.filter((n) => n>2)
 *  map function iterate each elements of given array and return a new array 
 *  map does'not change the original array
 *  
 * 
 * ************ Filter function ************
 *  const arr = [1, 2, 3, 4, 5, 6]
 *  const sq =  arr.map((n) => n*n) 
 *  filter function iterate each elements of given array and return a new array with all elements which qualify true(condition)
 *  filter does'not change the original array
 * 
 *  ************ Reduce function ************
 *  const arr = [1, 2, 3, 4, 5, 6]
 *  const sum = arr.reduce((acc, pre) => acc+pre)
 *  reduce function take two parameter in callback accumulator and current value
 *  
 */

/**
 *  ****************** Polyfill for map() ***********
 * 
*       const arr = [1, 2, 3, 4, 5, 6]

        Array.prototype.myMap = function (cb) {
            let temp = [];
            for(let i = 0; i < this.length; i++){
                temp.push(cb(this[i], i, this))
            }
            return temp;
        }
        const sq = arr.myMap((n) => n*n*n)
        console.log(sq)

        ****************** Polyfill for filter() ***********

        const arr = [1, 2, 3, 4, 5, 6]

        Array.prototype.myFilter = function (cb) {
            let temp = [];
            for(let i = 0; i < this.length; i++){
                if(cb(this[i], i, this)) temp.push(this[i])
            }
            return temp;
        }

        const m_than_2 = arr.myFilter((n) => n>2)
        console.log(m_than_2)

        ****************** Polyfill for reduce() ***********

        const arr = [1, 2, 3, 4, 5]

        Array.prototype.myReduce = function (cb, initialValue) {
            var accumulator = initialValue;
            for(let i = 0; i < this.length; i++){
                accumulator = (accumulator) ? cb(accumulator, this[i], i, this) : this[i]
            }
            return accumulator;
        }
        const sum = arr.myReduce((acc, current) =>  acc + current)
        console.log(sum)

        **********  For each ***********
        const arr = [1, 2, 3, 4, 5]

        arr.forEach((ele, i) => arr[i] = ele + 3)
        console.log(arr)
        forEach doesn't return a new array and it's mutate the original array
 */



