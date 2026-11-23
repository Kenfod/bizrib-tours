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
      <img src="https://cfjjbqbneejeoomhtigx.supabase.co/storage/v1/object/public/tour-images/tour-001.png" />
    </Row>
  );
}

export default Tours;
