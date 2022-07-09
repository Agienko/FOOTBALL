 const data = {
    game:{
        width: 1280,
        height: 720,
        bgColor: 'rgb(13, 55, 175)',
        bgColorCenter: '#76cbf3',
    },
    field:{
        width: 990,
        height: 624,
        scale: 0.75,
        path: 'img/field.jpg',
        border: {
            width: 1194,
            height: 754,
            thick: 4,
            borderRound: 5,
            color: '0xffffff',
            x: 192,
            y: 78
        }
    },
    scoreBoard:{
        width: 60,
        height: 50,
        thick: 2,
        borderRound: 10,
        bgColor: 0x009f55,
        borderColor:0xfdeb59,
        coords: {
            left:{
                x: -50,
                y: 40
            },
            right:{
                x: 50,
                y: 40
            },
        }
    },
    racket:{
        speed: 7,
        width: 13,
        height: 180,
        round: 4,
        color: '0xffffff',
        limitCents: 8,
        left:{
            x: -574,
            y: 0,
            color: '0xffffff',
            keyUp: 65,
            keyDown: 90, 
        },
        right:{
            x: 574,
            y: 0,
            color: '0xffffff',
            keyUp: 222,
            keyDown: 191
        },

    },
    ball:{
        speedX: 2,
        speedY: 2,
        scale: 0.08,
        x:0,
        y:0,
        path: 'img/ball.png',
        limitY: 350,
        limitX: 540,
        
    },
    scoreText:{
        style:{
            fontSize: 26,
            fontFamily: 'Arial',
        },
        
        left: {
            check: 6,
            x:-57,
            y: -6,
            color: '0xffffff'

        },
        right: {
            check: 4,
            x: 43,
            y: -6,
            color: '0xffffff'

        },
    },
    playerText: {
        style:{
            fontSize: 28,
            fontFamily: 'Arial',
        },
        left:{
            x: -250,
            y: 0,
            text: 'Игрок 1',
            color: '0xffffff'
        },
        right:{
            x: 250,
            y: 0,
            text: 'Игрок 2',
            color: '0xffffff'
        }
    },
    player: {
        path: './img/player.png',
        scale: 0.25,
        left:{
            x: 550,
            y: 0
        },
        right:{
            x: -550,
            y: 0
        },
    }
}
export default data