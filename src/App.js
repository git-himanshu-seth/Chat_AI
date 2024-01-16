import config from "./botAI/config";
import MessageParser from "./botAI/MessageParser.jsx";
import ActionProvider from "./botAI/ActionProvider.jsx";
import Chatbot from "react-chatbot-kit";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
}

export default App;
