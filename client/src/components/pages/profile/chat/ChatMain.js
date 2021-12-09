class ChatMain extends React.Component {


constructor(){
super()
this.state ={messages:DUMMY_DATA}};

     DUMMY_DATA = [
        {
          senderId: "perborgen",
          text: "who'll win?"
        },
        {
          senderId: "janedoe",
          text: "who'll win?"
        }
      ]
      
    render() {
      return (
        <div className="app">
          <TitleChat />
          <MessageList />
          <SendMessageForm />
       </div>
      )
    }
  }