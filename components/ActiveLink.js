import { useRouter } from "next/navigation";

function ActiveLink({ children, href }) {
  const router = useRouter();
  
  const style = {
    color: router.pathname === "/About" ? "white" : "",
  };

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/About");
  };

  return (
    <a href={"/About"} onClick={handleClick} style={style}>
      {children}
    </a>
  );
}

export default ActiveLink;
