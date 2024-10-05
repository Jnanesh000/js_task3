

        // Functions without parameters
        function greet(){
            console.log("Hello World!");
        }
        greet();


        //Functions with parameters
       function addNumbers(a,b){
         console.log("Addition of two numbers",a+b);
       }
       addNumbers(2,4);

       //Functions with return statements
       function multiply(x,y){
        return x*y;
       }
       let result=multiply(4,5);
       console.log("Multiplication of two numbers :",result);
      
        // Combining Functions
        function calculateRectangleArea(lenght,width){
        return multiply(lenght,width);
        }
        let area=calculateRectangleArea(10,15);
        console.log("Area of Rectangle :",area);

        
        // Default Parameters 
        function greetUser(name= "Guest"){
         console.log(`Hello ${name}`);
        }
        greetUser("jnanesh");



