/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from 'react';
import ReactSelect from 'react-select';
import { Container, Placeholder, Avatar, Option, Name } from './styles';
import { FiUser } from "react-icons/fi";
import { useAuth } from '../../hooks/useAuth';
import { AuthProps } from '../../contexts/AuthContext';

export interface OptionProps {
    value: string;
    label: string;
    image: string;
}

const SelectAgent = ({ options }: any) => {
    const { chooseToAgent }: AuthProps = useAuth();
    const [agent, setAgent] = useState<OptionProps>();

    const onSelect = (event: OptionProps) => {
        setAgent(event);
        chooseToAgent(event);
    }

    return (
        <Container>
            <ReactSelect
                className="select"
                onChange={(e: any) => onSelect(e)}
                value={agent}
                options={options}
                placeholder={
                    <Placeholder>
                        <FiUser /> <div className='placeholder-message'>Selecione um agente</div>
                    </Placeholder>
                }
                formatOptionLabel={(option: OptionProps) => (
                    <Option>
                        <Avatar src={option.image} alt="country-image" />
                        <Name>{option.label}</Name>
                    </Option>
                )}
            />
        </Container>
    );
}

export default SelectAgent;