// First order

  // setting up an object literal to take an order
const coffee = {
    customer_name : {
      firstname : 'Chaitanasinh ', 
      lastname  : 'Jetavat'
    }, 
    type_of_drink: ["latte"],
    size_of_coffe: ["large"],
    drizzle: ["no"],
    whipped_cream: ["yes"],
    sweetener : ["no"],
    cold_foam: ["yes"],
    dairy: ["cream"],

    // function for displaying a coffe order
    display_order: function () {
        let modifier = "";

        if (this.drizzle == "yes") {
            modifier = modifier.concat(" <br> drizzle");
            alert(this.customer_name.firstname+ "'s coffe includes 'drizzle'");
        }
        else{}
        if(this.whipped_cream == "yes"){
            modifier = modifier.concat(" <br> whipped_cream");
            alert(this.customer_name.firstname+ "'s coffe includes 'whippped cream'");
            
        }
        else{}
        if(this.sweetener == "yes"){
            modifier = modifier.concat(" <br> sweetener");
            alert(this.customer_name.firstname+ "'s coffe includes 'sweetener'");
            

        }
        else{}
        if(this.cold_foam == "yes"){
            modifier = modifier.concat(" <br> cold_foam");
            alert(this.customer_name.firstname+ "'s coffe includes 'cold_foam'");
            

        }
        else if(this.drizzle == "no" && this.whipped_cream == "no" && this.sweetener == "no" && this.cold_foam == "no") {
            alert(this.customer_name.firstname+ "'s coffe has no Add-ons.")
        }

        let orderDetails = this.customer_name.firstname+"\'s choice of coffe " + " \'"+this.type_of_drink + "\'"
        + " with " + "\'"+ this.size_of_coffe +"\'"+ " size includes following: \n" 
        + modifier;

        document.getElementById("output").innerHTML = orderDetails

        /*alert( this.customer_name.firstname+"'s choice of coffe " + " '"+this.type_of_drink + "'"
                    + " with " + "'"+ this.size_of_coffe +"'"+ " size includes following: \n" 
                    + "drizzle: " +this.drizzle + "\n"
                    + "whipped_cream: " +this.whipped_cream + "\n"
                    + "sweetener: " +this.sweetener + "\n"
                    + "cold_foam: " +this.cold_foam);*/
    }
  };
  
  // calling the function
  coffee.display_order(); 

  // function for the time interval between two functions.
  // Code retrived from: https://www.sitepoint.com/delay-sleep-pause-wait/

  function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
  }
  
  alert("Another order will display in 3 seconds");

  sleep(3000);

  // second order

  // setting up an object literal to take an order

  const coffee2 = {
    customer_name : {
      firstname : 'Aayush', 
      lastname  : 'Patel'
    }, 
    type_of_drink: ["expresso"],
    size_of_coffe: ["small"],
    drizzle: ["yes"],
    whipped_cream: ["yes"],
    sweetener : ["no"],
    cold_foam: ["no"],
    dairy: ["2%milk"],

    display_order2: function () {

        let modifier = "";

        if (this.drizzle == "yes") {
            modifier = modifier.concat(" <br> drizzle");
            alert(this.customer_name.firstname+ "'s coffe includes 'drizzle'");
        }
        else{}
        if(this.whipped_cream == "yes"){
            modifier = modifier.concat(" <br> whipped_cream");
            alert(this.customer_name.firstname+ "'s coffe includes 'whippped cream'");
        }
        else{}
        if(this.sweetener == "yes"){
            modifier = modifier.concat(" <br> sweetener");
            alert(this.customer_name.firstname+ "'s coffe includes 'sweetener'");
        }
        else{}
        if(this.cold_foam == "yes"){
            modifier = modifier.concat(" <br> cold_foam");
            alert(this.customer_name.firstname+ "'s coffe includes 'cold_foam'");
        }
        else if(this.drizzle == "no" && this.whipped_cream == "no" && this.sweetener == "no" && this.cold_foam == "no") {
            alert(this.customer_name.firstname+ "'s coffe has no Add-ons.")
        }
    
        let orderDetails = this.customer_name.firstname+"\'s choice of coffe " + " \'"+this.type_of_drink + "\'"
        + " with " + "\'"+ this.size_of_coffe +"\'"+ " size includes following: \n" 
        + modifier;

        document.getElementById("output2").innerHTML = orderDetails

        /*alert( this.customer_name.firstname+"'s choice of coffe " + " '"+this.type_of_drink + "'"
                    + " with " + "'"+ this.size_of_coffe +"'"+ " size includes following: \n" 
                    + "drizzle: " +this.drizzle + "\n"
                    + "whipped_cream: " +this.whipped_cream + "\n"
                    + "sweetener: " +this.sweetener + "\n"
                    + "cold_foam: " +this.cold_foam);*/
    }
  };

// calling the function
coffee2.display_order2(); 
  