import React, { useState } from 'react';

const Apartmentproject = ({ data }) => {
  const [contacts, setContacts] = useState(data);
  const [search, setSearch] = useState('');
  return (
     
   <div className=''>
      <div>
     <input type="text" className='form-control' onChange={(e)=>setSearch(e.target.value)} placeholder='search filter'/>
     </div>
 <div className="container mt-4">

   
            <div className="row">

              
              <div className="col">
                <table className="table table-bordered table-hover">
                  <thead>
                    <tr>
                    
                      <th>Project Id</th>
                      <th>ProjectName</th>
                      <th>Project SF Name</th>
                      <th>Apartment Name</th>
                      <th>Block Name</th>
                      <th>Apartment Status</th>
                    
                    </tr>
                  </thead>

                  <tbody>

                  {data
              .filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.project_name.toLowerCase().includes(search)||item.apartprojectdata.apartment_name.toLowerCase().includes(search);
              })
              .map((item, index) => (
                <tr key={index}>
                  
                     {<td>{item.project_id}</td>}
                     <td>{item.project_name}</td>
                      <td>{item.project_sfname}</td>
                     <td>{item.apartprojectdata.apartment_name}</td>
                     <td>{item.apartprojectdata.block_name}</td>
                     <td>{item.apartprojectdata.apartment_status}</td>
                   
                   
                   </tr>
              ))}



                  {/* {data.map((item, index) => {
              return (

                     <tr key={index}>
                     {<td>{item.project_id}</td>}
                     <td>{item.project_name}</td>
                      <td>{item.project_sfname}</td>
                     <td>{item.apartprojectdata.apartment_name}</td>
                     <td>{item.apartprojectdata.block_name}</td>
                     <td>{item.apartprojectdata.apartment_status}</td>
                   
                   
                   </tr>
                    )
                  }
          
        )} */}
                 
               </tbody>
                </table>
              </div>
            </div>
          </div> 

          </div>


  )
}       
export default Apartmentproject
  


