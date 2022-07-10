 const data = {
    game:{
        width: 1280,
        height: 720,
        bgColor: '#0d37af',
        bgColorCenter: '#76cbf3',
        maxScore: 2,
        acceleration: 0
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
        speedX: 4,
        speedY: 4,
        scale: 0.08,
        x:0,
        y:0,
        path: 'img/ball.png',
        limitY: 350,
        limitX: 540,
        limitOut: 580
        
    },
    scoreText:{
        style:{
            fontSize: 26,
            fontFamily: 'Arial',
        },
        
        left: {
            check: 0,
            x:-57,
            y: -6,
            color: '0xffffff'

        },
        right: {
            check: 0,
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
            color: '#ffffff'
        },
        right:{
            x: 250,
            y: 0,
            text: 'Игрок 2',
            color: '#ffffff'
        }
    },
    player: {
        path: 'img/player.png',
        scale: 0.25,
        left:{
            x: 550,
            y: 0
        },
        right:{
            x: -550,
            y: 0
        },
    },
    underText:{
        text: 'Старт',
        textPause: 'Пауза',
        x: 0,
        y: 50,
        style:{
            fontSize: 42,
            fontFamily: 'Arial',
            fill: ['0xEE5505'],
            fontWeight: 'bold',
            dropShadow: true,
            dropShadowColor: '#000000',
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 2,
        },
        styleOn:{
            fontSize: 46,
            dropShadowDistance: 4,
        },
    
    },
    settingsBtn:{
        x:40 ,
        y:20
    }
}
export default data