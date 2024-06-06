import { Box, Flex, Button, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { useSupabaseAuth } from "../integrations/supabase/auth.jsx";

const Navbar = () => {
  const { session, logout } = useSupabaseAuth();

  return (
    <Box bg="teal.500" px={4} py={2}>
      <Flex alignItems="center">
        <Link as={RouterLink} to="/" color="white" fontWeight="bold" mr={4}>
          Home
        </Link>
        <Link as={RouterLink} to="/bananas" color="white" fontWeight="bold" mr={4}>
          Bananas
        </Link>
        <Spacer />
        {session ? (
          <>
            <Text color="white" mr={4}>Welcome!</Text>
            <Button colorScheme="teal" variant="outline" onClick={logout}>
              Logout
            </Button>
          </>
        ) : (
          <Button as={RouterLink} to="/login" colorScheme="teal" variant="outline">
            Login
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;