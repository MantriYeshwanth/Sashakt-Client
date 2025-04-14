import React from 'react';
import ChatBot from 'react-simple-chatbot';

export default function CBot() {
  

  return (
    <>
      <ChatBot
        headerTitle="Speech Recognition"
        recognitionEnable={true}
        steps={[
          {
            id: '1',
            message: 'What is your name?',
            trigger: '2',
          },
          {
            id: '2',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: 'Hi {previousValue}, nice to meet you!',
            end: true,
          },
        ]}
        floating={true}
        
      />
    </>
  );
}


/*
import React from 'react';
import ChatBot from 'react-simple-chatbot';

export default function CBot(){
    return (
        <>
            <ChatBot
                headerTitle="Speech Recognition"
                recognitionEnable={true}
                steps={[
                    {
                    id: '1',
                    message: 'What is your name?',
                    trigger: '2',
                    },
                    {
                    id: '2',
                    user: true,
                    trigger: '3',
                    },
                    {
                    id: '3',
                    message: 'Hi {previousValue}, nice to meet you!',        
                    end: true,
                    },
                    
                ]}
            floating={true}
            />
        </>
    )
}
*/