import React from 'react';

import {useRecoilState, atom} from "recoil";

const TodoList = () => {
    // atom의 항목을 읽기 위해 useRecoilState를 사용할 수 있다.
    const todolist = useRecoilState(todoListState)

    return (
        <div>

        </div>
    );
};

export default TodoList;

const todoListState = atom({
    key: 'todoListState',
    default: []
})