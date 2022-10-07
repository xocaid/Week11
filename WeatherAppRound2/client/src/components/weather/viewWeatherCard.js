import { useState } from "react";

const ViewUserWeather= () =>{

const [viewUserWeather, setViewUserWeather] = useState(false);
  
  //SEE USERS INFO - TOGGLE
  const handleView = () => {
    setViewUserWeather(!viewUserWeather);
  }

  return(
<div>
  {viewUserWeather ? (
<p onClick={handleView}>You - the Show</p>
  ):
  (
    <p onClick={handleView}>Winx on Netflix</p>
  )

  }
</div>
  )
}
export default ViewUserWeather;