import React from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { closeModal } from '../redux/actions/admin'
function AdminModal() {
    const dispatch=useDispatch();
    const {isOpen,data}=useSelector((state)=>state.modal);
    if (!isOpen)   return null
   const handleClose=()=>{
    dispatch(closeModal())
   }
  return (
    <div class="modal fade" id="basicModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel1">Adminstrator Information</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            onClick={handleClose}
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col mb-3">
              <label for="nameBasic" class="form-label">Name</label>
              <input  type="text" id="nameBasic" value={admin?.loading === "loading" ? "loading" : admin?.error ?  "error" : admin?.data.name } class="form-control" placeholder="Enter Name" />
            </div>
            <div class="col mb-3">
              <label for="nameBasic" class="form-label">Surname</label>
              <input type="text" id="nameBasic" class="form-control" placeholder="Enter Name" />
            </div>
          </div>
          <div class="row g-2">
            <div class="col mb-0">
              <label for="emailBasic" class="form-label">Email</label>
              <input type="text" id="emailBasic" class="form-control" placeholder="xxxx@xxx.xx" />
            </div>
            <div class="col mb-0">
              <label for="dobBasic" class="form-label">Phone Number</label>
              <input type="text" id="dobBasic" class="form-control" placeholder="DD / MM / YY" />
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>

  )
}

export default AdminModal