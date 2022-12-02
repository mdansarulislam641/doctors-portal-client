import React from 'react';

const ConfirmationMaodal = ({deleteDoctor, handleDeleteDoctor,title}) => {
    return (
        <div>
<input type="checkbox" id="confirmation-modal" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">{title} <span className='text-2xl'>{deleteDoctor.name}</span></h3>
    <p className="py-4">Are you Sure Delete {deleteDoctor.name} if you delete it's can't recover again .it's permanently deleted</p>
    <div className="modal-action">
     <button onClick={()=>handleDeleteDoctor(deleteDoctor._id)} className='btn '>Delete</button>
      <label htmlFor="confirmation-modal" className="btn btn-outline">Cancel</label>
    </div>
  </div>
</div>
        </div>
    );
};

export default ConfirmationMaodal;