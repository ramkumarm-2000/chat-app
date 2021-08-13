import { ChatEngine } from 'react-chat-engine';

import ChatFeed from './components/ChatFeed';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import './App.css';

const projectID = '3d929863-29d9-483e-8b71-11411428dbd9';

const App = () => {
  if (!localStorage.getItem('username')) return <LoginForm />;

  return (
    <>
      <Header />
      <ChatEngine
        height="90vh"
        projectID={projectID}
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() => new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3').play()}
      />
    </>
  );
};

// infinite scroll, logout, more customizations...

export default App;
