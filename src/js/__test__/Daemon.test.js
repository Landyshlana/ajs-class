import Character from "../Daemon"

test ('обьект', ()=>{
    expect( new Character('Timmi','Daemon')).toMatchObject({
        name:'Timmi',
        type:'Daemon',
        health:100,
        level:1,
        attack:10,
        defence:40,
    });
});
