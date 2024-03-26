import { Link, useLocation } from "react-router-dom";

const Profile = () => {
  const location = useLocation(); // {"pathname":"/profiles/e","search":"?detail=true&mode=1","hash":"","state":null,"key":"xmwls75l"}

  return (
    <div>
      <div>{JSON.stringify(location.state?.age)}</div>
      <Link to=".." relative="path">
        목록 보기
      </Link>
    </div>
  );
};

export default Profile;
