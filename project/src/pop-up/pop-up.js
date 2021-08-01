import './pop-up.css';

const LIVE_TIME = 5000;

const popUpWrapper = document.createElement('div');
popUpWrapper.classList.add('popup-wrapper');
document.body.append(popUpWrapper);

const popUp = (message) => {
  const popUpElement = document.createElement('div');
  popUpElement.textContent = message;
  popUpElement.classList.add('popup-element');

  popUpWrapper.append(popUpElement);

  setTimeout(() => {
    popUpElement.remove();
  }, LIVE_TIME);
};

export {popUp};
