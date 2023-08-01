import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function ReturnButton() {
  
  return (
    <>
     <Link to="/">
      <Button variant="secondary" className="ml-1">
        Return
      </Button>
    </Link>
    </>
   
  );
}

export default ReturnButton;