import { LightningElement } from 'lwc';

export default class DataBinding extends LightningElement {
    str = 'hello I am a string';
    arr = ['a', 'b', 'c'];
    obj = {
        name: 'Matt',
        height: `6'2"`
    }
    bool = false;
    conditional = "";

    changeHandler(event) {
        this.conditional = event.target.value;
    }

    players = [
        {
            name : 'John Macintosh',
            age: '21',
            height:`6'4"`
        },
        {
            name : 'Cheryl Quandry',
            age: '24',
            height:`5'7"`
        },
        {
            name : 'Michael Jameson',
            age: '22',
            height:`6'1"`
        },
    ]

    get addition() {
        return 2 + 2; 
    }

    get firstPlayerName(){
        return this.players[0].name;
    }
}