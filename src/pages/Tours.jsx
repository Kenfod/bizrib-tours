import { useState } from "react";
import TourTable from "../features/tours/TourTable";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import Button from "../ui/Button";
import CreateTourForm from "../features/tours/CreateTourForm";

function Tours() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Tour Trips</Heading>
        <p>Filter / Sort</p>
      </Row>

      <Row>
        <TourTable />

        <Button onClick={() => setShowForm((show) => !show)}>
          Add new Tour
        </Button>
        {showForm && <CreateTourForm />}
      </Row>
    </>
  );
}

export default Tours;
