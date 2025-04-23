import { Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from "./Header";
import MessageList from "./MessageList";
import AddMessage from "./AddMessage";
import EditMessage from "./EditMessage";

function App() {
   return (
      <Container className="mt-3">
         <Header />
         <Routes>
            <Route path="/" element={<MessageList />} />
            <Route path="/add" element={<AddMessage />} /> 
            <Route path="/edit/:messageId" element={<EditMessage />} />           
         </Routes>         
      </Container>
   );
}

export default App;


