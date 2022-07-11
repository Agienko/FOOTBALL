import startGameFunc, { switcher } from './move/moveBall/startGameFunc.js';
import { newGame } from './newEtaps.js';
import { changeLevelM, changeLevelS, peopleSound} from './sounds.js';
import { changeSettings } from './subFunc/changeSettings.js';
import data from '/data.js';

const modal = document.createElement('div');

const createModal = () => {
  modal.className = 'modalWrapper';
  modal.dataset.set = 'close';
  modal.innerHTML = `
        <div class="modal">
                <form class="modalContent">
                    <div class="modalHeader">
                        <h1>Settings</h1>
                        <img src='img/close.png' data-set="close">
                    </div>
                <fieldset>
                    <legend>Left Player:</legend>
                    <div>
                        <label for="leftPlayerName">name:</label>
                        <input type="text" id="leftPlayerName" name="leftPlayer" value=${data.playerText.left.text}> 
                    </div>
                    <div>
                        <label for="leftPlayerColor">color</label>
                        <input type="color" id="leftPlayerColor" name="leftPlayer" value=${data.playerText.left.color}>
                    </div>
                </fieldset>
                <fieldset>
                    <legend>Right Player:</legend>
                    <div>
                        <label for="rightPlayerName">name:</label>
                        <input type="text" id="rightPlayerName" name="rightPlayer" value=${data.playerText.right.text}>
                        
                    </div>
                    <div>
                        <label for="rightPlayerColor">color</label>
                        <input type="color" id="rightPlayerColor" name="rightPlayer" value=${data.playerText.right.color}>
                    </div>   
                </fieldset>
                        <fieldset>
                            <legend>Rounds:</legend>
                            <div>
                                <input type="radio" id="shortRound" name="rounds" value="12">
                                <label for="shortRound">12</label>
                            </div>
                            <div>
                                <input type="radio" id="mediumRound" name="rounds" value="21" checked>
                                <label for="mediumRound">21</label>
                            </div>
                            <div>
                                <input type="radio" id="longRound" name="rounds" value="30">
                                <label for="longRound">30</label>
                            </div>
                        </fieldset>
                        <fieldset>
                            <legend>Speed:</legend>
                            <div>
                                <input type="radio" id="lowSpeed" name="speed" value="3">
                                <label for="lowSpeed">low</label>
                            </div>
                            <div>
                                <input type="radio" id="normalSpeed" name="speed" value="5" checked>
                                <label for="normalSpeed">normal</label>
                            </div>
                            <div>
                                <input type="radio" id="highSpeed" name="speed" value="9">
                                <label for="highSpeed">high</label>
                            </div>
                        </fieldset>
                    <fieldset>
                        <legend>Racket size:</legend>
                        <div>
                            <input type="radio" id="shortRacket" name="racketSize" value="100">
                            <label for="shortRacket">short</label>
                        </div>
                        <div>
                            <input type="radio" id="normalRacket" name="racketSize" value="180" checked>
                            <label for="normalRacket">normal</label>
                        </div>
                    </fieldset>   
                    <fieldset>
                    <legend>Racket speed:</legend>
                    <div>
                        <input type="radio" id="lowRacketSpeed" name="racketSpeed" value="5">
                        <label for="lowRacketSpeed">low</label>
                    </div>
                    <div>
                        <input type="radio" id="normalRacketSpeed" name="racketSpeed" value="7" checked>
                        <label for="normalRacketSpeed">normal</label>
                    </div>
                    <div>
                        <input type="radio" id="highRacketSpeed" name="racketSpeed" value="10" >
                        <label for="highRacketSpeed">high</label>
                    </div>
                </fieldset>   
                <fieldset>
                    <legend>Acceleration:</legend>
                    <div>
                        <input type="radio" id="noAcceleration" name="acceleration" value="0" >
                        <label for="noAcceleration">no</label>
                    </div>
                    <div>
                        <input type="radio" id="lowAcceleration" name="acceleration" value="1" checked>
                        <label for="lowAcceleration">low</label>
                    </div>
                    <div>
                        <input type="radio" id="highAcceleration" name="acceleration" value="5" >
                        <label for="highAcceleration">high</label>
                    </div>
                </fieldset>
            <fieldset>
                <legend>Crazyness:</legend>
                <div>
                    <input type="radio" id="noCrazyness" name="crazyness" value="0" >
                    <label for="noCrazyness">no</label>
                </div>
                <div>
                    <input type="radio" id="lowCrazyness" name="crazyness" value="5" checked>
                    <label for="lowCrazyness">low</label>
                </div>
                <div>
                    <input type="radio" id="highCrazyness" name="crazyness" value="7" >
                    <label for="highCrazyness">high</label>
                </div>
            </fieldset>
            <fieldset>
                <legend class='soundsLegend'>Sounds:</legend>
                    <div>
                        <input type="range" id="soundsLevel" name="sounds" step="0.01" min='0' max="1" value="1" >
                        <label for="soundsLevel">sounds</label>
                    </div>
                    <div>
                        <input type="range" id="musicLevel" name="music" step="0.01" min='0' max="1" value="1"  >
                        <label for="musicLevel">music</label>
                    </div>
            </fieldset>
                <fieldset>
                <legend>Controls</legend>
                <table style="width:100%">
                    <tr>
                        <th> </th>
                        <th>Left Player</th>
                        <th>Right Player</th>
                    </tr>
                    <tr>
                        <td>UP</td>
                        <td>" a "</td>
                        <td>" ' "</td>
                    </tr>
                    <tr>
                        <td>DOWN</td>
                        <td>" z "</td>
                        <td>" / "</td>
                    </tr>
                    <td colspan ="3">SPACE  - " start/pause "</td>
                    
                </table>
                </fieldset>
                <div class='forBtnClose'>
                <button data-set="ok">ok</button>
                <button data-set="close">close</button>
                </div>
        </form>
    </div>
    `;
  document.body.append(modal);
};
export const openModal = () => {
    !switcher && startGameFunc()
    modal.style.opacity = 1;
    modal.style.zIndex = 0;
}

createModal();

document.addEventListener('click', (e) => {
    
  switch (e.target.dataset.set) {
    case 'close':
        e.preventDefault()
      modal.style.opacity = 0;
      setTimeout(() => {
        modal.style.zIndex = -1;
      }, 150);
      break;
    case 'ok':
        e.preventDefault()
    const dataArr = [...document.forms[0].elements]
    .filter((i, j) => i.checked || [1,2,4,5].includes(j))
    .map(i=> i.value)
    
    changeSettings(dataArr)
      modal.style.opacity = 0;
      setTimeout(() => {
        modal.style.zIndex = -1;
      }, 150);
    newGame()
      break;
    default:
      break;
  }
});

soundsLevel.addEventListener('pointermove', (e)=> changeLevelS(e.target.value))
musicLevel.addEventListener('pointermove', (e)=> changeLevelM(e.target.value))
soundsLevel.addEventListener('pointerdown', ()=> peopleSound.play())
soundsLevel.addEventListener('pointerup', ()=> peopleSound.pause())
