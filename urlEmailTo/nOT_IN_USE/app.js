
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>


//Modal Item
const modal = document.getElementById('email-modal');
const openBtn = document.querySelector('main-btn');
const closeBtn = document.querySelector('.close-btn');

//Click events
openBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if(e.target === modal) {
        modal.style.display = 'none';
    }
});