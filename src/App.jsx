import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Bananas from "./pages/Bananas.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { useSupabaseAuth } from "./integrations/supabase/auth.jsx";
import { Button, Container, VStack, Text, Flex } from "@chakra-ui/react";

function App() {
  const { session, logout } = useSupabaseAuth();

  return (
    <Router>
      <Flex as="nav" width="100%" padding="1rem" bg="blue.500" color="white" justifyContent="space-between" alignItems="center" flexWrap="wrap">
        <Text fontSize="xl" fontWeight="bold">MyApp</Text>
        {session && <Button colorScheme="red" onClick={logout}>Logout</Button>}
      </Flex>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/bananas" element={<ProtectedRoute><Bananas /></ProtectedRoute>} />
      </Routes>
      <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
        <VStack spacing={4}>
          {session ? (
            <>
              <Text fontSize="2xl">Welcome, you are logged in!</Text>
            </>
          ) : (
            <Button as="a" href="/login">Login</Button>
          )}
        </VStack>
      </Container>
    </Router>
  );
}

export default App;