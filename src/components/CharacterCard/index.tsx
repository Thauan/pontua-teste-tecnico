import { Card, CardContent, CardDescription, CardTitle, Image } from './styles';

// React.FC
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CharacterCard: any = ({ character, last, penult }: any) => {
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