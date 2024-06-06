import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Login from "./pages/Login.jsx";
import { useSupabaseAuth } from "./integrations/supabase/auth.jsx";
import { Button, Container, VStack, Text } from "@chakra-ui/react";
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import Private from "./pages/Private.jsx";

function App() {
  const { session, logout } = useSupabaseAuth();

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/login" element={<Login />} />
        <Route path="/private" element={<ProtectedRoute><Private /></ProtectedRoute>} />
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