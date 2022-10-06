/*
https://leetcode.com/problems/min-stack/

O(1) for the following:

push

pop

top return top element

getMin return bottom
*/



var MinStack = function() {
    this.main = []
    this.min = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.main.push(val)
    if (this.min.length === 0 || val <= this.min[this.min.length-1]){
        this.min.push(val)
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let popped = this.main.pop()
    if (popped === this.min[this.min.length-1]){
        this.min.pop()
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.main[this.main.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length-1]
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */