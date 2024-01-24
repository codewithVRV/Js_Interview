// What is call stack:-
/**
 *  We can say Call stack is a reserver memory in memory allocation that keeps
 *  the track of all of the functions. It follows the LIFO principle
 *  last in first out
 *  Whenever we call a function from anywhere in the code, It add a new entry 
 *  in the call stack called as stack frame.
 *  In the stack frame we have the context about function (which line no we are at, what variable we have)
 */



function one () {
    console.log("Inside Function One");
    let x = 20;
  }
  
  function two() {
    console.log("Inside function Two")
    one()
    console.log("Exit from function two")
  }
  
  function three () {
    console.log("Inside function three")
    two();
    console.log("Exit from function three")
  }
  
  three()
  
  
  /**
   * 
     ************ how does javaScript code execute **********
      When we run the js code there are two types of phase
      1. Memory creation phase: in this phase all the variables and function definition 
        get allocated memory
      2. Execution phase: in this phase all the logic, and mathematical calculations executed
  
   */
  
  let val1 = 10;
  let val2 = 20;
  function add(num1, num2){
    let total = num1 + num2
    return total;
  }
  let result = add(val1, val2);
  
  /**
   *  ******** Memory creation phase *****
   * 
   *  val1 = undefined;
   *  val2 = undefinde;
   *  add = definition;
   *  definition = (num1, num2){
        let total = num1 + num2
        return total;
      }
      result = undefined;
  
      ****** Execution phase ************
      val1 = 10;
      val2 = 20;
      result = add()
      Note:- How many times fuction execute a new executional context create for this particual function
  
      Again Memory creation phase
      val1 = undefined
      val2 = undefined
      total = undefine
  
      execution phase
      num1 = 10;
      num2 = 20
      total = 30;
      Note: once the excutional context complete it will delete automatically
       back to line no 66;
       result = 30;
   */