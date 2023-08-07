import { Card, CardContent, CardDescription, CardTitle, Image } from './styles';

// type Character = {
//     t
// }
interface CharacterCardProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    character: any;
    last: boolean;
    penult: boolean;
}

const CharacterCard = ({ character, last, penult }: CharacterCardProps) => {
    const lastItem = last ? 'last' : '';
    const penultItem = penult ? 'penult' : '';

    const thumbnail = character.thumbnail.path + '.' + character.thumbnail.extension;

    return (
        <Card className={`item-${lastItem}${penultItem}`}>
            <Image src={thumbnail} />
            <CardContent>
                <CardTitle>{character.name}</CardTitle>
                <CardDescription>{character.description}</CardDescription>
            </CardContent>
        </Card>
    );
}

export default CharacterCard;