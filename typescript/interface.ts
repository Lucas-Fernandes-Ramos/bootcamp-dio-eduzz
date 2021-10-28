
/*Criando minhas assinaturas*/
interface IAnimal{
    nome: string;
    tipo: 'voador' | 'aquatico';
    executarBarulho(max: number):void;
}

interface IFelino extends IAnimal {
    visaoNoturna: boolean;

}

/*criando objetos*/

const animal: IAnimal = {
    nome: 'Aguia',
    tipo: 'voador',
    executarBarulho: (max)=>(`${10}`)
}

console.log(animal.nome, animal.tipo);