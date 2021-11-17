import React from "react";

function listProject (props) {
  const showModal = () => console.log(props.project)
  return (
    <div onClick={showModal} className='row'>
      {props.project.name}
    </div>
  )
}

export default listProject