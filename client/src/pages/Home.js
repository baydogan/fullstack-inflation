import { Heading } from "@chakra-ui/react";
import { useEffect } from "react";
import { getProducts } from "redux/actions/product";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts())
  }, []);
  return (
    <>
      <Heading as="h1" size="4xl" noOfLines={1}>
        Latest Products
      </Heading>
    </>
  );
};

export default Home;
