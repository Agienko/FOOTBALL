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
        limit: 280,
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
        speedX: 3,
        speedY: 3,
        scale: 0.1,
        x:0,
        y:0,
        path: 'img/ball.png',
        limitY: 346,
        limitX: 537,
        
    },
    scoreText:{
        fontSize: 26,
        left: {
            check: 6,
            x:-57,
            y: -6,

        },
        right: {
            check: 4,
            x: 43,
            y: -6,

        },
    },
}
export default data