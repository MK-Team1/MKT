var userName
alert('Добро пожаловать!!!')
                userName=prompt(' Как вас зовут???')
                alert('Привет, '+userName+'!')

passWord=prompt('Введите пароль админа, если вы админ!')
if (passWord='459165') {
    alert('Добро пожаловать, ' + userName + '-админ!')
} else {
    alert('Выполнен вход через аккаунт пользователя!')
}