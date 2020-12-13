import { withUrqlClient } from "next-urql";
import React from "react";
import { Navbar } from "../components/Navbar";
import { urqlClient } from "../utils/urqlClient";

const Index = () => {
  return (
    <>
      <Navbar />
    </>
  );
};

export default withUrqlClient(urqlClient, { ssr: true })(Index);
