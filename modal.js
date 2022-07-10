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
                        <input type="color" id="rightPlayerColor" name="rightPlayer" value=${data.playerText.left.color}>
                    </div>   
                </fieldset>
                        <fieldset>
                            <legend>Rounds:</legend>
                            <div>
                                <input type="radio" id="shortRound" name="rounds" value="12">
                                <label for="shortRound">short</label>
                            </div>
                            <div>
                                <input type="radio" id="mediumRound" name="rounds" value="21" checked>
                                <label for="mediumRound">normal</label>
                            </div>
                            <div>
                                <input type="radio" id="longRound" name="rounds" value="30">
                                <label for="longRound">long</label>
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
                    <legend>Acceleration:</legend>
                    <div>
                        <input type="radio" id="noAcceleration" name="acceleration" value="0" checked>
                        <label for="noAcceleration">no</label>
                    </div>
                    <div>
                        <input type="radio" id="lowAcceleration" name="acceleration" value="1" >
                        <label for="lowAcceleration">low</label>
                    </div>
                    <div>
                        <input type="radio" id="highAcceleration" name="acceleration" value="5" >
                        <label for="highAcceleration">high</label>
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
console.log([...document.forms[0].elements].filter(i => i.value !== undefined).map(i => i.value))




      modal.style.opacity = 0;
      setTimeout(() => {
        modal.style.zIndex = -1;
      }, 150);
    default:
      break;
  }
});
