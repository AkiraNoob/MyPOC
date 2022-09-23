import { useNavigate } from "react-router-dom";

export const useRouter = (url) => {
  const navigate = useNavigate();
  navigate(`${url}`);
};
