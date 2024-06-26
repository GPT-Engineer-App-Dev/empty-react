import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import Bananas from "./pages/Bananas.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { useSupabaseAuth } from "./integrations/supabase/auth.jsx";
import { Button, Container, VStack, Text } from "@chakra-ui/react";

function App() {
  const { session, logout } = useSupabaseAuth();

  return (
    <Router>
      <Navbar />
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
              <Button onClick={logout}>Logout</Button>
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