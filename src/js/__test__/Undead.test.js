import Character from "../Undead"

test ('обьект', ()=>{
    expect( new Character('Timmi','Undead')).toMatchObject({
        name:'Timmi',
        type:'Undead',
        health:100,
        level:1,
        attack:25,
        defence:25,
    });
});
