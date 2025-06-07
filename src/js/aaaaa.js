"use strict"
//==========================================
const TELEGRAM_BOT_TOKEN = '7848989985:AAGBYLYCxCWMx3sDicNH1jyhzPvDas7DPh8';
const TELEGRAM_CHAT_ID = '@tashclaening';
const API = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`


async function sendEmailTelegram(event) {
    event.preventDefault();

    const form = event.target;
    const formBtn = document.querySelector('.form__submit-button button')
    const formSendResult = document.querySelector('.form__send-result')
    formSendResult.textContent = '';


    const { name, pawwaa, phone, pass } = Object.fromEntries(new FormData(form).entries());

    const text = `Заявка от ${name}!\nВашы вопросы: ${pawwaa}\nТелефон: ${phone}\nФамилия: ${pass}`;


    try {
        formBtn.textContent = 'Loading...';

        const response = await fetch(API, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                chat_id: TELEGRAM_CHAT_ID,
                text,
            })
        })

        if (response.ok) {
            formSendResult.textContent = 'Спасибо за ваше сообщение! Мы свяжемся с вами в ближайшее время.';
            form.reset()
        } else {
            throw new Error(response.statusText);
        }

    } catch (error) {
        console.error(error);
        formSendResult.textContent = 'Анкета не отправлена! Попробуйте позже.';
        formSendResult.style.color = 'red';

    } finally {
        formBtn.textContent = 'Yuborish';
    }
}
