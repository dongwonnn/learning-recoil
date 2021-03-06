import React from 'react';
import {atom, selector, useRecoilState, useRecoilValue} from "recoil";

const CharacterCounter = () => {
    const [text, setText] = useRecoilState(textState);

    const onChange = (event) => {
        setText(event.target.value);
    };

    const count = useRecoilValue(charCountState);

    return (
        <div>
            <div>
                <input type="text" value={text} onChange={onChange} />
                <br />
                Echo: {text} force push test
            </div>
            <>Character Count: {count}</>
        </div>
    );
};

export default CharacterCounter;

const textState = atom({
    key: 'textState',
    default: '',
});

const charCountState = selector({
    key: 'charCountState',
    get: ({get}) => {
        const text = get(textState);

        return text.length;
    }
})