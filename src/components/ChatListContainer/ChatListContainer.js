import {useState, useCallback} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { chatsListInit } from '../../store/selectors/chatsSelectors'
import { addChatAction, onDeleteAction } from '../../store/actions/chatsActions'
import { onDeleteChatMessages } from '../../store/actions/messagesActions'
import ChatList from '../ChatList/ChatList'
import ChatListAddForm from '../ChatListAddForm/ChatListAddForm'

function ChatListContainer () {

  const dispatch = useDispatch()

  const chatsList = useSelector(chatsListInit)

  const onDelete = useCallback(
    (id) => {
      dispatch(onDeleteAction(id))
      dispatch(onDeleteChatMessages(id))
    },
    [dispatch],
  )
  
  const onAddChat = useCallback(
    (newName) => {
      dispatch(addChatAction(newName))
    },
    [dispatch],
  )

  const [chatName, setChatName] = useState('')

  function setName (name) {
    return setChatName(name)
  }

  return (
    <>
      <ChatList 
        chatsList={chatsList}
        onDelete={onDelete}
      />
      <ChatListAddForm
        onAddChat={onAddChat}
        setName={setName}
        chatName={chatName}
      />
    </>
  )
}

export default ChatListContainer