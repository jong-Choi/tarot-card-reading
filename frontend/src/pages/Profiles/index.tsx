import { useNavigate } from "react-router-dom";

const Profiles = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };
  const goHome = () => {
    navigate("/", { replace: true });
  };
  const goProfile = () => {
    navigate("/profiles/e", { state: { age: "32" } });
  };

  return (
    <div>
      <div>프로필 목록입니다.</div>

      <button onClick={goBack}>뒤로 가기</button>
      <button onClick={goHome}>홈으로 가기</button>
    </div>
  );
};

export default Profiles;
