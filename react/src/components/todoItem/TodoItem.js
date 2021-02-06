import "./TodoItem.css";

const TodoItem = (props) => {

    const ActiveButtons = () => {
        if (!props.todo.todoDone) {
            return (
                <div className="Todo-app__buttons">
                    <div onClick={props.doneTodo} className="Todo-app__done">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
                            <line x1="1.06066" y1="5.93934" x2="9.06066" y2="13.9393" stroke="#6FE774" strokeWidth="3"></line>
                            <line x1="20.0607" y1="1.06066" x2="7.06066" y2="14.0607" stroke="#6FE774" strokeWidth="3"></line>
                        </svg>
                    </div>
                    <div onClick={props.deleteTodo} className="Todo-app__delete">
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                            <line x1="1.93934" y1="16.9393" x2="16.9393" y2="1.93934" stroke="#F94E4E" strokeWidth="3"></line>
                            <line x1="2.06066" y1="1.93934" x2="17.0607" y2="16.9393" stroke="#F94E4E" strokeWidth="3"></line>
                        </svg>
                    </div>
                </div>
            )
        }
        return (
            <div onClick={props.deleteTodo} className="Todo-app__delete">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" viewBox="0 0 19 18" fill="none">
                    <line x1="1.93934" y1="16.9393" x2="16.9393" y2="1.93934" stroke="#F94E4E" strokeWidth="3"></line>
                    <line x1="2.06066" y1="1.93934" x2="17.0607" y2="16.9393" stroke="#F94E4E" strokeWidth="3"></line>
                </svg>
            </div>
        )
    }

    return (
        <div className="Todo-app__item">
            <div className="Todo-app__description">
                { props.todo.todoDescr }
            </div>
            <ActiveButtons />
        </div>
    )
}

export default TodoItem;