import "./Container.css"
import ProfilePhoto from "../../Component/Profile/ProfilePhoto";
import FullName from "../../Component/Profile/FullName";
import Address from "../../Component/Profile/Address";
const Container =()=>
{return(
  <>
   <div className="Container">
      <ProfilePhoto></ProfilePhoto>
      <FullName></FullName>
      <Address></Address>
    </div>;
  </>
)
}
export default  Container