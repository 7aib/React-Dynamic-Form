// import { useState } from "react";
// import UserFormTable from "../UserFormTable/UserFormTable";

// const UserFrom = (props) => {
//   const [formData,setFormData]=useState({
//     name: "",
//     email: "",
//     firstName:"",
//     lastName:"",
//     address:"",
//     phoneNumbers: [],
//   })
//   const [phoneData, setPhoneData] = useState({
//     number: "",
//     provider: "",
//   });
//   const [ providers, setProviders] = useState(["Jazz","Warid","Telenor","Ufone","Zong"])

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handlePhoneInputChange = (event) => {
//     const { name, value } = event.target;
//     setPhoneData({ ...phoneData, [name]: value });
//   };

//   const handleAddPhoneNumber = () => {
//     if (phoneData.provider && phoneData.number) {
//       const isProviderAlreadyAdded = formData.phoneNumbers.some(
//         (phone) => phone.provider === phoneData.provider
//       );

//       if (isProviderAlreadyAdded) {
//         alert(`Provider '${phoneData.provider}' already added`);
//         return;
//       }

//       setFormData({
//         ...formData,
//         phoneNumbers: [...formData.phoneNumbers, phoneData],
//       });

//       setPhoneData({
//         number: "",
//         provider: "",
//       });
//     }
//   };

//   return (
//     <div>
//         <form className="row g-3" >
//           <div className="col-md-6">
//             <label htmlFor="firstName" className="form-label">
//               First Name:
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="firstName"
//               name="firstName"
//               placeholder="Enter Name Here..."
//               value={formData.firstName}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="col-md-6">
//             <label htmlFor="lastName" className="form-label">
//               Last Name:
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="lastName"
//               name="lastName"
//               placeholder="Enter Last Name Here..."
//               value={formData.lastName}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="col-md-12">
//             <label htmlFor="email" className="form-label">
//               Email:
//             </label>
//             <input
//               type="email"
//               className="form-control"
//               id="email"
//               name="email"
//               placeholder="Enter Email Here..."
//               value={formData.email}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//           <div className="col-md-12">
//             <label htmlFor="address" className="form-label">
//               Address:
//             </label>
//             <input
//               type="text"
//               className="form-control"
//               id="address"
//               name="address"
//               placeholder="Enter address Here..."
//               value={formData.address}
//               onChange={handleInputChange}
//               required
//             />
//           </div>
//       <div>
//         <label htmlFor="phone-number">Phone Number:</label>
//         <input
//           type="text"
//           id="phone-number"
//           name="number"
//           value={phoneData.number}
//           onChange={handlePhoneInputChange}
//         />
//       </div>

//           <div className="mb-3">
//         <label htmlFor="network-provider" className="form-label">Network Provider:</label>
//         <select
//           id="network-provider"
//           name="provider"
//           value={phoneData.provider}
//           onChange={handlePhoneInputChange}
//           className="form-select"
//         >

//           <option value="">Select provider</option>
//           {providers
//             .filter(
//               (provider) =>
//                 !formData.phoneNumbers.some(
//                   (phone) => phone.provider === provider
//                 )
//             )
//             .map((provider) => (
//               <option key={provider} value={provider}>
//                 {provider}
//               </option>
//             ))}
//         </select>
//         <button type="button" onClick={handleAddPhoneNumber} className="btn btn-primary mt-2">
//           Add Phone Number
//         </button>
//       </div>
//       <div>
//         <ul>
//           {formData.phoneNumbers.map((phone, index) => (
//             <li key={index}>
//               {phone.number} ({phone.provider})
//             </li>
//           ))}
//         </ul>
//       </div>     <div className="col-12">
//             <button type="submit" className="btn btn-primary me-2">
//               Submit
//             </button>
//           </div>
//         </form>
//       <div></div>
//     </div>
//   );
// };
// export default UserFrom;

import { useState } from "react";
import UserFormTable from "../UserFormTable/UserFormTable";

const UserFrom = (props) => {
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");
  const [email, setEmail] = useState(" ");
  const [address, setAddress] = useState("");
  const [network, setnetwork] = useState([
    "Jazz",
    "Warid",
    "Telenor",
    "Ufone",
    "Zong",
  ]);
  let [data, setdata] = useState(["Jazz", "Warid", "Telenor", "Ufone", "Zong"]);
  const [rIndex, setrIndex] = useState(0);
  console.log(network);
  const [phoneNumberFeild, setPhoneNumberFeild] = useState([
    {
      number: " ",
      network: " ",
    },
  ]);
  console.log(phoneNumberFeild);
  const addPhoneNumberFeild = () => {
    setPhoneNumberFeild([...phoneNumberFeild, { number: " ", network: " " }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent default form submission behavior

    const newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      address: address,
      phoneNumberFeild: phoneNumberFeild,
    };
    props.addUser(newUser);
  };
  const handlePhoneNumberChange = (index, feild, value) => {
    const newPhoneNumberFeild = [...phoneNumberFeild];
    newPhoneNumberFeild[index][feild] = value;
    setPhoneNumberFeild(newPhoneNumberFeild);
  };
  const removePhoneNumberFeild = (index) => {
    let data = [...phoneNumberFeild];
    data.splice(index, 1);
    setPhoneNumberFeild([...data]);
  };
  const changeIndex = (index) => {
    setrIndex(index);
  };

  return (
    <div class="container">
      <h1>User Form</h1>
      <form class="needs-validation" onSubmit={handleSubmit} novalidate>
        <div class="row">
          <div class="col">
            <label for="firstName">First Name:</label>
            <input
              type="text"
              class="form-control"
              id="firstName"
              name="firstName"
              placeholder="Enter Name Here..."
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
              required
            />
            <div class="invalid-feedback">
              Please provide a valid first name.
            </div>
          </div>
          <div class="col">
            <label for="lastName">Last Name:</label>
            <input
              type="text"
              class="form-control"
              id="lastName"
              name="lastName"
              placeholder="Enter Last Name Here..."
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
              required
            />
            <div class="invalid-feedback">
              Please provide a valid last name.
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div class="mb-3">
              <label for="email">Email:</label>
              <input
                type="email"
                class="form-control"
                id="email"
                name="email"
                placeholder="Enter Email Here..."
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
              <div class="invalid-feedback">
                Please provide a valid email address.
              </div>
            </div>
          </div>
          <div className="col">
            <div class="mb-3">
              <label for="address">Address:</label>
              <input
                type="text"
                class="form-control"
                id="address"
                name="address"
                placeholder="Enter address Here..."
                value={address}
                onChange={(event) => setAddress(event.target.value)}
                required
              />
              <div class="invalid-feedback">
                Please provide a valid address.
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-4">
            <h3>Context</h3>
          </div>

          <div className="col-8">
            <button
              type="button"
              class="btn btn-primary"
              onClick={addPhoneNumberFeild}
            >
              Add
            </button>
          </div>
          <div className="col"> </div>
        </div>
        {phoneNumberFeild.map((input, index) => {
          return (
            <div className="row">
              <div className="col" key={index}>
                <div class="input-group">
                  <label class="input-group-text" for="phoneNumber">
                    Phone No.
                  </label>
                  <input
                    type="tel"
                    class="form-control"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder="Enter number Here..."
                    value={input.number}
                    onChange={(event) =>
                      handlePhoneNumberChange(
                        index,
                        "number",
                        event.target.value
                      )
                    }
                    required
                  />
                  <div class="invalid-feedback">
                    Please provide a valid phone number.
                  </div>
                </div>
              </div>
              <div class="col">
                <div className="row">
                  <div className="col">
                    <label for="network">Network:</label>
                  </div>
                  <div className="col">
                    <select
                      class="form-select"
                      id="network"
                      value={input.network}
                      onChange={(event) =>
                        handlePhoneNumberChange(
                          index,
                          "network",
                          event.target.value
                        )
                      }
                    >
                      <option selected>Select One:</option>
                      {network.map((value, key) => (
                        <option value={value} key={key}>
                          {value}
                        </option>
                      ))}
                    </select>

                    <div class="invalid-feedback">Please select a network.</div>
                  </div>
                <div className="col">
                  <button
                    type="button"
                    class="btn btn-danger"
                    onClick={() => removePhoneNumberFeild(index)}
                  >
                    Remove
                  </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

        <div class="mt-3">
          <button type="submit" class="btn btn-success">
            Submit
          </button>
        </div>
      </form>
      <div></div>
    </div>

    // <div>
    //   <form onSubmit={handleSubmit}>
    //     <div>
    //       <label htmlFor="firstName" >
    //         First Name:
    //       </label>
    //       <input
    //         type="text"
    //         id="firstName"
    //         name="firstName"
    //         placeholder="Enter Name Here..."
    //         value={firstName}
    //         onChange={(event) => setFirstName(event.target.value)}
    //         required
    //       />
    //     </div>
    //     <div>
    //       <label htmlFor="lastName" >
    //         Last Name:
    //       </label>
    //       <input
    //         type="text"
    //         id="lastName"
    //         name="lastName"
    //         placeholder="Enter Last Name Here..."
    //         value={lastName}
    //         onChange={(event) => setLastName(event.target.value)}
    //         required
    //       />
    //     </div>
    //     <div >
    //       <label htmlFor="email" >
    //         Email:
    //       </label>
    //       <input
    //         type="email"
    //         id="email"
    //         name="email"
    //         placeholder="Enter Email Here..."
    //         value={email}
    //         onChange={(event) => setEmail(event.target.value)}
    //         required
    //       />
    //     </div>
    //     <div >
    //       <label htmlFor="address">
    //         Address:
    //       </label>
    //       <input
    //         type="text"
    //         id="address"
    //         name="address"
    //         placeholder="Enter address Here..."
    //         value={address}
    //         onChange={(event) => setAddress(event.target.value)}
    //         required
    //       />
    //     </div>
    //     {phoneNumberFeild.map((input, index) => {
    //       return (
    //         <div key={index}>
    //           <div>
    //             <label htmlFor="phoneNumber">
    //               Phone No.
    //             </label>
    //             <div>
    //               <span >+92</span>
    //               <input
    //                 type="tel"
    //                 id="phoneNumber"
    //                 name="phoneNumber"
    //                 placeholder="Enter number Here..."
    //                 value={input.number}
    //                 onChange={(event) =>
    //                   handlePhoneNumberChange(
    //                     index,
    //                     "number",
    //                     event.target.value
    //                   )
    //                 }
    //                 required
    //               />
    //             </div>
    //           </div>
    //           <div>
    //             <label htmlFor="network" >
    //               Network:
    //             </label>
    //             <select
    //               id="network"
    //               value={input.network}
    //               onChange={(event) =>
    //                 handlePhoneNumberChange(
    //                   index,
    //                   "network",
    //                   event.target.value
    //                 )
    //               }
    //             >
    //               <option>Select One: </option>
    //               {network.map((value, key) => (
    //                 <option value={value}>{value}</option>
    //               ))}
    //             </select>
    //           </div>
    //           <button
    //             type="button"
    //             onClick={() => removePhoneNumberFeild(index)}
    //           >
    //             Remove
    //           </button>
    //         </div>
    //       );
    //     })}
    //     <button
    //       type="button"
    //       onClick={addPhoneNumberFeild}
    //     >
    //       Add
    //     </button>
    //     <div>
    //       <button type="submit" >
    //         Submit
    //       </button>
    //     </div>
    //   </form>
    //   <div></div>
    // </div>
  );
};
export default UserFrom;
