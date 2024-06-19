import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    'a66e731b-d299-4d29-913d-12190421dd8e',
    props.user.username,
    props.user.secret
    );
    return (
        <div style = {{ 
            height: '100vh',
            backgroundImage: 'url(./assets/usul.png)', 
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
        }}>
            <MultiChatSocket {...chatProps}/>
            <MultiChatWindow {...chatProps} style = {{ height: '100%'
            }} />
        </div>
    )
}

export default ChatsPage;