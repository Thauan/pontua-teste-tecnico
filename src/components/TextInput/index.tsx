import { InputHTMLAttributes } from 'react';

import * as S from './styles'

type TextInputProps = {
    onButtonClick(): void;
    buttonChildren: React.ReactNode;
} & InputHTMLAttributes<HTMLInputElement>

function TextInput(props: TextInputProps) {
    return (
        <>
            <S.Wrapper>
                <input {...props} />
                <button tabIndex={-1} onClick={props.onButtonClick} >
                    {props.buttonChildren}
                </button>
            </S.Wrapper>
        </>
    )
}

export default TextInput;