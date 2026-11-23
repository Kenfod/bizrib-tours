import { useEffect } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import { getTours } from "../services/apiTours";

function Tours() {
  useEffect(function () {
    getTours().then((data) => console.log(data));
  }, []);

  return (
    <Row type="horizontal">
      <Heading as="h1">All Tour Trips</Heading>
      <p>TEST</p>
    </Row>
  );
}

export default Tours;
