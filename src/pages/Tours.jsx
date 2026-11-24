import TourTable from "../features/tours/TourTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

function Tours() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Tour Trips</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <TourTable />
      </Row>
    </>
  );
}

export default Tours;
