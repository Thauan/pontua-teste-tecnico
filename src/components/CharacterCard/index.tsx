import React from 'react';
import { Card, Image } from './styles';

// React.FC
const CharacterCard: any = ({ character }: any) => {
    return (
        <Card>
            <Image bg={'https://www.charlotteathleticclub.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png'} />
            <div>
                <h1>{character.name}</h1>
                <p>{character.description}</p>
            </div>
        </Card>
    );
}

export default CharacterCard;