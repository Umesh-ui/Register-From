import React from 'react';

function Contact() {

 return (
    <div class="main">
            <h1>Register Here</h1>
            <p>Enter Your Data Here. </p>

         <div class="contact">
            <form action="#" method="">
                <label>Name:-
                    <input type="text" name="name" id="name" placeholder="Enter Your Name Here" />
                 </label>
                 
                 <label>Address
                     <input type="text" name="address" id="addr" placeholder="Enter Your Address Here" />
                 </label>
                 
                 <label>Mobile No.
                     <input type="text" name="mobile" id="mob" placeholder="Enter Your Mobile Here" />
                 </label>
                 
                 <button class="btn-submit" type="submit" >Submit</button>

             </form>


         </div>
         
         <div class="load-data">
            
             {/* data will br load here */}
         </div>
     </div>
    )
}

export default Contact;
