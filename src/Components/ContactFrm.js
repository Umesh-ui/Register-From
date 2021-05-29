import React,{useState} from 'react';


 const Form = () => {
    // here userSatete have the inital value which is an object storing the values of the inputfield
    // & userRegister have the current value which is nithing as the setUesrRegiter() updates value the updated value will be stored in
    // the userRegiter which having empty fields will be now having the new updated values which will be displayed in the input field
    const [userRegister, setuserRegister] = useState({
        username:"",
        email:"",
        phone:"",
        password:""
    });
     
     
    // new useState for recods
    const [records, setRecords] = useState([]);

    // handling the input fields 
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        // console.log(name,value)

            // by using the spread operator the values will be stored in the array element of the userRegister
        // here [name] will be the with its value
        setuserRegister({...userRegister,[name]:value});
    }


    const handleSubmit = (e) => {
        // to prevent form from submitting
        e.preventDefault()
        // creating new array of object & stiring the data into it

        const newRecord={...userRegister,id:new Date().getTime().toString()}
        console.log(records)

        setRecords([...records, newRecord]);
        console.log(records)
        // to clear all the fields update userRegister value to "" (empty)
        setuserRegister({
            username: "",
            email: "",
            phone: "",
            password: ""
        });

    }





    return (
            <>
            <div className="frm-container">
                <form action="" onSubmit={handleSubmit}>
                    <h1>Register Here</h1>
                <div>
                    <label htmlFor="username">Fullname :-
                    <input type="text" name="username" id="username"  placeholder="Enter Here"  autoComplete="off"  
                    value={userRegister.username} 
                    onChange={handleInput}
                    /></label>
                </div>

                <div>
                    <label htmlFor="email">Email :-
                    <input type="text" name="email" id="email" placeholder="Enter Here"   autoComplete="off"  
                    value={userRegister.email} 
                    onChange={handleInput}
                    /></label>
                </div>
                    
                    
                <div>
                    <label htmlFor="phone">Phone :-
                    <input type="number" name="phone" id="phone" placeholder="Enter Here"   autoComplete="off"  
                    value={userRegister.phone} 
                    onChange={handleInput}
                    /></label>
                    </div>
                    

                <div>
                    <label htmlFor="password">Password :-
                    <input type="password" name="password" id="password" placeholder="Enter Here"  autoComplete="off"  
                    value={userRegister.password} 
                    onChange={handleInput}
                    /></label>
                </div>

                    <button type="submit" className="btn-save">Register</button>
                </form>
            
            <div>
                {
                        records.map((currEle) => {
                        
                            const { id, username, email, phone, password } = currEle;
                            return (
                                <div className="finalData" key={id}>
                                    <p>{username}</p>
                                    <p>{email}</p>
                                    <p>{phone}</p>
                                    <p>{password}</p>
                                
                                </div>
                            );
                    })
                }
                    
                 </div>
                    </div>
          </>
                );
}

export default Form;