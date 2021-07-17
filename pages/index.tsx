import { Flex, useToast, Button } from "@chakra-ui/react";

const Home = () => {
  const toast = useToast();
  return (
    <Flex
      display="flex"
      alignItems="center"
      justifyContent="center"
      marginTop="50%"
    >
      <Button
        onClick={() =>
          toast({
            title: "Yay it works!",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Does it work?
      </Button>
    </Flex>
  );
};
export default Home;
