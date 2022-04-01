const body = document.querySelector('body');
const logo = document.querySelector('.logo');

const btnShow = document.querySelector('#btn-show');
const btnImg = document.querySelector('#btn-show img');
const inputPassword = document.querySelector('#input-password');

const showPassword = () => {
  if (inputPassword.type === 'password') {
    inputPassword.setAttribute('type', 'text');
    btnImg.setAttribute('src', './img/view.png');
  } else {
    inputPassword.setAttribute('type', 'password');
    btnImg.setAttribute('src', './img/hide.png');
  }
};

const showModalQr = () => {
  const modal = document.createElement('div');
  body.classList.add('overflow');
  modal.innerHTML = `
                      <div class="modal animate__animated animate__fadeIn">
                        <div class="background-modal"></div>
                        <div class="container-qr animate__animated animate__fadeInUp">
                          <div class="header-qr">
                            <button onClick="closeModal()">X</button>
                            <h5>Conceder permisos al navegador para Usar la Camara</h5>
                          </div>
                          <div class="body-qr">
                           <video></video>
                           </div>
                        </div>
                      </div>
                    `;
  body.appendChild(modal);
  const modalBackground = document.querySelector('.background-modal');
  modalBackground.addEventListener('click', closeModal);
  initQr();
};

const closeModal = () => {
  const modal = document.querySelector('.modal');
  const modalBackground = document.querySelector('.background-modal');
  modal.classList.remove('animate__fadeIn');
  modalBackground.classList.remove('animate__fadeInUp');
  modal.classList.add('animate__fadeOut');
  modalBackground.classList.add('animate__fadeOutDown');

  body.classList.remove('overflow');
  setTimeout(() => {
    modal.parentElement.remove();
  }, 1000);
};

const initQr = async () => {
  if (!(await QrScanner.hasCamera())) {
    const qrContainer = document.querySelector('.container-qr');
    qrContainer.innerHTML = `<p style="text-align: center;">No se ha dectetado una camara para escanear el codigo qr</p>`;
    return;
  }

  const videoElement = document.querySelector('video');
  const qrScanner = new QrScanner(
    videoElement,
    (result) => {console.log(result)},
    {
      highlightScanRegion: true,
    }
  );
  qrScanner.start();
};

const events = () => {
  btnShow.addEventListener('click', showPassword);
  logo.addEventListener('click', showModalQr);
};

(() => {
  events();
})();
