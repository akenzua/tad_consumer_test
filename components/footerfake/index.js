import  { Fragment, useState} from 'react'
import  { MainCard, ContentCard, VideoCard } from '../Styles/Cards'
import  { TopInnner, TopImage, TopDesc, BottomInner, BottomDesc, BottomSpan } from '../Styles/Foot'
import { Button } from '../Styles/Button'
import Link from 'next/link'
import { LinkText, HeadingThree} from '../Styles/Text'

// import uuid from 'uuid/v4'
// import { useSelector, useDispatch } from 'react-redux';
// import { toggleTodoComplete, deleteTodoAction, addTodoAction } from '../footer/constant';


const Footer = () => {

    // const footer = useSelector((state) => state.footer);
    // const [todo, setTodo] = useState('');

    // const dispatch = useDispatch();
  
    // const toggleTodo = (todoId) => dispatch(toggleTodoComplete(todoId));
    // const deleteTodo = (todoId) => dispatch(deleteTodoAction(todoId));
    // const addTodo = (todo) => dispatch(addTodoAction(todo));
    
    // const onChange = (event) => {
    //     setTodo(event.target.value);
    //   };
    //   const onSubmit = (event) => {
    //     event.preventDefault();
    //     if (todo.trim() === '') return;
    //     addTodo({
    //       id: uuid(),
    //       name: todo,
    //       complete: false
    //     });
    //     setTodo('');
    //   };
    return(
        <MainCard>
            <ContentCard flex="1 0 20%">
                <TopInnner>
                    <TopImage src="/assets/Images/chat.svg"/>
                    <TopDesc>Web Chat</TopDesc>
                </TopInnner>
                <BottomInner>
                    <BottomDesc>Sorry, all of our advisers are currently busy. Please try again later.</BottomDesc>
                    <BottomDesc>
                        Monday to Friday, 8am to 6pm
                        Saturday, 8am to 3pm
                        Sunday and Bank Holidays, closed
                    </BottomDesc>
                </BottomInner>
                <Button>Currently Busy</Button>
            </ContentCard>
            <ContentCard flex="1 0 20%">
                <TopInnner>
                    <TopImage src="/assets/Images/whatsapp.svg"/>
                    <TopDesc>WhatsApp</TopDesc>
                </TopInnner>
                <BottomInner>
                    <BottomDesc>
                    Need help sorting out your debts, have credit 
                    questions or want pensions guidance?<br></br>
                    Add +44 7701 342744 to your Whatsapp and send us a message.
                    </BottomDesc>
                    <BottomDesc>For everything else please contact us via Webchat or Telephone.</BottomDesc>
                </BottomInner>
                <Button>Launch Chat</Button>
            </ContentCard>
            <ContentCard flex="1 0 25%">
                <TopInnner>
                    <TopImage src="/assets/Images/phone.svg"/>
                    <TopDesc>Contact us</TopDesc>
                </TopInnner>
                <BottomInner>
                    <BottomDesc>
                    Give us a call for free and impartial money advice.
                    </BottomDesc>
                    <HeadingThree align="center">0800 138 7777</HeadingThree>
                    <BottomDesc>enquiries@maps.org.uk</BottomDesc>
                    <BottomDesc>
                        Monday to Friday, 8am to 6pm
                        Saturday, Sunday and Bank Holidays, closed
                    </BottomDesc>
                    
                </BottomInner>
                <Button>Send Email</Button>
            </ContentCard>
            {/* <form onSubmit={onSubmit}>
      <div className="form-div">
        <input
          type="text"
          name="todo"
          placeholder="Add a todo"
          value={todo}
          onChange={onChange}
        />
        <button type="submit">Add</button>
      </div>
    </form>
            <ul className="todo-list">
                {footer.todos.map((todo) => (
                    <li key={todo.id}>
                    <input
                      type="checkbox"
                      checked={todo.complete}
                      onChange={toggleTodo.bind(null, todo.id)}
                    />
                    <span className={todo.complete ? 'complete' : null}>{todo.name}</span>
                    <span
                      className="delete-button"
                      onClick={deleteTodo.bind(null, todo.id)}
                    >
                      X
                    </span>
                    </li>
                ))}
                </ul> */}


        </MainCard>
    )
}

export default Footer;