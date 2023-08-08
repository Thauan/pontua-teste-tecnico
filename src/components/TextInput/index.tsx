import { InputHTMLAttributes } from 'react';

import * as S from './styles'

type TextInputProps = {
    onButtonClick?: () => void;
    buttonChildren?: React.ReactNode | null;
    isPassword?: boolean;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    error?: any;
} & InputHTMLAttributes<HTMLInputElement>

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function TextInput(props: TextInputProps) {
    const inputType = props.isPassword ? "password" : "text";

    return (
        <>
            <S.Wrapper>
                <input {...props} type={inputType} />
                <a tabIndex={-1} onClick={props.onButtonClick} >
                    {props.buttonChildren}
                </a>
            </S.Wrapper>
            <S.Error>{props.error && <p role="alert" className='error'>{props.error?.message}</p>}</S.Error>
        </>
    )
}

export { TextInput };