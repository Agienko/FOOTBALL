 const data = {
    game:{
        width: 1280,
        height: 720,
        bgColor: '#0d37af',
        bgColorCenter: '#76cbf3',
        maxScore: 2,
        acceleration: 1,
        crazyness: 5,
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
        borderColor: '0xffffff',
        thick: 1,
        limitCents: 8,
        left:{
            x: -574,
            y: 0,
            color: '0xff0000',
            keyUp: 65,
            keyDown: 90, 
        },
        right:{
            x: 574,
            y: 0,
            color: '0xffff00',
            keyUp: 222,
            keyDown: 191
        },

    },
    ball:{
        speedX: 4,
        speedY: 5,
        scale: 0.08,
        x:0,
        y:0,
        path: 'img/ball.png',
        limitY: 350,
        limitX: 542,
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
            fontSize: 34,
            fontFamily: 'Arial',
        },
        left:{
            x: -250,
            y: 0,
            text: 'Player_1',
            color: '#ff0000'
        },
        right:{
            x: 250,
            y: 0,
            text: 'Player_2',
            color: '#ffff00'
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
        text: 'Start',
        textPause: 'Pause',
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
    finalText:{
        text: 'You Win!',
        newGameBtn:{
            text: 'New Game',
            x:0,
            y:80,
            style:{
                fontSize: 60,
                fontFamily: 'Arial',
                fill: ['0xaa5588', '0xffee88'],
                fontWeight: 'bold',
                dropShadow: true,
                dropShadowColor: '#000000',
                dropShadowBlur: 10,
                dropShadowAngle: Math.PI / 8,
                dropShadowDistance: 10,
            },
        },
        x: 0,
        y: -80,
        style:{
            fontSize: 70,
            fontFamily: 'Arial',
            fill: ['0xaaee88', '0xffaa22'],
            fontWeight: 'bold',
            dropShadow: true,
            dropShadowColor: '#000000',
            dropShadowBlur: 10,
            dropShadowAngle: Math.PI / 8,
            dropShadowDistance: 10,
        },
    },
    settingsBtn:{
        x:40 ,
        y:30
    },
    
}
export default data